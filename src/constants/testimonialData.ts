import Student1 from "@/assets/testimonial/testimonialImage3.png";
import Student2 from "@/assets/testimonial/testimonialImage2.png";
import Student3 from "@/assets/testimonial/testimonialImage1.png";

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Daniel Karen",
    role: "Student of VCAD Borough campus",
    quote:
      "Our team at Victoria College of Arts and Design is passionate about creating innovative projects and generating new ideas. We work with a variety of experts and esteemed companies using a collaborative approach. Located in London's Design District, we have valuable connections within our industry.",
    image: Student1.src,
  },
  {
    name: "Emma Wright",
    role: "Student of VCAD Canary Wharf campus",
    quote:
      "The hands-on approach here shaped how I think about design entirely. Every project felt like a real-world brief, and the tutors pushed us to defend our ideas with confidence and clarity.",
    image: Student2.src,
  },
  {
    name: "Liam Cole",
    role: "Student of VCAD Greenwich campus",
    quote:
      "Being surrounded by such a collaborative community made all the difference. I built connections here that turned into my first internship, and the studio culture kept me motivated every day.",
    image: Student3.src,
  },
];
