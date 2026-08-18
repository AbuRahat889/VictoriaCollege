import course1 from "@/assets/courses/courseImage1.jpg";
import course2 from "@/assets/courses/courseImage2.jpg";
import course3 from "@/assets/courses/courseImage1.jpg";

type Course = {
  id: number;
  title: string;
  description: string;
};

export const COURSES_FAQ: Course[] = [
  {
    id: 1,
    title: "BA (Hons) Fashion Design",
    description:
      "This course introduces students to creative practice, focusing on theoretical, practical, and technical components. In early stages, students develop essential skills for academic success and personal growth, emphasizing reflection and technical skills like visual communication.",
  },
  {
    id: 2,
    title: "BA (Hons) Fashion Media and Marketing",
    description:
      "Students explore the business side of fashion, blending storytelling, brand strategy, and digital marketing to prepare for careers across media, PR, and marketing agencies.",
  },
  {
    id: 3,
    title: "BA (Hons) Graphic Design",
    description:
      "A hands-on programme covering typography, branding, and digital design, helping students build a portfolio that reflects both craft and conceptual thinking.",
  },
  {
    id: 4,
    title: "CertHE Business & Management",
    description:
      "A foundation-level qualification covering core business principles, giving students a springboard into further study or entry-level roles in management.",
  },
];

export const courseData = [
  {
    id: 1,
    image: course1,
    title: "BSc (Hons) Business Management",
    slug: "bsc-hons-business-management",
    description:
      "The BSc (Hons) in Business Management at Victoria College of Arts and Design blends creative thinking with real-world business skills.",
    school: "School of Business & Management",
    duration: "4 years",
    variant: "large",
    buttonColor: "secondary",
  },
  {
    id: 2,
    image: course2,
    title: "BA (Hons) Fashion Media & Marketing",
    slug: "ba-hons-fashion-media-marketing",
    description:
      "This programme provides students with a foundation in creative practice, integrating theoretical, practical, and technical elements.",
    school: "",
    duration: "",
    variant: "medium",
    buttonColor: "secondary",
  },
  {
    id: 3,
    image: course2,
    title: "BA (Hons) Fashion Media & Marketing",
    slug: "ba-hons-fashion-media-marketing",
    description:
      "This programme provides students with a foundation in creative practice, integrating theoretical, practical, and technical elements.",
    school: "",
    duration: "",
    variant: "medium",
    buttonColor: "secondary",
  },
  {
    id: 4,
    image: course3,
    title: "BSc (Hons) Business Management",
    slug: "bsc-hons-business-management",
    description:
      "This course introduces students to creative practice, focusing on theoretical, practical, and technical components. In early stages, students develop essential skills for academic success and personal growth.",
    school: "School of Business & Management",
    duration: "4 years",
    variant: "tall",
    buttonColor: "primary",
  },
] as const;
