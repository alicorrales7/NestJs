import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { userDTO } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userServices: UsersService) {}

  @Post()
  postUser(@Body() user: userDTO) {
    const userOb = this.userServices.create(user);
    return userOb;
  }

  @Get()
  getAllUser() {
    return this.userServices.getAllUser();
  }

  @Get(':_id')
  getUser(@Param() id) {
    const getAll = this.userServices.getOne(id);
    return getAll;
  }

  @Put(':_id')
  putUser(@Body() user, @Param() id) {
    const userOb = this.userServices.update(user, id);
    return userOb;
  }

  @Delete(':_id')
  deleteUser(@Param() id) {
    const userOb = this.userServices.delete(id);
    return userOb;
  }
}
