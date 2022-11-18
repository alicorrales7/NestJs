import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'keyboard cat', //get env vars
      resave: false,
      saveUninitialized: false,
      cookie: { MaxAge: 3600000},
    })
  )

  app.use(passport.initialize());
  app.use(passport.session());
  
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
