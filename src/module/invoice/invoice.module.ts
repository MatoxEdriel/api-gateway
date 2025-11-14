/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import { InvoiceService } from './invoice.service';
import { MicroservicesModule } from 'src/microservices/microservices.module';

@Module({
  controllers: [InvoiceController],
  imports: [MicroservicesModule],
  providers: [InvoiceService],
})
export class InvoiceModule {}
