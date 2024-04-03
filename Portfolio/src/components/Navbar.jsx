// eslint-disable-next-line no-unused-vars
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-2 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 sticky top-0 z-10 bg-backgrounddark">
        <div className="flex justify-center xl:justify-between items-center flex-grow">
          <a href="/" className="text-backgroundgrey hover:text-blue text-sm">
            home &#x263A;
          </a>
          <a href="/aboutme" className="text-backgroundgrey hover:text-blue text-sm ml-6">
            about me &#x263A;
          </a>
          <a href="/projects" className="text-backgroundgrey hover:text-blue text-sm ml-6">
            projects &#x263A;
          </a>
          <a href="/contact" className="text-backgroundgrey hover:text-blue text-sm ml-6">
            contact &#x263A;
          </a>
        </div>
        <div className="flex-shrink-0">{/* Add any additional content here */}</div>
      </nav>
    </>
  );
};

export default Navbar;
