import React from "react";
import logo1 from "@/assets/partner/university-london.png";
import logo2 from "@/assets/partner/arts-university.png";
import bgImage from "@/assets/partner/circleBg.png";
import Heading from "./sheard/Heading";
import Image from "next/image";

export default function OurPartners() {
  return (
    <div className="bg-[#020928]  px-5 md:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 ">
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
          <div
            style={{ backgroundImage: `url(${bgImage.src})` }}
            className="col-span-5 w-full space-y-10 bg-contain bg-no-repeat bg-left py-20 "
          >
            <Image
              src={logo1}
              alt="partner logo"
              height={500}
              width={500}
              className="h-20 w-full"
            />
            <Image
              src={logo2}
              alt="partner logo"
              height={500}
              width={500}
              className="h-21.5 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
