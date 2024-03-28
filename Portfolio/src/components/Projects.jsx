import React from "react";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-start bg-backgrounddark py-12 px-6 sm:px-12">
        <div>
          <h2 className="text-4xl text-center my-8">PROJECTS PROJECTS PROJECTS</h2>
        </div>
        <div className="flex flex-col items-center justify-start w-full sm:w-3/4 lg:w-2/4 mx-auto bg-backgroundgrey border border-blue rounded-lg p-5 shadow-md h-96 overflow-y-auto">
          <h2 className="text-5xl uppercase text-backgrounddark font-bold mb-2">Project Title</h2>
          <p className="text-xl">
            <a href="http://your-project-url.com">Github Link</a>
          </p>
          <img src="" alt="screengrab of code" />
        </div>
      </div>
    </>
  );
};

export default Projects;
