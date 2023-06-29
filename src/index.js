import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import About from './Pages/About';
import Impressum from './Pages/Impressum';
import Datenschutz from './Pages/Datenschutz';
import Kontakt from './Pages/Kontakt';
import Angebot from './Pages/Angebot';

ReactDOM.render(
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/angebot' element={<Angebot />}></Route>
      <Route path='/kontakt' element={<Kontakt />}></Route>
      <Route path='/ueberuns' element={<About />}></Route>
      <Route path='/impressum' element={<Impressum />}></Route>
      <Route path='/datenschutz' element={<Datenschutz />}></Route>
    </Routes>
    <Footer/>
  </Router>,

  document.getElementById('root')
);

