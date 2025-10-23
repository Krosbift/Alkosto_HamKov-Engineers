import { FindOptionsWhere } from 'typeorm';
import { AuthOptEntity } from '../entities/auth-opt.entity';

export abstract class AuthRepository {
  abstract readOptCode(
    where: FindOptionsWhere<AuthOptEntity>,
  ): Promise<AuthOptEntity>;
  abstract genOptCode(): Promise<AuthOptEntity>;
}
