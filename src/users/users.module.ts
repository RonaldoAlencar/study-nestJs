import { Module } from '@nestjs/common';
import { UsersService } from './shared/users/users.service';
import { UsersController } from './users.controller';
import { TaskSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: TaskSchema }])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
