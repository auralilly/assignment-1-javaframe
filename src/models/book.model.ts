import { Schema, model } from "mongoose";

const BookSchema = new Schema({
  title: String,
  author: String,
  year: Number
});

export default model("Book", BookSchema);
