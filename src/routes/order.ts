import { Router, Request, Response } from "express"
import { getItems } from "../controllers/order"
import { checkJwt } from '../middleware/session'
/**
 * Solo acceden personas con sesión activa => JWT válido
 */

const router = Router()

router.get('/', checkJwt, getItems)

export { router }