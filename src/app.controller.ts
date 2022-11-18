import { Controller, Request, Get ,Post, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService} from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly authServise: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('loginA')
  login(@Request() req):any {
    return {msg: 'Logged in!'};
  }

  @UseGuards(AuthenticatedGuard)
  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
