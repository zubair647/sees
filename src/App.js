import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import LogPage from './pages/LogPage';
import Register from './pages/Register';
import Bank from './pages/Bank';
import HomePage from './pages/HomePage';
import Forgot from './pages/Forgot';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogPage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Bank" element={<Bank />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Forgot" element={<Forgot />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
