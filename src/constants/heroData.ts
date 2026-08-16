import Image1 from "@/assets/heroImage/ayo-ogunseinde.png";
import Image2 from "@/assets/heroImage/ahmed-carter.png";
import Image3 from "@/assets/heroImage/kelly-sikkema.png";
import Image4 from "@/assets/heroImage/molly-mears.png";
import { Photo, Tag } from "@/types/heroType";

export const photos: Photo[] = [
  {
    src: Image1.src,
    alt: "Fashion model with windblown hair",
    className:
      "left-[4%] top-[2%] w-[284px] h-[417px] border-2 border-primary z-99",
  },
  {
    src: Image2.src,
    alt: "Model posing in emerald dress",
    className: "left-[46%] top-0 w-[258px] h-[377px] z-99",
  },
  {
    src: Image4.src,
    alt: "Couple wearing sunglasses",
    className: "left-[22%] top-[42.5%] w-[230px] h-[337px] z-10",
  },
  {
    src: Image3.src,
    alt: "Red accessories still life",
    className: "left-[56%] top-[33%] w-[281px] h-[411px]",
  },
];

export const tags: Tag[] = [
  {
    label: "Fashion",
    className:
      "left-[-1%] top-[6%] -rotate-[18deg] bg-[#ff379e] text-white z-999",
  },
  {
    label: "Media",
    className:
      "left-[2%] top-[47%] rotate-[19deg] bg-[#00ffd2] text-[#061665] z-999",
  },
  {
    label: "Graphic Design",
    className:
      "left-[27%] top-[35%] -rotate-[15deg] bg-[#061665] text-[#00ffd2] z-999",
  },
  {
    label: "Photography",
    className:
      "right-[16%] top-[3%] rotate-[15deg] bg-[#e018e0] text-white z-999",
  },
  {
    label: "Business",
    className:
      "left-[70%] top-[30%] rotate-[19deg] bg-[#061665] text-white z-999",
  },
  {
    label: "Management",
    className:
      "left-[8%] top-[70%] -rotate-[3deg] bg-[#061665] text-[#e018e0] z-999",
  },
  {
    label: "Marketing",
    className:
      "left-[43%] top-[75%] -rotate-[4deg] bg-[#7cc4f8] text-white z-999",
  },
];
