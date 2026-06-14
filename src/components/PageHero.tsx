import Link from "next/link";
import Image from "@/components/BlurImage";
import ArrowIcon from "./ArrowIcon";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  ctaText?: string;
  ctaHref?: string;
  overlayClass?: string;
}

export default function PageHero({
  title,
  subtitle,
  image,
  ctaText,
  ctaHref,
  overlayClass = "bg-black/70",
}: PageHeroProps) {
  return (
    <section className="relative flex items-end overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className="relative z-10 w-full px-6 md:px-[100px] pt-[140px] pb-[80px] md:pt-[200px] md:pb-[150px]">
        <div className="max-w-[794px] flex flex-col gap-5">
          <h1 className="text-4xl sm:text-[48px] font-medium text-white leading-[1.2] animate-fade-in-up">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-[#cfcfcf] max-w-[610px] leading-[1.25] animate-fade-in-up animate-delay-200">
              {subtitle}
            </p>
          )}
          {ctaText && ctaHref && (
            <div className="animate-fade-in-up animate-delay-300">
              <Link
                href={ctaHref}
                className="small-caps inline-flex items-center gap-3 bg-[var(--color-brand)] text-white text-base font-medium border border-[var(--color-brand)] px-5 py-3 hover:bg-white hover:text-[var(--color-brand)] transition-colors duration-300"
              >
                {ctaText}
                <ArrowIcon />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
