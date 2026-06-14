"use client";

import { useState } from "react";
import Image from "@/components/BlurImage";

type Application = { title: string; desc: string; image: string };
type Product = {
  id: string;
  tab: string;
  title: string;
  subtitle: string;
  image: string;
  grades: string[];
  applications: Application[];
};

const products: Product[] = [
  {
    id: "m-sand",
    tab: "M-Sand",
    title: "Manufactured Sand",
    subtitle: "VSI produced sand with optimized gradation and low impurities.",
    image: "/images/product-main-msand.jpg",
    grades: ["6mm Aggregates", "12mm Aggregates", "20mm Aggregates", "40mm Aggregates"],
    applications: [
      {
        title: "Concrete production",
        desc: "High strength mixes for structural and ready-mix concrete.",
        image: "/images/app-concrete.jpg",
      },
      {
        title: "Block and brick work",
        desc: "Smooth, uniform finish for interior and exterior walls.",
        image: "/images/app-block.jpg",
      },
      {
        title: "Plastering (in controlled mixes)",
        desc: "Strong bonding mortar for brick and block laying.",
        image: "/images/app-plastering.jpg",
      },
    ],
  },
  {
    id: "p-sand",
    tab: "P-Sand",
    title: "Plastering Sand",
    subtitle: "Fine-graded manufactured sand engineered for smooth, crack-free plaster finishes.",
    image: "/images/product-psand.jpg",
    grades: ["Fine Grade", "Plaster Grade"],
    applications: [
      {
        title: "Wall plastering",
        desc: "Even, workable mixes for smooth interior and exterior plaster.",
        image: "/images/app-plastering.jpg",
      },
      {
        title: "Block and brick work",
        desc: "Consistent bonding mortar with uniform texture.",
        image: "/images/app-block.jpg",
      },
      {
        title: "Finishing mixes",
        desc: "Low-impurity sand for putty and fine finishing coats.",
        image: "/images/app-concrete.jpg",
      },
    ],
  },
  {
    id: "w-sand",
    tab: "W-Sand",
    title: "Washed Sand",
    subtitle: "Multi-stage washed sand with low silt content for high-purity concrete.",
    image: "/images/product-wsand.jpg",
    grades: ["Coarse Grade", "Fine Grade"],
    applications: [
      {
        title: "Concrete production",
        desc: "High-purity mixes with excellent strength and drainage.",
        image: "/images/app-concrete.jpg",
      },
      {
        title: "Ready-mix concrete",
        desc: "Consistent gradation for large-scale RMC supply.",
        image: "/images/app-block.jpg",
      },
      {
        title: "Specialized mixes",
        desc: "Clean sand for applications requiring high purity.",
        image: "/images/app-plastering.jpg",
      },
    ],
  },
  {
    id: "gsb",
    tab: "GSB & Wet Mix Macadam",
    title: "GSB & Wet Mix Macadam",
    subtitle: "Engineered road construction materials produced to IRC/MoRTH specifications.",
    image: "/images/product-gsb.jpg",
    grades: ["Granular Sub-Base", "Wet Mix Macadam"],
    applications: [
      {
        title: "Road sub-base",
        desc: "Graded granular layer for stable pavement foundations.",
        image: "/images/app-concrete.jpg",
      },
      {
        title: "Base layers",
        desc: "Wet mix macadam for durable road base construction.",
        image: "/images/app-block.jpg",
      },
      {
        title: "Infrastructure works",
        desc: "Precision-graded material for highways and large projects.",
        image: "/images/app-plastering.jpg",
      },
    ],
  },
];

export default function ProductsCatalog() {
  const [active, setActive] = useState(0);
  const p = products[active];

  return (
    <section className="w-full bg-[var(--color-cream)] px-6 md:px-[100px] py-16 md:py-[80px]">
      <div className="mx-auto max-w-[1240px] flex flex-col gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="small-caps text-3xl sm:text-[40px] font-semibold leading-[1.2] text-[#2B3A2E]">
            Discover Our Products
          </h2>
          <p className="max-w-[505px] text-base leading-[1.4] text-[#333]">
            Machine crushed and screened aggregates with controlled particle size
            distribution and minimal flakiness.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {products.map((prod, i) => (
              <button
                key={prod.id}
                onClick={() => setActive(i)}
                className={`h-11 px-6 text-base sm:text-lg font-medium transition-colors duration-300 ${
                  active === i
                    ? "bg-[var(--color-brand)] text-white border border-[var(--color-brand)]"
                    : "bg-white text-[#333] border border-[#A2A2A2] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
                }`}
              >
                {prod.tab}
              </button>
            ))}
          </div>

          <div key={p.id} className="animate-fade-in flex w-full flex-col gap-10">
            <div className="relative h-[260px] w-full overflow-hidden sm:h-[415px]">
              <Image
                src={p.image}
                alt={p.title}
                fill
                loading="lazy"
                sizes="(max-width: 1280px) 100vw, 1240px"
                className="object-cover"
                key={p.id}
              />
            </div>

            <div className="flex flex-col gap-12 md:gap-[60px]">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl sm:text-[40px] font-semibold text-[#2B3A2E]">
                    {p.title}
                  </h3>
                  <p className="text-base leading-[1.4] text-[#333]">{p.subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-3 sm:gap-5">
                  {p.grades.map((g) => (
                    <span
                      key={g}
                      className="border border-[#E9B967] bg-[#F8EACC] px-5 py-2.5 text-sm font-medium text-black"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="text-2xl sm:text-[28px] font-semibold text-[#2B3A2E]">
                  Applications
                </h4>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {p.applications.map((app) => (
                    <div
                      key={app.title}
                      className="flex flex-col gap-3.5 overflow-hidden border border-[#E8DDD0] bg-white pb-4"
                    >
                      <div className="relative h-[190px] w-full overflow-hidden">
                        <Image
                          src={app.image}
                          alt={app.title}
                          fill
                          loading="lazy"
                          sizes="(max-width: 1024px) 100vw, 400px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5 px-4">
                        <p className="text-xl font-medium text-[#2B3A2E]">{app.title}</p>
                        <p className="text-sm leading-[1.4] text-[#333]">{app.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
