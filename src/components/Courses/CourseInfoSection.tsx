"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Banknote,
  Award,
  Users,
  BookOpen,
  GraduationCap,
} from "lucide-react";

// Replace these with your actual image imports
// import photo1 from "@/assets/CourseInfo/photo1.jpg";
// import photo2 from "@/assets/CourseInfo/photo2.jpg";
import bgImage from "@/assets/courses/circle.png";
import photo1 from "@/assets/courses/courseImage2.jpg";
import photo2 from "@/assets/courses/courseInfo.png";
import photo3 from "@/assets/testimonial/testimonialImage2.png";

type TabKey = "overview" | "structure" | "admissions";

type TabData = {
  [key in TabKey]: {
    label: string;
    heading: string;
    subheading: string;
    cards: {
      icon:
        | typeof Calendar
        | typeof Clock
        | typeof MapPin
        | typeof Banknote
        | typeof Award
        | typeof Users
        | typeof BookOpen
        | typeof GraduationCap;
      title: string;
      value: string;
    }[];
  };
};

const tabsData: TabData = {
  overview: {
    label: "Course Overview",
    heading: "Course Information",
    subheading: "Everything you need to know about this course at a glance",
    cards: [
      { icon: Calendar, title: "Start Date", value: "November, February" },
      { icon: Clock, title: "Duration", value: "4 Years" },
      { icon: Clock, title: "Study Mode", value: "Full Time" },
      { icon: MapPin, title: "Locations", value: "Canary Wharf" },
      { icon: Banknote, title: "Tuition Fee (UK)", value: "£ 9535" },
      {
        icon: Award,
        title: "Awarding Body",
        value: "Arts University Plymouth",
      },
    ],
  },
  structure: {
    label: "Course Structure & Details",
    heading: "Course Structure",
    subheading: "How the course is organised across each year of study",
    cards: [
      { icon: BookOpen, title: "Year 1", value: "Foundation Modules" },
      { icon: BookOpen, title: "Year 2", value: "Core Specialisation" },
      { icon: BookOpen, title: "Year 3", value: "Industry Placement" },
      { icon: GraduationCap, title: "Year 4", value: "Final Major Project" },
      { icon: Users, title: "Class Size", value: "Small Group Teaching" },
      { icon: Clock, title: "Contact Hours", value: "12–16 hrs / week" },
    ],
  },
  admissions: {
    label: "Admissions & Key Details",
    heading: "Admissions & Key Details",
    subheading: "What you need to apply and key entry requirements",
    cards: [
      { icon: Award, title: "Entry Requirements", value: "UCAS Tariff 96+" },
      { icon: Calendar, title: "Application Deadline", value: "UCAS January" },
      { icon: Users, title: "Interview Required", value: "Portfolio Review" },
      { icon: GraduationCap, title: "UCAS Code", value: "W231" },
      { icon: MapPin, title: "Campus", value: "Canary Wharf" },
      { icon: Banknote, title: "International Fee", value: "£ 14,500" },
    ],
  },
};

const tabOrder: TabKey[] = ["overview", "structure", "admissions"];

export default function CourseInfoSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const current = tabsData[activeTab];

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
                /{tabsData[id].label}
              </button>
            ))}
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mt-10 md:mt-14 mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primaryText">
            {current.heading}
          </h2>
          <p className="text-primaryText text-sm sm:text-base mt-2">
            {current.subheading}
          </p>
        </div>

        {/* Info grid — driven by active tab */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {current.cards.map(({ icon: Icon, title, value }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-3 bg-[#0a1044] border border-white/10 rounded-2xl px-6 py-8 hover:border-primary/50 transition-colors duration-300"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full">
                <Icon className="w-7 h-7 text-white" strokeWidth={2} />
              </span>
              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  {title}
                </h3>
                <p className="text-white/50 text-xs sm:text-sm mt-1">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
