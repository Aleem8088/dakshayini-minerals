import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "Our Process | Dakshayini Minerals",
  description:
    "Our end-to-end production process — from certified quarries to quality-verified dispatch — delivering precision-graded aggregates and manufactured sand.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="Our Process"
        subtitle="Every grain of M-Sand and aggregate we produce goes through a strict, end-to-end process from certified quarries to your construction site."
        image="/images/products-hero.jpg"
        overlayClass="bg-black/80"
      />

      <section className="w-full bg-[var(--color-cream)] px-6 md:px-[100px] py-16 md:py-[100px]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-12 md:gap-20">
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-5">
            <h2 className="small-caps text-3xl sm:text-[40px] font-semibold leading-[1.1] text-[#2B3A2E] lg:w-[715px]">
              From Rock to Ready Material
            </h2>
            <p className="text-base leading-[1.5] text-[#58534F] lg:max-w-[505px] lg:flex-1 lg:self-center">
              Our end to end production process is designed for precision,
              efficiency, and consistent output from extraction at the quarry face
              to quality verified dispatch.
            </p>
          </div>

          <ProcessSteps />
        </div>
      </section>
    </>
  );
}
