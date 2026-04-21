"use client";
import { useState } from "react";

function Experience() {
  const [hoverIndex, setHoverIndex] = useState<Number | null>(0);

  const experiences = [
    { title: "Mis Programmer", company: "Tstech", year: "Present" },
    { title: "Technical Support", company: "ROHM", year: "2025" },
    { title: "Technical Support", company: "Intern", year: "2023" },
    { title: "Fullstack Developer", company: "Freelance", year: "2022" },
    {
      title: "BS Information Technology",
      company: "Veritas College of Irosin",
      year: "2024",
    },
  ];
  return (
    <>
      <div className="col-span-1 md:col-span-2  space-y-2">
        <div className="card  shadow-sm  p-4 col-span-1 md:col-span-4 space-y-2 group animate__animated animate__fadeIn rounded-lg ">
          <h2 className="text-lg font-bold">
            <i className="fa-solid fa-briefcase"></i> Experience
          </h2>
          <div>
            <ul className="steps steps-vertical w-full">
              {experiences.map((experience, index) => (
                <li
                  key={index}
                  className={`step  ${hoverIndex === index ? "step-primary" : ""}`}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(0)}
                >
                  <div className="w-full">
                    <p className="text-start">{experience.title}</p>
                    <div className="flex justify-between w-full mt-0.5">
                      <p className="text-start text-sm">{experience.company}</p>
                      <p className="text-sm">{experience.year}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
