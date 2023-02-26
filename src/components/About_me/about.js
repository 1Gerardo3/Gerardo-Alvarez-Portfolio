import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./about.css"






const About = () => {
    return (
      <MDBContainer className="mbg">
        <MDBRow>
          <MDBCol md="14">
            <h2>About Me</h2>
            <hr className="solid bg-dark" />
            <img
              style={{ height: "300px" }}
              src="img_0702.jpg"
              className="pr-5 pb-3 img-fluid"
              alt="Me"
            />
               <img
              style={{ height: "300px" }}
              src="img_1645.jpg"
              className=" pr-5 pb-3 img-fluid"
              alt="Me"
            />
               <img
              style={{ height: "300px" }}
              src="img_0310.jpg"
              className=" pr-5 pb-3 img-fluid"
              alt="Me"
            />
            <p style={{ fontSize: "25px"}}>
              Hello,<br/> I Would like to start by introducing myself my name is Gerardo Alvarez. I have been merried for 9 years
               to my wife we have 4 kids and our 2 dogs thats my little family. I have lived in washington state for 14 years great
              place awesome hiking spots love the weather and before that in california for most of my teen years. A little on my background
              i have worked in the construction indistry for 12 years. I am involved in everything from labor to to final customer walkthrough.
              I recently graduated from Full Stack Web Developer program at UCLA online and receivedcertificate of completion. Currently I live
              in Wenatchee, WA. I am actively looking for job opportunities as a EntryLevel/Junior Web Developer in Washington. When I am not creating 
              websites some of my hobbies include golfing, video games, and hiking with my dog.
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
  
  export default About;
  