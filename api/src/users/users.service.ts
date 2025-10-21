import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repository/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  public async validateUserEmail(email: string) {
    const user = this.repository.findUser({ email })
    return user !== null;
  }
}
