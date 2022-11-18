import { Module , forwardRef} from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStoragy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  providers: [AuthService,LocalStoragy,SessionSerializer],
  imports: [ PassportModule.register({session:true}) ,
    forwardRef(() => UsersModule)]
})
export class AuthModule {}
