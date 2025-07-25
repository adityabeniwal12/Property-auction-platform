import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Contact from "./pages/Contact.jsx"; 
import Properties from './pages/Properties.jsx';
import Login from './pages/Login.jsx';
import Cities from './pages/Cities.jsx';
import Services from './pages/Services.jsx';
import Footer from './components/Footer.jsx';

import './App.css';
import './index.css';
function Home() {
  return (
    <>
      <h1 className="welcome">WELCOME TO ADI PROPERTIES</h1>
      <p className="welcome-para">Smart Property Auction Website Designed To Make Your Work Easier</p>
    </>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Cities" element={<Cities/>} />
        <Route path="/Services" element={<Services/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;