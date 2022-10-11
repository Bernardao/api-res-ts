import { Request, Response } from "express"
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.service"
import { handleHttp } from "../utils/error.handle"

const getItem = async ({ params }: Request, res:  Response) => {
  try {
    const { id } = params
    const response = await getCar(id)
    const data = response ? response : "NOT_FOUND"
    res.send(response)
  } catch (err) {
    handleHttp(res, `Error GET ITEM `)
  } 
}

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars()
    res.send(response)
  } catch (err) {
    handleHttp(res, `Error GET ITEMSSS `, err)
  }
}

const updateItem = async ({ params, body}: Request, res: Response) => {
  try {
    const { id } = params
    const response = await updateCar(id, body)
    res.send(response)
  } catch (err) {
    handleHttp(res, `Error UPDATE ITEM `)
  }
}

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body)
    res.send(responseItem)
  } catch (err) {
    handleHttp(res, `Error POST ITEM `, err)
  }
}

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await deleteCar(id)
    res.send(response)
  } catch (err) {
    handleHttp(res, `Error DELETE ITEM `)
  }
}

export { getItem, getItems, updateItem, postItem, deleteItem }