import { useNavigate } from "react-router-dom";
import { useFetchCountries } from "../hooks/useFetchCountries.js"
import { useRestApiCountries } from "../hooks/useRestApiCountries"

export const CountriesComponent = () => {
  const { state, dispatch } = useRestApiCountries();
  const navigate = useNavigate();
  useFetchCountries();

  let countries = state.countries;
  let loading = state.ui.loading;

  const handleClickCard = e => {
    const element = e.target.closest("[data-choice]");
    if (!element) return;
    const country = element.dataset.choice;

    dispatch({
      type: "SET_FILTER_NAME",
      payload: country
    })

    navigate(`/country/${country}`);
  }
  return (
    <section className="main__countries" onClick={handleClickCard}>
      {!loading ? (
        countries.length > 0 ? (
          countries.map(({ name, flags, population, region, capital }) => {
            return <button type="button" className="country__card" key={name} data-choice={name}>
              <div className="card__flag">
                <img src={flags.png} alt={flags.alt} className="flag__bg" />
              </div>
              <article className="card__description">
                <h3>{name}</h3>
                <p><strong>Population: </strong>{population}</p>
                <p><strong>Region: </strong>{region}</p>
                <p><strong>Capital: </strong>{capital}</p>
              </article>
            </button>
          })
        ) : (
          <div>Countries or country not found</div>
        )
      ) : (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
    </section>
  )
}

