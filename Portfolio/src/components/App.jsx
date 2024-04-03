import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Animation from "./Animation";
import BarLoader from "react-spinners/BarLoader";

function Main() {
  const location = useLocation();
  const isFirstRender = !localStorage.getItem("notFirstRender");
  const [loading, setLoading] = useState(isFirstRender && location.pathname === "/");

  useEffect(() => {
    if (isFirstRender) {
      localStorage.setItem("notFirstRender", "true");
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [isFirstRender]);

  return loading ? (
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
  );
}

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
