import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly db: DatabaseService,
    private jwtService: JwtService,
  ) {}

  async signup(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;
    const foundUser = await this.db.user.findFirst({
      where: {
        email,
      },
    });
    if (foundUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await argon2.hash(password);
    const user = await this.db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    if (user) {
      const payload = { id: user.id, email: user.email };
      return {
        access_token: this.jwtService.sign(payload),
        message: 'done',
      };
    }
  }

  async login(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;

    const user = await this.db.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }
    const payload = { id: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
      message: 'done',
    };
  }
}
