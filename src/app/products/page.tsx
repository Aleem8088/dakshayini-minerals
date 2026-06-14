import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductsCatalog from "@/components/ProductsCatalog";

export const metadata: Metadata = {
  title: "Our Products | Dakshayini Minerals",
  description:
    "Engineered aggregates and manufactured sand — M-Sand, P-Sand, W-Sand, GSB and Wet Mix Macadam — graded for consistent construction performance.",
};

const useCases = [
  { title: "RCC and structural concrete", icon: "/icons/puse-rcc.svg" },
  { title: "Foundations and load-bearing elements", icon: "/icons/puse-foundation.svg" },
  { title: "Road base and sub-base layers", icon: "/icons/puse-roadbase.svg" },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Precision Graded Materials for Structural Integrity"
        subtitle="Engineered aggregates and sand products for consistent construction performance."
        image="/images/products-hero.jpg"
        overlayClass="bg-black/80"
      />

      {/* Use cases */}
      <section className="w-full bg-white px-6 md:px-[100px] py-10 md:py-[40px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-5 sm:grid-cols-3">
          {useCases.map((u, i) => (
            <div
              key={i}
              className="flex min-h-[148px] flex-col gap-3 border border-[#D7D7D7] bg-white p-6"
            >
              <img src={u.icon} alt="" className="h-10 w-10" />
              <p className="small-caps text-xl font-medium text-[#444E46]">{u.title}</p>
            </div>
          ))}
        </div>
      </section>

      <ProductsCatalog />
    </>
  );
}
