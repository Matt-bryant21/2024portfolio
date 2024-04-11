import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex sm:justify-center xl:justify-between items-center py-2 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 sticky top-0 z-10 bg-backgrounddark">
      <div className="flex justify-center xl:justify-between items-center flex-grow">
        <Link to="/" className="text-backgroundgrey hover:text-blue text-sm">
          home &#x263A;&#xFE0E;
        </Link>
        <Link to="/aboutme" className="text-backgroundgrey hover:text-blue text-sm ml-6">
          about me &#x263A;&#xFE0E;
        </Link>
        <Link to="/projects" className="text-backgroundgrey hover:text-blue text-sm ml-6">
          projects &#x263A;&#xFE0E;
        </Link>
        <Link to="/contact" className="text-backgroundgrey hover:text-blue text-sm ml-6">
          contact &#x263A;&#xFE0E;
        </Link>
      </div>
      <div className="flex-shrink-0">{/* Add any additional content here */}</div>
    </nav>
  );
};

export default Navbar;
