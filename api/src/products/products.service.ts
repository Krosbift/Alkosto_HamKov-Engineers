import { Injectable } from '@nestjs/common';
import { ProducRepository } from './repository/product.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly repository: ProducRepository) {}

  public async getAllProducts() {
    return await this.repository.getAllProducts({});
  }
}
