"use client";

import { useState } from "react";

const faqCategories = [
  {
    title: "Entry Requirements",
    faqs: [
      {
        title: "Standard Academic Route",
        content: (
          <div className="space-y-4 text-base font-normal leading-6 text-primaryText">
            <p>
              72 UCAS tariff points (or above) or 60 Credit Ofqual qualification
              at Level 3
            </p>

            <p>
              • For international qualifications, ECCTIS (formerly NARIC) will
              be used to establish equivalence to their comparable level in the
              UK.
            </p>

            <p className="font-semibold text-white">
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
        ),
      },
      {
        title: "Non-standard Academic Route",
        content: (
          <p className="text-base font-normal leading-6 text-primaryText">
            Applicants who do not meet the standard academic requirements may be
            considered through an alternative route.
          </p>
        ),
      },
      {
        title: "Documents Required",
        content: (
          <p className="text-base font-normal leading-6 text-primaryText">
            Please provide all required academic and supporting documents with
            your application.
          </p>
        ),
      },
    ],
  },

  {
    title: "English Language Requirements",
    faqs: [
      {
        title: "English Language Requirements",
        content: (
          <p className="text-base font-normal leading-6 text-primaryText">
            Applicants must meet the required English language proficiency level
            for their chosen course.
          </p>
        ),
      },
      {
        title: "Accepted English Qualifications",
        content: (
          <p className="text-base font-normal leading-6 text-primaryText">
            Accepted qualifications may include IELTS or equivalent
            qualifications.
          </p>
        ),
      },
    ],
  },

  {
    title: "Additional Info",
    faqs: [
      {
        title: "Additional Information",
        content: (
          <p className="text-base font-normal leading-6 text-primaryText">
            Additional information about the application and admission process
            can be found here.
          </p>
        ),
      },
      {
        title: "Application Process",
        content: (
          <p className="text-base font-normal leading-6 text-primaryText">
            Please ensure that all required information and supporting documents
            are submitted with your application.
          </p>
        ),
      },
    ],
  },
];

export default function RequirementsFAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const activeFaqs = faqCategories[activeCategory].faqs;

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);

    // Open first FAQ of the newly selected category
    setOpenFaq(0);
  };

  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[270px_1fr] xl:grid-cols-[280px_1fr]">
          {/* Category Navigation */}
          <div className="flex flex-col w-72">
            {faqCategories.map((category, index) => (
              <button
                key={category.title}
                type="button"
                onClick={() => handleCategoryChange(index)}
                className={`relative px-3 sm:px-4 py-4 text-left text-xs sm:text-base font-medium leading-6 transition-colors ${activeCategory === index ? "bg-[#a01b9b] text-white" : "bg-[#040d3d] text-white hover:bg-[#0b1955]"}`}
              >
                / {category.title}
                {activeCategory === index && (
                  <span className="absolute right-0 top-5 hidden border-y-10 border-r-12 border-y-transparent border-r-[#030A2E] sm:block" />
                )}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {activeFaqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={faq.title}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="bg-[#071348] p-6 text-lg font-semibold leading-7 text-primaryText w-full flex justify-between items-center"
                  >
                    <span>{faq.title}</span>

                    <span className="shrink-0 text-2xl font-light">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="bg-[#051251] px-4 py-4 sm:px-5 sm:py-5">
                      {faq.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
