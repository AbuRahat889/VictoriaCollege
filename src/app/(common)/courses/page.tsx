import AllCourses from "@/components/Courses/AllCourses";
import OurGallery from "@/components/Courses/OurGallery";
import Breadcrumb from "@/components/sheard/Breadcrumb";
import GridYxasis from "@/components/sheard/GridYxasis";

export default function page() {
  return (
    <div className="relative overflow-hidden bg-[#050B31]">
      <GridYxasis />
      <Breadcrumb
        currentPage="Courses"
        title="Explore Our Courses"
        description="Join Victoria College of Arts and Design and experience exceptional teaching, cutting-edge facilities, and industry connections that prepare you for a rewarding creative career."
        isRightImg={true}
        isLeftImg={true}
      />
      <AllCourses />
      <OurGallery />
    </div>
  );
}
