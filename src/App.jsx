import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Header from "./component/Header";
import Footer from "./component/Footer";
function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Hero/>}></Route>

  </Routes>
  <Footer/>
  </BrowserRouter>)
}

export default App;
