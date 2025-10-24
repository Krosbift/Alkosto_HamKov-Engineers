import { FindManyOptions, FindOptionsWhere } from 'typeorm';
import { Product } from '../entities/products.entity';
import { Brand } from '../entities/brands.entity';
import { Categoria } from '../entities/category.entity';

export abstract class ProducRepository {
  abstract getAllProducts(where: FindManyOptions<Product>): Promise<Product[]>;
  abstract searchProducts(productName: string): Promise<Product[]>;
  abstract getAllBrands(where: FindManyOptions<Brand>): Promise<Brand[]>;
  abstract getAllCategories(
    where: FindManyOptions<Categoria>,
  ): Promise<Categoria[]>;
}
