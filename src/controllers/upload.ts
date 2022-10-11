import { Response, Request } from 'express'
import { RequestExt } from "../interface/req-ext.interface"
import { registerUpload } from '../services/storage.service'
import { Storage } from '../interface/storage.interface'
import { handleHttp } from '../utils/error.handle'

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    }
    const response = await registerUpload(dataToRegister)
    res.send(response)
  } catch (err) {
    handleHttp(res, 'ERROR GET_FILE')
  }
}

export { getFile }