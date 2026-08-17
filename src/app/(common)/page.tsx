import Hero from "@/components/HeroSection/Hero";
import CampusSlider from "@/components/OurCampuses";
import OurCourses from "@/components/OurCourses/OurCourses";
import OurPartners from "@/components/OurPartners";
import PotentialSection from "@/components/PotentialSection";
import TestimonialSlider from "@/components/Testimonial";

export default function Page() {
  return (
    <div className=" ">
      <Hero />
      <OurCourses />
      <PotentialSection />
      <CampusSlider />
      <TestimonialSlider />
      <OurPartners />
    </div>
  );
}
