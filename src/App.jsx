import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Home/Hero";        
import Footer from "./Components/Footer/Footer";  
import About from "./Components/About/About";     
import Internship from "./Components/Internship/Internship";
import ContactUs from "./Components/Contact us/Contact";
import Verification from "./Components/Verification/Verification";
import ScrollToTop from './Components/ScrollToTop';  // Import the ScrollToTop component

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />  {/* Add ScrollToTop here */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
