import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ProductService } from './product.service'
import httpStatus from 'http-status'

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductService.createProductIntoDB(req.file, req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product created successfully',
    data: result,
  })
})

export const ProductControllers = { createProduct }
