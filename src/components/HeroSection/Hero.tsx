import { photos, tags } from "@/constants/heroData";
import Button from "../ui/button";
import { DropFloatImage, DropTag } from "./HeroAnimation";

export default function Hero() {
  return (
    <section className="w-full bg-[#030a2e] px-5 sm:px-8 md:px-12 lg:px-20 py-14 md:py-20 lg:py-25 z-9999 relative">
      <div className="container mx-auto overflow-hidden">
        {/* Hero content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-8 items-center">
          {/* Left column */}
          <div>
            <h1 className="font-extrabold uppercase leading-[0.95] tracking-tight text-[15vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] text-white">
              Welcome
              <br />
              to VCAD
            </h1>

            <p className="mt-6 md:mt-8 text-base md:text-lg text-secondaryText leading-[160%] max-w-146.5">
              Our team at Victoria College of Arts and Design is passionate
              about creating innovative projects and generating new ideas. We
              work with a variety of experts and esteemed companies using a
              collaborative approach. Located in London&rsquo;s Design District,
              we have valuable connections within our industry. Search our
              latest courses.
            </p>
            <div className="mt-10 md:mt-16.5 max-w-[320px]">
              <Button>Explore Courses</Button>
            </div>
          </div>

          {/* Right column — photo collage */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-none aspect-358/380">
            {photos.map((p, i) => (
              <DropFloatImage
                key={p.alt}
                src={p.src}
                alt={p.alt}
                className={p.className}
                delay={i * 0.15}
              />
            ))}

            {tags.map((t, i) => (
              <DropTag
                key={t.label}
                label={t.label}
                className={t.className}
                delay={0.6 + i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
