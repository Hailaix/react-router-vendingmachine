import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import VendingMachine from './VendingMachine';
import CandyBar from './CandyBar';
import Chips from './Chips';
import Pretzels from './Pretzels';

import './App.css';
import NavBar from './Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='/pretzels' element={<Pretzels />} />
          <Route path='/chips' element={<Chips />} />
          <Route path='/candybar' element={<CandyBar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
