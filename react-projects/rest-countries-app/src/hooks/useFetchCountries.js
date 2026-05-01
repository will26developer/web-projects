import axios from "axios"
import { useRestApiCountries } from "./useRestApiCountries"
import { useEffect } from "react";

export const useFetchCountries = () => {
  const { state, dispatch } = useRestApiCountries();
  let { name, region } = state.filters;
  useEffect(() => {
    const getCountries = async () => {
      try {
        dispatch({
          type: "SET_LOADING"
        })
        const BASE_URL = "https://rest-api-countries-v1.onrender.com";
        const url = name || region ? `${BASE_URL}/api/countries?name=${name}&region=${region}` :
                    `${BASE_URL}/api/countries`;
        const countries = await axios.get(url);
        dispatch({
          type: "SET_COUNTRIES",
          payload: countries.data.countriesFiltered
        })
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        dispatch({
          type: "SET_LOADING"
        })
      }

    }
    getCountries()
  }, [name, region])
}
