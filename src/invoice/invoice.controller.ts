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
  async generatePdf(@Body() body: { columns: string[], data: any[] }, @Res() res: Response) {
    const pdfBuffer = await this.invoiceService.downloadPdf(body);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="facturas.pdf"',
      'Content-Length': pdfBuffer.length,
    });

    res.end(pdfBuffer);
  }


  @Post('pdf/html')
async generatePdfFromHtml(
  @Body() body: { html: string },
  @Res() res: Response,
) {
  try {
    const pdfBuffer = await this.invoiceService.generatePdfFromHtml(body.html);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="factura.html.pdf"',
      'Content-Length': pdfBuffer.length,
    });

    res.end(pdfBuffer);
  } catch (error) {
    console.error('Error generando PDF desde HTML:', error);
    res.status(500).json({ error: 'PDF generation failed' });
  }
}


}
