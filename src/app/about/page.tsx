import type { Metadata } from "next";
import Image from "@/components/BlurImage";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | Dakshayini Minerals",
  description:
    "Learn about Dakshayini Minerals — a fully integrated aggregates and sand processing supplier serving Bangalore's construction industry.",
};

const partners = [
  {
    name: "Kiran Jain",
    role: "Managing Partner",
    bio: [
      "With over 30 years of experience in mining, material processing, and aggregates, Kiran Jain brings deep technical expertise in plant operations, production systems, and quality control.",
      "His leadership ensures efficient plant performance, optimized output, and adherence to industry standards across all facilities.",
    ],
  },
  {
    name: "Ramesh Patel",
    role: "Partner",
    bio: [
      "A diversified entrepreneur with experience across hospitality (Patel’s Inn), mining, and real estate, Ramesh Patel drives strategic growth and business expansion.",
      "His background in building and scaling ventures strengthens Dakshayini’s market positioning and long-term vision.",
    ],
  },
  {
    name: "Srinivas Patel",
    role: "Partner",
    bio: [
      "With over 30 years of experience in real estate and mining, Srinivas Patel brings strong industry insight and execution capability.",
      "A respected professional and philanthropist, he plays a key role in operational alignment, stakeholder relationships, and ensuring consistent delivery across projects.",
    ],
  },
];

const focusAreas = [
  { title: "Reliable Supply", icon: "/icons/focus-supply.svg" },
  { title: "Consistent Quality", icon: "/icons/focus-quality.svg" },
  { title: "Efficient Logistics", icon: "/icons/focus-logistics.svg" },
];

const markets = [
  { title: "Real Estate Developers", image: "/images/market-realestate.jpg" },
  { title: "Infrastructure Contractors", image: "/images/market-infrastructure.jpg" },
  { title: "Commercial Projects", image: "/images/market-commercial.jpg" },
  { title: "Government Infrastructure", image: "/images/market-government.jpg" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Driven by Experience. Built for Reliability."
        subtitle="Delivering consistent, high-performance construction materials backed by decades of industry expertise."
        image="/images/about-hero.jpg"
        overlayClass="bg-black/80"
      />

      {/* About the Brand */}
      <section className="w-full bg-[var(--color-cream)] px-6 md:px-[100px] py-16 md:py-[100px]">
        <div className="mx-auto max-w-[1240px]">
          <ScrollReveal>
            <div className="max-w-[1030px] flex flex-col gap-5">
              <h2 className="small-caps text-3xl sm:text-[40px] font-semibold leading-[1.2] text-[#2B3A2E]">
                About the Brand
              </h2>
              <div className="flex flex-col gap-5">
                <p className="text-base leading-[1.5] text-[#333]">
                  Dakshayini is built on a foundation of technical expertise,
                  operational discipline, and long-term industry experience in
                  mining and construction materials. Our focus is on producing
                  precision-graded aggregates and high-quality sand that meet the
                  evolving demands of modern construction.
                </p>
                <p className="text-base leading-[1.5] text-[#333]">
                  With integrated crushing and processing capabilities, we ensure
                  controlled production, consistent quality, and dependable supply,
                  supporting projects ranging from residential developments to
                  large-scale infrastructure.
                </p>
                <p className="text-base leading-[1.5] text-[#333]">
                  Our approach combines proven industry practices with modern plant
                  technology, enabling us to deliver materials that perform reliably
                  under structural load and environmental conditions.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Partners & Promoters */}
      <section className="w-full bg-white px-6 md:px-[100px] py-16 md:py-[120px]">
        <div className="mx-auto max-w-[1240px] flex flex-col gap-12 md:gap-16">
          <ScrollReveal>
            <h2 className="small-caps text-3xl sm:text-[40px] font-medium text-black">
              Partners &amp; Promoters
            </h2>
          </ScrollReveal>
          <div className="flex flex-col gap-12 md:gap-20">
            {partners.map((partner, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
                  {/* Accent line + name/role */}
                  <div className="flex items-stretch gap-6 lg:w-[310px] lg:shrink-0 lg:gap-10">
                    <span className="w-[3px] shrink-0 bg-[#D9823A]" />
                    <div className="flex flex-col justify-center gap-1.5">
                      <h3 className="small-caps text-[26px] font-medium leading-[1.2] text-black">
                        {partner.name}
                      </h3>
                      <p className="text-base leading-[1.4] text-[#333]">{partner.role}</p>
                    </div>
                  </div>
                  {/* Bio */}
                  <div className="flex flex-1 flex-col gap-2.5">
                    {partner.bio.map((para, j) => (
                      <p key={j} className="text-lg leading-[1.5] text-[#333]">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Focus */}
      <section className="w-full bg-white px-6 md:px-[100px] pb-16 md:pb-[100px]">
        <div className="mx-auto max-w-[1240px] flex flex-col gap-10">
          <ScrollReveal>
            <h2 className="small-caps text-3xl sm:text-[40px] font-medium text-black">
              Our Focus
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {focusAreas.map((area, i) => (
              <div
                key={i}
                className="flex h-full flex-col gap-3 border border-[#BFBFBF] bg-white p-6"
              >
                <img src={area.icon} alt="" className="w-20 h-20" />
                <p className="small-caps text-xl font-medium text-[#444E46]">
                  {area.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Served */}
      <section className="w-full bg-[var(--color-cream)] px-6 md:px-[100px] py-16 md:py-[100px]">
        <div className="mx-auto max-w-[1240px] flex flex-col gap-8">
          <ScrollReveal>
            <h2 className="small-caps text-3xl sm:text-[40px] font-medium text-black">
              Markets Served
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {markets.map((market, i) => (
              <div
                key={i}
                className="flex h-full flex-col gap-3.5 overflow-hidden border border-[#E8DDD0] bg-white pb-4"
              >
                <div className="relative h-[190px] w-full overflow-hidden">
                  <Image
                    src={market.image}
                    alt={market.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 295px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <p className="px-4 text-xl font-medium text-black">
                  {market.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
