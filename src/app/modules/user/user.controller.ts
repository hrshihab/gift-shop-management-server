import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { UserService } from './user.service'

const createUser = catchAsync(async (req, res) => {
  console.log(req.file, req.body)
  const result = await UserService.createUserIntoDB(req.file, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  })
})

export const UserControllers = { createUser }
