import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItem = (req: Request, res: Response) => {
  try {
    
  } catch (err) {
    handleHttp(res, `Error GET ITEM `)
  }
}

const getItems = (req: Request, res: Response) => {
  try {
    
  } catch (err) {
    handleHttp(res, `Error GET ITEMSSS `)
  }
}

const updateItem = (req: Request, res: Response) => {
  try {
    
  } catch (err) {
    handleHttp(res, `Error UPDATE ITEM `)
  }
}

const postItem = ({ body}: Request, res: Response) => {
  try {
    res.send(body)
  } catch (err) {
    handleHttp(res, `Error POST ITEM `)
  }
}

const deleteItem = (req: Request, res: Response) => {
  try {
    
  } catch (err) {
    handleHttp(res, `Error DELETE ITEM `)
  }
}

export { getItem, getItems, updateItem, postItem, deleteItem }