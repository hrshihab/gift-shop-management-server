/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from './product.interface'
import { Product } from './product.model'
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary'
import QueryBuilder from '../../builder/QueryBuilder'

const createProductIntoDB = async (file: any, payload: TProduct) => {
  try {
    const imageName = `product-${payload.name}.jpg`
    const path = file?.path
    //send image to cloudinary
    const response = await sendImageToCloudinary(imageName, path)
    const { secure_url } = response as { secure_url: string }

    payload.productImage = secure_url

    const newProduct = await Product.create(payload)
    if (!newProduct) {
      throw new Error('Product not created')
    }
    return newProduct
  } catch (error) {
    throw new Error(error as string)
  }
}

const getAllProductFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .search(['name', 'theme'])
    .filter()
    .sort()
    .paginate()
    .fields()

  const result = await productQuery.modelQuery
  return result
}

export const ProductService = { createProductIntoDB, getAllProductFromDB }
