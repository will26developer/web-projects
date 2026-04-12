import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { HeaderComponent } from '../components/HeaderComponent';
import { SearchComponent } from '../components/SearchComponent';
import { useFetchCountries } from '../hooks/useFetchCountries';
import { CountriesComponent } from '../components/CountriesComponent';
import { CountryComponent } from '../components/CountryComponent';
import { ErrorComponent } from '../components/ErrorComponent';
export const AppRouter = () => {
  useFetchCountries();
  return (
    <BrowserRouter>
      <HeaderComponent/>
      <main className="main">
        <Routes>
          <Route path="/" element={
            <>
             <SearchComponent/>
             <CountriesComponent/>
            </>
          }/>
          <Route path="/countries" element={
          <>
           <SearchComponent/>
           <CountriesComponent/>
          </>}/>
          <Route path="/country/:name" element={<CountryComponent/>}/>
          <Route path="/*" element={<ErrorComponent/>}/>
        </Routes>
      </main>
    </BrowserRouter>    
  )
}
