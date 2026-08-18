"use client";

import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { MediaButton } from "../ui/icon";
import { useRouter } from "next/navigation";

interface CourseCardProps {
  slug: string;
  image: StaticImageData | string;
  title: string;
  description: string;
  school?: string;
  duration?: string;
  variant?: "large" | "medium" | "tall";
}

export default function CourseCard({
  slug,
  image,
  title,
  description,
  school,
  duration,
  variant = "medium",
}: CourseCardProps) {
  const router = useRouter();
  const heights = {
    large: "h-[620px]",
    medium: "h-[298px]",
    tall: "h-[620px]",
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden bg-[#030a2e] rounded-2xl",
        heights[variant],
      )}
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 rounded-xl bg-linear-to-t from-[#050B31] via-[#050B31]/60 to-transparent z-9" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-12">
        {/* Badges */}
        {(school || duration) && (
          <div className="space-x-3 mb-3">
            {school && (
              <span className="rounded-sm bg-[#1b50a1]/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-white ">
                {school}
              </span>
            )}

            {duration && (
              <span className="rounded-sm bg-[#1b50a1]/80 px-3 py-1 text-[10px] font-medium text-white ">
                {duration}
              </span>
            )}
          </div>
        )}
        <h3 className="text-xl font-semibold text-primaryText leading-7">
          {title}
        </h3>

        <p className="mt-3 text-sm font-normal leading-5 text-primaryText">
          {description}
        </p>

        {variant === "tall" && school && (
          <div className="mt-6">
            <h4 className="font-semibold text-white">School:</h4>
            <p className="mt-1 text-sm text-white/70">{school}</p>
          </div>
        )}
      </div>

      {/* Arrow */}
      <div className="absolute -bottom-4 -right-4 bg-[#030a2e] p-5 rounded-full z-99 ">
        <button
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#384584] bg-[#051251] hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out cursor-pointer",
          )}
          onClick={() => {
            router.push(`/courses/${slug}`);
          }}
        >
          <MediaButton type="rightArrow" />
        </button>
      </div>
    </div>
  );
}
