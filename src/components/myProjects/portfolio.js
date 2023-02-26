import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import "./portfolio.css";

const Projects = () => {
  return (
    <MDBContainer className="mt">
      <MDBCardGroup deck className="mt-3 card">
        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img"
            style={{ width: "200px" }}
            src="password gen.png"
            alt="FIGHT"
            top
          />
          <MDBCardBody className="body">
            <MDBCardTitle tag="h5">Password Generator</MDBCardTitle>

            <MDBBtn
              href="https://1gerardo3.github.io/passwaord-gen/"
              color="primary"
              size="md"
              className="btn"
            >
              <MDBIcon icon="code" className="mr-2" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img"
            style={{ width: "200px" }}
            src="comming soon"
            alt="COMING SOON"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5"></MDBCardTitle>

            <MDBBtn
              href="https//github.com/1gerardo3"
              color="primary"
              size="md"
            >
              <MDBIcon icon="code" className="mr-2" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img"
            style={{ width: "200px" }}
            src="wheater app.png"
            alt="FIGHT"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">The Weather App</MDBCardTitle>

            <MDBBtn
              href="https://1gerardo3.github.io/The-Weather-App/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="code" className="mr-2" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;
