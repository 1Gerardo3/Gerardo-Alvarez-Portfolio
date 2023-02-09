import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNav,
  MDBIcon,
} from "mdbreact";

function Navbar() {
  return (
    <MDBNavbar
      color="blue"
      light
      expand="lg"
      className="mr-1"
      
    >
      <MDBNavbarBrand>
        <strong className="white-text">Gerardo Alvarez</strong>
      </MDBNavbarBrand>
      <MDBNavbarNav right>
        <MDBNavItem className="mr-3">
          <MDBNav className="waves-effect waves-light" to="/about">
            <MDBIcon icon="home" className="mr-1" />
            About Me
          </MDBNav>
        </MDBNavItem>
        <MDBNavItem className="mr-3">
          <MDBNav className="waves-effect waves-light" to="/portfolio">
            <MDBIcon icon="code" className="mr-1" />
            Apps
          </MDBNav>
        </MDBNavItem>
        <MDBNavItem className="mr-3">
          <MDBNav className="waves-effect waves-light" to="/resume">
            <MDBIcon icon="file" className="mr-1" />
            Resume
          </MDBNav>
        </MDBNavItem>
        <MDBNavItem className="mr-3">
          <MDBNav className="waves-effect waves-light" to="/contact">
            <MDBIcon icon="envelope" className="mr-1" />
            Contact
          </MDBNav>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  );
}

export default Navbar;