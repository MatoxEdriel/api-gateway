import { Controller, Get, Post } from '@nestjs/common';

@Controller('invoice')
export class InvoiceController {
  @Post()
  create() {
    return 'crea producto';
  }

  @Get()
  getAll() {
    return 'aqui tra todo ';
  }
}
