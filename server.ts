import { NestFactory } from '@nestjs/core';
import { AppModule } from './api/src/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ExpressAdapter } from '@nestjs/platform-express';
import express, { Request, Response } from 'express';

const server = express();
let isAppInitialized = false;

async function bootstrap() {
  if (!isAppInitialized) {
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(server),
    );

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    const config = new DocumentBuilder()
      .setTitle('Reown Backend API')
      .setDescription("Nigeria's Trust-Native P2P Marketplace Backend API Documentation")
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);

    await app.init();
    isAppInitialized = true;
  }
}

export default async function handler(req: Request, res: Response): Promise<void> {
  await bootstrap();
  server(req, res);
}
