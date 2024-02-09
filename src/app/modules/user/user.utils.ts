import { User } from './user.model'

const findLastUser = async () => {
  const lastUser = await User.findOne().sort({ createdAt: -1 }).lean()
  return lastUser?.id as string
}

const generatedUserId = async () => {
  let currentId = (1).toString()
  const lastUserId = await findLastUser()
  if (lastUserId) {
    const lastId = lastUserId.split('-')[1]
    currentId = (parseInt(lastId) + 1).toString().padStart(4, '0')
  } else {
    currentId = currentId.toString().padStart(4, '0')
  }

  return `user-${currentId}`
}

export default generatedUserId
