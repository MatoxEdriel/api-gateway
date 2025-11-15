import { Module } from '@nestjs/common';
import { ProductsModule } from './module/products/products.module';
import { InvoiceModule } from './module/invoice/invoice.module';
import { CustomersModule } from './module/customers/customers.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi'

//Aqui configuras el configService 
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      envFilePath: '.env',
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        PLANTS_MICROSERVICES_HOST: Joi.string().required(),
        PLANTS_MICROSERVICES_PORT: Joi.number().required()

      })

    })
    ,

    ProductsModule, InvoiceModule, CustomersModule, CustomersModule],
})
export class AppModule { }
