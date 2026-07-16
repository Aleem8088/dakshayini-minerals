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
    id: "fine-aggregates",
    tab: "Fine Aggregates",
    title: "Fine Aggregates",
    subtitle:
      "Fine, uniformly graded sand processed for surface applications. Ensures smooth finish, reduced cracking, and strong adhesion in plastering and finishing layers.",
    image: "/images/product-fine.jpg",
    grades: ["M-Sand (Manufactured Sand)", "P-Sand (Plastering Sand)"],
    applications: [
      {
        title: "Concrete production",
        desc: "Produces strong, durable concrete with excellent workability and consistent performance.",
        image: "/images/app-concrete.jpg",
      },
      {
        title: "Block and brick work",
        desc: "Ensures superior bonding, dimensional accuracy, and long-lasting masonry construction.",
        image: "/images/app-block.jpg",
      },
      {
        title: "Plastering (in controlled mixes)",
        desc: "Delivers a smooth, crack-resistant finish with enhanced adhesion and uniform texture.",
        image: "/images/app-plastering.jpg",
      },
    ],
  },
  {
    id: "course-aggregates",
    tab: "Course Aggregates",
    title: "Course Aggregates",
    subtitle:
      "Machine-crushed and screened aggregates with controlled particle size distribution and minimal flakiness.",
    image: "/images/product-course.jpg",
    grades: ["6mm Aggregates", "12mm Aggregates", "20mm Aggregates", "40mm Aggregates"],
    applications: [
      {
        title: "RCC and structural concrete",
        desc: "Engineered for high-strength concrete in residential, commercial, and infrastructure projects.",
        image: "/images/app-rebar.jpg",
      },
      {
        title: "Foundations and load-bearing elements",
        desc: "Provides exceptional stability and load-bearing performance for strong, reliable foundations.",
        image: "/images/app-concrete.jpg",
      },
      {
        title: "Road base and sub-base layers",
        desc: "Optimized for superior compaction, drainage, and durability in road construction.",
        image: "/images/app-roadbase.jpg",
      },
    ],
  },
  {
    id: "road-construction-material",
    tab: "Road Construction Material",
    title: "Road Construction Material",
    subtitle: "Engineered materials for load distribution and pavement strength.",
    image: "/images/product-road.jpg",
    grades: ["Wet Mix Macadam (WMM)", "Granular Sub Base (GSB)"],
    applications: [
      {
        title: "Road sub-base and base layers",
        desc: "Creates a stable foundation that enhances pavement strength and extends road lifespan.",
        image: "/images/app-roller.jpg",
      },
      {
        title: "Highway construction",
        desc: "Engineered for durable, high-performance roads capable of withstanding heavy traffic loads.",
        image: "/images/app-highway.jpg",
      },
      {
        title: "Industrial yard development",
        desc: "Provides a strong, well-compacted base for warehouses, logistics parks, and industrial facilities.",
        image: "/images/app-rebar.jpg",
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
