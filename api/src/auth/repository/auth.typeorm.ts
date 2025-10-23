import { DataSource, FindOptionsWhere, QueryRunner } from 'typeorm';
import { AuthOptEntity } from '../entities/auth-opt.entity';
import { AuthRepository } from './auth.repository';

export class AuthTypeorm implements AuthRepository {
  constructor(private readonly dataSource: DataSource) {}

  readOptCode(where: FindOptionsWhere<AuthOptEntity>): Promise<AuthOptEntity> {
    try {
      
    } catch (error) {
      
    }
  }

  genOptCode(entity: AuthOptEntity): Promise<AuthOptEntity> {
    throw new Error('Method not implemented.');
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
