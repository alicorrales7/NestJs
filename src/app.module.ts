import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://mongo:123...%40bcD.@cluster0.nsrarlo.mongodb.net/nest',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
