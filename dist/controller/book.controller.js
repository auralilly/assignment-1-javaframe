"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.getBook = exports.getBooks = exports.createBook = void 0;
const book_model_1 = __importDefault(require("../models/book.model"));
// CREATE
const createBook = async (req, res) => {
    try {
        const book = await book_model_1.default.create(req.body);
        res.status(201).json(book);
    }
    catch (err) {
        res.status(400).json({ error: err });
    }
};
exports.createBook = createBook;
// READ ALL
const getBooks = async (_req, res) => {
    const books = await book_model_1.default.find();
    res.json(books);
};
exports.getBooks = getBooks;
// READ ONE
const getBook = async (req, res) => {
    const book = await book_model_1.default.findById(req.params.id);
    res.json(book);
};
exports.getBook = getBook;
// UPDATE
const updateBook = async (req, res) => {
    const book = await book_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(book);
};
exports.updateBook = updateBook;
// DELETE
const deleteBook = async (req, res) => {
    await book_model_1.default.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted" });
};
exports.deleteBook = deleteBook;
