import Image from "next/image";
import Link from "next/link";

import leftImage from "@/assets/breadcrum1.png";
import rightImage from "@/assets/breadcrum2.png";
import bgImage from "@/assets/partner/circleBg.png";

interface BreadcrumbProps {
  title: string;
  description: string;
  currentPage: string;
  isLeftImg?: boolean;
  isRightImg?: boolean;
}

export default function Breadcrumb({
  title,
  description,
  currentPage,
  isLeftImg,
  isRightImg,
}: BreadcrumbProps) {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
      }}
      className="relative overflow-hidden "
    >
      <div className="container mx-auto relative px-5 py-16 md:py-20">
        <div className="relative flex items-center justify-center min-h-65">
          {/* Left Image */}
          {isLeftImg && (
            <div className="hidden lg:block absolute left-0 -top-14 -rotate-3 h-52.5] w-52">
              <Image
                src={leftImage}
                alt="Students"
                width={100}
                height={120}
                className="object-cover shadow-xl h-full w-full"
              />
            </div>
          )}

          {/* Right Image */}
          {isRightImg && (
            <div className="hidden lg:block absolute right-0 top-20 rotate-3  h-48.5 w-48.75">
              <Image
                src={rightImage}
                alt="Students"
                width={100}
                height={120}
                className="object-cover shadow-xl h-full w-full"
              />
            </div>
          )}

          {/* Center Content */}
          <div className="text-center max-w-3xl">
            <div className="text-lg font-medium leading-7 text-primaryText mb-3">
              <Link
                href="/"
                className="hover:text-primary transition-colors underline"
              >
                Home
              </Link>

              <span className="mx-2">/</span>

              <span>{currentPage}</span>
            </div>

            <h1 className="text-3xl md:text-[60px] font-bold text-primaryText leading-16.5">
              {title}
            </h1>

            <p className="mt-3 text-primaryText text-base leading-7 max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
