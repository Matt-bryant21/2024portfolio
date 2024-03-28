// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Animation from "./Animation";
import BarLoader from "react-spinners/BarLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completed after 8 seconds
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="flex justify-center items-center h-screen text-center cursor-crosshair">
          <BarLoader size={50} color={"#FF7A00"} loading={loading} />
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/anim" element={<Animation />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
