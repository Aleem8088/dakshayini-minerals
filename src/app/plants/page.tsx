import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import PlantsShowcase from "@/components/PlantsShowcase";

export const metadata: Metadata = {
  title: "Our Plants | Dakshayini Minerals",
  description:
    "Three strategically located crushing plants delivering aggregates and manufactured sand with consistent quality across the Bangalore region.",
};

export default function PlantsPage() {
  return (
    <>
      <PageHero
        title="Built for Capacity. Positioned for Reach."
        subtitle="Three strategically located plants delivering 6mm, 12mm, 20mm, 40mm aggregates and M-Sand, P-Sand, W-Sand with consistent quality. From a legacy unit to a 300 TPH state of the art facility, our operations are designed for scale, efficiency, and reliable supply."
        image="/images/products-hero.jpg"
        overlayClass="bg-black/80"
      />

      {/* Overview */}
      <section className="w-full bg-[var(--color-cream)] px-6 md:px-[100px] py-16 md:py-[120px]">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-10 lg:flex-row lg:gap-10">
          <ScrollReveal className="flex w-full flex-col gap-3 lg:w-[610px]">
            <h2 className="small-caps text-3xl sm:text-[40px] font-semibold leading-[1.2] text-[#2B3A2E]">
              Overview
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-base leading-[1.5] text-[#333]">
                Dakshayini Minerals is a trusted manufacturer of high-quality
                M-Sand and construction aggregates, serving the growing
                infrastructure and real estate needs of Bangalore. With a strong
                foundation in the mining and construction materials sector, the
                company brings years of hands-on experience, operational expertise,
                and a deep understanding of industry demands.
              </p>
              <p className="text-base leading-[1.5] text-[#333]">
                Backed by multiple strategically located plants and a commitment to
                consistent quality, Dakshayini Minerals has built a reputation for
                reliability, timely supply, and dependable service across a wide
                range of projects.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200} className="w-full lg:flex-1">
            <div className="h-[280px] w-full overflow-hidden sm:h-[400px] lg:h-[450px]">
              <img
                src="/images/about-overview.jpg"
                alt="Dakshayini Minerals plant operations"
                className="h-full w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <PlantsShowcase />
    </>
  );
}
