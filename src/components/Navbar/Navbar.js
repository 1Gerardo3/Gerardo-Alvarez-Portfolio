import React from "react";
import {
  MDBDropdown,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBNavbarLink
} from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./Navbar.css";


function Navbar() {
  const { i18n } = useTranslation();
  const [pickedLanguage, setPickedLanguage] = useState("united-states");

  return (
    <MDBNavbar className="nav">
      <MDBContainer fluid>
      <MDBNavbarLink href='/'><strong className="me">
          Gerardo Alvarez <MDBIcon icon="dragon" className="text-white" />
        </strong></MDBNavbarLink>

        <div className="navbar-nav ms-auto d-flex flex-row">
          <MDBDropdown>
            <MDBDropdownToggle
              style={{ cursor: "pointer" }}
              tag="a"
              className="nav-link"
            >
              <MDBIcon fas icon="dungeon" className="text-white" size="4x" />
            </MDBDropdownToggle>

            <MDBDropdownMenu>
              <MDBDropdownItem link> <MDBNavbarLink href='About'>About Me</MDBNavbarLink></MDBDropdownItem>
              <MDBDropdownItem link> <MDBNavbarLink href='Projects'>Projects</MDBNavbarLink></MDBDropdownItem>
              <MDBDropdownItem link> <MDBNavbarLink href='Resume'>Resume</MDBNavbarLink></MDBDropdownItem>
              <MDBDropdownItem link> <MDBNavbarLink href='Contact'>Contact</MDBNavbarLink></MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown>
            <MDBDropdownToggle
              style={{ cursor: "pointer" }}
              tag="a"
              className="nav-link"
            >
              <i className={`flag flag-${pickedLanguage} mx-auto`}></i>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                onClick={() => {
                  i18n.changeLanguage("en");
                  setPickedLanguage("united-states");
                }}
                link
                href="#"
              >
                <i className="flag flag-mexico"></i>Mexico
              </MDBDropdownItem>
              <MDBDropdownItem
                onClick={() => {
                  i18n.changeLanguage("sp");
                  setPickedLanguage("spanish");
                }}
                link
                href="#"
              ></MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
