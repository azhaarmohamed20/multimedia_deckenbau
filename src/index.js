import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Galerie from './Pages/Galerie';

ReactDOM.render(
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/galerie' element={<Galerie />}></Route>
    </Routes>
    <Footer/>
  </Router>,

  document.getElementById('root')
);

