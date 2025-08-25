import { ProcessEnvType } from "./types/process-env";

export abstract class ProcessEnvRepository {
  abstract get vars(): ProcessEnvType;
}
