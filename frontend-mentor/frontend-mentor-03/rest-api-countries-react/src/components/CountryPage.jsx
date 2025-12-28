
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import {useNavigate, useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import CountryDetail from "./CountryDetail";

const CountryPage = ({countries}) => {
  const navigate = useNavigate()
  const { countryName } = useParams();
  const  validCountry = countries.filter(country => country.name.common.toLowerCase() === countryName.trim().toLowerCase());
  return (
    <>
      {validCountry.length > 0 ? (
       <section className="main__country">
          <div className="country__btn">
             <button className="btn__back" onClick={() => navigate("/")}><FontAwesomeIcon icon={faArrowLeft}/><span className="back__span">Back</span></button>
          </div>
          <CountryDetail country={validCountry}/>
       </section>
    ) : (<ErrorPage message="Country not found, the country you are looking for does not exist."/>)}
    </>
  )
}

export default CountryPage;
