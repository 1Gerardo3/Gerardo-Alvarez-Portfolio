// this will be the last page to set up we i need to import all the file
import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import About from "./Pages/About";
 
// this is what will show on the main page
function App() {
  return (
    <HashRouter basename="/">
      <div>
    
        <Wrapper>
          <Route exact path="/" component={About}/>
        </Wrapper>
      </div>
    </HashRouter>
  );
}

export default App;
 