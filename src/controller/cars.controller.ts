import { Request, Response } from "express";
import Car from "../models/cars.model";

// CREATE
export const createCar = async (req: Request, res: Response) => {
  try {
    const car = await Car.create(req.body);
    res.status(201).json(car);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

// READ ALL
export const getCars = async (_req: Request, res: Response) => {
  const cars = await Car.find();
  res.json(cars);
};

// READ ONE
export const getCar = async (req: Request, res: Response) => {
  const car = await Car.findById(req.params.id);
  res.json(car);
};

// UPDATE
export const updateCar = async (req: Request, res: Response) => {
  const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(car);
};

// DELETE
export const deleteCar = async (req: Request, res: Response) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json({ message: "Car deleted" });
};
