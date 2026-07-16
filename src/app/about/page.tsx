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
    image: "/images/partner-1.jpg",
    linkedin: "#",
    bio: [
      "With over 30 years of experience in mining, material processing, and aggregates, Kiran Jain brings deep technical expertise in plant operations, production systems, and quality control.",
      "His leadership ensures efficient plant performance, optimized output, and adherence to industry standards across all facilities.",
    ],
  },
  {
    name: "Ramesh Patel",
    role: "Partner",
    image: "/images/partner-2.jpg",
    linkedin: "#",
    bio: [
      "A diversified entrepreneur with experience across hospitality (Patel’s Inn), mining, and real estate, Ramesh Patel drives strategic growth and business expansion.",
      "His background in building and scaling ventures strengthens Dakshayini’s market positioning and long-term vision.",
    ],
  },
  {
    name: "Srinivas Patel",
    role: "Partner",
    image: "/images/partner-3.jpg",
    linkedin: "#",
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
          <div className="flex flex-col gap-14 md:gap-16">
            {partners.map((partner, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
                  {/* Portrait + name */}
                  <div className="flex flex-col gap-4 lg:w-[294px] lg:shrink-0">
                    <div className="relative h-[380px] w-full overflow-hidden sm:h-[415px] lg:w-[294px]">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 294px"
                        className="object-cover"
                      />
                      <a
                        href={partner.linkedin}
                        aria-label={`${partner.name} on LinkedIn`}
                        className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center bg-black text-white transition-colors hover:bg-[var(--color-brand)]"
                      >
                        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
                          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8h4.5v14H.24V8zM8.24 8h4.31v1.92h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V22h-4.5v-6.62c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.5V22h-4.5V8z" />
                        </svg>
                      </a>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="small-caps text-2xl font-medium text-black">
                        {partner.name}
                      </h3>
                      <p className="text-base text-[#58534F]">{partner.role}</p>
                    </div>
                  </div>
                  {/* Bio */}
                  <div className="flex flex-1 flex-col gap-4">
                    {partner.bio.map((para, j) => (
                      <p key={j} className="text-base leading-[1.6] text-[#333]">
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
