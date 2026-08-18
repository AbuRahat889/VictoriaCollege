"use client";

import { useState } from "react";

type FAQItem = {
  title: string;
  content: string;
};

type FAQCategory = {
  title: string;
  faqs: FAQItem[];
};

export default function RequirementsFAQ({
  faqData,
}: {
  faqData: FAQCategory[];
}) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const activeFaqs = faqData?.[activeCategory]?.faqs ?? [];

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
    setOpenFaq(0);
  };

  return (
    <section className="pt-10 sm:pt-12 md:pt-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[270px_1fr] xl:grid-cols-[280px_1fr]">
          {/* Category Navigation */}
          <div className="flex flex-col w-full lg:w-72">
            {faqData?.map((category, index) => (
              <button
                key={category.title}
                type="button"
                onClick={() => handleCategoryChange(index)}
                className={`relative px-3 sm:px-4 py-4 text-left text-xs sm:text-base font-medium leading-6 transition-colors ${
                  activeCategory === index
                    ? "bg-[#a01b9b] text-white"
                    : "bg-[#040d3d] text-white hover:bg-[#0b1955]"
                }`}
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
                    <div
                      className="
                        bg-[#051251]
                        px-4 py-5
                        sm:px-5
                        text-gray-200
                        prose
                        prose-invert
                        max-w-none
                        prose-p:my-3
                        prose-li:my-2
                        prose-strong:text-white
                      "
                      dangerouslySetInnerHTML={{
                        __html: faq.content,
                      }}
                    />
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
