import type { CreateSecretSanta } from '@/secret-santa/secret-santa.schema'
import { Injectable } from '@nestjs/common'
import { Client } from 'whatsapp-web.js'

@Injectable()
export class SecretSantaService {
  constructor(private readonly client: Client) {}

  createSecretSanta(input: CreateSecretSanta) {
    console.log({ input })
    return { id: '1', ...input }
  }
}
