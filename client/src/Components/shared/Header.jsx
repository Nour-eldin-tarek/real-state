import React from "react";
import "./general.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainHeader from "./MainHeader";
import Courses from "../Pages/Courses/Courses";
import CourseDetails from "../Pages/Courses/CourseDetails";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";

function Header() {
  return (
    <Router>
      <MainHeader />
      <div className="mainContent">
        <div className="container">
          <Routes>
            <Route path="/" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Header;
