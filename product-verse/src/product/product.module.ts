import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { DatabaseModule } from '../database/database.module';
import { authMiddleware } from '../middleware/authmiddleware';

@Module({
  imports: [DatabaseModule],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(authMiddleware)
      .forRoutes(
        { path: 'product/create', method: RequestMethod.POST },
        { path: 'product/delete', method: RequestMethod.DELETE },
        { path: 'product/update', method: RequestMethod.PUT },
      );
  }
}
