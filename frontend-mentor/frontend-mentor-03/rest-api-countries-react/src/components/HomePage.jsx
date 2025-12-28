import React from "react";
import SearchComponent from './SearchComponent';
import RenderCountries from './RenderCountries';
const HomePage = ({ countryName, setCountryName, countryRegion, setCountryRegion, countries}) => {
  return (
    <>
      <section className="main__search">
        <SearchComponent countryName={countryName} setCountryName={setCountryName} countryRegion={countryRegion} setCountryRegion={setCountryRegion} />
      </section>
      <section className="main__countries">
        <RenderCountries countryName={countryName} countryRegion={countryRegion} countries={countries}/>
      </section>
    </>
  )
}

export default HomePage;
