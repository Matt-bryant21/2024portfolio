// eslint-disable-next-line no-unused-vars
import React from "react";

const Homepage = () => {
  return (
    <>
      {/* main div */}
      <div className="flex flex-col relative">
        {" "}
        {/* Added relative positioning */}
        <div className="flex justify-center w-2/4 z-10 relative">
          {" "}
          {/* Added z-index and relative positioning */}
          <div className="flex flex-col items-center ml-56 mt-8">
            <h1>
              HEY, I&apos;M <span className="text-backgroundgrey">MATT</span>
            </h1>
            <h1>
              HEY, I&apos;M <span className="text-backgroundgrey">MATT</span>
            </h1>
            <h1>
              HEY, I&apos;M <span className="text-backgrounddark">MATT</span>
            </h1>
            <h1>
              HEY, I&apos;M <span className="text-backgrounddark">MATT</span>
            </h1>
          </div>
        </div>
        <div className="flex justify-end bg-backgroundgrey ml-auto mr-80 mb-16 -mt-64 h-1/3">
          <div className="flex flex-col items-end px-32 py-3">
            <h2>JUNIOR</h2>
            <h2>FULL STACK</h2>
            <h2>WEB DEVELOPER</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
