import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, INVOICE_SERVICE } from 'src/config';

@Module({
  controllers: [InvoiceController],
  imports: [
    ClientsModule.register([
      {
        name: INVOICE_SERVICE,
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: envs.port,
        },
      },
    ]),
  ],
  providers: [],
})
export class InvoiceModule {}
