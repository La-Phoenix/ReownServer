import { NestFactory } from '@nestjs/core';
import { AppModule } from './api/src/app.module';
import { ValidationPipe, INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

let app: INestApplication;

async function bootstrap(): Promise<INestApplication> {
  if (!app) {
    app = await NestFactory.create(AppModule);

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
  }
  return app;
}

// Modern NestJS v11 Serverless Handler for Vercel
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any): Promise<void> {
  const instance = await bootstrap();
  const instanceServer = instance.getHttpAdapter().getInstance();
  instanceServer(req, res);
}
