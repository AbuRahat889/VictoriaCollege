import AllCourses from "@/components/Courses/AllCourses";
import Breadcrumb from "@/components/sheard/Breadcrumb";
import CareerBanner from "@/components/sheard/CareerBanner";

export default function page() {
  return (
    <div>
      <Breadcrumb
        currentPage="Courses"
        title="Explore Our Courses"
        description="Join Victoria College of Arts and Design and experience exceptional teaching, cutting-edge facilities, and industry connections that prepare you for a rewarding creative career."
        isRightImg={true}
        isLeftImg={true}
      />
      <AllCourses />
      <CareerBanner />
    </div>
  );
}
