import React from "react";
import { MDBContainer,MDBIcon } from "mdb-react-ui-kit";
import "./Resume.css"


function Resumeid() {
  return (
    <MDBContainer className="mt-5 res">
      <header className="flex">
        <section className="gl">
      <MDBIcon fas icon="globe" className="text-white" />
        <p>Junior Web Developer</p>
        <a href="contact">1gerardo3@gmail.com</a><br/>
        <tel>509-433-4065</tel>
        </section>
        <h1>Gerardo Alvarez</h1>
        <section className="bg">
          <h3>Profile</h3>
          <p>New to web Development looking to learn and expand my knowledge fast learner excited to<br/> get out and start my new career</p>
        </section>
      </header>
      <hr/>

  <aside>
      <section className="aside">
        <h2>Skills</h2>
        <ul>
          <li>Decision Making</li>
          <li>Adaptablity</li>
          <li>Computer Skills</li>
          <li>Ability to Multitask</li>
          <li>Fast Learner</li>
          <li>Time Management</li>
          <li>Ability to Work Under Pressure</li>
          <li>Problom Solving</li>
          <li>Leadership</li>
        </ul>
      </section>
      <section className="aside">
      <h2>Hobbies</h2>
      <p>Snowboard,Soccer,Chess and working on cars</p>
      </section>
      <section className="aside">
        <h2>Courses</h2>
      </section>
      <section className="aside">
        Languages
      </section>
      <section className="aside">
        <h2>References</h2>
      </section>
     </aside>
     <hr/>

     <div>
      <section className="text-black">
      <h2>Employment History</h2>
      <h5>General Manager at L&S Contracting Services LLC, Wenatchee</h5>
      <p>02/2018-Present</p>
      <p>Duties</p>
      <br/>
      <br/>
      <h5>Installer at IWI inc. Wenatchee</h5>
      <p>06-2014-01/2018</p>
      <p>Duties</p>
      <br/>
      <br/>
      <h5>McDougall and Sons LLC</h5>
      <p>Duties</p>
      <p>Heveay meachine Opporator</p>
      <p>Quality Control </p>
      <p>06-2009/06-2014</p>
     
      <h2>Eucation</h2>
      <h5>Deploma, Wenatchee High School, Wenatchee</h5>
      <p>08/2007-06/2011</p>
</section>
     </div>
   
    </MDBContainer>
  );
}

export default Resumeid;
