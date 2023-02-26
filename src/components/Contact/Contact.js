import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

const ContactInfo = () => {
return (
    <MDBContainer className="mt-5">
        <MDBRow>
        <MDBCol className="text-center" md="12">
            <h2 className="blue">Contact Info</h2>
            <hr className="bg-dark"/>
            <img
            style={{height:"250"}} 
            src=""
            className="pr-4 pb-3 img-fluid"
            alt="Gerardo Alvarez"
            />
            <h4 >
            I recently gradated a Full Stack Web Development Bootcamp from
            UCLA. I was given a certificate of completion. Now I am actively looking for
             a Entry Level/Junior Web Development
            position, below I have linked my e-mail and cell phone number.
            Please feel free to contact me at any time and if I do not
            immediately respond I will respond within the next buisness day.
            Thank you!
            </h4>
            <hr className="hr-light w-50"/>
            <h3>Cell Phone</h3>
        
            <a href="Cell:509-433-4065">
                <MDBIcon icon="phone-alt"/>509-433-4065
            </a>
            <hr className="hr-light w-75"/>
            <h3>E-Mail</h3>
           
            <a href="mailto:1gerardo3@gmail.com">
                <MDBIcon icon="envelope"/> 1Gerardo3@gmail.com
            </a>
        </MDBCol>
        </MDBRow>
    </MDBContainer>
)
}

export default ContactInfo;