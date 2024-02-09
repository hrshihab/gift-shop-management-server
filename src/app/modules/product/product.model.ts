import { Schema, model } from 'mongoose'
import { TProduct } from './product.interface'

const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    occasion: {
      type: String,
      required: true,
    },
    recipient: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    productImage: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

export const Product = model<TProduct>('Product', productSchema)
