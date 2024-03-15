import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="grid grid-cols-3 gap-4 items-center pt-2 sticky top-0 z-10 bg-backgrounddark">
        <a href="/aboutme" className="text-backgroundgrey text-left pl-10 hover:text-blue">
          about me &#x263A;
        </a>
        <a href="/projects" className="text-backgroundgrey text-center hover:text-blue">
          projects &#x263A;
        </a>
        <a href="/contact" className="text-backgroundgrey text-right pr-10 hover:text-blue">
          contact &#x263A;
        </a>
      </nav>
    </>
  );
};

export default Navbar;
