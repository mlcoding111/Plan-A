import React, { useState, useEffect } from "react";

import { Nav, NavDropdown, Navbar, Container, Button } from "react-bootstrap";
import { NavLink, useLocation, Link } from "react-router-dom";
import Logo from "../../img/Logo/logo.svg";

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
    document.querySelector("body").addEventListener("click", handleClick);
    document.querySelector(".navbar-bg").classList.remove("sticky");
  }, []);

  useEffect(() => {
    console.log("yo");
  }, [window.pageYOffset]);

  // navbar-collapse collapse show

  // navbar-collapse collapse
  const handleClick = (e) => {
    // console.log('clicked : ', e.target)
    // let nav = document.querySelector("#responsive-navbar-nav").classList.contains("navbar-collapse collapse show")
    // let navBar = document.querySelector("#responsive-navbar-nav")
    // // console.log(e.target.classList.contains("active") || e.target.classList.contains("navbar-nav") || e.target.classList.contains("navbar"))
    // let conditionMet = e.target.classList.contains("active") || e.target.classList.contains("navbar-nav") || e.target.classList.contains("navbar")
    // if (!conditionMet) {
    //     document.querySelector("#responsive-navbar-nav").classList.remove("show")
    //     document.querySelector("#toggler").classList.remove("collapsed")
    // }
  };

  const handleScroll = () => {
    let scrollValue = window.pageYOffset;
    console.log("scroll");
    if (scrollValue > 150) {
      document.querySelector(".nav-wrap").classList.add("force");
      document.querySelector("#big-nav").classList.add("sticky");
      setVisible(true)
    } else {
      document.querySelector("#big-nav").classList.remove("sticky");
      setVisible(false)
    }
  };

  return (
    <div className="nav-wrap">

      <div className="container-fluid navbar-bg" id="big-nav">
        <Container id="nav-container">
          <Navbar
            collapseOnSelect
            expand="xl"
            variant="light"
            collapseOnSelect
            sticky="top"
          >
            <img src={Logo} width="13%" id="logo" />

            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              id="toggle"
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
                <Nav.Link eventKey="2" as={Link} to="/Contact">
                  Contact
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
