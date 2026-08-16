import Campus1 from "@/assets/sliderImages/Rectangle 188.png";
import Campus2 from "@/assets/sliderImages/Rectangle 190.png";
import Campus3 from "@/assets/sliderImages/Rectangle 191.png";

export interface Campus {
  name: string;
  image: string;
}

export const campuses: Campus[] = [
  { name: "Canary Wharf Campus", image: Campus1.src },
  { name: "Greenwich Campus", image: Campus2.src },
  { name: "King's Cross Campus", image: Campus3.src },
];
