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
  MDBCardText,
} from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "500px" }}
            src="./maxresdefault.jpg"
            alt="FIGHT"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">the fight</MDBCardTitle>
            <MDBCardText>this is my Projects</MDBCardText>
            <MDBBtn href="git" color="primary" size="md">
              <MDBIcon icon="clone left" className="mr-2" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;
