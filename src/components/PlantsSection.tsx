import Link from "next/link";
import Image from "@/components/BlurImage";
import ScrollReveal from "./ScrollReveal";
import ArrowIcon from "./ArrowIcon";
import Carousel from "./Carousel";

const plants = [
  {
    unit: "Unit 01",
    name: "Devanahalli Plant",
    description:
      "well-established facility supporting North Bangalore for over a decade. Produces 6mm, 12mm, 20mm, 40mm aggregates and M-Sand, P-Sand, W-Sand with consistent output for residential and infrastructure projects.",
    image: "/images/plant-1.jpg",
  },
  {
    unit: "Unit 02",
    name: "Devanahalli Plant",
    description:
      "A state-of the art plant with up to 300 TPH capacity, designed for higher consistency and precision. Supplies the entire North Bangalore region with high-quality aggregates and sand for large-scale construction demand.",
    image: "/images/plant-2.jpg",
  },
  {
    unit: "Unit 03",
    name: "Vemgal Plant",
    description:
      "Strategically located to serve East Bangalore and nearby regions within a 20 km radius. Enables faster delivery to areas like Whitefield, KR Puram, Hoskote, and Kolar, ensuring efficient regional supply.",
    image: "/images/plant-3.jpg",
  },
];

export default function PlantsSection() {
  return (
    <section className="w-full bg-white px-6 md:px-[100px] py-16 md:py-[80px]">
      <div className="mx-auto max-w-[1240px] flex flex-col gap-10">
        <ScrollReveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="small-caps text-3xl sm:text-[40px] font-semibold leading-[1.1] text-[#2B3A2E]">
            Three Plants.
            <br />
            One Reliable Network
          </h2>
          <Link
            href="/plants"
            className="small-caps inline-flex items-center gap-3 bg-[var(--color-brand)] text-white text-base font-medium border border-[var(--color-brand)] px-5 py-3 hover:bg-white hover:text-[var(--color-brand)] transition-colors duration-300 shrink-0"
          >
            Our Plants
            <ArrowIcon />
          </Link>
        </ScrollReveal>

        <Carousel gridClass="lg:grid-cols-3" itemClass="w-[88%] sm:w-[60%]">
          {plants.map((plant, i) => (
            <div
              key={i}
              className="flex h-full flex-col gap-3 border border-[#E8DDD0] bg-white p-4 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-2.5 left-2.5 z-10 bg-[#F5F2EE] text-sm font-semibold text-[#2B3A2E] px-1.5 py-2">
                  {plant.unit}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="small-caps text-xl font-medium text-[#2B3A2E]">
                  {plant.name}
                </h3>
                <p className="text-sm leading-[140%] text-[#58534F]">
                  {plant.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
