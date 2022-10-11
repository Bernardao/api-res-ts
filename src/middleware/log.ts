import { Request, Response, NextFunction } from "express"

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers
  const userAgent = header['user-agent']
  console.log("Hola, soy el log ->", userAgent)
  next()
  // res.send("Desde el middleware")
}

export  { logMiddleware }