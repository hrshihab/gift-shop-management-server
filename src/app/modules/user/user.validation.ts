import { z } from 'zod'

export const userValidationSchema = z.object({
  body: z.object({
    password: z
      .string({
        invalid_type_error: 'Password must be string',
      })
      .max(20, { message: 'Password must be less than 20 characters' })
      .min(4, { message: 'Password must be greater than 4 characters' }),
  }),
})
