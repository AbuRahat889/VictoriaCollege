import CallToAction from "@/components/CoursesDetails/CallToAction";
import Breadcrumb from "@/components/sheard/Breadcrumb";
import React from "react";

export default function page() {
  return (
    <div className="bg-[#030a2e]">
      <Breadcrumb
        currentPage="Courses Details Page"
        title="BA (Hons) Fashion Design"
        description="This course introduces students to creative practice, focusing on theoretical, practical, and technical components. In early stages, students develop essential skills for academic success and personal growth, emphasizing reflection and technical skills like visual communication. As they progress, they engage with methodologies, enhancing understanding of processes and fostering critical thinking, collaboration, and problem-solving. "
        isRightImg={false}
        isLeftImg={false}
      />
      <CallToAction />
    </div>
  );
}
