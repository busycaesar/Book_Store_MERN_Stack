/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/index";
import createBooks from "./Pages/createBooks";
import showBooks from "./Pages/showBooks";
import editBooks from "./Pages/editBooks";
import deleteBooks from "./Pages/deleteBooks";

const App = () => {
  return (
    <Home />
    // <Routes>
    //   <Route path="/" element={home} />
    //   <Route path="books/create" element={createBooks} />
    //   <Route path="/books/details/:id" element={showBooks} />
    //   <Route path="/books/edit/:id" element={editBooks} />
    //   <Route path="/books/delete/:id" element={deleteBooks} />
    // </Routes>
  );
};

export default App;
