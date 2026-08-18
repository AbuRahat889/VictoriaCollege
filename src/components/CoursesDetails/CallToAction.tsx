import bgImage from "@/assets/callToAction.png";
import Button from "../ui/button";

export default function CallToAction() {
  return (
    <div className="container mx-auto px-2 md:px-0 py-10 md:py-20">
      <section
        className=" px-4 sm:px-6 lg:px-8py-8 sm:py-14 md:py-17"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-2xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold leading-tight md:leading-10 text-primaryText">
            Ready to Apply?
          </h1>

          <p className="mt-3 px-2 text-sm sm:text-base leading-6 sm:leading-7 text-primaryText">
            Take the next step in your creative journey and join Victoria
            College of Arts and Design.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <Button className="w-full sm:w-auto">Apply Now</Button>

            <Button className="w-full sm:w-auto bg-primary border-none hover:bg-primary">
              Get more info
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
