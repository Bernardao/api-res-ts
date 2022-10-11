import { Response } from 'express'
import { RequestExt } from '../interface/req-ext.interface'
import { handleHttp } from '../utils/error.handle'

const getItems = async (req: RequestExt, res:  Response) => {
  try {
    res.send({
      data: 'Esto solo lo ven personas con sesión/JWT',
      user: req.user 
    })
  } catch (err) {
    handleHttp(res, `Error GET ORDERS `, err)
  }
}

export { getItems }