import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import VendingMachine from './VendingMachine';
import CandyBar from './CandyBar';
import Chips from './Chips';
import Pretzels from './Pretzels';

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route exact path='/chips'>
          <Chips />
        </Route>
        <Route exact path='/candybar'>
          <CandyBar />
        </Route>
        <Route exact path='/pretzels'>
          <Pretzels />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
