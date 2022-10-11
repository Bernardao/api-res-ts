import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt.handle'
import { RequestExt } from '../interface/req-ext.interface'

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || ''
    const jwt = jwtByUser.split(' ').pop()
    const isUser = verifyToken(`${jwt}`) as { id: string }
    console.log('isUser', isUser)
    if (!isUser) {
      res.status(401)
      res.send('NO_TIENES_UN_JWT_VÁLIDO')
    } else {
      req.user = isUser
      console.log({ jwtByUser })
      next()
    }
  } catch (err) {
    res.status(400)
    res.send('SESSION_NOT_VALID')
  }
}

export { checkJwt }