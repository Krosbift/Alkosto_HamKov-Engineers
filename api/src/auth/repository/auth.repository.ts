import { FindOptionsWhere } from 'typeorm';
import { AuthOptEntity } from '../entities/auth-opt.entity';
import { UsersEntity } from '../entities/users.entity';

export abstract class AuthRepository {
  abstract readOptCode(
    where: FindOptionsWhere<AuthOptEntity>,
  ): Promise<AuthOptEntity | null>;
  abstract genOptCode(
    entity: Omit<AuthOptEntity, 'id' | 'activo' | 'verified' | 'usuario'>,
  ): Promise<AuthOptEntity>;
  abstract findUser(
    where: FindOptionsWhere<UsersEntity>,
  ): Promise<UsersEntity | null>;
}
