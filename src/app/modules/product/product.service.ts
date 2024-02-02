/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from './product.interface'
import { Product } from './product.model'
import { generatedProductId } from './product.utils'
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary'

const createProductIntoDB = async (file: any, payload: TProduct) => {
  try {
    //console.log(await generatedProductId())
    payload.id = await generatedProductId()

    const imageName = `product-${payload.id}.jpg`
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

export const ProductService = { createProductIntoDB }
