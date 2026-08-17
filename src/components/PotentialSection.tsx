"use client";

import bgImage from "@/assets/circleBg.png";
import potential1 from "@/assets/Potential/potential1.png";
import potential2 from "@/assets/Potential/potential2.jpg";
import potential3 from "@/assets/Potential/potential63.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PotentialSection() {
  return (
    <section className="w-full bg-[#030a2e] py-14 md:py-20 px-5 md:px-0 overflow-hidden">
      <div className="container mx-auto">
        <div className="container mx-auto relative">
          {/* Decorative circles background */}

          <div className="relative">
            {/* Left column — quote heading */}
            <div className="relative">
              <span className="absolute -left-1 -top-4 sm:-left-2 sm:-top-6 text-white/20 select-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="31"
                  viewBox="0 0 67 51"
                  fill="none"
                  className="w-8 h-6 sm:w-12 sm:h-9 md:w-16.75 md:h-12.75"
                >
                  <path
                    d="M0 51V34.8095C0 30.4021 0.900538 25.9722 2.70161 21.5198C4.50269 17.0675 6.77655 12.9524 9.52319 9.1746C12.2698 5.39683 15.039 2.33863 17.8306 0L33.2298 7.8254C30.8884 11.7381 29.0649 15.8307 27.7591 20.1032C26.4983 24.3757 25.8905 29.2778 25.9355 34.8095V51H0ZM33.7702 51V34.8095C33.7702 30.4021 34.6707 25.9722 36.4718 21.5198C38.2729 17.0675 40.5467 12.9524 43.2933 9.1746C46.04 5.39683 48.8091 2.33863 51.6008 0L67 7.8254C64.6586 11.7381 62.835 15.8307 61.5292 20.1032C60.2685 24.3757 59.6606 29.2778 59.7056 34.8095V51H33.7702Z"
                    fill="white"
                    fillOpacity="0.2"
                  />
                </svg>
              </span>

              <h2 className="max-w-full sm:max-w-[85%] md:max-w-150 lg:w-191.25 lg:max-w-none font-bold leading-[1.15] md:leading-17.5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
                A world where{" "}
                <span className="text-primary">
                  everyone has the opportunity
                </span>{" "}
                to fulfil their potential
              </h2>
              <span className="hidden md:block absolute left-[55%] lg:left-140 -bottom-6 md:-bottom-8 text-white/20 select-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="67"
                  height="51"
                  viewBox="0 0 67 51"
                  fill="none"
                >
                  <path
                    d="M67 0L67 16.1905C67 20.5979 66.0995 25.0278 64.2984 29.4802C62.4973 33.9325 60.2235 38.0476 57.4768 41.8254C54.7302 45.6032 51.961 48.6614 49.1694 51L33.7702 43.1746C36.1116 39.2619 37.9351 35.1693 39.2409 30.8968C40.5017 26.6243 41.1095 21.7222 41.0645 16.1905L41.0645 -2.26735e-06L67 0ZM33.2298 -2.95228e-06L33.2298 16.1905C33.2298 20.5979 32.3293 25.0278 30.5282 29.4802C28.7272 33.9325 26.4533 38.0476 23.7067 41.8254C20.96 45.6032 18.1909 48.6614 15.3992 51L6.84118e-07 43.1746C2.3414 39.2619 4.16499 35.1693 5.47077 30.8968C6.73152 26.6243 7.33938 21.7222 7.29436 16.1905L7.29436 -5.21963e-06L33.2298 -2.95228e-06Z"
                    fill="white"
                    fillOpacity="0.2"
                  />
                </svg>
              </span>
            </div>

            {/* Right column — photo collage */}
            <div
              style={{ backgroundImage: `url(${bgImage.src})` }}
              className="relative w-full h-75 xs:h-[340px] sm:h-105 md:h-130 lg:h-147.5 md:mt-0 bg-center bg-contain bg-no-repeat"
            >
              {/* Photo 1 */}
              <motion.div
                custom={0.15}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute right-[8%] sm:right-[10%] md:right-[12%] top-4 lg:top-[-35%]
                w-32.5 h-42.5 xs:w-[160px] xs:h-[210px] sm:w-60 sm:h-78.5 md:w-82.5 md:h-108.25 lg:w-102.5 lg:h-134.5
                rotate-2 z-20 shadow-2xl border-4 border-white"
              >
                <Image
                  src={potential1}
                  alt="Man working with a laptop in a studio"
                  fill
                  sizes="(max-width: 768px) 40vw, 410px"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Photo 2 */}
              <motion.div
                custom={0.35}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute left-[28%] sm:left-[30%] top-[36%] md:top-[15%]
                w-32.5 h-37 xs:w-[160px] xs:h-[182px] sm:w-58.75 sm:h-66.75 md:w-82.5 md:h-93.75] lg:w-102.25 lg:h-116.25
                rotate-12 shadow-2xl border-4 border-white z-9"
              >
                <Image
                  src={potential2}
                  alt="Woman painting with watercolors"
                  fill
                  sizes="(max-width: 768px) 40vw, 409px"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Photo 3 */}
              <motion.div
                custom={0.55}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute left-2 sm:left-6 md:left-6 bottom-8 sm:bottom-12 md:bottom-15
                w-33.75 h-37 xs:w-[165px] xs:h-[182px] sm:w-60 sm:h-66.75 md:w-83.75 md:h-93.75 lg:w-104.5 lg:h-116.25
                rotate-[-7deg] shadow-2xl border-4 border-white z-99"
              >
                <Image
                  fill
                  src={potential3}
                  alt="Fashion designers working in a studio"
                  sizes="(max-width: 768px) 40vw, 418px"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
