import RequirementsFAQ from "./Faqs";

export default function FaqSection({ faqData }: { faqData: any }) {
  return (
    <div className="container mx-auto px-5 md:px-0 py-10 md:py-20">
      <div className="text-center">
        <div className="flex-1">
          <h2 className="text-primaryText text-3xl font-semibold leading-10">
            Admissions & Key Details
          </h2>
        </div>
        <p className="text-white text-base font-normal leading-6 max-w-3xl mx-auto mt-2.5">
          Everything you need to know about applying and studying
        </p>
      </div>
      <RequirementsFAQ faqData={faqData} />
    </div>
  );
}
