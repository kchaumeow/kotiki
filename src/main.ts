import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function start() {
  const PORT = parseInt(process.env.PORT) || 5000;

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle("Cats API")
      .setDescription("Eventually it will be an API for cat shelters")
      .setVersion("1.0.0")
      .addTag("Kchaumeow")
      .build()
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
start();
