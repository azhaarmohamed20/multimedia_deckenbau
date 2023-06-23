import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';

ReactDOM.render(
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
  </Router>,

  document.getElementById('root')
);

