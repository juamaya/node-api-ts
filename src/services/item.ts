import ItemModel from "../models/item";
import { Car } from "../interfaces/car.interface";

const getCars = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

const getCar = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};

const insertCar = async (item: Car) => {
  const responseItem = await ItemModel.create(item);
  return responseItem;
};

const updateCar = async (id: string, data: Car) => {
  const responseItem = await ItemModel.findByIdAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteCar = async (id: string) => {
  const responseItem = await ItemModel.deleteOne({ _id: id });
  return responseItem;
};

export { getCars, getCar, insertCar, updateCar, deleteCar };
