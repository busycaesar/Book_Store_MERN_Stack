import express from "express";
import { Book } from "../Models/bookModel.js";

const router = express.Router();

// For adding a new book to the database
router.post("/", async (req, res) => {
  try {
    const body = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    if (bookPresent(body)) {
      const newBook = {
          title: body.title,
          author: body.author,
          publishYear: body.publishYear,
        },
        book = await Book.create(newBook);
      return res.status(201).send(book);
    }
  } catch (error) {
    throwError(error.message, res);
  }
});

// For getting all the books from the database.
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    throwError(error.message, res);
  }
});

// For getting a specific book from the database.
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params,
      book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    throwError(error.message, res);
  }
});

// For updating a specific book into the database.
router.put("/:id", async (req, res) => {
  try {
    const body = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    if (bookPresent(body, res)) {
      const { id } = req.params;
      try {
        await Book.findByIdAndUpdate(id, body);
        return res.status(200).json({ message: "Book updated successfully!" });
      } catch (error) {
        return res.status(404).json({ message: "Book not found!" });
      }
    }
  } catch (error) {
    throwError(error.message, res);
  }
});

// For deleting a book from the database.
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    try {
      await Book.findByIdAndDelete(id);
      return res.status(200).json({ message: "Book deleted successfully!" });
    } catch (error) {
      return res.status(404).json({ message: "Book not found!" });
    }
  } catch (error) {
    throwError(error.message, res);
  }
});

// Util Functions
const throwError = (message, res) => {
  console.log(message);
  res.status(500).send({ message: message });
};

const bookPresent = (body, res) => {
  if (!body.title || !body.author || !body.publishYear)
    return res.status(400).send({
      message:
        "Send all the required fields, i.e. Title, Author and Publish Year.",
    });
  else return true;
};

export default router;