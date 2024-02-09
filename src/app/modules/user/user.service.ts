/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary'
import { TUser } from './user.interface'
import { User } from './user.model'
import generatedUserId from './user.utils'

const createUserIntoDB = async (file: any, payload: TUser) => {
  try {
    //console.log(payload)
    payload.id = await generatedUserId()
    //console.log(payload.id)
    const imageName = `${payload.id}.jpg`
    const path = file?.path
    //send image to cloudinary
    const response = await sendImageToCloudinary(imageName, path)
    const { secure_url } = response as { secure_url: string }
    payload.profileImage = secure_url

    //console.log(secure_url)

    const newUser = await User.create(payload)

    if (!newUser) {
      throw new Error('User not created')
    }
    return newUser
  } catch (error) {
    throw new Error(error as string)
  }
}

export const UserService = { createUserIntoDB }
