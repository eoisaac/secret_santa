import { SecretSantaModule } from '@/secret-santa/secret-santa.module'
// import { WhatsAppService } from '@/whats-app/whats-app.service'
import { Module } from '@nestjs/common'
import { TRPCModule } from 'nestjs-trpc'
import { NestWhatsModule } from 'nestwhats'

@Module({
  imports: [
    // NestWhatsModule.forRoot({ prefix: '!' }),
    TRPCModule.forRoot({
      autoSchemaFile: '../../packages/trpc/src/server',
    }),
    SecretSantaModule,
  ],
  controllers: [],
  // providers: [WhatsAppService],
})
export class AppModule {}
