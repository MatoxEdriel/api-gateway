import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [ProductsModule, InvoiceModule],
})
export class AppModule {}
