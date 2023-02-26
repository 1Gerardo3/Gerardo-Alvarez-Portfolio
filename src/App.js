import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About_me/about";
import Resumeid from "./components/Resume/Resume";
import Projects from "./components/myProjects/portfolio";
import ContactInfo from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="About" element={<About />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Resume" element={<Resumeid />} />
            <Route path="Contact" element={<ContactInfo />} />
          </Routes>
        </BrowserRouter>
    
      <Footer />
    </div>
  );
}

export default App;
