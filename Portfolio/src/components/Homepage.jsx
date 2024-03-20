import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex justify-center w-full relative">
          <div className="flex flex-col items-center">
            <h1 className="text-center">
              HEY, I&apos;M <span className="text-backgroundgrey">MATT</span>
            </h1>
            <h1 className="text-center">
              HEY, I&apos;M <span className="text-backgroundgrey">MATT</span>
            </h1>
            <h1 className="text-center">
              HEY, I&apos;M <span className="text-backgrounddark">MATT</span>
            </h1>
            <h1 className="text-center">
              HEY, I&apos;M <span className="text-backgrounddark">MATT</span>
            </h1>
          </div>
        </div>
        <div className="flex justify-center bg-backgroundgrey mt-4 xl:w-full xl:ml-auto xl:mr-0 xl:mb-4 xl:-mt-16 xl:h-auto">
          <div className="flex flex-col items-center px-4 py-3">
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
