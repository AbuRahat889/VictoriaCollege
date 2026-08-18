import course1 from "@/assets/courses/courseImage1.jpg";
import course2 from "@/assets/courses/courseImage2.jpg";
import course3 from "@/assets/courses/courseImage1.jpg";
// import { Award, Banknote, Calendar, Clock, MapPin } from "lucide-react";

type Course = {
  id: number;
  title: string;
  description: string;
};

// landing page courses faq data
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

// export const courseData = [
//   {
//     id: 1,
//     image: course1,
//     title: "BSc (Hons) Business Management",
//     slug: "bsc-hons-business-management",
//     description:
//       "The BSc (Hons) in Business Management at Victoria College of Arts and Design blends creative thinking with real-world business skills.",
//     school: "School of Business & Management",
//     duration: "4 years",
//     variant: "large",
//     buttonColor: "secondary",
//   },
//   {
//     id: 2,
//     image: course2,
//     title: "BA (Hons) Fashion Media & Marketing",
//     slug: "ba-hons-fashion-media-marketing",
//     description:
//       "This programme provides students with a foundation in creative practice, integrating theoretical, practical, and technical elements.",
//     school: "",
//     duration: "",
//     variant: "medium",
//     buttonColor: "secondary",
//   },
//   {
//     id: 3,
//     image: course2,
//     title: "BA (Hons) Fashion Media & Marketing",
//     slug: "ba-hons-fashion-media-marketing",
//     description:
//       "This programme provides students with a foundation in creative practice, integrating theoretical, practical, and technical elements.",
//     school: "",
//     duration: "",
//     variant: "medium",
//     buttonColor: "secondary",
//   },
//   {
//     id: 4,
//     image: course3,
//     title: "BSc (Hons) Business Management",
//     slug: "bsc-hons-business-management",
//     description:
//       "This course introduces students to creative practice, focusing on theoretical, practical, and technical components. In early stages, students develop essential skills for academic success and personal growth.",
//     school: "School of Business & Management",
//     duration: "4 years",
//     variant: "tall",
//     buttonColor: "primary",
//   },
// ] as const;

