import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "./Footer.css";

function Footer() {
  return (
    <MDBFooter className="page-footer font-small bg-dark pt-4">
      <div className="container">
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a
              className="btn-floating btn-fb mx-1"
              href="https://github.com/1gerardo3"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn-floating btn-li mx-1"
              href="https://www.linkedin.com/in/gerardo-alvarez-bb2193262/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2023 Copyright:
        <a href="https://github.com/1gerardo3/gerardos-Portfolio">
          {"----"}
          Gerardo Alvarez
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
