import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './home';
import Quotes from './quotes';
import Calculator from './calculator';
import '../App.css';

const Navbar = () => (
  <>
    <h1 className="title">
      Math Magicians
    </h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/quotes">Quotes</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  </>
);

export default Navbar;
