import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import '../assets/css/styles.css'
import { SearchComponent } from '../components/SearchComponent';
import { CountryList }  from '../components/CountryList';
import  CountryDetail  from '../components/CountryDetail';

export const MyRoutes = () => {
    const [ darkMode, setDarkMode ] = useState(false); 
    const [ country, setCountry ] = useState("");
    const [ region, setRegion ] = useState("hidden");

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark")
        }
    },[darkMode])

    return (
        <BrowserRouter>
            <header className='header'>
                <h1 className='header__title'>Where in the world?</h1>
                <button className='header__btn' onClick={() => setDarkMode(!darkMode)}><FontAwesomeIcon icon={ darkMode ? faSun : faMoon}/> { darkMode ? "Light Mode" : "Dark Mode"}</button>
            </header>
            <main className='main'>
                <Routes>
                    <Route path='/' element={
                        <>
                         <SearchComponent region={region} setRegion={setRegion} country={country} setCountry={setCountry}/>
                         <CountryList country={country} region={region} />
                        </>
                    }/>
                    <Route path='/countries' element={
                        <>
                         <SearchComponent region={region} setRegion={setRegion} country={country} setCountry={setCountry}/>
                         <CountryList country={country} region={region} />
                        </>
                    }/>
                    <Route path='/countries/country/:name' element={<CountryDetail/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    )
}
