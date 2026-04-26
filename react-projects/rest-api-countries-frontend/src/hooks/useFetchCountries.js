import { useEffect } from "react";
import { useRestApiCountries } from "./useRestApiCountries";

export const useFetchCountries = () => {
  const { state,dispatch } = useRestApiCountries();

  let name = state.filters.name;
  let region = state.filters.region;

  useEffect(() => {
    const fetchCountries = async () => {
        try {
            dispatch({
                type:"SET_LOADING"
            })
            const url = name || region ? `127.0.0.1:8080/api/countries?name=${name}&region=${region}`:
                        "/api/countries";
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