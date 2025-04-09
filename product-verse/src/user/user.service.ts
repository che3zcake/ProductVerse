import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateProductDto } from '../product/dto/create-product.dto';

@Injectable()
export class UserService {
  constructor(private readonly db: DatabaseService) {}
  findall() {
    return this.db.user.findMany();
  }
  async findone(id: number) {
    const user = await this.db.user.findFirst({
      where: {
        id: id,
      },
      include: {
        products: {
          include: {
            categories: true,
          },
        },
      },
    });
    if (!user) {
      return { message: 'Not Found' };
    }
    return user;
  }
}
