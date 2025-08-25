import { IEnvParser } from "../domain/interfaces/env-parser";
import { ProcessEnvRepository } from "../domain/process-env.repository";
import { ProcessEnvType } from "../domain/types/process-env";

export class ProcessEnv implements ProcessEnvRepository {
  private envVars: ProcessEnvType;

  constructor(private readonly parser: IEnvParser, env: NodeJS.ProcessEnv = process.env) {
    this.init(env);
  }

  private async init(env: NodeJS.ProcessEnv): Promise<void> {
    this.envVars = await this.parser.parse(env);
  }

  public get vars(): ProcessEnvType {
    return this.envVars;
  }  
}
