import httpStatus from 'http-status'
import AppError from '../errors/AppError'
import { TUserRole } from '../modules/user/user.interface'
import catchAsync from '../utils/catchAsync'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { User } from '../modules/user/user.model'

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Token is required')
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET as string
    ) as JwtPayload
    const { userId, role } = decoded
    const user = await User.isUserExistByCustomId(userId)

    if (!user) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'User not found')
    }
    if (user.isDeleted) {
      throw new AppError(httpStatus.FORBIDDEN, 'User is deleted')
    }
    if (user.status === 'blocked') {
      throw new AppError(httpStatus.FORBIDDEN, 'User is blocked')
    }
    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'User is not authorized')
    }

    req.user = decoded as JwtPayload
    next()
  })
}

export default auth
