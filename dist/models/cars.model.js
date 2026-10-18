"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CarSchema = new mongoose_1.Schema({
    make: { type: String, required: true }, // e.g., Toyota
    model: { type: String, required: true }, // e.g., Corolla
    year: { type: Number, required: true } // e.g., 2020
});
exports.default = (0, mongoose_1.model)("Car", CarSchema);
