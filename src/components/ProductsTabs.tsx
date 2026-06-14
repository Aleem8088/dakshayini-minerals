"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "@/components/BlurImage";
import ArrowIcon from "./ArrowIcon";

const products = [
  {
    id: "m-sand",
    tab: "M Sand",
    badge: "Manufactured Sand",
    title: "M-Sand",
    description: (
      <>
        Produced using VSI crushing and controlled screening, M-Sand offers{" "}
        <strong>optimized particle shape and grading,</strong> resulting in
        improved concrete strength and reduced void content. Suitable for RCC,
        block work, and plastering.
      </>
    ),
    image: "/images/product-msand.jpg",
  },
  {
    id: "p-sand",
    tab: "P Sand",
    badge: "Plastering Sand",
    title: "P-Sand",
    description: (
      <>
        Ultra-fine manufactured sand for smooth plaster finishes.{" "}
        <strong>Controlled grain size</strong> ensures uniform wall textures and
        consistent mix ratios with minimal material wastage.
      </>
    ),
    image: "/images/product-psand.jpg",
  },
  {
    id: "w-sand",
    tab: "W Sand",
    badge: "Washed Sand",
    title: "W-Sand",
    description: (
      <>
        Natural sand processed through{" "}
        <strong>multi-stage washing</strong> to remove silt and clay. Used in
        specialized concrete mixes requiring high purity and excellent drainage
        properties.
      </>
    ),
    image: "/images/product-wsand.jpg",
  },
  {
    id: "gsb",
    tab: "GSB & Wet Mix Macadam",
    badge: "Road Construction Materials",
    title: "GSB & Wet Mix Macadam",
    description: (
      <>
        Engineered road construction materials produced to{" "}
        <strong>IRC/MoRTH specifications.</strong> These materials form the
        critical sub-base and base layers of road pavements with precise grading
        control.
      </>
    ),
    image: "/images/product-gsb.jpg",
  },
];

export default function ProductsTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const product = products[activeTab];

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
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(i)}
                className={`relative small-caps whitespace-nowrap text-xl font-medium px-3 py-3 transition-colors duration-200 ${
                  activeTab === i
                    ? "text-[var(--color-brand)]"
                    : "text-[#58534F] hover:text-[var(--color-brand)]"
                }`}
              >
                {p.tab}
                {activeTab === i && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-brand)]" />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div key={activeTab} className="animate-fade-in grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative order-2 lg:order-1 w-full h-[300px] sm:h-[375px] overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 610px"
                className="object-cover"
                key={product.id}
              />
            </div>
            <div className="order-1 lg:order-2 flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <span className="inline-flex items-center gap-2.5 w-fit border border-[var(--color-brand)] rounded-full px-3.5 py-1.5">
                    <span className="w-[7px] h-[7px] rounded-full bg-[var(--color-brand)]" />
                    <span className="small-caps text-base font-medium tracking-[2px] text-[var(--color-brand)]">
                      {product.badge}
                    </span>
                  </span>
                  <h3 className="text-[40px] font-semibold text-[var(--color-dark-green)] leading-[48px]">
                    {product.title}
                  </h3>
                </div>
                <p className="text-base text-[var(--color-text)] leading-[140%]">
                  {product.description}
                </p>
              </div>
              <div>
                <Link
                  href={`/products/${product.id}`}
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
