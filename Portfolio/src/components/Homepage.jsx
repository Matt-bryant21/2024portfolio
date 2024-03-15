// eslint-disable-next-line no-unused-vars
import React from "react";

const Homepage = () => {
  return (
    <>
      {/* main div */}
      <div className="flex flex-col">
        <div className="flex justify-center w-2/4">
          <div className="flex flex-col items-center">
            <h1>HEY, I&apos;M MATT</h1>
            <h1>HEY, I&apos;M MATT</h1>
            <h1>HEY, I&apos;M MATT</h1>
            <h1>HEY, I&apos;M MATT</h1>
          </div>
        </div>
        <div className="flex justify-end bg-backgroundgrey ml-auto h-1/3">
          <div className="flex flex-col items-end px-32 py-32">
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
