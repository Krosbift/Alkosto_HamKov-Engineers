import { Module } from '@nestjs/common';
import { ProcessEnvModule } from './process-env/infrastructure/nestjs/process-env.module';

@Module({
  imports: [ProcessEnvModule]
})
export class AppModule {}
