import type { CreateSecretSanta } from '@/@types/schemas/secret-santa.schema'
import { matchParticipants } from '@/utils/match-participants'
import { getParticipantMessage } from '@/utils/message'
import { Injectable } from '@nestjs/common'
// import { Client } from 'whatsapp-web.js'

@Injectable()
export class SecretSantaService {
  // constructor(private readonly client: Client) {}

  createSecretSanta(input: CreateSecretSanta) {
    const matchedParticipants = matchParticipants(input.participants)

    matchedParticipants.forEach((p) => {
      const message = getParticipantMessage(p, input)
      console.log(message)
      console.log('\n')
    })

    // @todo: validate if all participants have whatsapp number
    // @todo: format whatsapp number
    // @todo: create formated message
    // @todo: send message to each participant
    // @todo: return errors or success message

    return input
  }
}
