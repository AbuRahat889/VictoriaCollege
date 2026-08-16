"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Wraps each photo so it can switch from a one-time "drop" animation
// into an infinite "float" loop once it lands.
export function DropFloatImage({
  src,
  alt,
  className,
  delay,
}: {
  src: string;
  alt: string;
  className: string;
  delay: number;
}) {
  const [dropped, setDropped] = useState(false);

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`absolute object-cover shadow-xl ${className}`}
      initial={{ x: "120%", opacity: 0 }}
      animate={
        dropped
          ? { x: [0, 10, 0], opacity: 1 } // infinite float loop
          : { x: 0, opacity: 1 } // one-time drop
      }
      transition={
        dropped
          ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
          : { type: "spring", stiffness: 120, damping: 10, delay }
      }
      onAnimationComplete={() => {
        if (!dropped) setDropped(true);
      }}
    />
  );
}

export function DropTag({
  label,
  className,
  delay,
}: {
  label: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.span
      className={`absolute z-10 px-2 py-0.5 text-[10px] sm:px-3 sm:py-1 sm:text-sm md:px-4 md:py-1.5 md:text-lg font-extrabold uppercase tracking-wide shadow-lg whitespace-nowrap ${className}`}
      initial={{ y: "-120%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 140, damping: 12, delay }}
    >
      {label}
    </motion.span>
  );
}
