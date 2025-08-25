import { Module } from '@nestjs/common';
import { MediaUploaderModule } from './media-uploader/media-uploader.module';
import { ProcessEnvModule } from './process-env/infrastructure/nestjs/process-env.module';

@Module({
  imports: [MediaUploaderModule, ProcessEnvModule]
})
export class AppModule {}
