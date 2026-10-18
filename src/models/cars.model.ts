import { Schema, model } from "mongoose";

const CarSchema = new Schema({
  make: { type: String, required: true },      // e.g., Toyota
  model: { type: String, required: true },     // e.g., Corolla
  year: { type: Number, required: true }       // e.g., 2020
});

export default model("Car", CarSchema);
