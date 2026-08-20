"use client";

import Image from "next/image";
import gallery1 from "@/assets/breadcrum1.webp";
import gallery2 from "@/assets/breadcrum2.webp";
import gallery3 from "@/assets/testimonial/testimonialImage1.webp";
import gallery4 from "@/assets/testimonial/testimonialImage2.webp";
import gallery5 from "@/assets/Potential/potential1.webp";
import gallery6 from "@/assets/Potential/potential63.webp";
import gallery7 from "@/assets/Potential/potential63.webp";
import useEmblaCarousel from "embla-carousel-react";

export const galleryData = [
  { id: 1, image: gallery1 },
  { id: 2, image: gallery2 },
  { id: 3, image: gallery7 },
  { id: 4, image: gallery4 },
  { id: 5, image: gallery5 },
  { id: 6, image: gallery6 },
  { id: 7, image: gallery3 },
];

export default function OurGallery() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });
  return (
    <div className="bg-[#040d3d] py-20 px-5 lg:px-0">
      <div className="text-center">
        <div className="flex-1">
          <p className="text-primary font-bold text-xl tracking-wide leading-[120%] uppercase">
            / Our Gallery
          </p>
          <h2 className="text-primaryText text-5xl font-semibold leading-14 mt-4">
            Degree Courses
          </h2>
        </div>
        <p className="text-white text-base font-normal leading-6 max-w-3xl mx-auto mt-6">
          Join Victoria College of Arts and Design and experience exceptional
          teaching, cutting-edge facilities, and industry connections that
          prepare you for a rewarding creative career.
        </p>
      </div>
      <div className="overflow-hidden mt-12" ref={emblaRef}>
        <div className="flex">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="min-w-65 md:min-w-75 lg:min-w-[320px] pl-6"
            >
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt="Gallery"
                  width={340}
                  height={420}
                  className="h-82.5 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
