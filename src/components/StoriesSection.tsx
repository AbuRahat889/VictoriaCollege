"use client";

import { storyData } from "@/constants/testimonialData";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Heading from "./sheard/Heading";
import SliderArrows from "./sheard/SliderArrows";
import Button from "./ui/button";
import { MediaButton } from "./ui/icon";

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

export default function StoriesSection() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
  const len = storyData.length;

  const goPrev = () => setSlide(([i]) => [(i - 1 + len) % len, -1]);
  const goNext = () => setSlide(([i]) => [(i + 1) % len, 1]);

  const active = storyData[index];
  return (
    <section className="w-full bg-[#030a2e] px-5 sm:px-8 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-6 mb-10 md:mb-14">
          <Heading subtitle="STORIES" title="Our Stories" />

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
        <div className="relative ">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={active.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Image */}
              <div className="w-full h-135.75 shrink-0">
                <Image
                  src={active.image.src}
                  alt={active.title}
                  height={500}
                  width={500}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Quote content */}
              <div className="flex flex-col justify-between p-5 sm:p-6 md:p-7">
                <div>
                  <p className="text-5xl font-semibold leading-12 text-primaryText">
                  {active.title}
                  </p>
                  <p className="text-secondaryText text-sm sm:text-base md:text-xl leading-[150%] max-w-full py-4 sm:py-5 md:py-6">
                    {active.description}
                  </p>
                </div>

                <div className="max-w-52">
                  <Button>Read Article</Button>
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
