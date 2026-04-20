import { useContext } from "react";
import { RestApiCountriesContext } from "../context/RestApiCountriesContext";

export const useRestApiCountries = () => useContext(RestApiCountriesContext);