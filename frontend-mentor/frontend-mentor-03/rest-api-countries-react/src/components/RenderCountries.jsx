import React  from "react";
import CountryCard from "./CountryCard";
const RenderCountries = ({ countryName, countryRegion, countries }) => {
  let filteredCountries = countries.filter(country => {
    const matchesName = countryName
      ? country.name.common.toLowerCase().includes(countryName.toLowerCase())
      : true;

    const matchesRegion = countryRegion && countryRegion !== "hidden"
      ? country.region === countryRegion
      : true;

    return matchesName && matchesRegion;
  });
  return (
    <>
      {filteredCountries.length > 0 ? (
        filteredCountries.map((country) => {
          return <CountryCard key={country.name.common} country={country} countries={countries} />
        })
      ) : (
        <p>No countries found</p>
      )}
    </>
  )
}


export default RenderCountries;
