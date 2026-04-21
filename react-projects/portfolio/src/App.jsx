import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Featured } from "./pages/Featured";
import { Archive } from "./pages/Archive";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="line-background"></div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
