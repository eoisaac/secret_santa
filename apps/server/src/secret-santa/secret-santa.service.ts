import type { CreateSecretSanta } from '@/@types/schemas/secret-santa.schema'
import { formatWhatsAppPhone } from '@/utils/format'
import { matchParticipants } from '@/utils/match-participants'
import { getParticipantMessage } from '@/utils/message'
import { Injectable } from '@nestjs/common'
import { Client } from 'whatsapp-web.js'

@Injectable()
export class SecretSantaService {
  constructor(private readonly client: Client) {}

  async createSecretSanta(input: CreateSecretSanta) {
    const matchedParticipants = matchParticipants(input.participants)

    const tasks = matchedParticipants.map((p) =>
      this.processParticipant(p, input),
    )
    const results = await Promise.all(tasks)

    return { eventName: input.eventName, results }
  }

  private async processParticipant(participant: any, event: CreateSecretSanta) {
    try {
      const formattedPhone = this.validateAndFormatPhone(participant)
      if (!formattedPhone)
        return this.buildResult(participant, 'invalid-number')

      const numberInfo = await this.verifyWhatsAppNumber(formattedPhone)
      if (!numberInfo)
        return this.buildResult(participant, 'invalid-number', formattedPhone)

      await this.sendMessageToParticipant(
        participant,
        event,
        numberInfo._serialized,
      )

      return this.buildResult(participant, 'success', formattedPhone)
    } catch (err) {
      return this.buildResult(
        participant,
        'error',
        participant.phone,
        err instanceof Error ? err.message : String(err),
      )
    }
  }

  private validateAndFormatPhone(participant: any) {
    const formatted = formatWhatsAppPhone(participant.phone)
    return formatted || null
  }

  private verifyWhatsAppNumber(phone: string) {
    return this.client.getNumberId(phone)
  }

  private async sendMessageToParticipant(
    participant: any,
    event: CreateSecretSanta,
    serializedNumber: string,
  ) {
    const message = getParticipantMessage(participant, event)
    await this.client.sendMessage(serializedNumber, message)
  }

  private buildResult(
    participant: any,
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
