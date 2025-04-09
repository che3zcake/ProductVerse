import { Body, Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateProductDto } from '../product/dto/create-product.dto';

interface AuthenticatedRequest extends Request {
  userId?: number;
}

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  /*
   GET /user
   GET /user/:id
  */
  @Get() // GET /user
  findAll() {
    return this.userService.findall();
  }
  @Get(':id') // GET /user/:id
  findOne(@Param('id') id: number) {
    return this.userService.findone(+id);
  }
}
