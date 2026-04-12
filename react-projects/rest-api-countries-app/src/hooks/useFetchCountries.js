import { useEffect } from "react";
import { useRestApiCountries } from "./useRestApiCountries";
import { countryAdapter } from "../adapters/countryAdapter"
export const useFetchCountries = () => {
  const { dispatch } = useRestApiCountries();

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,capital,tld,currencies,languages";
      try {
        dispatch({
          type: "SET_LOADING",
          payload: true,
        });
        const response = await fetch(url);
        const data = await response.json();
        const countries =  data.map(countryAdapter);
        dispatch({
            type: "SET_COUNTRIES",
            payload: countries
        })
      } catch (error) {
        console.log("Error:", error);
      } finally {
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
      }
    };
    fetchData()
  }, []);
};
