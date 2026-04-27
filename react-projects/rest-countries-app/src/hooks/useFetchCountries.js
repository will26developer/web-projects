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
        const url = name || region ? `http://localhost:8080/api/countries?name=${name}&region=${region}` :
          "http://localhost:8080/api/countries";
        const countries = await axios.get(url);
        dispatch({
          type: "SET_COUNTRIES",
          payload: countries.data.filteredCountries
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
