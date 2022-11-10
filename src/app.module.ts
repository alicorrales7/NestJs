import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://mongo:123...%40bcD.@cluster0.nsrarlo.mongodb.net/nest',
    ),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService,AuthService],
})
export class AppModule {}
