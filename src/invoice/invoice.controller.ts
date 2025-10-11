import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import type { Response } from 'express';
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

  @Post('pdf')
  async generatePdf(@Body() data: any, @Res() res: Response) {
    const pdf = await this.invoiceService.generatePdf(data);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="document.pdf"`);
    res.end(pdf);
  }
}
