import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import Menu from './Menu';
import './mycom.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './Contact';
import Home from './Home';

export default function App() {
    
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/menu" element={<Menu/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};