import React from 'react'
import '../styles/App.css';
import '../styles/Result.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import MainPage from './MainPage';
import { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BusListPage from './BusListPage';
import Footer from './Footer';
import Cards from './Cards';
import { useState } from 'react';
export const dataContext = createContext()

const App = () => {
  const [searched, setsearched] = useState(false);

  return (

    <div id="main">
      <dataContext.Provider value={{ searched, setsearched }}>

        <BrowserRouter>
          <Navbar />
          <MainPage />
          <Routes>

            <Route path='/BusListPage' element={<BusListPage />} />

          </Routes>
          <Cards />
          <Footer />
        </BrowserRouter>

      </dataContext.Provider>
    </div>
  )
}


export default App;
