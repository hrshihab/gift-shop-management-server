/* eslint-disable no-console */
import express, { Request } from 'express'
import { ProductControllers } from './product.controller'
import { upload } from '../../utils/sendImageToCloudinary'
import validateRequest from '../../middlewares/validateRequest'
import { createProductValidationSchema } from './product.validation'

const router = express.Router()

router.post(
  '/create-product',
  upload.single('file'),
  (req: Request, res: express.Response, next: express.NextFunction) => {
    console.log('file', req.file)
    req.body = JSON.parse(req.body.data)
    next()
  },
  validateRequest(createProductValidationSchema),
  ProductControllers.createProduct
)

export const ProductRoutes = router
