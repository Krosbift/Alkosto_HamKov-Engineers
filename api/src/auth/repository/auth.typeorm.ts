import { DataSource, FindOptionsWhere, QueryRunner } from 'typeorm';
import { AuthOptEntity } from '../entities/auth-opt.entity';
import { AuthRepository } from './auth.repository';
import { UsersEntity } from '../entities/users.entity';

export class AuthTypeorm implements AuthRepository {
  constructor(private readonly dataSource: DataSource) {}

  public async readOptCode(
    where: FindOptionsWhere<AuthOptEntity>,
  ): Promise<AuthOptEntity | null> {
    try {
      return await this.performTransaction(async (queryRunner: QueryRunner) => {
        return await queryRunner.manager.findOne(AuthOptEntity, {
          where,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  public async genOptCode(entity: AuthOptEntity): Promise<AuthOptEntity> {
    try {
      return await this.performTransaction(async (queryRunner: QueryRunner) => {
        return await queryRunner.manager.save(AuthOptEntity, entity);
      });
    } catch (error) {
      throw new Error();
    }
  }

  public async findUser(
    where: FindOptionsWhere<UsersEntity>,
  ): Promise<UsersEntity | null> {
    try {
      return await this.performTransaction(async (queryRunner: QueryRunner) => {
        return await queryRunner.manager.findOne(UsersEntity, {
          where,
        });
      });
    } catch (error) {
      throw new Error();
    }
  }

  private async performTransaction<T>(
    work: (queryRunner: QueryRunner) => Promise<T>,
  ): Promise<T> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const result = await work(queryRunner);
      await queryRunner.commitTransaction();
      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
