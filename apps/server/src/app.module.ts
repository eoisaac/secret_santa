import { Module } from '@nestjs/common'
import { TRPCModule } from 'nestjs-trpc'
import { SecretSantaModule } from './secret-santa/secret-santa.module'

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: '../../packages/trpc/src/server',
    }),
    SecretSantaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
