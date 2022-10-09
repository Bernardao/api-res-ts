import { Router } from "express"
import { readdirSync } from "fs"

const PATH_ROUTER = `${__dirname}`
const router = Router()

const cleanFileName = (filename: string) => {
  return filename.split('.').shift()
}

readdirSync(PATH_ROUTER).filter((filename: string) => {
  const cleannedName = cleanFileName(filename)
  if (cleannedName !== 'index') {
    import(`./${cleannedName}`).then((moduleRouter) => {
      router.use(`/${cleannedName}`, moduleRouter.router)
    })
  }
})
export { router }