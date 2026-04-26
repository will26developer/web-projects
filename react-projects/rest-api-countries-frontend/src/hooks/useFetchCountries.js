import { useEffect } from "react";
import { useRestApiCountries } from "./useRestApiCountries";

export const useFetchCountries = () => {
  const { state,dispatch } = useRestApiCountries();

  let name = state.filters.name;
  let region = state.filters.region;
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCountries = async () => {
        try {
            dispatch({
                type:"SET_LOADING"
            })
            const url = name || region ? `${BASE_URL}?name=${name}&region=${region}`:
                        BASE_URL;
            const response = await fetch(url);
            const data = await response.json();
            dispatch({
                type: "SET_COUNTRIES",
                payload: data.filteredCountries
            })
        } catch (error) {
            console.log("Error: ",error)
        } finally {
            dispatch({
                type:"SET_LOADING"
            })
        }
    }
    fetchCountries()
  }, [name,region]);
};