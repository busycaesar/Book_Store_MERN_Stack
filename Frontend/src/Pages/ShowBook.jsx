/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { LoadingContext, BackButtonContext, BACKEND_URL } from "../App";

export default function ShowBook() {
  const [book, setBook] = useState({}),
    { id } = useParams(),
    { loading, setLoading, spinner } = useContext(LoadingContext),
    backButton = useContext(BackButtonContext);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BACKEND_URL}/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="p-4">
      {backButton}
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        spinner
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>{book.author?.join(",").replace(/,/g, ", ")}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Updated</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}
