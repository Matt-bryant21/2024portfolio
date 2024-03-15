import React from "react";

const Footer = () => {
  return (
    <>
      <nav className="grid grid-cols-2 gap-4 pt-2">
        <div className="text-backgroundgrey text-sm text-left pl-10 hover:text-green py-4">
          <a href="/aboutme">Designed by Matt Bryant 2024 &trade;</a>
        </div>
        <div className="flex justify-end gap-16 px-20 py-4">
          <a href="www.uncelebratedjewellery.com" className="text-backgroundgrey text-sm hover:text-green">
            uncelebrated jewellery
          </a>
          <a
            href="https://www.linkedin.com/in/matt-bryant-5813a2293/"
            className="text-backgroundgrey text-sm hover:text-green"
          >
            linkedin
          </a>
          <a href="https://github.com/Matt-bryant21" className="text-backgroundgrey text-sm hover:text-green">
            github
          </a>
        </div>
      </nav>
    </>
  );
};

export default Footer;
