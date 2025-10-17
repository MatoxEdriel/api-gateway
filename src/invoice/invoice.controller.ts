import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import type { Response } from 'express';
@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) { }
  @Post()
  create(@Body() dto: any) {
    return this.invoiceService.create(dto);
  }

  @Get()
  getAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('filter') filter?: string,

  ) {
    return this.invoiceService.findAll({page, limit, filter});
  }

  @Post('pdf')
  async generatePdf(@Body() data: any, @Res() res: Response) {
    const pdf = await this.invoiceService.generatePdf(data);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="document.pdf"`);
    res.end(pdf);
  }

  @Get('invoices-with-tracks')
  async getInvoicesWithTracks() {
    return this.invoiceService.findAllWithTracks();
  }
}
