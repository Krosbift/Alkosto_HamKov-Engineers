import { describe, expect, it } from 'vitest';
import { ZodEnvParser } from 'src/process-env/infrastructure/zod/zod-env-parser';
import { ProcessEnv } from 'src/process-env/application/process.env';
import { IEnvParser } from 'src/process-env/domain/interfaces/env-parser';
import { ProcessEnvType } from 'src/process-env/domain/types/process-env';

describe('ProcessEnv', () => {
  const instance = new ProcessEnv(new ZodEnvParser(), {
    HOST: 'localhost',
    PORT: '3000',
  });

  it('should instantiate ProcessEnv with a valid parser', () => {
    expect(instance).toBeDefined();
  });

  it('should resolve environment variables with a valid schema', () => {
    expect(instance.vars).toEqual({
      host: 'localhost',
      port: 3000,
    });
  });

  it('should throw an error when no env parser are provided', () => {
    const bad = new ProcessEnv({} as IEnvParser);
    expect(bad.vars).toBeUndefined();
  });

  it('should throw an error when no environment variables are provided', () => {
    const bad = new ProcessEnv(new ZodEnvParser());
    expect(bad.vars).toBeUndefined();
  });
  
  // TODO
});
