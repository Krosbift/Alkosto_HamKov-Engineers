import { ProcessEnv } from '../../application/process.env';
import { ProcessEnvRepository } from '../../domain/process-env.repository';
import { IEnvParser } from '../../domain/interfaces/env-parser';
import { ZodEnvParser } from '../zod/zod-env-parser';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    {
      provide: IEnvParser,
      useFactory: () => new ZodEnvParser(),
    },
    {
      provide: ProcessEnvRepository,
      useFactory: (parser: IEnvParser) => new ProcessEnv(parser),
      inject: [IEnvParser]
    },
  ],
  exports: [
    {
      provide: IEnvParser,
      useFactory: () => new ZodEnvParser(),
    },
    {
      provide: ProcessEnvRepository,
      useFactory: (parser: IEnvParser) => new ProcessEnv(parser),
      inject: [IEnvParser]
    },
  ]
})
export class ProcessEnvModule { }
