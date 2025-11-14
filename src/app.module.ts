import { Module } from '@nestjs/common';
import { ProductsModule } from './module/products/products.module';
import { InvoiceModule } from './module/invoice/invoice.module';
import { CustomersModule } from './module/customers/customers.module';

@Module({
  imports: [ProductsModule, InvoiceModule, CustomersModule],
})
export class AppModule {}
