import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

const server = express();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cachedServer: any;

async function bootstrapServer() {
  if (!cachedServer) {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

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
    cachedServer = server;
  }
  return cachedServer;
}

// Export default serverless handler for Vercel (1 single function for all routes)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async (req: any, res: any): Promise<unknown> => {
  const handler = await bootstrapServer();
  return handler(req, res);
};

// Local environment listener
if (!process.env.VERCEL) {
  bootstrapServer().then(() => {
    const port = process.env.PORT ?? 3000;
    server.listen(port, () => {
      console.log(`Application running on http://localhost:${port}`);
      console.log(`Swagger documentation available at http://localhost:${port}/api/docs`);
    });
  });
}
