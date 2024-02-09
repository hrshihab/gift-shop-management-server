import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AuthValidation } from './auth.validation'
import { AuthController } from './auth.controller'
import auth from '../../middlewares/auth'

const router = express.Router()

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthController.loginUser
)

router.post(
  '/changePassword',
  auth('admin'),
  validateRequest(AuthValidation.changePasswordValidationSchema),
  AuthController.changePassword
)
router.post(
  '/refreshToken',
  validateRequest(AuthValidation.refreshTokenValidationSchema),
  AuthController.refreshToken
)

router.post(
  '/forgotPassword',
  validateRequest(AuthValidation.forgotPasswordValidationSchema),
  AuthController.forgotPassword
)

router.post(
  '/resetPassword',
  validateRequest(AuthValidation.resetPasswordValidationSchema),
  AuthController.resetPassword
)

export const AuthRoutes = router
