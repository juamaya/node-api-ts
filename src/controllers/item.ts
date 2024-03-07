import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  insertCar,
  getCars,
  getCar,
  updateCar,
  deleteCar,
} from "../services/item";

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    // const  id = req.params.id
    const response = await getCar(id);
    res.send(response);
  } catch (err) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (err) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const createItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body);
    res.send(responseItem);
    // const { body } = req.body;
    // res.send(body);
  } catch (e) {
    handleHttp(res, "ERROR_CREATE_ITEM", e);
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const response = await updateCar(id, data);
    res.send(response);
  } catch (err) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const response = await deleteCar(id);
    res.send(response);
  } catch (err) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, createItem, updateItem, deleteItem };
