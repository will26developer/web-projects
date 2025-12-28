import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./components/HomePage";
import CountryPage from "./components/CountryPage";
import ErrorPage from "./components/ErrorPage";
const App = () => {
  const [countryName, setCountryName] = useState("");
  const [countryRegion, setCountryRegion] = useState("");
  const url = "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,tld,languages,currencies";
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    }
    getCountries(url);
  }, []);
  return (
    <>
      <HeaderComponent />
      <main className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage countryName={countryName} setCountryName={setCountryName} countryRegion={countryRegion} setCountryRegion={setCountryRegion} countries={countries}/>} />
            <Route path="/countries" element={<HomePage countryName={countryName} setCountryName={setCountryName} countryRegion={countryRegion} setCountryRegion={setCountryRegion} countries={countries} />} />
            <Route path="country/:countryName" element={<CountryPage countries={countries}/>} />
            <Route path="*" element={<ErrorPage message="Page not found"/>}/>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}


export default App;
