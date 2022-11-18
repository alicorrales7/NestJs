import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { userDTO } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller()
export class UsersController {
  constructor(private readonly userServices: UsersService) {}

  @Post('/login')
  login(@Body() user) {
    const userV = this.userServices.loginS(user);
    return userV;
  }

  @Post('/user')
  postUser(@Body() user: userDTO) {
    const salRounds = 10;
    const hash = bcrypt.hashSync(user.password, salRounds);
    const userCryps = { ...user, password: hash };
    const userOb = this.userServices.create(userCryps);
    return userOb;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/user')
  getAllUser() {
    return this.userServices.getAllUser();
  }

  @Get('/user/:_id')
  getUser(@Param() id) {
    const getAll = this.userServices.getOne(id);
    return getAll;
  }

  @Put('/user/:_id')
  putUser(@Body() user, @Param() id) {
    const userOb = this.userServices.update(user, id);
    return userOb;
  }

  @Delete('/user/:_id')
  deleteUser(@Param() id) {
    const userOb = this.userServices.delete(id);
    return userOb;
  }
}
