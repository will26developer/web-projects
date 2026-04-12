import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRestApiCountries } from "../hooks/useRestApiCountries";
import { icons } from "../icons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CountryComponent = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { state } = useRestApiCountries();

  const countries = state.data.countries || [];

  const decodedName = decodeURIComponent(name || "");

  const country = countries.find(
    c => c.name.toLowerCase() === decodedName.toLowerCase()
  );

  return (
    <section className="main__country">
      {/* Botón siempre visible */}
      <div className="country__btn">
        <button
          className="btn__back"
          onClick={() => navigate(-1)}
        >
          <FontAwesomeIcon icon={icons.arrowLeft} /> Back
        </button>
      </div>

      <div className="country__detail">
        {country ? (
          <>
            <div className="detail__flag">
              <img
                src={country.flags?.png}
                alt={country.flags?.alt || country.name}
                className="flag__detail"
              />
            </div>

            <div className="detail__container">
              <h3 className="container__title">{country.name}</h3>

              <div className="container__item">
                <p><strong>Native Name: </strong>{country.nativeName}</p>
                <p><strong>Population: </strong>{country.population}</p>
                <p><strong>Region: </strong>{country.region}</p>
                <p><strong>Sub Region: </strong>{country.subregion}</p>
                <p><strong>Capital: </strong>{country.capital}</p>
              </div>

              <div className="container__item">
                <p><strong>Top Level Domain: </strong>{country.tld}</p>
                <p><strong>Currencies: </strong>{country.currencies}</p>
                <p><strong>Languages: </strong>{country.languages}</p>
              </div>
            </div>
          </>
        ) : (
          <p>No country found</p>
        )}
      </div>
    </section>
  );
};