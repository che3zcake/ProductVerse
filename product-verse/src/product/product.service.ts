import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly db: DatabaseService) {}
  async view() {
    return this.db.product.findMany({
      include: {
        user: true,
        categories: true,
      },
    });
    // return products;
  }
  async create(product: CreateProductDto, userId: number) {
    const { categories, ...productData } = product;

    const user = await this.db.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error('User not found');

    const existingCategories = await this.db.category.findMany({
      where: {
        name: { in: categories },
      },
    });

    const existingCategoryNames = existingCategories.map((cat) => cat.name);

    const newCategoryNames = categories.filter(
      (catName) => !existingCategoryNames.includes(catName),
    );

    const newCategories = await Promise.all(
      newCategoryNames.map((name) =>
        this.db.category.create({
          data: { name },
        }),
      ),
    );

    const allCategories = [...existingCategories, ...newCategories];

    const productCreated = await this.db.product.create({
      data: {
        ...productData,
        userId: userId,
        categories: {
          connect: allCategories.map((cat) => ({ id: cat.id })),
        },
      },
      include: {
        categories: true,
      },
    });
    return productCreated;
  }
  async delete(id: number) {
    return this.db.product.delete({
      where: { id },
    });
  }
  async update(productId: number, userId: number, updateDto: UpdateProductDto) {
    const { categories, ...dataToUpdate } = updateDto;

    // Check if product exists
    const product = await this.db.product.findUnique({
      where: { id: productId },
    });
    if (!product) throw new Error('Product not found');

    // Check ownership
    if (product.userId !== userId)
      throw new Error('Unauthorized: Not the owner of this product');

    let categoryUpdate = {};
    if (categories && categories.length > 0) {
      // Get existing categories by name
      const existing = await this.db.category.findMany({
        where: { name: { in: categories } },
      });

      const existingNames = existing.map((c) => c.name);
      const newNames = categories.filter(
        (name) => !existingNames.includes(name),
      );

      // Create missing categories
      const created = await Promise.all(
        newNames.map((name) => this.db.category.create({ data: { name } })),
      );

      const allCategories = [...existing, ...created];

      categoryUpdate = {
        categories: {
          set: allCategories.map((cat) => ({ id: cat.id })),
        },
      };
    }

    const updatedProduct = await this.db.product.update({
      where: { id: productId },
      data: {
        ...dataToUpdate,
        ...categoryUpdate,
      },
      include: {
        categories: true,
      },
    });

    return updatedProduct;
  }
  async searchbyname(query: string) {
    return this.db.product.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive',
        },
      },
      include: {
        categories: true,
        user: true,
      },
    });
  }
}
