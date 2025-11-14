export class InvoiceWithTracksDto {
    invoiceId: number;
    customerId: number;
    invoiceDate: Date;
    total: number;
    lines: InvoiceLineDto[];
}

export class InvoiceLineDto {
    trackName: string;
    composer?: string;
    unitPrice: number;
    quantity: number;
}