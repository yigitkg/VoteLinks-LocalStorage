import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Submitlink from './components/Submitlink/Submitlink';
import Votelist from './components/Votelist/Votelist';
import ListPage from './components/ListPage/ListPage';
import AddPage from './components/AddPage/AddPage';
import ErrorPage from './components/ErrorPage/ErrorPage';


function App() {

  return (
    <Router>
       <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<ListPage />} />
        <Route path='/addlink' element={<AddPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
