import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="flex flex-col xl:h-screen bg-backgroundgrey pb-12 px-12 sm:px-6 md:px-8 lg:px-12">
        <div>
          <h2 className="text-2xl text-center xl:text-left my-8 xs:text-3xl md:text-4xl">ABOUT ABOUT ABOUT</h2>
        </div>

        <div className="flex flex-col sm:flex-row">
          <div className="flex-grow">
            <h1 className="text-backgrounddark text-4xl text-right mb-8 sm:text-5xl md:text-6xl lg:text-7xl">
              HEY! I&apos;M MATT &#x263A;&#xFE0E;
            </h1>
            <h1 className="text-backgrounddark uppercase text-4xl text-right sm:text-4xl md:text-5xl lg:text-6xl">
              A creatively driven Junior Full Stack Web Developer with a passion for understanding how things work, utilizing
              problem solving skills carefully sharpened through years of multidisciplinary ventures. Eager to enter the
              industry and absorb technical knowledge like a sponge. 
            </h1>
            <br></br>
            <h1 className="text-backgrounddark text-4xl py-4 text-right uppercase sm:text-4xl md:text-5xl lg:text-6xl">
              Profficient in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more
            </h1>
            <h1 className="py-4 uppercase text-6xl text-center text-backgrounddark sm:text-4xl md:text-5xl lg:text-7xl">
              Ready to chat today!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
