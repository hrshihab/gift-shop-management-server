import { Schema } from 'mongoose';

export type TInvoiceProducts = {
    productId: Schema.Types.ObjectId;
    productName: string;
    price: number;
    quantity: number;
};

export type TInvoice = {
    totalAmount: number;
    buyerName: string;
    products: TInvoiceProducts[];
    sellDate: Date;
    sellerId: Schema.Types.ObjectId;
};
