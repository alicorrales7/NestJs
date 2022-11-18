import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthenticatedGuard } from './auth/authenticated.guard';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('loginA')
  login(): any {
    return { msg: 'Logged in!' };
  }

  @UseGuards(AuthenticatedGuard)
  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
