import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://mongo:123...%40bcD.@cluster0.nsrarlo.mongodb.net/nest',
    ),
    forwardRef(() => AuthModule),
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
