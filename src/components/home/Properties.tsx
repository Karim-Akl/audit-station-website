import { HoverEffect } from "../ui/card-hover-effect";
import logo3 from "@../../../public/assets/furnture3.jpg";
import logo4 from "@../../../public/assets/furnture22.jpg";
import logo5 from "@../../../public/assets/furnture33.jpg";
import logo6 from "@../../../public/assets/furnture88.jpg";
import logo8 from "@../../../public/assets/furnture99.jpg";
import logo9 from "@../../../public/assets/furnture55.jpg";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-4 z-0">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    id: 1,
    title: "معدات المطاعم",
    description: "نشتري  معدات المطاعم بأفضل الأسعار",
    link: "#",
    image: logo4,
  },
  {
    id: 2,
    title: "الأجهزة الكهربائية",
    description: "نشتري الأجهزة الكهربائية بأفضل الأسعار",
    link: "#",
    image: logo8,
  },
  {
    id: 3,
    title: "مطابخ",
    description: "نشتري  المطابخ المستعملة بأسعار مناسبة",
    link: "#",
    image: logo5,
  },
  {
    id: 4,
    title: "غرف نوم",
    description: "نشتري غرف النوم بأسعار مناسبة",
    link: "#",
    image: logo9,
  },
  {
    id: 5,
    title: "مجالس",
    description: "شراء المجالس المستعملة  بأفضل الأسعار",
    link: "#",
    image: logo6,
  },
  {
    id: 6,
    title: "كراسي",
    description: "شراء الكراسي المستعملة بالسعر المناسب",
    link: "#",
    image: logo3,
  },
];
