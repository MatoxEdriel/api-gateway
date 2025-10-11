/* eslint-disable @typescript-eslint/no-unsafe-return */
// invoice.service.ts (en API Gateway)
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class InvoiceService {
    constructor(
        @Inject('INVOICE_SERVICE') private readonly client: ClientProxy,
    ) { }

    async create(dto: any) {
        return firstValueFrom(this.client.send({ cmd: 'create_invoice' }, dto));
    }

    async findAll() {
        return firstValueFrom(this.client.send({ cmd: 'find_all_invoices' }, {}));
    }


    async generatePdf(options: any): Promise<Buffer> {
        const result = await firstValueFrom(
            this.client.send({ cmd: 'generate-pdf' }, options)
        );
        return Buffer.from(result?.data ?? result);
    }


}
