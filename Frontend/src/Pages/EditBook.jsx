/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingContext, BackButtonContext, BACKEND_URL } from "../App";
import BookInformationForm from "../ProjectComponents/bookInformationForm";

export default function EditBooks() {
  const [book, setBook] = useState({}),
    navigate = useNavigate(),
    { id } = useParams(),
    { loading, setLoading, spinner } = useContext(LoadingContext),
    backButton = useContext(BackButtonContext),
    handleSaveBook = (bookData) => {
      setLoading(true);
      axios
        .put(`${BACKEND_URL}/books/${id}`, bookData)
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
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BACKEND_URL}/books/${id}`)
      .then((res) => {
        setLoading(false);
        setBook(res.data);
      })
      .catch((err) => {
        setLoading(false);
        alert("ERROR");
        console.log(err);
      });
  }, []);
  return (
    <div className="p-4">
      {backButton}
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? (
        spinner
      ) : (
        <BookInformationForm
          handleSaveBook={handleSaveBook}
          buttonName="Update"
          bookData={book}
        />
      )}
    </div>
  );
}
