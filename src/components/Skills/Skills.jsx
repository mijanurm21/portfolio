// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          scale={1.03}
          transitionSpeed={800}
          gyroscope={true}
          className="rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-purple-700/30 transition duration-500"
        >
          <div className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 border-b border-gray-600 pb-2">
              {category.title}
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center text-center bg-gray-800/60 border border-gray-600 rounded-xl p-3 hover:bg-purple-800/30 transition"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 mb-1"
                  />
                  <span className="text-[0.75rem] sm:text-sm text-gray-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
