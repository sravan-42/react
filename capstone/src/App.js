import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './module/Home';
import Bookings from './module/Bookings';
import WIP from './module/WIP';
import ConfirmedBooking from './module/ConfirmedBooking';
import Footer from './components/Footer';
import {
  Route,
  Routes
} from "react-router-dom"

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" exact element={<Home/>}></Route>
      <Route path="/bookings" element={<Bookings />}></Route>
      <Route path="/wip" element={<WIP />}></Route>
      <Route path="/confirm" element={<ConfirmedBooking />}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
