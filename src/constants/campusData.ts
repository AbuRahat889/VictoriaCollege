import Campus1 from "@/assets/sliderImages/Rectangle 188.webp";
import Campus2 from "@/assets/sliderImages/Rectangle 190.webp";
import Campus3 from "@/assets/sliderImages/Rectangle 191.webp";

export interface Campus {
  name: string;
  image: string;
}

export const campuses: Campus[] = [
  { name: "Canary Wharf Campus", image: Campus1.src },
  { name: "Greenwich Campus", image: Campus2.src },
  { name: "King's Cross Campus", image: Campus3.src },
];
