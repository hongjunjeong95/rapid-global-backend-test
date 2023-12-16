import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap');

  const options = new DocumentBuilder()
    .setTitle('backend-test')
    .setDescription('API Specification of DH Nestjs API Server')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(3000, () => {
    if (process.send) {
      process.send('ready');
    }
    logger.log(`✅ API Server is listening on ${3000}`);
  });
}
bootstrap();
