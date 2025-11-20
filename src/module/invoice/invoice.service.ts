/* eslint-disable @typescript-eslint/no-unsafe-return */
// invoice.service.ts (en API Gateway)
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { InvoiceWithTracksDto } from './interfaces/invoice.interfaces';
import { INVOICE_CMD } from '@novaCode/resource';
import { PaginationParams } from 'src/interfaces/PaginationParam.interface';


@Injectable()
export class InvoiceService {
    constructor(

        @Inject('MAIN_MICROSERVICE') private readonly client: ClientProxy,
    ) { }

    async create(dto: any) {
        return firstValueFrom(this.client.send({ cmd: 'create_invoice' }, dto));
    }

    async findAll(params: PaginationParams) {
        return firstValueFrom(this.client.send(INVOICE_CMD.FIND_ALL, params));
    }


    async generatePdf(options: any): Promise<Buffer> {
        const result = await firstValueFrom(
            this.client.send({ cmd: 'generate-pdf' }, options)
        );
        return Buffer.from(result?.data ?? result);
    }
    async findAllWithTracks(): Promise<InvoiceWithTracksDto[]> {
        return firstValueFrom(
            this.client.send<InvoiceWithTracksDto[]>(
                INVOICE_CMD.FIND_ALL,
                {}
            )
        );
    }



}
