import React from "react";
import Contact from "./Contact";

function Skills() {
  const frontend = [
    "HTML",
    "CSS",
    "JavaScript",
    "Blade",
    "Tailwind CSS",
    "Bootstrap",
    "TypeScript",
    "Nextjs",
    "React",
  ];
  const backend = [
    "PHP",
    "C#",
    "Filament",
    "Livewire",
    "Laravel",
    "ASP.Net",
    "VB.net",
    "MySql",
    " Sql Server",
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-2">
        <div className="card  shadow-sm  p-4 col-span-1 md:col-span-4 space-y-2 group animate__animated animate__fadeIn rounded-lg ">
          <h2 className="text-lg font-bold mb-3">
            <i className="fa-solid fa-gear"></i> Tech Stack
          </h2>
          <div>
            <h3 className="text-base font-bold  mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-2 mb-2 ">
              {frontend.map((techStack, index) => (
                <span
                  key={index}
                  className="border  border-gray-200  text-sm px-3 py-1 rounded-lg transition-colors hover:text-accent hover:shadow-[0_3px_10px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
                >
                  {techStack}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold  mb-3">Backend & Database</h3>
            <div className="flex flex-wrap gap-2">
              {backend.map((techstack, index) => (
                <span
                  key={index}
                  className="border border-gray-200  text-sm px-3 py-1 rounded-lg transition-colors hover:text-accent hover:shadow-[0_3px_10px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
                >
                  {techstack}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
}

export default Skills;
