import { Module } from '@nestjs/common';
import { ProcessEnvModule } from './process-env/infrastructure/nestjs/process-env.module';
import { PgTypeormModule } from './pg-typeorm/pg-typeorm.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProcessEnvModule, PgTypeormModule, UsersModule, AuthModule, ProductsModule],
})
export class AppModule {}
