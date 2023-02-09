import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5 bg-light">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr className="solid bg-dark" />
          <img
            style={{ height: "300px" }}
            src="./maxresdefault.jpg"
            className="float-left pr-5 pb-3 img-fluid"
            alt="Me"
          />
          <p style={{ fontSize: "25px"}}>
            Hello, my name is Gerardo Alvarez. I recently graduated a Full Stack
            Web Developer program at UCLA and received
            certificate of completion. Currently I live in Wenatchee, WA. I am
            actively looking for job opportunities as a EntryLevel/Junior Web Developer in
            Washington. When I am not creating websites some of my hobbies
            include golfing, video games, and hiking with my dog.
          </p>
          <p style={{ fontSize: "25px"}}>
            I am proficient with computers and have good understanding of
            Microsoft OS and Microsoft Office. I am committed to high standards of user experience,
            usability, and speed. I am detail focused and an ambitious problem solver with
            a passion for learning new skills.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
