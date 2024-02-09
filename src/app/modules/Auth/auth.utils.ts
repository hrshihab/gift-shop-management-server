import jwt, { JwtPayload } from 'jsonwebtoken'

export const createToken = (
  jwtPaylodd: { userId: string; role: string },
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(jwtPaylodd, secret, { expiresIn })
}

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload
}
