import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly userService: UsersService) {
    super();
  }

  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null, { id: user.id });
  }

  deserializeUser(payload: any, done: (err: Error, payload: any) => void) {
    const user = this.userService.getOne(payload.id);
    done(null, user);
  }
}
