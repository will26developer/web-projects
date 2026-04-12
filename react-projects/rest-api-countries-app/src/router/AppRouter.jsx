import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { HeaderComponent } from '../components/HeaderComponent';
import { SearchComponent } from '../components/SearchComponent';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <HeaderComponent/>
      <main className="main">
        <SearchComponent/>
      </main>
    </BrowserRouter>    
  )
}
