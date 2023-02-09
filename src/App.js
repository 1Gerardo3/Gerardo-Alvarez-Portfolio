// this will be the last page to set up we i need to import all the file
import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
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
  <Navbar/>
        <Wrapper>
        <Route exact path="/" component={About}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/resume" component={Res}/>
          <Route exact path="/projects" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
        </Wrapper>
        <Footer/>
      </Container>
    </HashRouter>
  );
}

export default App;
 