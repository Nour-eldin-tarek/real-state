import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import "./general.css";

function MainHeader() {
  const location = useLocation();
  const isHome = location.pathname === "/"; // Determine if current route is home

  return isHome ? (
    <header className="mainHeader">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link className="navLink" to="/">
               Company Logo
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto mainNav">
              <Link className="navLink" to="/">
                Home
              </Link>
              <Link className="navLink" to="/services">
                Services
              </Link>
              <Link className="navLink" to="/about">
                About US
              </Link>
              <Link className="navLink" to="/contact">
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  ) : (
    <header className="mainHeader darkBk">
      <Navbar collapseOnSelect expand="lg"  >
        <Container>
          <Navbar.Brand>
            <Link className="navLink" to="/">
               "Internal pages Logo" 
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto mainNav">
              <Link className="navLink" to="/">
                Home
              </Link>
              <Link className="navLink" to="/services">
                Services
              </Link>
              <Link className="navLink" to="/about">
                About US
              </Link>
              <Link className="navLink" to="/contact">
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MainHeader;
