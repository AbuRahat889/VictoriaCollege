"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { campuses } from "@/constants/campusData";
import Heading from "./sheard/Heading";
import { MediaButton } from "./ui/icon";

export default function CampusSlider() {
  const [index, setIndex] = useState(0);
  const len = campuses.length;

  const prevIndex = (index - 1 + len) % len;
  const nextIndex = (index + 1) % len;

  const goPrev = () => setIndex((i) => (i - 1 + len) % len);
  const goNext = () => setIndex((i) => (i + 1) % len);

  return (
    <section className="w-full bg-[#030a2e] px-5 sm:px-8 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="container mx-auto">
        {/* Header */}
        <Heading
          subtitle="Our Campuses"
          title="Explore our campuses"
          description="Our team at Victoria College of Arts and Design is passionate about creating innovative projects and generating new ideas."
        />

        {/* Slider */}
        <div className="relative h-56 sm:h-70 md:h-85 lg:h-105 flex items-center justify-center mt-16 sm:mt-20 md:mt-24 lg:mt-32 w-full">
          {/* Prev (side) slide */}
          <div className="absolute bottom-0 left-2 sm:left-6 md:left-10 lg:left-16 w-[30%] sm:w-[32%] h-[80%] sm:h-[85%] rounded-md overflow-hidden hidden sm:block z-999">
            <img
              src={campuses[prevIndex].image}
              alt={campuses[prevIndex].name}
              className="w-full h-full object-cover opacity-70"
            />
          </div>

          {/* Next (side) slide */}
          <div className="absolute bottom-0 right-2 sm:right-6 md:right-10 lg:right-16 w-[30%] sm:w-[32%] h-[80%] sm:h-[85%] rounded-md overflow-hidden hidden sm:block z-999">
            <img
              src={campuses[nextIndex].image}
              alt={campuses[nextIndex].name}
              className="w-full h-full object-cover opacity-70"
            />
          </div>

          {/* Active (center) slide */}
          <div className="relative z-999 w-[88%] sm:w-[52%] md:w-[48%] lg:w-[46%] h-full rounded-md shadow-2xl ">
            <AnimatePresence mode="wait">
              <motion.img
                key={campuses[index].image}
                src={campuses[index].image}
                alt={campuses[index].name}
                className="absolute bottom-10 sm:bottom-12 md:bottom-14 lg:bottom-16 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/* Discover button */}
            <motion.button
              className="absolute top-1/3 left-1/2 z-9999 flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-y border-borderColor bg-linear-to-r from-white/20 to-white/5 backdrop-blur-xl text-[10px] sm:text-xs md:text-sm lg:text-base font-bold uppercase tracking-wide text-white shadow-lg cursor-pointer"
              whileTap={{ scale: 0.85, opacity: 0.7 }}
            >
              Discover
            </motion.button>

            {/* Bottom label */}
            <AnimatePresence mode="wait">
              <motion.div
                key={campuses[index].name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute bottom-6 sm:bottom-8 md:bottom-9 lg:bottom-10 left-0 w-full bg-[#37469c]/90 text-white text-center font-bold uppercase tracking-wide text-xs sm:text-sm md:text-base py-2.5 sm:py-3.5 md:py-4 lg:py-5 z-9999"
              >
                {campuses[index].name}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev arrow */}
          <motion.button
            onClick={goPrev}
            aria-label="Previous campus"
            className="absolute left-[4%] sm:left-[18%] md:left-[22%] lg:left-[26%] top-1/3 -translate-y-1/2  w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-[#37469c] flex items-center justify-center cursor-pointer z-9999"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
          >
            <MediaButton type="leftArrow" />
          </motion.button>

          {/* Next arrow */}
          <motion.button
            onClick={goNext}
            aria-label="Next campus"
            className="absolute right-[4%] sm:right-[18%] md:right-[22%] lg:right-[26%] top-1/3 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-primary flex items-center justify-center cursor-pointer z-9999"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
          >
            <MediaButton type="rightArrow" />
          </motion.button>
        </div>

        {/* Dots (optional progress indicator) */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {campuses.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setIndex(i)}
              aria-label={`Go to ${c.name}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === index ? "w-6 bg-primary" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
