import Image from "next/image";
import logo from "@/assets/footerLogo.png";
import bgImage from "@/assets/partner/circleBg.png";

export default function CareerBanner() {
  return (
    <section
      style={{ backgroundImage: `url(${bgImage.src})` }}
      className="relative overflow-hidden bg-[#060B2F] bg-contain bg-no-repeat bg-right"
    >
      <div className="container mx-auto relative z-10 px-6 py-14 md:py-20 ">
        <div className="max-w-3xl">
          {/* Logo */}
          <div className="mb-8 bg-[#061665] p-2 w-20">
            <Image
              src={logo}
              alt="Logo"
              width={480}
              height={480}
              className="rounded h-full w-full"
            />
          </div>

          {/* Heading */}
          <h2 className="text-white font-bold leading-17.5 text-4xl md:text-5xl lg:text-[64px]">
            Get creative and{" "}
            <span className="text-[#E22CE5]">turn your passion</span> for the
            Arts into a rewarding career.
          </h2>
        </div>
      </div>
    </section>
  );
}