export const courseData = [
  {
    id: 1,
    slug: "bsc-hons-business-management",
    title: "BSc (Hons) Business Management",
    shortDescription:
      "The BSc (Hons) in Business Management at Victoria College of Arts and Design blends creative thinking with real-world business skills.",
    image: course1,
    school: "School of Business & Management",
    duration: "4 years",
    variant: "large",
    buttonColor: "secondary",

    courseInfo: {
      tabs: [
        {
          id: "overview",
          label: "Course Overview",
          heading: "Course Information",
          subheading:
            "Everything you need to know about this course at a glance",
          cards: [
            {
              icon: "Calendar",
              title: "Start Date",
              value: "November, February",
            },
            { icon: "Clock", title: "Duration", value: "4 Years" },
            { icon: "Clock", title: "Study Mode", value: "Full Time" },
            { icon: "MapPin", title: "Locations", value: "Canary Wharf" },
            { icon: "Banknote", title: "Tuition Fee (UK)", value: "£ 9535" },
            {
              icon: "Award",
              title: "Awarding Body",
              value: "Arts University Plymouth",
            },
          ],
        },
        {
          id: "structure",
          label: "Course Structure & Details",
          heading: "Course Structure",
          subheading: "How the course is organised across each year of study",
          cards: [
            {
              icon: "BookOpen",
              title: "Year 1",
              value: "Foundation Modules",
            },
            {
              icon: "BookOpen",
              title: "Year 2",
              value: "Core Specialisation",
            },
            {
              icon: "BookOpen",
              title: "Year 3",
              value: "Industry Placement",
            },
            {
              icon: "GraduationCap",
              title: "Year 4",
              value: "Final Major Project",
            },
            {
              icon: "Users",
              title: "Class Size",
              value: "Small Group Teaching",
            },
            {
              icon: "Clock",
              title: "Contact Hours",
              value: "12–16 hrs / week",
            },
          ],
        },
        {
          id: "admissions",
          label: "Admissions & Key Details",
          heading: "Admissions & Key Details",
          subheading: "What you need to apply and key entry requirements",
          cards: [
            {
              icon: "Award",
              title: "Entry Requirements",
              value: "UCAS Tariff 96+",
            },
            {
              icon: "Calendar",
              title: "Application Deadline",
              value: "UCAS January",
            },
            {
              icon: "Users",
              title: "Interview Required",
              value: "Portfolio Review",
            },
            { icon: "GraduationCap", title: "UCAS Code", value: "W231" },
            { icon: "MapPin", title: "Campus", value: "Canary Wharf" },
            {
              icon: "Banknote",
              title: "International Fee",
              value: "£ 14,500",
            },
          ],
        },
      ],
    },

    courseStructure: [
      {
        title: "Foundation Year",
        modules: [
          {
            title: "Fundamentals",
            code: "FD01",
            credits: "30 credits",
            description:
              "This course introduces students to creative practice, focusing on theoretical, practical, and technical components. In early stages, students develop essential skills for academic success and personal growth, emphasizing reflection and technical skills like visual communication.",
          },
          {
            title: "Thinking Through Making",
            code: "FD02",
            credits: "30 credits",
            description:
              "Students explore creative ideas through practical experimentation, developing their ability to think critically and creatively through making.",
          },
          {
            title: "Developing Specialist Practice",
            code: "FD03",
            credits: "30 credits",
            description:
              "This module develops specialist creative skills and encourages students to explore their chosen subject area through practical and theoretical work.",
          },
          {
            title: "Specialist Project",
            code: "FD04",
            credits: "30 credits",
            description:
              "Students complete an independent specialist project demonstrating the knowledge, skills, and creative development gained throughout the foundation year.",
          },
        ],
      },
      {
        title: "First Year",
        modules: [
          {
            title: "Creative Practice",
            code: "FY01",
            credits: "30 credits",
            description:
              "Students develop core creative and technical skills while exploring fundamental principles of their chosen discipline.",
          },
          {
            title: "Contextual Studies",
            code: "FY02",
            credits: "30 credits",
            description:
              "An introduction to the historical, cultural, and theoretical contexts that influence creative practice.",
          },
          {
            title: "Design Development",
            code: "FY03",
            credits: "30 credits",
            description:
              "Students develop ideas from initial concepts through experimentation, research, and practical development.",
          },
          {
            title: "Creative Project",
            code: "FY04",
            credits: "30 credits",
            description:
              "A practical project allowing students to apply the knowledge and skills developed during the first year.",
          },
        ],
      },
      {
        title: "Second Year",
        modules: [
          {
            title: "Advanced Creative Practice",
            code: "SY01",
            credits: "30 credits",
            description:
              "Students build advanced practical and conceptual skills while developing a stronger individual creative practice.",
          },
          {
            title: "Professional Practice",
            code: "SY02",
            credits: "30 credits",
            description:
              "Students explore professional environments, industry expectations, collaboration, and professional development.",
          },
          {
            title: "Research and Development",
            code: "SY03",
            credits: "30 credits",
            description:
              "Students undertake deeper research and use their findings to inform and develop creative projects.",
          },
          {
            title: "Major Project",
            code: "SY04",
            credits: "30 credits",
            description:
              "A substantial project that demonstrates the student's developing creative identity and professional capabilities.",
          },
        ],
      },
      {
        title: "Third Year",
        modules: [
          {
            title: "Independent Practice",
            code: "TY01",
            credits: "30 credits",
            description:
              "Students establish an independent creative practice and develop a distinctive approach to their chosen discipline.",
          },
          {
            title: "Industry Practice",
            code: "TY02",
            credits: "30 credits",
            description:
              "Students prepare for professional practice by engaging with industry-focused projects, collaboration, and professional standards.",
          },
          {
            title: "Final Research Project",
            code: "TY03",
            credits: "30 credits",
            description:
              "Students undertake an advanced research project that supports and informs their final creative work.",
          },
          {
            title: "Final Major Project",
            code: "TY04",
            credits: "30 credits",
            description:
              "The final major project brings together the student's creative, theoretical, and technical development into a substantial body of work.",
          },
        ],
      },
    ],

    faqs: [
      {
        title: "Entry Requirements",
        faqs: [
          {
            title: "Standard Academic Route",
            content: `
          <div class="space-y-4 text-base font-normal leading-6 text-primaryText">
            <p>
              72 UCAS tariff points (or above) or 60 Credit Ofqual qualification
              at Level 3
            </p>

            <p>
              • For international qualifications, ECCTIS (formerly NARIC) will
              be used to establish equivalence to their comparable level in the
              UK.
            </p>

            <p class="font-semibold text-white">
              All applicants must submit a personal 'portfolio', using any one
              of the following formats
            </p>

            <p>
              • A video or audio recording; using speech, animation, images, or
              any other appropriate content the candidate wishes. The video must
              be no less than one minute and no more than two minutes in length.
            </p>

            <p>
              • A digital portfolio of images and writing using Word, Canva,
              PowerPoint or any other suitable software of the applicant's
              choice.
            </p>

            <p>
              In the portfolio, applicants should clearly evidence and explain
              the reasons they wish to study their chosen subject and how they
              believe their studies can positively impact their lives in the
              future.
            </p>
          </div>
        `,
          },

          {
            title: "Non-standard Academic Route",
            content: `
          <p class="text-base font-normal leading-6 text-primaryText">
            Applicants who do not meet the standard academic requirements may be
            considered through an alternative route.
          </p>
        `,
          },

          {
            title: "Documents Required",
            content: `
          <p class="text-base font-normal leading-6 text-primaryText">
            Please provide all required academic and supporting documents with
            your application.
          </p>
        `,
          },
        ],
      },

      {
        title: "English Language Requirements",
        faqs: [
          {
            title: "English Language Requirements",
            content: `
          <p class="text-base font-normal leading-6 text-primaryText">
            Applicants must meet the required English language proficiency level
            for their chosen course.
          </p>
        `,
          },

          {
            title: "Accepted English Qualifications",
            content: `
          <p class="text-base font-normal leading-6 text-primaryText">
            Accepted qualifications may include IELTS or equivalent
            qualifications.
          </p>
        `,
          },
        ],
      },

      {
        title: "Additional Info",
        faqs: [
          {
            title: "Additional Information",
            content: `
          <p class="text-base font-normal leading-6 text-primaryText">
            Additional information about the application and admission process
            can be found here.
          </p>
        `,
          },

          {
            title: "Application Process",
            content: `
          <p class="text-base font-normal leading-6 text-primaryText">
            Please ensure that all required information and supporting documents
            are submitted with your application.
          </p>
        `,
          },
        ],
      },
    ],
  },

  {
    id: 2,
    slug: "ba-hons-fashion-media-marketing",
    title: "BA (Hons) Fashion Media & Marketing",
    shortDescription:
      "The BA (Hons) Fashion Media & Marketing programme equips students with creative, digital, and strategic marketing skills for the global fashion industry.",
    image: course2,
    school: "",
    duration: "",
    variant: "medium",
    buttonColor: "secondary",
    courseInfo: {
      tabs: [
        {
          id: "overview",
          label: "Course Overview",
          heading: "Course Information",
          subheading: "Everything you need to know about this course",
          cards: [
            {
              icon: "Calendar",
              title: "Start Date",
              value: "September, February",
            },
            {
              icon: "Clock",
              title: "Duration",
              value: "3 Years",
            },
            {
              icon: "GraduationCap",
              title: "Study Mode",
              value: "Full Time",
            },
            {
              icon: "MapPin",
              title: "Location",
              value: "Canary Wharf",
            },
            {
              icon: "Banknote",
              title: "Tuition Fee (UK)",
              value: "£9,535",
            },
            {
              icon: "Award",
              title: "Awarding Body",
              value: "Arts University Plymouth",
            },
          ],
        },
        {
          id: "structure",
          label: "Course Structure & Details",
          heading: "Course Structure",
          subheading: "A breakdown of each academic year",
          cards: [
            {
              icon: "BookOpen",
              title: "Year 1",
              value: "Fashion Foundations",
            },
            {
              icon: "BookOpen",
              title: "Year 2",
              value: "Brand & Media Strategy",
            },
            {
              icon: "GraduationCap",
              title: "Year 3",
              value: "Industry Project",
            },
            {
              icon: "Users",
              title: "Teaching Style",
              value: "Studio & Workshops",
            },
            {
              icon: "Clock",
              title: "Contact Hours",
              value: "14–18 hrs/week",
            },
            {
              icon: "Award",
              title: "Assessment",
              value: "Coursework & Projects",
            },
          ],
        },
        {
          id: "admissions",
          label: "Admissions & Key Details",
          heading: "Admissions",
          subheading: "Entry requirements and application information",
          cards: [
            {
              icon: "Award",
              title: "Entry Requirements",
              value: "UCAS Tariff 96+",
            },
            {
              icon: "Calendar",
              title: "Application Deadline",
              value: "UCAS January",
            },
            {
              icon: "Users",
              title: "Portfolio",
              value: "Required",
            },
            {
              icon: "GraduationCap",
              title: "UCAS Code",
              value: "FM21",
            },
            {
              icon: "MapPin",
              title: "Campus",
              value: "Canary Wharf",
            },
            {
              icon: "Banknote",
              title: "International Fee",
              value: "£14,500",
            },
          ],
        },
      ],
    },

    courseStructure: [
      {
        title: "First Year",
        modules: [
          {
            title: "Introduction to Fashion Media",
            code: "FM101",
            credits: "20 credits",
            description:
              "Explore the fundamentals of fashion communication, media channels, and creative storytelling.",
          },
          {
            title: "Visual Communication",
            code: "FM102",
            credits: "20 credits",
            description:
              "Develop visual design skills using photography, typography, and digital media.",
          },
          {
            title: "Fashion Culture",
            code: "FM103",
            credits: "20 credits",
            description:
              "Study the cultural and historical influences that shape the global fashion industry.",
          },
          {
            title: "Digital Marketing Essentials",
            code: "FM104",
            credits: "20 credits",
            description:
              "Learn the foundations of digital marketing, branding, and online consumer engagement.",
          },
          {
            title: "Creative Projects",
            code: "FM105",
            credits: "20 credits",
            description:
              "Apply creative thinking through collaborative fashion media projects.",
          },
          {
            title: "Professional Skills",
            code: "FM106",
            credits: "20 credits",
            description:
              "Develop communication, presentation, and teamwork skills for the creative industries.",
          },
        ],
      },
      {
        title: "Second Year",
        modules: [
          {
            title: "Fashion Branding",
            code: "FM201",
            credits: "20 credits",
            description:
              "Understand branding strategies and how fashion brands build customer loyalty.",
          },
          {
            title: "Content Creation",
            code: "FM202",
            credits: "20 credits",
            description:
              "Create engaging multimedia content for digital fashion campaigns.",
          },
          {
            title: "Consumer Behaviour",
            code: "FM203",
            credits: "20 credits",
            description:
              "Analyse consumer trends and purchasing behaviour within the fashion sector.",
          },
          {
            title: "Social Media Marketing",
            code: "FM204",
            credits: "20 credits",
            description:
              "Develop campaigns across leading social media platforms using analytics and strategy.",
          },
          {
            title: "Industry Collaboration",
            code: "FM205",
            credits: "20 credits",
            description:
              "Work on live projects with fashion businesses and creative partners.",
          },
          {
            title: "Research Methods",
            code: "FM206",
            credits: "20 credits",
            description:
              "Learn qualitative and quantitative research techniques for marketing.",
          },
        ],
      },
      {
        title: "Third Year",
        modules: [
          {
            title: "Fashion Campaign",
            code: "FM301",
            credits: "20 credits",
            description:
              "Design and deliver an integrated marketing campaign for a fashion brand.",
          },
          {
            title: "Luxury Brand Management",
            code: "FM302",
            credits: "20 credits",
            description:
              "Examine the strategies and challenges of managing premium and luxury fashion brands.",
          },
          {
            title: "Digital Innovation",
            code: "FM303",
            credits: "20 credits",
            description:
              "Explore emerging technologies including AI, AR, and e-commerce innovations.",
          },
          {
            title: "Final Major Project",
            code: "FM304",
            credits: "40 credits",
            description:
              "Complete an independent project showcasing your creative, marketing, and strategic expertise.",
          },
          {
            title: "Professional Portfolio",
            code: "FM305",
            credits: "20 credits",
            description:
              "Develop a professional portfolio and prepare for employment in the fashion industry.",
          },
        ],
      },
    ],

    faqs: [
      {
        title: "Entry Requirements",
        faqs: [
          {
            title: "Academic Requirements",
            content: `
          <div class="space-y-4 text-base font-normal leading-6 text-primaryText">
            <p>
              Applicants should have at least 96 UCAS tariff points (or above),
              or an equivalent Level 3 qualification such as a BTEC, Access
              Diploma, or comparable Ofqual-regulated qualification.
            </p>
            <p>
              • For international qualifications, ECCTIS (formerly NARIC) will
              be used to establish equivalence to their comparable level in the
              UK, ensuring all applicants are assessed fairly regardless of
              where they studied.
            </p>
          </div>
        `,
          },
          {
            title: "Portfolio",
            content: `
          <div class="space-y-4 text-base font-normal leading-6 text-primaryText">
            <p class="font-semibold text-white">
              All applicants are expected to submit a digital portfolio as part
              of their application.
            </p>
            <p>
              The portfolio should demonstrate creativity, strong communication
              skills, and a genuine interest in fashion, using images, writing,
              or any other suitable format of the applicant's choice.
            </p>
          </div>
        `,
          },
        ],
      },
      {
        title: "English Language Requirements",
        faqs: [
          {
            title: "IELTS",
            content: `
          <div class="space-y-4 text-base font-normal leading-6 text-primaryText">
            <p>
              An IELTS score of 6.0 overall (with no individual component
              below 5.5) is required, or an equivalent English language
              qualification recognised by the institution.
            </p>
            <p>
              Applicants who do not meet this requirement may be offered the
              opportunity to complete a pre-sessional English course before
              starting their main programme.
            </p>
          </div>
        `,
          },
        ],
      },
      {
        title: "Course Information",
        faqs: [
          {
            title: "Work Placement",
            content: `
          <div class="space-y-4 text-base font-normal leading-6 text-primaryText">
            <p>
              Students have the opportunity to undertake industry placements
              throughout their course, working directly alongside established
              fashion brands and agencies.
            </p>
            <p>
              These placements are designed to build practical, real-world
              experience and help students form valuable industry connections
              before graduation.
            </p>
          </div>
        `,
          },
          {
            title: "Career Opportunities",
            content: `
          <div class="space-y-4 text-base font-normal leading-6 text-primaryText">
            <p>
              Graduates go on to pursue careers across fashion marketing, brand
              management, social media, PR, and digital content creation.
            </p>
            <p>
              • Other popular routes include creative direction, styling,
              buying, and roles within fashion journalism and communications.
            </p>
          </div>
        `,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "ba-hons-fashion-media-marketing-2",
    title: "BA (Hons) Fashion Media & Marketing",
    shortDescription:
      "Develop creative, digital, and strategic marketing skills while exploring branding, fashion communication, and media production for the global fashion industry.",
    image: course2,
    school: "",
    duration: "",
    variant: "medium",
    buttonColor: "secondary",

    courseInfo: {
      tabs: [
        {
          id: "overview",
          label: "Course Overview",
          heading: "Course Information",
          subheading: "Everything you need to know about this course",
          cards: [
            {
              icon: "Calendar",
              title: "Start Date",
              value: "September, February",
            },
            {
              icon: "Clock",
              title: "Duration",
              value: "3 Years",
            },
            {
              icon: "Clock",
              title: "Study Mode",
              value: "Full Time",
            },
            {
              icon: "MapPin",
              title: "Location",
              value: "Canary Wharf",
            },
            {
              icon: "Banknote",
              title: "Tuition Fee (UK)",
              value: "£9,535",
            },
            {
              icon: "Award",
              title: "Awarding Body",
              value: "Arts University Plymouth",
            },
          ],
        },
        {
          id: "structure",
          label: "Course Structure & Details",
          heading: "Course Structure",
          subheading: "A breakdown of each academic year",
          cards: [
            {
              icon: "BookOpen",
              title: "Year 1",
              value: "Fashion Foundations",
            },
            {
              icon: "BookOpen",
              title: "Year 2",
              value: "Brand & Media Strategy",
            },
            {
              icon: "GraduationCap",
              title: "Year 3",
              value: "Industry Project",
            },
            {
              icon: "Users",
              title: "Teaching Style",
              value: "Studio & Workshops",
            },
            {
              icon: "Clock",
              title: "Contact Hours",
              value: "14–18 hrs/week",
            },
            {
              icon: "Award",
              title: "Assessment",
              value: "Coursework & Projects",
            },
          ],
        },
        {
          id: "admissions",
          label: "Admissions & Key Details",
          heading: "Admissions",
          subheading: "Entry requirements and application information",
          cards: [
            {
              icon: "Award",
              title: "Entry Requirements",
              value: "UCAS Tariff 96+",
            },
            {
              icon: "Calendar",
              title: "Application Deadline",
              value: "UCAS January",
            },
            {
              icon: "Users",
              title: "Portfolio",
              value: "Required",
            },
            {
              icon: "GraduationCap",
              title: "UCAS Code",
              value: "FM21",
            },
            {
              icon: "MapPin",
              title: "Campus",
              value: "Canary Wharf",
            },
            {
              icon: "Banknote",
              title: "International Fee",
              value: "£14,500",
            },
          ],
        },
      ],
    },

    courseStructure: [
      {
        title: "First Year",
        modules: [
          {
            title: "Introduction to Fashion Media",
            code: "FM101",
            credits: "20 credits",
            description:
              "Introduction to fashion communication, branding, and digital storytelling.",
          },
          {
            title: "Creative Studio",
            code: "FM102",
            credits: "20 credits",
            description:
              "Develop practical creative skills through studio-based learning.",
          },
        ],
      },
      {
        title: "Second Year",
        modules: [
          {
            title: "Fashion Marketing",
            code: "FM201",
            credits: "20 credits",
            description:
              "Explore marketing strategies used by international fashion brands.",
          },
          {
            title: "Content Production",
            code: "FM202",
            credits: "20 credits",
            description:
              "Create professional digital content for fashion campaigns.",
          },
        ],
      },
      {
        title: "Third Year",
        modules: [
          {
            title: "Final Major Project",
            code: "FM301",
            credits: "40 credits",
            description:
              "Produce a professional fashion marketing campaign and portfolio.",
          },
        ],
      },
    ],

    faqs: [
      {
        title: "Entry Requirements",
        faqs: [
          {
            title: "Academic Requirements",
            content: `
          <div class="space-y-4 text-base font-normal leading-6 text-primaryText">
            <p>
              • 96 UCAS tariff points or an equivalent Level 3 qualification
              are required to be considered for this course.
            </p>
            <p>
              • For international qualifications, ECCTIS (formerly NARIC) will
              be used to establish equivalence to their comparable level in
              the UK.
            </p>
          </div>
        `,
          },
        ],
      },
      {
        title: "English Language",
        faqs: [
          {
            title: "IELTS",
            content: `
          <div class="space-y-4 text-base font-normal leading-6 text-primaryText">
            <p>
              • IELTS 6.0 overall, with no individual component below 5.5, is
              required for entry onto this course.
            </p>
            <p>
              • Equivalent English language qualifications recognised by the
              institution are also accepted.
            </p>
          </div>
        `,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "bsc-hons-business-management-2",
    title: "BSc (Hons) Business Management",
    shortDescription:
      "Build leadership, entrepreneurial, and strategic business skills through practical learning, real-world projects, and industry engagement.",
    image: course3,
    school: "School of Business & Management",
    duration: "4 Years",
    variant: "tall",
    buttonColor: "primary",

    courseInfo: {
      tabs: [
        {
          id: "overview",
          label: "Course Overview",
          heading: "Course Information",
          subheading: "Everything you need to know about this course",
          cards: [
            {
              icon: "Calendar",
              title: "Start Date",
              value: "November, February",
            },
            {
              icon: "Clock",
              title: "Duration",
              value: "4 Years",
            },
            {
              icon: "Clock",
              title: "Study Mode",
              value: "Full Time",
            },
            {
              icon: "MapPin",
              title: "Campus",
              value: "Canary Wharf",
            },
            {
              icon: "Banknote",
              title: "Tuition Fee (UK)",
              value: "£9,535",
            },
            {
              icon: "Award",
              title: "Awarding Body",
              value: "Arts University Plymouth",
            },
          ],
        },
        {
          id: "structure",
          heading: "Course Structure & Details",
          label: "Course Structure",
          subheading: "A breakdown of each academic year",
          cards: [
            {
              icon: "BookOpen",
              title: "Year 1",
              value: "Fashion Foundations",
            },
            {
              icon: "BookOpen",
              title: "Year 2",
              value: "Brand & Media Strategy",
            },
            {
              icon: "GraduationCap",
              title: "Year 3",
              value: "Industry Project",
            },
            {
              icon: "Users",
              title: "Teaching Style",
              value: "Studio & Workshops",
            },
            {
              icon: "Clock",
              title: "Contact Hours",
              value: "14–18 hrs/week",
            },
            {
              icon: "Award",
              title: "Assessment",
              value: "Coursework & Projects",
            },
          ],
        },
        {
          id: "admissions",
          heading: "Admissions & Key Details",
          label: "Admissions",
          subheading: "Entry requirements and application information",
          cards: [
            {
              icon: "Award",
              title: "Entry Requirements",
              value: "UCAS Tariff 96+",
            },
            {
              icon: "Calendar",
              title: "Application Deadline",
              value: "UCAS January",
            },
            {
              icon: "Users",
              title: "Portfolio",
              value: "Required",
            },
            {
              icon: "GraduationCap",
              title: "UCAS Code",
              value: "FM21",
            },
            {
              icon: "MapPin",
              title: "Campus",
              value: "Canary Wharf",
            },
            {
              icon: "Banknote",
              title: "International Fee",
              value: "£14,500",
            },
          ],
        },
      ],
    },

    courseStructure: [
      {
        title: "Foundation Year",
        modules: [
          {
            title: "Academic Skills",
            code: "BM001",
            credits: "30 credits",
            description:
              "Develop academic writing, research, and communication skills.",
          },
          {
            title: "Introduction to Business",
            code: "BM002",
            credits: "30 credits",
            description:
              "Explore the fundamentals of business, management, and entrepreneurship.",
          },
        ],
      },
      {
        title: "First Year",
        modules: [
          {
            title: "Business Environment",
            code: "BM101",
            credits: "30 credits",
            description:
              "Understand modern business operations and global markets.",
          },
          {
            title: "Marketing Principles",
            code: "BM102",
            credits: "30 credits",
            description:
              "Learn the foundations of consumer behaviour and marketing.",
          },
        ],
      },
      {
        title: "Second Year",
        modules: [
          {
            title: "Strategic Management",
            code: "BM201",
            credits: "30 credits",
            description:
              "Develop strategic planning and organisational leadership skills.",
          },
          {
            title: "Business Finance",
            code: "BM202",
            credits: "30 credits",
            description:
              "Learn financial management, budgeting, and investment analysis.",
          },
        ],
      },
      {
        title: "Third Year",
        modules: [
          {
            title: "Innovation & Entrepreneurship",
            code: "BM301",
            credits: "30 credits",
            description:
              "Explore innovation, start-up creation, and entrepreneurial leadership.",
          },
          {
            title: "Final Major Project",
            code: "BM302",
            credits: "30 credits",
            description:
              "Complete an independent research or consultancy project.",
          },
        ],
      },
    ],

    faqs: [
      {
        title: "Entry Requirements",
        faqs: [
          {
            title: "Academic Requirements",
            content: `
          <div class="space-y-4 text-base font-normal leading-6 text-primaryText">
            <p>
              72 UCAS tariff points (or above) or an equivalent Level 3
              qualification are required to be considered for this course.
            </p>
            <p>
              • For international qualifications, ECCTIS (formerly NARIC) will
              be used to establish equivalence to their comparable level in
              the UK.
            </p>
          </div>
        `,
          },
          {
            title: "Non-standard Applicants",
            content: `
          <div class="space-y-4 text-base font-normal leading-6 text-primaryText">
            <p>
              Applicants who do not meet the standard academic requirements
              may still be considered through an alternative entry route.
            </p>
            <p>
              • Relevant work experience, a strong personal statement, or
              an interview may be taken into account as part of this
              assessment.
            </p>
          </div>
        `,
          },
        ],
      },
      {
        title: "English Language",
        faqs: [
          {
            title: "English Requirements",
            content: `
          <div class="space-y-4 text-base font-normal leading-6 text-primaryText">
            <p>
              IELTS 6.0 overall, with no individual band below 5.5, or an
              equivalent English language qualification is required for entry.
            </p>
            <p>
              Applicants who do not meet this requirement may be offered a
              pre-sessional English course prior to starting their main
              programme.
            </p>
          </div>
        `,
          },
          {
            title: "Accepted Qualifications",
            content: `
          <div class="space-y-4 text-base font-normal leading-6 text-primaryText">
            <p>
              Alongside IELTS, other recognised English qualifications such as
              TOEFL, PTE Academic, or Cambridge English exams may be accepted.
            </p>
            <p>
              • Applicants who completed a previous degree taught fully in
              English may also be exempt from providing a separate test score.
            </p>
          </div>
        `,
          },
        ],
      },
      {
        title: "Career Opportunities",
        faqs: [
          {
            title: "Graduate Careers",
            content: `
          <div class="space-y-4 text-base font-normal leading-6 text-primaryText">
            <p>
              Graduates can pursue careers in management, consulting,
              marketing, finance, entrepreneurship, and project management.
            </p>
            <p>
              • Many graduates also go on to further postgraduate study or
              take up roles in related fields such as operations and business
              development.
            </p>
          </div>
        `,
          },
          {
            title: "Industry Support",
            content: `
          <div class="space-y-4 text-base font-normal leading-6 text-primaryText">
            <p>
              Students benefit from career guidance, networking events, and
              opportunities to connect with industry professionals throughout
              their studies.
            </p>
            <p>
              • Placement and internship opportunities are also available to
              help build practical experience before graduation.
            </p>
          </div>
        `,
          },
        ],
      },
    ],
  },
] as const;
