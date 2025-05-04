import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('HTTP');

  // Add request logging middleware
  app.use((req: Request, res: Response, next: NextFunction) => {
    const { method, originalUrl, ip } = req;
    const startTime = Date.now();

    res.on('finish', () => {
      const { statusCode } = res;
      const responseTime = Date.now() - startTime;
      logger.log(
        `${method} ${originalUrl} ${statusCode} ${responseTime}ms - ${ip}`,
      );
    });

    next();
  });

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });

  //config api
  app.setGlobalPrefix('api/v1', { exclude: [''] });
  //config validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // loại bỏ các trường ko cần check
    }),
  );
  await app.listen(process.env.PORT ?? 9999);
}
bootstrap();
