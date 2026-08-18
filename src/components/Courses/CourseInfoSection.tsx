"use client";

import {
  Award,
  Banknote,
  BookOpen,
  Calendar,
  Clock,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Replace these with your actual image imports
// import photo1 from "@/assets/CourseInfo/photo1.jpg";
// import photo2 from "@/assets/CourseInfo/photo2.jpg";
import bgImage from "@/assets/courses/circle.png";
import photo1 from "@/assets/courses/courseImage2.jpg";
import photo2 from "@/assets/courses/courseInfo.png";
import photo3 from "@/assets/testimonial/testimonialImage2.png";
import { CourseInfoSectionProps, TabKey, tabOrder } from "@/types/courseType";

const iconMap = {
  Calendar,
  Clock,
  MapPin,
  Banknote,
  Award,
  Users,
  BookOpen,
  GraduationCap,
} as const;



interface Props {
  courseInfo: CourseInfoSectionProps;
}
export default function CourseInfoSection({ courseInfo }: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const current = courseInfo?.tabs?.find((t) => t.id === activeTab);

  return (
    <section className="w-full bg-[#030a2e] pb-16">
      {/* Photo strip with background band */}
      <div className="w-full bg-linear-to-t from-[#061665] via-[#061665]/60 to-transparent py-10 sm:py-12 md:pb-24 relative">
        <div className="container mx-auto px-5 md:px-0">
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5">
            {/* Left image — narrower */}
            <div className="relative w-1/4 sm:w-1/4 h-35 xs:h-35 sm:h-45 md:h-57.5 lg:h-79.75 overflow-hidden shadow-xl shrink-0">
              <Image
                src={photo1}
                alt="Students collaborating in a lounge area"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>

            {/* Center image — wider */}
            <div className="relative w-1/2 sm:w-1/2h-35 xs:h-35 sm:h-45 md:h-57.5 lg:h-79.75 overflow-hidden shadow-2xl shrink-0">
              <Image
                src={photo2}
                alt="Fashion design students working on garments"
                fill
                sizes="50vw"
                priority
                className="object-cover"
              />
            </div>

            {/* Right image — narrower */}
            <div className="relative w-1/4 sm:w-1/4 h-35 xs:h-35 sm:h-45 md:h-57.5 lg:h-79.75 overflow-hidden shadow-xl shrink-0">
              <Image
                src={photo3}
                alt="Lecturer speaking with students"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs + content */}
      <div
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left top",
          backgroundAttachment: "fixed",
        }}
        className="container mx-auto px-5 md:px-0"
      >
        <div className="relative z-10 -mt-6 sm:-mt-8 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 bg-[#0a1044] border border-white/10 rounded-full px-2 py-2 shadow-xl">
            {tabOrder.map((id) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-lg font-medium whitespace-nowrap transition-colors duration-300 ${
                  activeTab === id
                    ? " text-primary"
                    : "text-white/70 hover:text-primary"
                }`}
              >
                /{id}
              </button>
            ))}
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mt-10 md:mt-14 mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primaryText">
            {current?.heading}
          </h2>
          <p className="text-primaryText text-sm sm:text-base mt-2">
            {current?.subheading}
          </p>
        </div>

        {/* Info grid — driven by active tab */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {current?.cards?.map((i) => {
            const iconName = i.icon as keyof typeof iconMap;
            const Icon = iconMap[iconName];

            return (
              <div
                key={i.title}
                className="flex flex-col items-center text-center gap-3 bg-[#0a1044] border border-white/10 rounded-2xl px-6 py-8 hover:border-primary/50 transition-colors duration-300"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full">
                  {Icon && (
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  )}
                </span>

                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base">
                    {i.title}
                  </h3>

                  <p className="text-white/50 text-xs sm:text-sm mt-1">
                    {i.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
