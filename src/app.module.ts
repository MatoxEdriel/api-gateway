import { Module } from '@nestjs/common';
import { ProductsModule } from './module/products/products.module';
import { InvoiceModule } from './module/invoice/invoice.module';
import { CustomersModule } from './module/customers/customers.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi'
import { ClientsModule, Transport } from '@nestjs/microservices';

//Aqui configuras el configService 
@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'KAFKA_CLIENT',
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          transport: Transport.KAFKA,
          options: {
            client: {
              clientId: configService.get<string>('KAFKA_CLIENT_ID'),
              brokers: [configService.get<string>('KAFKA_BROKERS')?.split(',')?.toString() || 'localhost:9092'],
            },
            consumer: {
              groupId: 'api-gateway-group',
            },
          },
        }),
        inject: [ConfigService],
      },
    ]),


    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        PLANTS_MICROSERVICES_HOST: Joi.string().required(),
        PLANTS_MICROSERVICES_PORT: Joi.number().required(),

        KAFKA_BROKERS: Joi.string().required(),
        KAFKA_CLIENT_ID: Joi.string().required(),

      })

    })
    ,

    ProductsModule, InvoiceModule, CustomersModule, CustomersModule],
})
export class AppModule { }
