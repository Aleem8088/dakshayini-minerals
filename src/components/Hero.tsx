import Link from "next/link";
import Image from "@/components/BlurImage";
import ArrowIcon from "./ArrowIcon";

export default function Hero() {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="relative z-10 w-full px-6 md:px-[100px] pt-[140px] pb-[100px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-[755px] flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl sm:text-[48px] font-medium text-white leading-[1.2] animate-fade-in-up">
                Engineered Aggregates for Structural Performance
              </h1>
              <p className="text-lg text-[#D9D9D9] max-w-[628px] leading-[1.25] animate-fade-in-up animate-delay-200">
                Dakshayini delivers precision graded aggregates and manufactured
                sand for infrastructure, residential, and commercial construction.
              </p>
            </div>
            <div className="animate-fade-in-up animate-delay-300">
              <Link
                href="/about"
                className="small-caps group inline-flex items-center gap-3 bg-[var(--color-brand)] text-white text-base font-semibold border border-[var(--color-brand)] px-7 py-4 hover:bg-white hover:text-[var(--color-brand)] transition-colors duration-300"
              >
                Learn More
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
