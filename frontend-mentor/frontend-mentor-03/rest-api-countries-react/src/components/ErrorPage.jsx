import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({message}) => {
  const navigate = useNavigate()
  return(
    <section className="main__error">
      <button className="error__back" onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft}/><span className="back__span">Go Back Home</span></button>
      <h1 className="error__title">404</h1>
      <p className="error__p">{message}</p>
    </section>
  )
}

export default ErrorPage;
