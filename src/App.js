import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/shared/Header';
import Footer from './Components/shared/Footer';
import Home from './Components/pages/Home/Home';
import AboutUs from './Components/pages/AboutUs/AboutUs';
import ContactUs from './Components/pages/ContactUs/ContactUs';
import Property from './Components/pages/Property/Property';
import Services from './Components/pages/Services/Services'
import Blog from './Components/pages/Blog/Blog';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Header />

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/contactus" element={<ContactUs />}/>
      </Routes>
    </Router>

    <Footer />
    </>
  );
}

export default App;
