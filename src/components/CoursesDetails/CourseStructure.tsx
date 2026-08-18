"use client";

import { useState } from "react";

const courseYears = [
  {
    title: "Foundation Year",
    modules: [
      {
        title: "Fundamentals",
        code: "FD01",
        credits: "30 credits",
        description:
          "This course introduces students to creative practice, focusing on theoretical, practical, and technical components. In early stages, students develop essential skills for academic success and personal growth, emphasizing reflection and technical skills like visual communication.",
      },
      {
        title: "Thinking Through Making",
        code: "FD02",
        credits: "30 credits",
        description:
          "Students explore creative ideas through practical experimentation, developing their ability to think critically and creatively through making.",
      },
      {
        title: "Developing Specialist Practice",
        code: "FD03",
        credits: "30 credits",
        description:
          "This module develops specialist creative skills and encourages students to explore their chosen subject area through practical and theoretical work.",
      },
      {
        title: "Specialist Project",
        code: "FD04",
        credits: "30 credits",
        description:
          "Students complete an independent specialist project demonstrating the knowledge, skills, and creative development gained throughout the foundation year.",
      },
    ],
  },
  {
    title: "First Year",
    modules: [
      {
        title: "Creative Practice",
        code: "FY01",
        credits: "30 credits",
        description:
          "Students develop core creative and technical skills while exploring fundamental principles of their chosen discipline.",
      },
      {
        title: "Contextual Studies",
        code: "FY02",
        credits: "30 credits",
        description:
          "An introduction to the historical, cultural, and theoretical contexts that influence creative practice.",
      },
      {
        title: "Design Development",
        code: "FY03",
        credits: "30 credits",
        description:
          "Students develop ideas from initial concepts through experimentation, research, and practical development.",
      },
      {
        title: "Creative Project",
        code: "FY04",
        credits: "30 credits",
        description:
          "A practical project allowing students to apply the knowledge and skills developed during the first year.",
      },
    ],
  },
  {
    title: "Second Year",
    modules: [
      {
        title: "Advanced Creative Practice",
        code: "SY01",
        credits: "30 credits",
        description:
          "Students build advanced practical and conceptual skills while developing a stronger individual creative practice.",
      },
      {
        title: "Professional Practice",
        code: "SY02",
        credits: "30 credits",
        description:
          "Students explore professional environments, industry expectations, collaboration, and professional development.",
      },
      {
        title: "Research and Development",
        code: "SY03",
        credits: "30 credits",
        description:
          "Students undertake deeper research and use their findings to inform and develop creative projects.",
      },
      {
        title: "Major Project",
        code: "SY04",
        credits: "30 credits",
        description:
          "A substantial project that demonstrates the student's developing creative identity and professional capabilities.",
      },
    ],
  },
  {
    title: "Third Year",
    modules: [
      {
        title: "Independent Practice",
        code: "TY01",
        credits: "30 credits",
        description:
          "Students establish an independent creative practice and develop a distinctive approach to their chosen discipline.",
      },
      {
        title: "Industry Practice",
        code: "TY02",
        credits: "30 credits",
        description:
          "Students prepare for professional practice by engaging with industry-focused projects, collaboration, and professional standards.",
      },
      {
        title: "Final Research Project",
        code: "TY03",
        credits: "30 credits",
        description:
          "Students undertake an advanced research project that supports and informs their final creative work.",
      },
      {
        title: "Final Major Project",
        code: "TY04",
        credits: "30 credits",
        description:
          "The final major project brings together the student's creative, theoretical, and technical development into a substantial body of work.",
      },
    ],
  },
];

export default function CourseStructure() {
  const [activeYear, setActiveYear] = useState(0);
  const [openModule, setOpenModule] = useState(0);

  const currentYear = courseYears[activeYear];

  const handleYearChange = (index: number) => {
    setActiveYear(index);
    setOpenModule(0);
  };

  return (
    <section className="container mx-auto py-12 sm:py-16 md:py-10">
      <div className="text-center mb-24">
        <div className="flex-1">
          <h2 className="text-primaryText text-3xl font-semibold leading-10">
            Course Structure & Details
          </h2>
        </div>
        <p className="text-white text-base font-normal leading-6 max-w-3xl mx-auto mt-2.5">
          Explore the modules for each year and find key admissions information.
        </p>
      </div>
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[20px] border border-[#30468f] px-4 pb-0 pt-12 sm:px-6 md:px-8">
          {/* Year Tabs */}
          <div className="absolute left-1/2 top-0 z-10 w-[calc(100%-32px)] -translate-x-1/2 -translate-y-1/2 sm:w-auto">
            <div className="flex overflow-x-auto rounded-full border border-[#30468f] bg-[#071348] p-2.5 whitespace-nowrap scrollbar-hide">
              {courseYears.map((year, index) => (
                <button
                  key={year.title}
                  type="button"
                  onClick={() => handleYearChange(index)}
                  className={`text-xl font-medium leading-7 px-5 py-3.5 rounded-full ${
                    activeYear === index
                      ? "bg-[#a01b9b] text-white"
                      : "text-white hover:bg-[#0b1955]"
                  }`}
                >
                  / {year.title}
                </button>
              ))}
            </div>
          </div>

          {/* Header */}
          <div className="mb-6 border-b border-[#26386f] pb-5">
            <p className="text-xs text-white/70 sm:text-sm">
              Modules may include
            </p>

            <h2 className="mt-1 text-lg font-semibold leading-tight text-primaryText md:text-2xl">
              Core Modules
            </h2>
          </div>

          {/* Modules */}
          <div>
            {currentYear.modules.map((module, index) => {
              const isOpen = openModule === index;

              return (
                <div
                  key={module.code}
                  className="border-b border-[#26386f] last:border-b-0"
                >
                  {/* Module Header */}
                  <button
                    type="button"
                    onClick={() => setOpenModule(isOpen ? -1 : index)}
                    className="flex w-full items-center gap-3 py-4 text-left sm:gap-5 sm:py-5"
                  >
                    {/* Number */}
                    <span className="w-10 shrink-0 text-sm font-bold uppercase text-primaryText sm:w-12 sm:text-2xl">
                      /{String(index + 1).padStart(2, "0")}/
                    </span>

                    {/* Title + Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="text-sm font-medium text-primaryText leading-8 sm:text-base md:text-2xl">
                          {module.title}
                        </span>

                        <span className="text-base font-normal leading-6.5 text-primaryText">
                          [ {module.code} • {module.credits} ]
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-2xl font-normal leading-6.5 transition-all sm:h-12 sm:w-12
                        ${
                          isOpen
                            ? "border-[#a01b9b] bg-[#a01b9b] text-primaryText"
                            : "border-[#30468f] bg-[#071348] text-primaryText"
                        }
                      `}
                    >
                      <span
                        className={`transition-transform duration-200 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      >
                        ›
                      </span>
                    </span>
                  </button>

                  {/* Module Description */}
                  <div
                    className={`
                      grid transition-all duration-300
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-5 pl-13 pr-2 sm:pl-17 sm:pr-16">
                        <p className="max-w-full text-lg font-normal leading-6.5 text-primaryText">
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
