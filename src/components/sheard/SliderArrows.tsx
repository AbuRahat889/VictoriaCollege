"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { MediaButton } from "../ui/icon";

interface ArrowButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  className?: string;
  label?: string;
}

export function ArrowButton({
  direction,
  onClick,
  className,
  label,
}: ArrowButtonProps) {
  const isPrev = direction === "prev";

  return (
    <motion.button
      onClick={onClick}
      aria-label={label ?? (isPrev ? "Previous" : "Next")}
      className={clsx(
        "w-11 h-11 rounded-full flex items-center justify-center cursor-pointer",
        isPrev ? "bg-[#0b1a4d]" : "bg-primary",
        className,
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.85 }}
    >
      <MediaButton type={isPrev ? "leftArrow" : "rightArrow"} />
    </motion.button>
  );
}

interface SliderArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
  prevLabel?: string;
  nextLabel?: string;
}

export default function SliderArrows({
  onPrev,
  onNext,
  className,
  prevLabel,
  nextLabel,
}: SliderArrowsProps) {
  return (
    <div className={clsx("flex items-center gap-3 shrink-0 z-9999", className)}>
      <ArrowButton direction="prev" onClick={onPrev} label={prevLabel} />
      <ArrowButton direction="next" onClick={onNext} label={nextLabel} />
    </div>
  );
}
