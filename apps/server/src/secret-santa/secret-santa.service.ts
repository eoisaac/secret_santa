import type { CreateSecretSanta } from '@/secret-santa/secret-santa.schema'
import { Injectable } from '@nestjs/common'

@Injectable()
export class SecretSantaService {
  createSecretSanta(input: CreateSecretSanta) {
    console.log({ input })
    return { id: '1', ...input }
  }
}
