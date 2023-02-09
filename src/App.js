// this will be the last page to set up we i need to import all the file
import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";





 
// this is what will show on the main page
function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Navbar/>
        <Wrapper>
        <Route exact path="/" component={About}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
        </Wrapper>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
 