// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12 col-span-2 lg:grid lg:grid-cols-3 lg:gap-6">
        {Object.entries(skillsData).map(([category, skills], id) => (
          <div key={id} className="mb-8">
            <h3 className="text-lg font-bold text-white mb-4">{category}</h3>
            <div className="flex flex-wrap">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[2] cursor-pointer">  
                  <Image
                    src={skillsImage(skill)?.src}
                    alt={skill}
                    width={10} 
                    height={10} 
                    className="w-6 h-6 sm:w-9 sm:h-9 md:w-12 md:h-12 lg:w-15 lg:h-15 rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;