"use client";

import coursesImage from "@/assets/OurCourses.png";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Heading from "../sheard/Heading";
import Button from "../ui/button";
import { COURSES_FAQ } from "@/constants/courseData";

export default function OurCourses() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleCourse = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="py-20 px-5 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6">
          <Heading
            subtitle="OUR COURSES"
            title="Explore our creative courses"
          />
          <div className="w-52 md:max-w-52">
            <Button>View Courses</Button>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-2 items-center lg:gap-20">
          {/* Left column */}
          <div>
            <div className=" divide-y divide-borderColor">
              {COURSES_FAQ.map((course, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={course.id}>
                    <button
                      type="button"
                      onClick={() => toggleCourse(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 py-8 text-left cursor-pointer"
                    >
                      <span
                        className={`text-base md:text-2xl font-semibold transition-colors leading-[120%] text-primaryText`}
                      >
                        {course.title}
                      </span>
                    </button>

                    <div
                      className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0 flex items-start gap-2">
                        <ArrowRight
                          className={`shrink-0 text-[#E0189C] transition-transform duration-300 size-5 md:size-9 `}
                        />
                        <p className="pb-6 pr-0 md:pr-8 text-sm md:text-lg text-primaryText leading-[160%] font-normal">
                          {course.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column */}
          <div className="relative h-80 w-full overflow-hidden rounded-2xl sm:h-96 lg:h-140  z-999">
            <Image
              src={coursesImage}
              alt="Students attending a fashion and design lecture"
              fill
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
