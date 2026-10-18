"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.updateCar = exports.getCar = exports.getCars = exports.createCar = void 0;
const cars_model_1 = __importDefault(require("../models/cars.model"));
// CREATE
const createCar = async (req, res) => {
    try {
        const car = await cars_model_1.default.create(req.body);
        res.status(201).json(car);
    }
    catch (err) {
        res.status(400).json({ error: err });
    }
};
exports.createCar = createCar;
// READ ALL
const getCars = async (_req, res) => {
    const cars = await cars_model_1.default.find();
    res.json(cars);
};
exports.getCars = getCars;
// READ ONE
const getCar = async (req, res) => {
    const car = await cars_model_1.default.findById(req.params.id);
    res.json(car);
};
exports.getCar = getCar;
// UPDATE
const updateCar = async (req, res) => {
    const car = await cars_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(car);
};
exports.updateCar = updateCar;
// DELETE
const deleteCar = async (req, res) => {
    await cars_model_1.default.findByIdAndDelete(req.params.id);
    res.json({ message: "Car deleted" });
};
exports.deleteCar = deleteCar;
