/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BackButton from "../Components/BackButton";
import Spinner from "../Components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BookInformationForm from "../ProjectComponents/bookInformationForm";

export default function CreateBooks() {
  const [loading, setLoading] = useState(""),
    navigate = useNavigate(),
    handleSaveBook = (bookdata) => {
      setLoading(true);
      console.log(bookdata);
      axios
        .post("http://localhost:5555/books", bookdata)
        .then(() => {
          setLoading(false);
          navigate("/");
        })
        .catch((err) => {
          setLoading(false);
          alert("ERROR");
          console.log(err);
        });
    };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : null}
      <BookInformationForm handleSaveBook={handleSaveBook} buttonName="Save" />
    </div>
  );
}
