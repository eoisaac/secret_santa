import { Module } from '@nestjs/common'
import { TRPCModule } from 'nestjs-trpc'

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: '@repo/trpc/server',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
