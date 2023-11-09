/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoadingContext, BackButtonContext, BACKEND_URL } from "../App";
import BookInformationForm from "../ProjectComponents/bookInformationForm";
import { useSnackbar } from "notistack";

export default function CreateBooks() {
  const { loading, setLoading, spinner } = useContext(LoadingContext),
    backButton = useContext(BackButtonContext),
    navigate = useNavigate(),
    { enqueueSnackbar } = useSnackbar(),
    handleSaveBook = (bookdata) => {
      setLoading(true);
      axios
        .post(`${BACKEND_URL}/books`, bookdata)
        .then(() => {
          setLoading(false);
          enqueueSnackbar("Book Created Successfully!", { variant: "success" });
          navigate("/");
        })
        .catch((err) => {
          setLoading(false);
          enqueueSnackbar("Error! Check console!", { varient: "error" });
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
