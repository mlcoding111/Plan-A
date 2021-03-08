import React, { useState, useEffect } from "react";

import { Nav, NavDropdown, Navbar, Container, Button } from "react-bootstrap";
import { NavLink, useLocation, Link } from "react-router-dom";
import Logo from "../../img/Logo/logo.svg";
import { Animated } from "react-animated-css";

export default function Navigation() {
  // Force le "scroll up" a chaque fois que l'histoiry (useLocation) change
  const [visible, setVisible] = useState(false)
  let loc = useLocation();
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
    window.scrollTo(0, 0);
    console.log("lco changed");
    document.querySelector("#big-nav").classList.remove("sticky");
  }, [loc]);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Return = clean up when component is ran
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.pageYOffset]);

  useEffect(() => {
    document.querySelector(".navbar-bg").classList.remove("sticky");
  }, []);

  useEffect(() => {
    console.log("yo");
  }, [window.pageYOffset]);

  // navbar-collapse collapse show

  const handleScroll = () => {
    let scrollValue = window.pageYOffset;
    console.log("scroll");
    if (scrollValue > 150) {
      document.querySelector(".nav-wrap").classList.remove("fadeOut");
      document.querySelector(".nav-wrap").classList.remove("d-none");
       document.querySelector(".nav-wrap").classList.add("fadeInDown");
       document.querySelector(".nav-wrap").classList.add("d-block");
      // document.querySelector("#big-nav").classList.add("sticky");
      setVisible(true)
    } else {
      // document.querySelector("#big-nav").classList.remove("sticky");
      document.querySelector(".nav-wrap").classList.add("fadeOut");
      document.querySelector(".nav-wrap").classList.add("d-none");
      document.querySelector(".nav-wrap").classList.remove("fadeInDown");
      setVisible(false)
    }
  };

  return (
    <div className="nav-wrap animated">   
        <div className="container-fluid navbar-bg" id="big-nav">
          <Container id="nav-container">
            <Navbar
              collapseOnSelect
              expand="lg"
              variant="light"
              collapseOnSelect
              sticky="top"
            >
              <img src={Logo} width="12%" id="logo" />
              <Navbar.Brand href="/"></Navbar.Brand>
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                id="toggler"
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
                  className="ml-auto"
                  onClick={() =>
                    document
                      .querySelector("#big-nav")
                      .classList.remove("sticky")
                  }
                >
                  <Nav.Link eventKey="1" as={Link} to="/">
                    Accueil
                  </Nav.Link>
                  <Nav.Link eventKey="2" as={Link} to="/Prix">
                    Prix
                  </Nav.Link>
                  <Nav.Link eventKey="2" as={Link} to="/Realisations">
                    Réalisations
                  </Nav.Link>
                  <Nav.Link eventKey="3" as={Link} to="/Contact">
                    Contact
                  </Nav.Link>
                  <Nav.Link
                    eventKey="5"
                    as={Link}
                    to="/Boutique"
                    className="disabled-link"
                  >
                    Boutique
                  </Nav.Link>
                </Nav>
                <Nav></Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </div>

    </div>
   
  );
}
