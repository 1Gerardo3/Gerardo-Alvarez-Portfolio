import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";

function Navbar() {
  return (
    <MDBNavbar color="blue" light expand="lg" className="mr-1">
      <MDBNavbarBrand>
        <strong className="white-text">Gerardo Alvarez</strong>
      </MDBNavbarBrand>
      <MDBNavbarNav right>
        <MDBNavItem className="mr-3">
          <MDBNavLink className="waves-effect waves-light" to="/about">
            <MDBIcon icon="home" className="mr-1" />
            About Me
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem className="mr-3">
          <MDBNavLink className="waves-effect waves-light" to="/portfolio">
            <MDBIcon icon="code" className="mr-1" />
            Apps
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem className="mr-3">
          <MDBNavLink className="waves-effect waves-light" to="/res">
            <MDBIcon icon="file" className="mr-1" />
            Resume
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem className="mr-3">
          <MDBNavLink className="waves-effect waves-light" to="/contact">
            <MDBIcon icon="envelope" className="mr-1" />
            Contact
          </MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  );
}

export default Navbar;
