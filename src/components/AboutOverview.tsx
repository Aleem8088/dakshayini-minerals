import Link from "next/link";
import Image from "@/components/BlurImage";
import ScrollReveal from "./ScrollReveal";
import ArrowIcon from "./ArrowIcon";

export default function AboutOverview() {
  return (
    <section className="w-full bg-[var(--color-cream)] px-6 md:px-[100px] py-16 md:py-[80px]">
      <div className="mx-auto max-w-[1240px] flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[80px]">
        <ScrollReveal className="flex w-full flex-col gap-10 lg:w-[610px]">
          <div className="flex flex-col gap-3">
            <h2 className="small-caps text-3xl sm:text-[40px] font-semibold leading-[1.2] text-[#2B3A2E]">
              About Us
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-base leading-relaxed text-[var(--color-text)]">
              Dakshayini operates as a fully integrated aggregates and sand
              processing supplier, delivering materials engineered for structural
              reliability. Our production systems combine controlled crushing,
              screening, and washing processes to ensure uniform grading, low
              impurities, and consistent performance across batches.
            </p>
            <p className="text-base leading-relaxed text-[var(--color-text)]">
              We support RCC, roadworks, masonry, and large-scale infrastructure
              projects, with the capacity to meet both bulk and continuous supply
              requirements.
            </p>
          </div>

          <div>
            <Link
              href="/about"
              className="small-caps inline-flex items-center gap-3 bg-[var(--color-brand)] text-white text-base font-medium border border-[var(--color-brand)] px-5 py-3 hover:bg-white hover:text-[var(--color-brand)] transition-colors duration-300"
            >
              Read More
              <ArrowIcon />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200} className="w-full lg:w-[550px]">
          <div className="relative h-[320px] sm:h-[420px] lg:h-[640px] overflow-hidden">
            <Image
              src="/images/about-overview.jpg"
              alt="Dakshayani Minerals crushing plant"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 550px"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
