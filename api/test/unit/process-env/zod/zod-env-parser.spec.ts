import { describe, expect, it } from 'vitest';
import { ZodEnvParser } from 'src/process-env/infrastructure/zod/zod-env-parser';

describe('ZodEnvParser', () => {
  const instance = new ZodEnvParser();

  it('should be defined', () => {
    expect(instance).toBeDefined();
  });

  it('should have a defined parse method', () => {
    expect(instance.parse).toBeDefined();
  });

  it('should parse valid environment variables according to the schema', async () => {
    const vars = {
      HOST: 'localhost',
      PORT: '3000',
    };
    await expect(instance.parse(vars)).resolves.toEqual({
      host: 'localhost',
      port: 3000,
    });
  });

  it('should throw an error when environment variables do not match the schema', async () => {
    const vars = {
      HOST: 'localhost',
      PORT: 'not-a-number',
    };
    await expect(instance.parse(vars)).rejects.toThrowError();
  });
});
