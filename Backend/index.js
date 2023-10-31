// Importing the dependencies
import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoutes from "./Routes/bookRoutes.js";
import cors from "cors";

// Creating the nodejs app.
const app = express();

// Middleware

// Middleware for cors.
app.use(cors());

app.use(express.json());

// Middleware for routes.
app.use("/books", booksRoutes);

// Setting up the routes

// Initial Page
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to the MERN Stack Tutorial!");
});

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
