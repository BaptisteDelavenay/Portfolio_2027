"use client";

import { div, p } from "framer-motion/client";
import { useState } from "react";
import { experienceData, educationData } from "@/app/Data/data";
import Image from "next/image";
import { exec } from "child_process";

export default function Experience() {
  const [experience, setExperience] = useState("professionel");

  const toggleStyle = (value: string) => {
    return `font-semibold text-sm flex flex-1 rounded-md items-center justify-center ${
      experience == value
        ? "bg-white text-fg shadow-sm"
        : "bg-neutral-100 text-muted"
    }`;
  };

  return (
    <div id="experience">
      <div className="flex h-10 w-full rounded-md bg-neutral-100 p-1.5 gap-1.5 mb-4">
        <button
          onClick={() => setExperience("professionel")}
          className={toggleStyle("professionel")}
        >
          Professionnel
        </button>
        <button
          onClick={() => setExperience("education")}
          className={toggleStyle("education")}
        >
          Education
        </button>
      </div>
      {experience === "professionel" ? (
        <div className="flex flex-col gap-8 w-full p-4 rounded-md shadow-sm border border-neutral-200">
          {experienceData.map((experience) => (
            <div key={experience.id} className="w-full flex items-start">
              <Image
                src={experience.logo}
                width={50}
                height={50}
                className="w-10 shrink-0 sm:w-[50px]"
                alt={experience.nom}
              ></Image>
              <div className="w-full pl-4">
                <p className="font-semibold">{experience.nom}</p>
                <div className="w-full flex flex-wrap items-center justify-between gap-x-4">
                  <p className="text-sm text-muted">{experience.contenu}</p>
                  <p className="text-sm text-muted">{experience.date}</p>
                </div>
                <ul className="mt-4 list-disc list-outside flex flex-col gap-1">
                  {experience.missions.map((mission) => (
                    <li key={mission} className="text-sm sm:text-base">
                      {mission}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-8 w-full p-4 rounded-md shadow-sm border border-neutral-200">
          {educationData.map((education) => (
            <div key={education.id} className="w-full flex items-start">
              <Image
                src={education.logo}
                width={50}
                height={50}
                className="w-10 shrink-0 sm:w-[50px]"
                alt={education.nom}
              ></Image>
              <div className="w-full pl-4">
                <p className="font-semibold">{education.nom}</p>
                <div className="w-full flex flex-wrap items-center justify-between gap-x-4">
                  <p className="text-sm text-muted">{education.contenu}</p>
                  <p className="text-sm text-muted">{education.date}</p>
                </div>
                <div className="mt-2 flex flex-col gap-1">
                  <p key={education.id} className="text-sm sm:text-base">
                    {education.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
