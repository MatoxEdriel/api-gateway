import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { envs } from './config/envs';

async function bootstrap() {
  const logger = new Logger('Main-gateway');
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3000);

  logger.log(`Gateway corriendo en el puerto ${envs.port}`);
  logger.log(`invoice host que seria localhost  ${envs.invoiceHost}`);
}

bootstrap();
