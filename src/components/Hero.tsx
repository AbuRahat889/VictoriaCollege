import { photos, tags } from "@/constants/heroData";
import Button from "./ui/button";

export default function Hero() {
  return (
    <section className="w-full bg-[#030a2e] px-20 py-25">
      <div className="container mx-auto">
        {/* Hero content */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left column */}
          <div className="">
            <h1 className="font-extrabold uppercase leading-[0.95] tracking-tight text-[110px] text-white">
              Welcome
              <br />
              to VCAD
            </h1>

            <p className="mt-8 text-lg text-secondaryText leading-[160%] max-w-146.5">
              Our team at Victoria College of Arts and Design is passionate
              about creating innovative projects and generating new ideas. We
              work with a variety of experts and esteemed companies using a
              collaborative approach. Located in London&rsquo;s Design District,
              we have valuable connections within our industry. Search our
              latest courses.
            </p>
            <div className="mt-16.5 max-w-[320px]">
              <Button>Explore Courses</Button>
            </div>
          </div>

          {/* Right column — photo collage */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-358/380">
            {photos.map((p) => (
              <img
                src={p.src}
                key={p.alt}
                alt={p.alt}
                className={`absolute object-cover shadow-xl ${p.className}`}
              />
            ))}

            {tags.map((t) => (
              <span
                key={t.label}
                className={`absolute z-10 px-4 py-1.5 text-lg font-extrabold uppercase tracking-wide shadow-lg whitespace-nowrap ${t.className}`}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
