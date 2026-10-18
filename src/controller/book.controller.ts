import { Request, Response } from "express";
import Book from "../models/book.model";

// CREATE
export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

// READ ALL
export const getBooks = async (_req: Request, res: Response) => {
  const books = await Book.find();
  res.json(books);
};

// READ ONE
export const getBook = async (req: Request, res: Response) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
};

// UPDATE
export const updateBook = async (req: Request, res: Response) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
};

// DELETE
export const deleteBook = async (req: Request, res: Response) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
};
