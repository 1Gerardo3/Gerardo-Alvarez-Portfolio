import React from "react";
import { MDBContainer, MDBRow,MDBCol } from "mdbreact";
import Resume from "../assests/Resume.png"



function Res () {
    return(
        <MDBContainer className="mt-5">
            <MDBRow>
                <MDBCol>
                    <embed id="Resume" src={Resume} width="80%" height="1000px"/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    )
}

export default Res;