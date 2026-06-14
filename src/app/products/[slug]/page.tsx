import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const productData: Record<
  string,
  {
    title: string;
    badge: string;
    heroImage: string;
    description: string[];
    applications: string[];
    specs: { label: string; value: string }[];
  }
> = {
  "m-sand": {
    title: "M-Sand",
    badge: "Manufactured Sand",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    description: [
      "M-Sand (Manufactured Sand) is produced through a controlled process of crushing hard granite stone using VSI (Vertical Shaft Impact) crushers. The result is cubical-shaped particles with optimal grading that meets IS 383 standards.",
      "Our M-Sand undergoes multi-stage processing including primary jaw crushing, secondary cone crushing, and tertiary VSI crushing followed by precision screening to achieve the desired grading curve.",
      "The controlled manufacturing process ensures consistent quality, uniform grading, and minimal silt content — making it a superior alternative to river sand for structural concrete applications.",
    ],
    applications: [
      "RCC construction",
      "Block work and masonry",
      "Precast concrete elements",
      "Ready-mix concrete plants",
      "Commercial and residential buildings",
    ],
    specs: [
      { label: "Grading Zone", value: "Zone II (IS 383)" },
      { label: "Particle Shape", value: "Cubical (VSI processed)" },
      { label: "Silt Content", value: "< 2%" },
      { label: "Water Absorption", value: "< 2%" },
      { label: "Specific Gravity", value: "2.5 - 2.7" },
    ],
  },
  "p-sand": {
    title: "P-Sand",
    badge: "Plastering Sand",
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    description: [
      "P-Sand (Plastering Sand) is a finely graded manufactured sand specifically designed for plastering applications. It provides a smooth, workable mix that results in excellent finish quality on walls and ceilings.",
      "Our P-Sand is processed through additional screening stages to achieve the fine grading required for plastering work. The uniform particle size distribution ensures consistent mix ratios and minimal material wastage.",
    ],
    applications: [
      "Interior and exterior plastering",
      "Wall rendering",
      "Tile fixing mortar",
      "Masonry joints",
      "Decorative plaster work",
    ],
    specs: [
      { label: "Grade", value: "Fine (Plastering grade)" },
      { label: "Fineness Modulus", value: "1.8 - 2.5" },
      { label: "Silt Content", value: "< 3%" },
      { label: "Clay Lumps", value: "Nil" },
    ],
  },
  "w-sand": {
    title: "W-Sand",
    badge: "Washed Sand",
    heroImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
    description: [
      "W-Sand (Washed Sand) undergoes a thorough washing process that removes clay, silt, organic matter, and other impurities. The result is clean, high-purity sand suitable for applications demanding low contamination levels.",
      "Our washing system uses multiple stages of water-based cleaning and classification to achieve consistently low impurity levels, making it ideal for high-specification concrete and drainage applications.",
    ],
    applications: [
      "High-grade concrete",
      "Water filtration systems",
      "Drainage backfill",
      "Paving and landscaping",
      "Specialty mortar mixes",
    ],
    specs: [
      { label: "Washing Method", value: "Multi-stage water wash" },
      { label: "Silt Content", value: "< 1.5%" },
      { label: "Organic Impurities", value: "Nil" },
      { label: "Clay Content", value: "< 0.5%" },
    ],
  },
  aggregates: {
    title: "Crushed Stone Aggregates",
    badge: "Multi-Grade Aggregates",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
    description: [
      "Our crushed stone aggregates are produced from hard granite through multi-stage jaw and cone crushing. Available in 6mm, 12mm, 20mm, and 40mm sizes, each grade meets IS 383 requirements for grading, shape, and strength.",
      "The crushing process is calibrated to produce well-shaped, angular particles that provide excellent interlocking in concrete and road base applications.",
    ],
    applications: [
      "Structural concrete",
      "Road construction base courses",
      "Railway ballast",
      "Precast elements",
      "Building foundations",
    ],
    specs: [
      { label: "Available Sizes", value: "6mm, 12mm, 20mm, 40mm" },
      { label: "Aggregate Impact Value", value: "< 30%" },
      { label: "Flakiness Index", value: "< 25%" },
      { label: "Water Absorption", value: "< 2%" },
    ],
  },
  gsb: {
    title: "GSB & Wet Mix Macadam",
    badge: "Road Construction Materials",
    heroImage:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&q=80",
    description: [
      "Granular Sub Base (GSB) and Wet Mix Macadam (WMM) are engineered road construction materials produced to IRC/MoRTH specifications. These materials form the critical sub-base and base layers of road pavements.",
      "Our GSB and WMM products are produced with precise grading control to meet the specified envelope requirements, ensuring proper compaction and load distribution in road structures.",
    ],
    applications: [
      "National and state highway construction",
      "Urban road development",
      "Airport runway sub-base",
      "Industrial road pavements",
      "Township road networks",
    ],
    specs: [
      { label: "Compliance", value: "IRC/MoRTH specifications" },
      { label: "CBR Value", value: "> 30% (GSB)" },
      { label: "Grading", value: "Close grading as per specification" },
      { label: "Plasticity Index", value: "Non-plastic" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return {
    title: "Product Details | Dakshayini Minerals",
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productData[slug];

  if (!product) {
    notFound();
  }

  return (
    <>
      <PageHero title={product.title} subtitle={product.badge} image={product.heroImage} />

      <section className="w-full bg-white px-6 md:px-[100px] py-16 md:py-[80px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <span className="inline-block text-xs uppercase tracking-wider font-medium text-[var(--color-brand)] border border-[var(--color-brand)]/30  px-4 py-1.5 mb-6">
                  {product.badge}
                </span>
                <div className="space-y-4">
                  {product.description.map((para, i) => (
                    <p key={i} className="text-[var(--color-text)] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-black mb-6">
                    Applications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.applications.map((app) => (
                      <div key={app} className="flex items-center gap-3 p-3  bg-[var(--color-cream)]">
                        <svg className="w-5 h-5 text-[var(--color-brand)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-black">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal delay={200}>
                <div className="bg-[var(--color-cream)]  p-8 sticky top-28">
                  <h3 className="text-lg font-semibold text-black mb-6">
                    Technical Specifications
                  </h3>
                  <div className="space-y-4">
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="border-b border-[var(--color-border)] pb-4 last:border-0">
                        <p className="text-xs uppercase tracking-wider text-[var(--color-text-light)] mb-1">
                          {spec.label}
                        </p>
                        <p className="text-sm font-medium text-black">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-[var(--color-brand)] text-white font-medium py-3 mt-8  hover:bg-[var(--color-brand-dark)] transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--color-cream)] px-6 md:px-[100px] py-16">
        <div className="mx-auto max-w-[1240px] text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
            Need This Material for Your Project?
          </h2>
          <p className="text-[var(--color-text)] mb-8 max-w-lg mx-auto">
            Contact us for bulk pricing, delivery schedules, and test certificates.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[var(--color-brand)] text-white font-medium text-base px-7 py-4  hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
