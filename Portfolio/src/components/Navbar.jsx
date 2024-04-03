// eslint-disable-next-line no-unused-vars
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="grid grid-cols-4 gap-4 items-center py-2 sticky top-0 z-10 bg-backgrounddark">
        <a href="/" className="text-center text-backgroundgrey pl-10 hover:text-blue text-sm">
          home &#x263A;
        </a>
        <a href="/aboutme" className="text-center text-backgroundgrey pl-10 hover:text-blue text-sm">
          about me &#x263A;
        </a>
        <a href="/projects" className="text-center text-backgroundgrey text-sm hover:text-blue">
          projects &#x263A;
        </a>
        <a href="/contact" className="text-center text-backgroundgrey text-sm pr-10 hover:text-blue">
          contact &#x263A;
        </a>
      </nav>
    </>
  );
};

export default Navbar;
