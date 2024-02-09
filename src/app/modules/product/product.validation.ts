import { z } from 'zod'

export const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(50),
    price: z.number({ invalid_type_error: 'Price must be number' }).positive(),
    quantity: z.number().positive(),
    occasion: z.string().min(2).max(50),
    recipient: z.string().min(2).max(50),
    category: z.string().min(2).max(50),
    theme: z.string().min(2).max(50),
    brand: z.string().min(2).max(50),
    material: z.string().min(2).max(50).optional(),
    color: z.string().min(2).max(50).optional(),
    //productImage: z.string().min(2).max(50),
    isDeleted: z.boolean(),
  }),
})

export const productValidation = {
  createProductValidationSchema,
}
