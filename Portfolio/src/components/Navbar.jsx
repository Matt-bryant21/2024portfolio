import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full">
        <nav className="grid grid-cols-3 gap-4 items-center pt-2">
          <a href="/aboutme" className="text-backgroundgrey text-left pl-10">
            about me &#x263A;
          </a>
          <a href="/projects" className="text-backgroundgrey text-center">
            projects &#x263A;
          </a>
          <a href="/contact" className="text-backgroundgrey text-right pr-10">
            contact &#x263A;
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
