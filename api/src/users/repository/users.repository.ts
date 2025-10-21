import { FindOptionsWhere } from "typeorm";
import { UsersEntity } from "../entities/users.entity";

export abstract class UsersRepository {
  abstract findUser(where: FindOptionsWhere<UsersEntity>): Promise<UsersEntity | null>;
}