"use client";

import { useState } from "react";
import Image from "@/components/BlurImage";

const steps = [
  {
    title: "Raw Material Selection & Feeding",
    desc: "Raw materials are sourced from certified quarries and carefully selected, then fed into the plant through controlled feeders for a steady, consistent supply.",
  },
  {
    title: "Primary Crushing (Jaw Crusher)",
    desc: "Large rocks are reduced into manageable sizes using high-capacity jaw crushers, forming the base feed for downstream processing.",
  },
  {
    title: "Secondary Crushing (Cone Crusher)",
    desc: "Pre-crushed material is further reduced in cone crushers, improving particle shape and preparing it for fine crushing and grading.",
  },
  {
    title: "Tertiary Crushing (VSI Crusher)",
    desc: "Vertical Shaft Impact (VSI) crushers shape the aggregate and produce high-quality manufactured sand with optimized gradation.",
  },
  {
    title: "Screening & Grading",
    desc: "Crushed material is screened and separated into precise size fractions — 6mm, 12mm, 20mm, 40mm — ensuring consistent grading.",
  },
  {
    title: "Sand Washing & Processing",
    desc: "Sand is washed to remove silt, clay, and impurities, producing clean, high-purity M-Sand, P-Sand, and W-Sand.",
  },
  {
    title: "Quality Control & Testing",
    desc: "Samples are tested for gradation, flakiness, silt content, and strength to ensure every batch meets IS and project specifications.",
  },
  {
    title: "Storage & Dispatch",
    desc: "Finished materials are stored by grade and dispatched efficiently to construction sites with reliable, on-time delivery.",
  },
];

export default function ProcessSteps() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
      <div className="order-2 flex w-full flex-col lg:order-1 lg:w-[610px]">
        {steps.map((step, i) => {
          const isActive = active === i;
          return (
            <div key={i} className="border-b border-[#BBBBBB] last:border-b-0">
              <button
                onClick={() => setActive(i)}
                className="flex w-full items-center gap-6 py-5 text-left lg:gap-10"
              >
                <span
                  className={`shrink-0 text-[28px] sm:text-[40px] font-semibold leading-none transition-colors duration-300 ${
                    isActive ? "text-[#D9823A]" : "text-[#D9823A]/40"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col">
                  <span
                    className={`capitalize font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-2xl sm:text-[32px] text-black"
                        : "text-lg sm:text-xl text-[#595959]"
                    }`}
                  >
                    {step.title}
                  </span>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-3 text-base sm:text-lg leading-[1.4] text-[#393939]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      <div className="order-1 w-full lg:order-2 lg:flex-1">
        <div className="relative h-[320px] w-full overflow-hidden sm:h-[460px] lg:sticky lg:top-[110px] lg:h-[612px]">
          <Image
            src="/images/about-overview.jpg"
            alt="Dakshayini Minerals production process"
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 590px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
