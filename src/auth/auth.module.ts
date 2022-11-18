import { Module, forwardRef } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStoragy } from './local.strategy';

@Module({
  providers: [AuthService, LocalStoragy],
  imports: [PassportModule, forwardRef(() => UsersModule)],
})
export class AuthModule {}
