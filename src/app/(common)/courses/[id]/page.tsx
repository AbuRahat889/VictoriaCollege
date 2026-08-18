"use client";

import CourseInfoSection from "@/components/Courses/CourseInfoSection";
import CallToAction from "@/components/CoursesDetails/CallToAction";
import CourseStructure from "@/components/CoursesDetails/CourseStructure";
import DownloadCenter from "@/components/CoursesDetails/DownloadCenter";
import FaqSection from "@/components/CoursesDetails/FaqSection";
import Breadcrumb from "@/components/sheard/Breadcrumb";
import { courseData } from "@/constants/courseData";
import { CourseInfoSectionProps } from "@/types/courseType";
import { useParams } from "next/navigation";

export default function page() {
  const params = useParams();
  const courseSlug = params.id;
  const courseInfo = courseData.find((course) => course.slug === courseSlug);
  return (
    <div className="bg-[#030a2e]">
      <Breadcrumb
        currentPage="Courses Details Page"
        title={courseInfo?.title ?? ""}
        description={courseInfo?.shortDescription ?? ""}
        isRightImg={false}
        isLeftImg={false}
      />
      <CourseInfoSection
        courseInfo={courseInfo?.courseInfo as CourseInfoSectionProps}
      />
      <CourseStructure courseStructure={courseInfo?.courseStructure as any} />
      <FaqSection faqData={courseInfo?.faqs as any} />
      <DownloadCenter />
      <CallToAction />
    </div>
  );
}
