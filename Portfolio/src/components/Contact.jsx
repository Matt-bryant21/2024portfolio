import React from "react";
import styled, { keyframes } from "styled-components";

const flashColors = keyframes`
  0% {
    background-color: #D9D9D9
  }
  25% {
    background-color: #171717
  }
  50% {
    background-color: #D9D9D9
  }
  75% {
    background-color: #171717
  }
  100% {
    background-color: #D9D9D9; /* Magenta */
  }
`;

const AnimatedFlashText = styled.h2`
  animation: ${flashColors} 3s ease-in-out infinite;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 8rem;
  margin: 2rem 0;
  text-transform: uppercase;

  /* Added text decoration to always have an underline */
  a {
    text-decoration: underline;
  }

  @media (min-width: 1200px) {
    font-size: 9rem;
  }
`;

const Contact = () => {
  return (
    <>
      <div className="flex flex-col bg-backgrounddark xl:py-12 h-screen justify-center">
        <AnimatedFlashText>
          <div className="justify-center hover:underline">
            <a className="" href="mailto:mattthomasbryant@gmail.com">
              Get in touch here!
            </a>
          </div>
        </AnimatedFlashText>
      </div>
    </>
  );
};

export default Contact;
