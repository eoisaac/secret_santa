import type { CreateSecretSanta } from '@/secret-santa/secret-santa.schema'
import { matchParticipants } from '@/utils/match-participants'
import { Injectable } from '@nestjs/common'
import { formatCurrency } from '@repo/utility'
import { Client } from 'whatsapp-web.js'

@Injectable()
export class SecretSantaService {
  constructor(private readonly client: Client) {}

  createSecretSanta(input: CreateSecretSanta) {
    const matchedParticipants = matchParticipants(input.participants)

    const test = formatCurrency(123, 'pt-BR')
    console.log('formatted currency:', test)

    // @todo: validate if all participants have whatsapp number
    // @todo: format whatsapp number
    // @todo: create formated message
    // @todo: send message to each participant
    // @todo: return errors or success message

    return input
  }
}
