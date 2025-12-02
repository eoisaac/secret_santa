import { SecretSantaRouter } from '@/secret-santa/secret-santa.router'
import { SecretSantaService } from '@/secret-santa/secret-santa.service'
import { Module } from '@nestjs/common'

@Module({
  providers: [SecretSantaService, SecretSantaRouter],
})
export class SecretSantaModule {}
