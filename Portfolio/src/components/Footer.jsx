// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <nav className="flex flex-col lg:flex-row bg-backgrounddark justify-between items-center py-4 lg:py-2 ">
      <div className="text-backgroundgrey text-sm text-center lg:text-left lg:pl-10 hover:text-green lg:py-0">
        <a href="/aboutme">Designed by Matt Bryant 2024 &trade;</a>
      </div>
      <div className="flex justify-center lg:justify-end gap-4 lg:gap-16 px-4 lg:px-20 py-2 lg:py-0">
        <a href="https://www.uncelebratedjewellery.com" className="text-backgroundgrey text-sm hover:text-green">
          uncelebrated jewellery
        </a>
        <a
          href="https://www.linkedin.com/in/mattthomasbryant/"
          className="text-backgroundgrey text-sm hover:text-green"
        >
          linkedin
        </a>
        <a href="https://github.com/Matt-bryant21" className="text-backgroundgrey text-sm hover:text-green">
          github
        </a>
      </div>
    </nav>
  );
};

export default Footer;

