/* eslint-disable no-unused-vars */
import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/index";
import CreateBooks from "./Pages/CreateBook";
import ShowBooks from "./Pages/ShowBook";
import EditBooks from "./Pages/EditBook";
import DeleteBooks from "./Pages/DeleteBook";
import BackButton from "./Components/BackButton";
import Spinner from "./Components/Spinner";

export const LoadingContext = createContext();
export const BackButtonContext = createContext();
export const BACKEND_URL = "http://localhost:5555";

const App = () => {
  const [loading, setLoading] = useState(false);
  const LoadingUtils = {
    loading,
    setLoading,
    spinner: <Spinner />,
  };

  return (
    <LoadingContext.Provider value={LoadingUtils}>
      <BackButtonContext.Provider value={<BackButton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/create" element={<CreateBooks />} />
          <Route path="/books/details/:id" element={<ShowBooks />} />
          <Route path="/books/edit/:id" element={<EditBooks />} />
          <Route path="/books/delete/:id" element={<DeleteBooks />} />
        </Routes>
      </BackButtonContext.Provider>
    </LoadingContext.Provider>
  );
};

export default App;
