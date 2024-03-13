import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex">
        <ul className="text-backgroundgrey">
          <li>
            <a href="/aboutme">about me</a>
          </li>
          <li>
            <a href="/projects">projects</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
