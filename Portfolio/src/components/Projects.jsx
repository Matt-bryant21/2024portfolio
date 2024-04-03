// eslint-disable-next-line no-unused-vars
import React from "react";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col justify-start bg-backgrounddark py-12 px-6 sm:px-12">
        <div>
          <h2 className="text-4xl text-center my-8">PROJECTS PROJECTS PROJECTS</h2>
        </div>
        {/* projects div block here */}
        <div className="flex flex-col items-start justify-start w-full bg-customorange px-8 py-8 shadow-inner border-black border-4 mb-12">
          <h2 className="text-5xl uppercase text-backgrounddark font-bold mb-8 hover:underline">
            <a href="https://github.com/Matt-bryant21/Python-Calorie-Calculator">Python Calorie Calculator</a>
          </h2>
          <h2 className="text-3xl uppercase text-backgrounddark font-bold mb-2">
            My first programming project, tasked to create a functioning python app that took user input. I created a
            calorie counter that takes user input on height weight, gender, and activity level to calculate the amount
            of calories needed to maintain, gain, or lose weight.
          </h2>
        </div>
        <div className="flex flex-col items-start justify-start w-full bg-customorange px-8 py-8 shadow-inner border-black border-4">
          <h2 className="text-5xl uppercase text-backgrounddark font-bold mb-8 hover:underline">
            <a href="https://github.com/Matt-bryant21/UFC-Fight-Roster-API">Flask UFC Fight Roster API</a>
          </h2>
          <h2 className="text-3xl uppercase text-backgrounddark font-bold">
            This project was built using the Flask framework and SQLAlchemy with Postgres to create a RESTful API that 
            interacts with a roster of UFC fighters and their various weight divisions. The API allows users to create,
            read, update, and delete fighters from the roster.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Projects;
