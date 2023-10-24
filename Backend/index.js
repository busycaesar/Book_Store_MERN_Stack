// Importing the dependencies
import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./Models/bookModel.js";

// Creating the nodejs app.
const app = express();

// Middleware
app.use(express.json());

// Setting up the routes
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to the MERN Stack Tutorial!");
});

app.post("/books",async(req,res)=>{
    try{
        const title = req.body.title, author=req.body.author, publishYear=req.body.publishYear; 
        if(req.body.title||req.body.author||req.body.publishYear)
        {
            const newBook={
                title: title,
                author:author,
                publishYear:publishYear
            }, book = await Book.create(newBook);
            return res.status(201).send(book);
        }
        else res.status(400).send({message:"Send all the required fields, i.e. Title, Author and Publish Year."});
} catch (error) {
throwError(error.message,res);
}
});

app.get("/books",async(req,res)=>{
try {
    const books = await Book.find({});
    return res.status(200).json({
        count: books.length,
        data: books
    });
} catch (error) {
   throwError(error.message,res);
}
})

// Util Functions
const throwError = (message, res)=>{
    console.log(message);
    res.status(500).send({message:message});
}

// Connecting with the database.
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is connected to the MongoDB!");
    // Making the app listen to the port.
app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}!`);
  });
  })
  .catch((error) => console.log(error));
