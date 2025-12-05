import { Participant } from '@/@types/schemas/participant.schema'
import { CreateSecretSanta } from '@/@types/schemas/secret-santa.schema'
import { formatWhatsAppPhone } from '@/utils/format'
import { matchParticipants } from '@/utils/match-participants'
import { getParticipantMessage } from '@/utils/message'
import { Injectable } from '@nestjs/common'
// import { Client } from 'whatsapp-web.js'

@Injectable()
export class SecretSantaService {
  // constructor(private readonly client: any) {}

  private client: any = {}
  async createSecretSanta(input: CreateSecretSanta) {
    const matchedParticipants = matchParticipants(input.participants)

    const validationResults = await this.validateAllNumbers(matchedParticipants)
    const hasInvalid = validationResults.some((r) => r.status !== 'success')

    if (hasInvalid)
      return {
        eventName: input.eventName,
        results: validationResults,
        sent: false,
      }

    const sendResults = await Promise.all(
      matchedParticipants.map((p, i) =>
        this.sendMessageToValidParticipant(
          p,
          input,
          validationResults[i].phone,
        ),
      ),
    )

    return {
      eventName: input.eventName,
      results: sendResults,
      sent: true,
    }
  }

  private async validateAllNumbers(participants: Participant[]) {
    return Promise.all(
      participants.map(async (participant) => {
        try {
          const formattedPhone = formatWhatsAppPhone(participant.phone)
          if (!formattedPhone)
            return this.buildResult(participant, 'invalid-number')

          const numberInfo = await this.client.getNumberId(formattedPhone)
          if (!numberInfo) {
            return this.buildResult(
              participant,
              'invalid-number',
              formattedPhone,
            )
          }

          return this.buildResult(participant, 'success', formattedPhone)
        } catch (err) {
          return this.buildResult(
            participant,
            'error',
            participant.phone,
            err instanceof Error ? err.message : String(err),
          )
        }
      }),
    )
  }

  private async sendMessageToValidParticipant(
    participant: Participant,
    event: CreateSecretSanta,
    formattedPhone: string,
  ) {
    try {
      const numberInfo = await this.client.getNumberId(formattedPhone)
      if (!numberInfo)
        return this.buildResult(participant, 'invalid-number', formattedPhone)

      const message = getParticipantMessage(participant, event)
      await this.client.sendMessage(numberInfo._serialized, message)
      return this.buildResult(participant, 'success', formattedPhone)
    } catch (err) {
      return this.buildResult(
        participant,
        'error',
        formattedPhone,
        err instanceof Error ? err.message : String(err),
      )
    }
  }

  private buildResult(
    participant: Participant,
    status: 'success' | 'invalid-number' | 'error',
    phone?: string,
    error?: string,
  ) {
    return {
      name: participant.name,
      phone: phone ?? participant.phone,
      status,
      ...(error ? { error } : {}),
    }
  }
}
