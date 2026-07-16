"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "@/components/BlurImage";
import ArrowIcon from "./ArrowIcon";

type Group = {
  id: string;
  tab: string;
  description: string;
  items: string[];
  image: string;
};

const groups: Group[] = [
  {
    id: "fine-aggregates",
    tab: "Fine Aggregates",
    description:
      "Fine, uniformly graded sand processed for surface applications. Ensures smooth finish, reduced cracking, and strong adhesion in plastering and finishing layers.",
    items: ["Manufactured Sand (M-Sand)", "Plastering Sand (P-Sand)"],
    image: "/images/product-fine.jpg",
  },
  {
    id: "course-aggregates",
    tab: "Course Aggregates",
    description:
      "Machine-crushed and screened aggregates with controlled particle size distribution and minimal flakiness.",
    items: ["6mm Aggregate", "12mm Aggregate", "20mm Aggregate", "40mm Aggregate"],
    image: "/images/product-course.jpg",
  },
  {
    id: "road-construction-materials",
    tab: "Road Construction Materials",
    description:
      "Engineered materials for load distribution and pavement strength.",
    items: ["Wet Mix Macadam (WMM)", "Granular Sub Base (GSB)"],
    image: "/images/product-road.jpg",
  },
];

export default function ProductsTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const group = groups[activeTab];

  return (
    <section className="w-full bg-white px-6 md:px-[100px] py-16 md:py-[80px]">
      <div className="mx-auto max-w-[1240px] flex flex-col gap-10">
        {/* Header row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="small-caps text-3xl sm:text-[40px] font-semibold leading-[120%] text-[var(--color-dark-green)]">
              About The Products
            </h2>
            <p className="text-base text-[var(--color-text)] max-w-[505px]">
              From foundation to finish we supply a complete range of
              manufactured sand and aggregates, graded for performance.
            </p>
          </div>
          <Link
            href="/products"
            className="small-caps inline-flex items-center gap-3 bg-[var(--color-brand)] text-white text-base font-medium border border-[var(--color-brand)] px-5 py-3 hover:bg-white hover:text-[var(--color-brand)] transition-colors duration-300 shrink-0"
          >
            View All Products
            <ArrowIcon />
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-5 border-b border-[#CDCDCD] overflow-x-auto">
            {groups.map((g, i) => (
              <button
                key={g.id}
                onClick={() => setActiveTab(i)}
                className={`relative small-caps whitespace-nowrap text-xl font-medium px-3 py-3 transition-colors duration-200 ${
                  activeTab === i
                    ? "text-[var(--color-brand)]"
                    : "text-[#58534F] hover:text-[var(--color-brand)]"
                }`}
              >
                {g.tab}
                {activeTab === i && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-brand)]" />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div
            key={activeTab}
            className="animate-fade-in grid grid-cols-1 lg:grid-cols-[610px_1fr] gap-10 lg:gap-[40px] items-center"
          >
            <div className="relative order-2 lg:order-1 w-full h-[300px] sm:h-[375px] overflow-hidden">
              <Image
                src={group.image}
                alt={group.tab}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 610px"
                className="object-cover"
                key={group.id}
              />
            </div>
            <div className="order-1 lg:order-2 flex flex-col gap-8">
              <p className="text-base sm:text-lg text-[var(--color-text)] leading-[140%]">
                {group.description}
              </p>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-base sm:text-lg text-[var(--color-dark-green)]"
                  >
                    <span className="h-[7px] w-[7px] shrink-0 bg-[var(--color-brand)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div>
                <Link
                  href="/products"
                  className="small-caps inline-flex items-center justify-center border border-[var(--color-brand)] text-[var(--color-brand)] text-base font-medium px-5 py-2.5 hover:bg-[var(--color-brand)] hover:text-white transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
