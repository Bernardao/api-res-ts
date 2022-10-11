import { Router, Request, Response } from "express"
import { registerCtrl, loginCtrl } from '../controllers/auth'

const router = Router()
/**
 * http://localhost:3002/auth/reqister [POST]
 */
router.post('/register', registerCtrl)
router.post('/login', loginCtrl)

export { router }