import { Body, Controller, Get, Post } from '@nestjs/common';
import { InvoiceService } from './invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}
  @Post()
  create(@Body() dto: any) {
    return this.invoiceService.create(dto);
  }

  @Get()
  getAll() {
    return this.invoiceService.findAll();
  }
}
