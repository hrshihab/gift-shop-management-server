/* eslint-disable no-unused-vars */
import { Model } from 'mongoose'
import { USER_ROLE } from './user.constant'

export type TUser = {
  id: string
  email: string
  password: string
  passwordChangedAt?: Date
  role: 'admin' | 'user'
  profileImage?: string
  status: 'in-progress' | 'blocked'
  isDeleted: boolean
}

export interface UserModel extends Model<TUser> {
  // eslint-disable-next-line no-unused-vars
  isUserExistByCustomId(id: string): Promise<TUser>
  //Checking password matched
  isPasswordMatched(oldPassword: string, newPassword: string): Promise<boolean>
}

export type TUserRole = keyof typeof USER_ROLE
