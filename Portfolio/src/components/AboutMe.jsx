// eslint-disable-next-line no-unused-vars
import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-backgroundgrey py-12 px-12">
        <div>
          <h2 className="text-4xl text-left my-8">ABOUT ABOUT ABOUT</h2>
        </div>

        <div className="flex">
          <div className="flex-grow">
            <h1 className=" text-backgrounddark text-7xl text-right mb-8">HEY! I&apos;M MATT &#x263A;</h1>
            <h1 className=" text-backgrounddark uppercase text-6xl text-right">
              Creatively driven full stack web developer with a passion for understanding how things work utilizing
              problem solving skills carefully sharpened through years of multidisciplinary ventures. Eager to enter the
              industry and absorb technical knowledge like a sponge.
            </h1>
            <h1 className=" py-16 uppercase text-6xl text-center text-blue">Ready to chat today!</h1>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default AboutMe;
