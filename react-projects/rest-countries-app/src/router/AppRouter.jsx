import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderComponent } from "../components/HeaderComponent";
import { SearchComponent } from "../components/SearchComponent";
import { CountriesComponent } from "../components/CountriesComponent";
import { CountryComponent } from "../components/CountryComponent";
import { ErrorComponent } from "../components/ErrorComponent";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <main className="main">
        <Routes>
          <Route path="/" element={
            <>
              <SearchComponent />
              <CountriesComponent />
            </>
          } />
          <Route path="/countries" element={
            <>
              <SearchComponent />
              <CountriesComponent />
            </>
          } />
          <Route path="/country/:country" element={<CountryComponent />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

