import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

interface AuthenticatedRequest extends Request {
  userId?: number;
}

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  viewProduct() {
    return this.productService.view();
  }
  @Post('/create')
  createProduct(@Body() product: CreateProductDto, @Req() req: Request) {
    const { userId } = req as AuthenticatedRequest;
    if (typeof userId === 'number') {
      return this.productService.create(product, userId);
    }
  }
  @Delete('/delete/:id')
  deleteProduct(@Param('id') id: number) {
    return this.productService.delete(+id);
  }
  @Patch('/update/:userId/:prodId')
  updateProduct(
    @Param('prodId') prodId: number,
    @Param('userId') userId: number,
    @Body() updateDto: UpdateProductDto,
  ) {
    return this.productService.update(+prodId, +userId, updateDto);
  }
  @Get('/search')
  search(@Query('s') query: string) {
    return this.productService.searchbyname(query);
  }
}
