"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/constants/testimonialData";
import { MediaButton } from "./ui/icon";
import Heading from "./sheard/Heading";
import SliderArrows from "./sheard/SliderArrows";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export default function TestimonialSlider() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
  const len = testimonials.length;

  const goPrev = () => setSlide(([i]) => [(i - 1 + len) % len, -1]);
  const goNext = () => setSlide(([i]) => [(i + 1) % len, 1]);

  const active = testimonials[index];

  return (
    <section className="w-full bg-[#030a2e] px-5 sm:px-8 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-6 mb-10 md:mb-14">
          <Heading
            subtitle=" Students Testimonial"
            title=" Our students sharing their thoughts"
          />

          {/* Arrows */}
          <div className="hidden sm:flex items-center gap-3 shrink-0 mt-2">
            <SliderArrows
              onPrev={goPrev}
              onNext={goNext}
              prevLabel="Previous testimonial"
              nextLabel="Next testimonial"
            />
          </div>
        </div>

        {/* Testimonial card */}
        <div className="relative overflow-hidden h-auto md:h-72">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={active.name}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:h-72"
            >
              {/* Image */}
              <div className="w-full h-40 sm:h-64 md:h-full overflow-hidden shrink-0">
                <img
                  src={active.image}
                  alt={active.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Quote content */}
              <div className="flex flex-col justify-center p-5 sm:p-6 md:p-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="33"
                  viewBox="0 0 67 51"
                  fill="none"
                  className="sm:w-14 sm:h-10.5 md:w-16.75 md:h-12.75"
                >
                  <path
                    d="M0 51V34.8095C0 30.4021 0.900538 25.9722 2.70161 21.5198C4.50269 17.0675 6.77655 12.9524 9.52319 9.1746C12.2698 5.39683 15.039 2.33863 17.8306 0L33.2298 7.8254C30.8884 11.7381 29.0649 15.8307 27.7591 20.1032C26.4983 24.3757 25.8905 29.2778 25.9355 34.8095V51H0ZM33.7702 51V34.8095C33.7702 30.4021 34.6707 25.9722 36.4718 21.5198C38.2729 17.0675 40.5467 12.9524 43.2933 9.1746C46.04 5.39683 48.8091 2.33863 51.6008 0L67 7.8254C64.6586 11.7381 62.835 15.8307 61.5292 20.1032C60.2685 24.3757 59.6606 29.2778 59.7056 34.8095V51H33.7702Z"
                    fill="white"
                    fillOpacity="0.2"
                  />
                </svg>

                <p className="text-secondaryText text-sm sm:text-base md:text-xl leading-[150%] max-w-full py-4 sm:py-5 md:py-6">
                  {active.quote}
                </p>

                <div>
                  <p className="text-white font-bold text-base">
                    {active.name}
                  </p>
                  <p className="text-secondaryText text-sm mt-1">
                    {active.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows on mobile (below card) */}
        <div className="flex sm:hidden items-center justify-center gap-3 mt-8">
          <motion.button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full bg-[#0b1a4d] flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
          >
            <MediaButton type="leftArrow" />
          </motion.button>
          <motion.button
            onClick={goNext}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full bg-primary flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
          >
            <MediaButton type="rightArrow" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
