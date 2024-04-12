// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

const Homepage = () => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 400,
    immediate: !rendered, // Don't animate if not rendered yet
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hide");
  hiddenElements.forEach((element) => {
    observer.observe(element);
  });

  return (
    <>
      <section className="hide cursor-crosshair">
        <animated.div
          style={props}
          className="flex flex-col items-center justify-center sm:justify-start sm:flex-row xl:ml-40 xl:h-screen"
        >
          <div className="flex flex-col justify-center items-center my-12 sm:ml-0 sm:mr-8 md:ml-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl my-3 whitespace-nowrap">
              HEY, I&apos;M MATT
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl my-3 whitespace-nowrap">
              HEY, I&apos;M MATT
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl my-3 whitespace-nowrap">
              HEY, I&apos;M MATT
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl my-3 whitespace-nowrap">
              HEY, I&apos;M MATT
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center px-4 py-3 mb-16">
            <h2 className="text-center text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl">
              JUNIOR FULL STACK WEB DEVELOPER
            </h2>
          </div>
        </animated.div>
      </section>
      <section className="hide cursor-crosshair">
        <AboutMe />
      </section>
      <section className="hide cursor-crosshair">
        <Projects />
      </section>
      <section className="hide cursor-crosshair">
        <Contact />
      </section>
    </>
  );
};

export default Homepage;
