import React from 'react'
import '../styles/App.css';
import '../styles/Result.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import MainPage from './MainPage';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import BusListPage from './BusListPage';
import Footer from './Footer';
import Cards from './Cards';
import SeatSelection from './SeatSelection';



const App = () => {


  return (
    <div id="main">
      <BrowserRouter>
        <Navbar />
        <MainPage/>
        <Routes>

         <Route path='/BusListPage' element={<BusListPage />} />
         <Route path='/SeatSelection' element={<SeatSelection />} />
         

        </Routes>
        <Cards/>
        <Footer />
      </BrowserRouter>


    </div>
  )
}


export default App;
