import React, {useState} from 'react';
import "./App.css";
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Products from './components/Products';

function App(){


  return (
    <>
    <Checkout />
    <Products />
    <Cart />
    </>
      )
  }
export default App;