import React from "react";
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute items-center w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6 col-span-2 lg:grid lg:grid-cols-2 lg:gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <React.Fragment key={index} >
              <ProjectCard project={project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;