import { Body, Controller, Post } from '@nestjs/common';
import { User } from './shared/users/user';
import { UsersService } from './shared/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }
}
