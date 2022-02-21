import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Signln from "./Components/Signln";
import ContactUs from "./Components/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      
      <Router>
   <Header/>
    <Routes >
    <Route path="/" element={<Signln/>} />
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/ContactUs" element={<ContactUs />} />
    <Route path="/Services" element={<Services />} />
    </Routes>
    <Footer/>
  </Router>
  {/* <SignIn/> */}
   
    
    </div>
  );
}

export default App;
