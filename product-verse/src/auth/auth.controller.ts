import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('user')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signupUser(@Body(ValidationPipe) user: CreateUserDto) {
    return this.authService.signup(user);
  }
  @Post('login')
  loginUser(@Body(ValidationPipe) user: CreateUserDto) {
    return this.authService.login(user);
  }
  // logout will be handled in the frontend
}
