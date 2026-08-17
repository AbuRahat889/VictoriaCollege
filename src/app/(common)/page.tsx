import Hero from "@/components/HeroSection/Hero";
import CampusSlider from "@/components/OurCampuses";
import OurCourses from "@/components/OurCourses/OurCourses";
import TestimonialSlider from "@/components/Testimonial";

export default function Page() {
  return (
    <div className=" ">
      <Hero />
      <OurCourses />
      <CampusSlider />
      <TestimonialSlider />
    </div>
  );
}
