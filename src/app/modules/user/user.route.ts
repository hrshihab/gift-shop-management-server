import express, { NextFunction, Request, Response } from 'express'
import { upload } from '../../utils/sendImageToCloudinary'
import validateRequest from '../../middlewares/validateRequest'
import { UserControllers } from './user.controller'
import { userValidationSchema } from './user.validation'

const router = express.Router()

router.post(
  '/create-user',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    //console.log('file', req.file)
    req.body = JSON.parse(req.body.data)
    next()
  },
  validateRequest(userValidationSchema),
  UserControllers.createUser
)

export const UserRoutes = router
