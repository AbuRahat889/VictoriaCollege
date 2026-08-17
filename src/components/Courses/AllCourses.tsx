import { courseData } from "@/constants/courseData";
import CourseCard from "./CourseCard";
import Heading from "../sheard/Heading";

export default function AllCourses() {
  const largeCard = courseData.find((c) => c.variant === "large");
  const mediumCards = courseData.filter((c) => c.variant === "medium");
  const tallCard = courseData.find((c) => c.variant === "tall");

  return (
    <div className="bg-[#030a2e] py-20 px-5 lg:px-10">
      <div className="container mx-auto">
        <Heading
          subtitle="/ ALL COURSES"
          title="Degree Courses"
          description="Join Victoria College of Arts and Design and experience exceptional teaching, cutting-edge facilities, and industry connections that prepare you for a rewarding creative career."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
          {/* Left */}
          <div>{largeCard && <CourseCard {...largeCard} />}</div>

          {/* Middle */}
          <div className="space-y-6">
            {mediumCards.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          {/* Right */}
          <div>{tallCard && <CourseCard {...tallCard} />}</div>
        </div>
      </div>
    </div>
  );
}
