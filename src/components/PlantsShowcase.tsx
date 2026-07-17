"use client";

import { useState } from "react";
import Image from "@/components/BlurImage";

type Plant = {
  tab: string;
  image: string;
  mapQuery: string;
  headline: string;
  specs: { label: string; value: string }[];
  coverage: string;
  serviceAreas?: string;
};

const plants: Plant[] = [
  {
    tab: "Plant 1",
    image: "/images/plant-1.jpg",
    mapQuery: "13.2992142,77.6707173",
    headline:
      "A proven and reliable facility with over a decade of operational experience, supporting residential and infrastructure projects with consistent material supply.",
    specs: [
      { label: "Location:", value: "Devanahalli, North Bangalore — Operational since 2011" },
      { label: "Type:", value: "Aggregates & Sand Processing Plant" },
      { label: "Output:", value: "6mm, 12mm, 20mm, 40mm aggregates + M-Sand, P-Sand, W-Sand" },
      { label: "Production Capacity:", value: "Established mid-to-high volume production" },
    ],
    coverage: "Core supply to North Bangalore construction zones",
  },
  {
    tab: "Plant 2",
    image: "/images/plant-2.jpg",
    mapQuery: "13.3052827,77.6712152",
    headline:
      "A next-generation plant designed for higher consistency, optimized particle shape, and reduced variability in output. Built to handle large-scale infrastructure and high-volume concrete demand with improved efficiency and quality control.",
    specs: [
      { label: "Location:", value: "Devanahalli, North Bangalore — Commissioned 2025" },
      { label: "Type:", value: "State-of-the-art Crushing & Sand Processing Facility" },
      { label: "Output:", value: "6mm, 12mm, 20mm, 40mm aggregates + M-Sand, P-Sand, W-Sand" },
      { label: "Production Capacity:", value: "Up to 300 TPH" },
    ],
    coverage:
      "Major towns (Yelahanka, Devanahalli, Chikkaballapur, Doddaballapur), Industrial zones (KIADB Aerospace Park, Hardware Park, Devanahalli Industrial Area), Airport ecosystem (KIAL, Aerocity, Airport Business Park), Strategic infrastructure corridors (NH-44, STRR, airport corridor developments)",
  },
  {
    tab: "Plant 3",
    image: "/images/plant-3.jpg",
    mapQuery: "13.1863799,78.0620635",
    headline:
      "Strategically positioned to serve East Bangalore and the Kolar belt, enabling faster delivery cycles and reduced logistics costs for nearby projects.",
    specs: [
      { label: "Location:", value: "Vemgal, Near Kolar" },
      { label: "Type:", value: "Aggregates & Sand Supply Unit" },
      { label: "Output:", value: "6mm, 12mm, 20mm, 40mm aggregates + M-Sand, P-Sand, W-Sand" },
      { label: "Production Capacity:", value: "Regional distribution-focused production" },
    ],
    coverage: "~20 km from Vemgal",
    serviceAreas:
      "Vemgal, Kolar, Malur, Hoskote, Kadugodi, Whitefield, KR Puram, Budigere Cross",
  },
];

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={dir === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  );
}

export default function PlantsShowcase() {
  const [active, setActive] = useState(0);
  const plant = plants[active];
  const go = (delta: number) =>
    setActive((a) => (a + delta + plants.length) % plants.length);

  return (
    <section className="w-full bg-white py-16 md:py-[120px]">
      <div className="flex flex-col gap-12 md:gap-16">
        {/* Header */}
        <div className="px-6 md:px-[100px]">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="small-caps text-3xl sm:text-[40px] font-semibold leading-[1.1] text-[#2B3A2E] lg:max-w-[390px]">
              Three Plants. One Reliable Network
            </h2>
            <p
              key={active}
              className="animate-fade-in max-w-[420px] text-base leading-[1.5] text-[#333]"
            >
              {plant.headline}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {/* Tabs */}
          <div className="flex justify-center gap-4 px-6 sm:gap-5 md:px-[100px]">
            {plants.map((p, i) => (
              <button
                key={p.tab}
                onClick={() => setActive(i)}
                className={`h-11 flex-1 px-2 text-sm sm:flex-none sm:w-[198px] sm:text-lg font-medium transition-colors duration-300 ${
                  active === i
                    ? "bg-[var(--color-brand)] text-white border border-[var(--color-brand)]"
                    : "bg-white text-[#333] border border-[#A2A2A2] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
                }`}
              >
                {p.tab}
              </button>
            ))}
          </div>

          {/* Banner with index badge + nav arrows */}
          <div
            key={active}
            className="animate-fade-in relative h-[260px] w-full overflow-hidden sm:h-[420px] lg:h-[620px]"
          >
            <Image
              src={plant.image}
              alt={`Plant ${active + 1}`}
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
              key={plant.image}
            />
            <div className="absolute left-6 top-6 flex h-[60px] w-[60px] items-center justify-center bg-white/40 text-2xl font-semibold text-white sm:left-10 sm:top-9 sm:h-[77px] sm:w-[79px]">
              {String(active + 1).padStart(2, "0")}
            </div>
            <button
              onClick={() => go(-1)}
              aria-label="Previous plant"
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-black/30 text-white transition-colors hover:bg-black/50"
            >
              <Chevron dir="left" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next plant"
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-black/30 text-white transition-colors hover:bg-black/50"
            >
              <Chevron dir="right" />
            </button>
          </div>

          {/* Details row */}
          <div className="px-6 md:px-[100px]">
            <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-10 lg:flex-row lg:gap-[60px]">
              <div className="h-[280px] w-full overflow-hidden bg-[#1d1d1d] lg:h-[437px] lg:w-[615px] lg:shrink-0">
                <iframe
                  key={plant.mapQuery}
                  title={`${plant.tab} location — ${plant.mapQuery}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    plant.mapQuery
                  )}&z=15&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0 grayscale-[0.15]"
                />
              </div>
              <div
                key={active}
                className="animate-fade-in grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2"
              >
                {plant.specs.map((s) => (
                  <div key={s.label} className="flex flex-col gap-1.5">
                    <p className="small-caps text-base sm:text-lg font-medium text-black">
                      {s.label}
                    </p>
                    <p className="text-sm sm:text-lg leading-[1.4] text-[#333]">{s.value}</p>
                  </div>
                ))}
                <div className="flex flex-col gap-1.5">
                  <p className="small-caps text-base sm:text-lg font-medium text-black">
                    Coverage Areas:
                  </p>
                  <p className="text-sm sm:text-lg leading-[1.4] text-[#333]">{plant.coverage}</p>
                </div>
                {plant.serviceAreas && (
                  <div className="flex flex-col gap-1.5">
                    <p className="small-caps text-base sm:text-lg font-medium text-black">
                      Service Areas:
                    </p>
                    <p className="text-sm sm:text-lg leading-[1.4] text-[#333]">
                      {plant.serviceAreas}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
