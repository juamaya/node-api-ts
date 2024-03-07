import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getItem = (req: Request, res: Response) => {
  try {
  } catch (err) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

const getItems = (req: Request, res: Response) => {
  try {
  } catch (err) {
    handleHttp(res, "ERROR_GET_BLOGS");
  }
};

const createItem = ({ body }: Request, res: Response) => {
  try {
    // const { body } = req.body;
    res.send(body);
  } catch (err) {
    handleHttp(res, "ERROR_CREATE_BLOG");
  }
};

const updateItem = (req: Request, res: Response) => {
  try {
  } catch (err) {
    handleHttp(res, "ERROR_UPDATE_BLOG");
  }
};

const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (err) {
    handleHttp(res, "ERROR_DELETE_BLOG");
  }
};

export { getItem, getItems, createItem, updateItem, deleteItem };
