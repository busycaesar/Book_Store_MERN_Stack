/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BackButton from "../Components/BackButton";
import Spinner from "../Components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BookInformationForm from "../ProjectComponents/bookInformationForm";

export default function EditBooks() {
  const [loading, setLoading] = useState(""),
    [book, setBook] = useState({}),
    navigate = useNavigate(),
    { id } = useParams(),
    handleSaveBook = (bookData) => {
      setLoading(true);
      axios
        .put(`http://localhost:5555/books/${id}`, bookData)
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
  axios
    .get(`http://localhost:5555/books/${id}`)
    .then((res) => setBook(res.data))
    .catch((err) => {
      setLoading(false);
      alert("ERROR");
      console.log(err);
    });
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : null}
      <BookInformationForm
        loading={loading}
        handleSaveBook={handleSaveBook}
        buttonName="Update"
        bookData={book}
      />
    </div>
  );
}
