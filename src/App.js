// this will be the last page to set up we i need to import all the file
import React from "react";
import {HashRouter, Routes} from "react-router-dom";

import Container from "./components/Container"
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Res from "./Pages/ResumeDL"





 
// this is what will show on the main page
function App() {
  return (
    <HashRouter basename="/">
      
      <Container>
        <Wrapper>
        <Routes path="/" element={About}/>
          <Routes path="/about" component={About}/>
          <Routes path="/resume" component={Res}/>
          <Routes path="/projects" component={Portfolio}/>
          <Routes path="/contact" component={Contact}/>
        </Wrapper>
        <Footer/>
      </Container>
    </HashRouter>
  );
}

export default App;
 