import type { CreateSecretSanta } from '@/@types/schemas/secret-santa.schema'
import {
  createSecretSantaSchema,
  secretSantaResultSchema,
} from '@/@types/schemas/secret-santa.schema'
import { SecretSantaService } from '@/secret-santa/secret-santa.service'
import { Input, Mutation, Router } from 'nestjs-trpc'

@Router({ alias: 'secretSanta' })
export class SecretSantaRouter {
  public constructor(private readonly secretSantaService: SecretSantaService) {}

  @Mutation({
    input: createSecretSantaSchema,
    output: secretSantaResultSchema,
  })
  createSecretSanta(@Input() input: CreateSecretSanta) {
    return this.secretSantaService.createSecretSanta(input)
  }
}
