/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BackButtonContext, LoadingContext, BACKEND_URL } from "../App";
import { useSnackbar } from "notistack";

export default function DeleteBooks() {
  const { loading, setLoading, spinner } = useContext(LoadingContext),
    backButton = useContext(BackButtonContext),
    navigate = useNavigate(),
    { id } = useParams(),
    [bookTitle, setBookTitle] = useState(""),
    enqueueSnackbar = useSnackbar(),
    handleDeleteBook = () => {
      setLoading(true);
      axios
        .delete(`${BACKEND_URL}/books/${id}`)
        .then(() => {
          setLoading(false);
          enqueueSnackbar("Book deleted successfully!", { varient: "success" });
          navigate("/");
        })
        .catch((err) => {
          setLoading(false);
          enqueueSnackbar("Error! Check console!", { varient: "error" });
          console.log(err);
        });
    },
    handleCancelDeleteBook = () => {
      setLoading(false);
      navigate("/");
    };
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BACKEND_URL}/books/${id}`)
      .then((res) => {
        setLoading(false);
        setBookTitle(res.data.title);
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
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? (
        spinner
      ) : (
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl mb-8">
            Are you sure you want to delete &quot;{bookTitle}&quot;?
          </h3>
          <button
            className="p-2 bg-red-600 text-white m-1 w-full"
            onClick={handleDeleteBook}
          >
            Yes, Delete it!
          </button>
          <button
            className="p-2 bg-red-600 text-white m-1 w-full"
            onClick={handleCancelDeleteBook}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
