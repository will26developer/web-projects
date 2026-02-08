import React, { useEffect, useState } from "react";
import HeaderBarTheme from "./components/HeaderBarTheme";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SearchBar from "./components/SearchBar";
const App = () => {
    const [countryName,setCountryName] = useState("");
    const [countryRegion,setCountryRegion] = useState("");
    const countryState = {
        countryName,
        setCountryName,
        countryRegion,
        setCountryRegion
    }
    useEffect(() => {
        
    })
    return(
        <BrowserRouter>
          <HeaderBarTheme/>
          <main className="main">
            <SearchBar {...countryState}/>
          </main>
        </BrowserRouter>
    )
}

export default App; 