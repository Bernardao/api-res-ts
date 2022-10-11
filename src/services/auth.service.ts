import { Auth } from '../interface/auth.interface'
import { User } from '../interface/user.interface'
import UserModel from '../models/user.model'
import { generateToken } from '../utils/jwt.handle'
import { encrypt, verified } from '../utils/password.handle'

const registerNewUser = async ({email, password, name}: User) => {
  const checkIs = await UserModel.findOne({ email })
  if (checkIs) return 'ALREADY_EXISTS'
  
  const passHash = await encrypt(password)
  const registerNewUser = await UserModel.create({ email, passHash, name })
  return registerNewUser
}

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email })
  if (!checkIs) return 'NOT_FOUND_USER'
  const passwordHash = checkIs.password // Encripted from db
  const isCorrect = await verified(password, passwordHash)

  if (!isCorrect) return 'PASSWORD_INCORRECT'
  const token = generateToken(checkIs.email)
  const data = {
    token,
    user: checkIs
  }
  return data
}

export { registerNewUser, loginUser }