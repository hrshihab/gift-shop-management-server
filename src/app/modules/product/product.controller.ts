import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ProductService } from './product.service'
import httpStatus from 'http-status'

const createProduct = catchAsync(async (req, res) => {
  console.log(req.file, req.body)
  const result = await ProductService.createProductIntoDB(req.file, req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product created successfully',
    data: result,
  })
})

const getAllProduct = catchAsync(async (req, res) => {
  const result = await ProductService.getAllProductFromDB(req.query)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All products',
    data: result,
  })
})

export const ProductControllers = { createProduct, getAllProduct }
