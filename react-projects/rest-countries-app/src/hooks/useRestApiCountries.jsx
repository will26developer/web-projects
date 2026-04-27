import { useContext } from "react";
import { RestApiCountriesContext } from "../context/RestApiCountriesContext.jsx";

export const useRestApiCountries = () => useContext(RestApiCountriesContext);
