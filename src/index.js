import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Galerie from './Pages/Galerie';
import About from './Pages/About';
import Impressum from './Pages/Impressum';

ReactDOM.render(
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/galerie' element={<Galerie />}></Route>
      <Route path='/ueberuns' element={<About />}></Route>
      <Route path='/impressum' element={<Impressum />}></Route>
    </Routes>
    <Footer/>
  </Router>,

  document.getElementById('root')
);

