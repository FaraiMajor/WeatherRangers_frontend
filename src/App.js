import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Search/Form';
// import { HashRouter as HashRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/login/login';
import Registration from './components/Registration/Registration';




function App() {

  return (

    <body className="App">
      <NavBar />
      <div>      
        <Router>
          <Routes>    
          <Route path="/" element={<Form />} />       
            <Route path="/login" element={<Login />} />
            <Route path="/Registration" element={<Registration />} />
           </Routes>
        </Router>


      </div>
    </body>
  );
}

export default App;
