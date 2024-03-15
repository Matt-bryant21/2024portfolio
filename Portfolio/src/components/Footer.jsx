import React from "react";

const Footer = () => {
  return (
    <>
      
        <nav className="grid grid-cols-2 gap-4 pt-2">
          <div className="text-backgroundgrey text-left pl-10">
            <a href="/aboutme">Designed by Matt Bryant 2024 &trade;</a>
          </div>
          <div className="flex justify-end md:justify-start">
            <a href="/projects" className="text-backgroundgrey">
              uncelebrated jewellery
            </a>
            <a href="/contact" className="text-backgroundgrey">
              linkedin
            </a>
            <a href="/contact" className="text-backgroundgrey">
              github
            </a>
          </div>
        </nav>
    </>
  );
};

export default Footer;
