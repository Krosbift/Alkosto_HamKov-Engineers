import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repository/users.repository';
import { UsersEntity } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  public async validateUserEmail(email: string) {
    const user = await this.repository.findUser({ email });
    return user !== null;
  }

  public async register(entity: Omit<UsersEntity, 'id' | 'activo'>) {
    return this.repository.createUser(entity);
  }
}
