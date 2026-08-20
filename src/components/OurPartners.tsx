import logo2 from "@/assets/partner/arts-university.webp";
import bgImage from "@/assets/partner/circleBg.webp";
import logo1 from "@/assets/partner/university-london.webp";
import Image from "next/image";
import Heading from "./sheard/Heading";

export default function OurPartners() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
      }}
      className="bg-[#020928]  px-5 md:px-0"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
          <div className="col-span-7 w-full py-20">
            <Heading subtitle="OUR PARTNERS" title="Partner Institutions" />
            <p className="text-white text-base font-normal leading-6 mt-10 max-w-2xl">
              Our team at Victoria College of Arts and Design is passionate
              about creating innovative projects and generating new ideas. We
              work with a variety of experts and esteemed companies using a
              collaborative approach. Located in London's Design District, we
              have valuable connections within our industry.
            </p>
          </div>

          <div className="col-span-5 flex flex-col justify-center gap-10 py-10 lg:py-20 w-full ">
            <div className="w-full max-w-105">
              <Image
                src={logo1}
                alt="University of London"
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            <div className="w-full max-w-105">
              <Image
                src={logo2}
                alt="Arts University"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
