import { Controller, Request, Get ,Post,Body, UseGuards} from '@nestjs/common';
import { request } from 'http';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService} from './auth/auth.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly authServise: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('loginA')
  login(@Request() req):any {
    return req.user;
  }


  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
