import Button from "../ui/button";
import { MediaButton } from "../ui/icon";

export default function DownloadCenter() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-14 py-8 sm:py-10 md:py-12">
      <div className="bg-[#040d3d] p-5 sm:p-6 md:p-7.5 rounded-lg flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        {/* Content */}
        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-center">
          {/* Icon */}
          <div className="bg-[#384584] h-16 w-16 sm:h-20 sm:w-20 md:h-22.25 md:w-22.25 shrink-0 rounded-full flex items-center justify-center">
            <MediaButton type="download" />
          </div>

          {/* Text */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold leading-tight text-primaryText">
              Course Specification
            </h2>

            <p className="mt-2 sm:mt-3 text-sm sm:text-base font-normal leading-6 sm:leading-7 text-primaryText">
              Download the full course specification for detailed information.
            </p>
          </div>
        </div>

        {/* Button */}
        <Button className="w-full md:w-auto shrink-0">Download PDF</Button>
      </div>
    </section>
  );
}
