import React from "react";
import { useRestApiCountries } from "../hooks/useRestApiCountries";
import { useFetchCountries } from "../hooks/useFetchCountries";
import { useNavigate } from "react-router-dom";
export const CountriesComponent = () => {
  const navigate = useNavigate();
  const { state } = useRestApiCountries();
  useFetchCountries();
  const filteredCountries = state.countries;

  const handlerClickCardBtn = (e) => {
    const element = e.target.closest("[data-choice]");
    if (!element) return;
    const country = element.dataset.choice;
    navigate(`/country/${country}`);
  };
  return (
    <section
      className="main__countries"
      onClick={(e) => handlerClickCardBtn(e)}
    >
      {!state.ui.loading ? (
        filteredCountries.length > 0 ? (
          filteredCountries.map(
            ({ name, flags, population, region, capital }) => (
              <button key={name} data-choice={name} className="country__card">
                <div className="card__flag">
                  <img src={flags.png} alt={flags.alt} className="flag__bg" />
                </div>
                <article className="card__description">
                  <h3>{name}</h3>
                  <p>
                    <strong>Population: </strong>
                    {population}
                  </p>
                  <p>
                    <strong>Region: </strong>
                    {region}
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    {capital}
                  </p>
                </article>
              </button>
            ),
          )
        ) : (
          <p>No countries found</p>
        )
      ) : (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
    </section>
  );
};
