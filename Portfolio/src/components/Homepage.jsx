// eslint-disable-next-line no-unused-vars
import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="flex xl:flex-col relative">
        <div className="flex justify-center xl:w-2/4 xl:z-10 xl:relative">
          <div className="flex flex-col items-center xl:ml-64 xl:mt-8">
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
        <div className="flex justify-end bg-backgroundgrey xl:ml-auto xl:mr-80 xl:mb-16 xl:-mt-64 xl:h-1/3">
          <div className="flex xl:flex-col xl:items-end px-32 py-3">
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
