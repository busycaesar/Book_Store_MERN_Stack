/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BackButtonContext, LoadingContext } from "../App";

export default function DeleteBooks() {
  const { loading, setLoading, spinner } = useContext(LoadingContext),
    backButton = useContext(BackButtonContext);
  return (
    <div>
      {backButton}
      {spinner}
      <h1>Delete Book</h1>
    </div>
  );
}
