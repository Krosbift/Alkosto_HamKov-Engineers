import { DataSource, FindManyOptions, Like, QueryRunner } from 'typeorm';
import { Brand } from '../entities/brands.entity';
import { Categoria } from '../entities/category.entity';
import { Product } from '../entities/products.entity';
import { ProducRepository } from './product.repository';

export class ProductTypeOrm implements ProducRepository {
  constructor(private readonly dataSource: DataSource) {}

  public async getAllProducts(
    where: FindManyOptions<Product>,
  ): Promise<Product[]> {
    try {
      return await this.performTransaction(async (queryRunner: QueryRunner) => {
        return await queryRunner.manager.find(Product, {
          ...where,
          relations: {
            categoria: {
              padre: true,
            },
            marca: true,
          },
        });
      });
    } catch (error) {
      throw new Error();
    }
  }

  public async getAllProductsOrdered(
    where: FindManyOptions<Product>,
  ): Promise<Product[]> {
    try {
      return await this.performTransaction(async (queryRunner: QueryRunner) => {
        return await queryRunner.manager.find(Product, {
          ...where,
          relations: {
            categoria: {
              padre: true,
            },
            marca: true,
          },
          order: {
            categoria: 'ASC',
          },
        });
      });
    } catch (error) {
      throw error;
    }
  }

  public async getProductById(id: number): Promise<Product | null> {
    try {
      return await this.performTransaction(async (queryRunner: QueryRunner) => {
        return await queryRunner.manager.findOne(Product, {
          where: { id },
          relations: {
            categoria: {
              padre: true,
            },
            marca: true,
          },
        });
      });
    } catch (error) {
      throw error;
    }
  }

  public async searchProducts(productName: string): Promise<Product[]> {
    try {
      return await this.performTransaction(async (queryRunner: QueryRunner) => {
        const searchPattern = productName
          .toUpperCase()
          .replace(/[AEIOUÁÉÍÓÚ]/g, '_')
          .trim();

        return await queryRunner.manager
          .createQueryBuilder(Product, 'product')
          .where('UPPER(product.nombre) LIKE :pattern', {
            pattern: `%${searchPattern}%`,
          })
          .getMany();
      });
    } catch (error) {
      throw new Error();
    }
  }

  public async getAllBrands(where: FindManyOptions<Brand>): Promise<Brand[]> {
    try {
      return await this.performTransaction(async (queryRunner: QueryRunner) => {
        return await queryRunner.manager.find(Brand, where);
      });
    } catch (error) {
      throw new Error();
    }
  }

  public async getAllCategories(
    where: FindManyOptions<Categoria>,
  ): Promise<Categoria[]> {
    try {
      return await this.performTransaction(async (queryRunner: QueryRunner) => {
        return await queryRunner.manager.find(Categoria, where);
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
