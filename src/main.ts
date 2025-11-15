import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('Main-gateway');
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);


  app.enableCors();

  app.setGlobalPrefix('api');

  const port = config.get<number>('PORT', 3000);
  const plantHost = config.get<string>('PLANTS_MICROSERVICES_HOST');
  const plantPort = config.get<number>('PLANTS_MICROSERVICES_PORT');

  await app.listen(port);

  logger.log(`Gateway corriendo en el puerto ${plantPort}`);
  logger.log(`invoice host que seria loc alhost  ${plantHost}`);
}

bootstrap();
