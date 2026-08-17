import Hero from "@/components/HeroSection/Hero";
import CampusSlider from "@/components/OurCampuses";
import OurCourses from "@/components/OurCourses/OurCourses";
import OurPartners from "@/components/OurPartners";
import PotentialSection from "@/components/PotentialSection";
import GridYxasis from "@/components/sheard/GridYxasis";
import StoriesSection from "@/components/StoriesSection";
import TestimonialSlider from "@/components/Testimonial";

export default function Page() {
  return (
    <div className=" ">
      <Hero />
      <div className="bg-[#030a2e]  relative">
        <GridYxasis />
        <OurCourses />
        <PotentialSection />
        <CampusSlider />
        <TestimonialSlider />
        <OurPartners />
        <StoriesSection />
      </div>
    </div>
  );
}
