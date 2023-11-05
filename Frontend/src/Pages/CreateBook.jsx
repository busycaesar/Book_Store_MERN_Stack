/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoadingContext, BackButtonContext } from "../App";
import BookInformationForm from "../ProjectComponents/bookInformationForm";

export default function CreateBooks() {
  const { loading, setLoading, spinner } = useContext(LoadingContext),
    backButton = useContext(BackButtonContext),
    navigate = useNavigate(),
    handleSaveBook = (bookdata) => {
      setLoading(true);
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
      {backButton}
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? spinner : null}
      <BookInformationForm handleSaveBook={handleSaveBook} buttonName="Save" />
    </div>
  );
}
