import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white px-6 md:px-[100px] pt-[60px] pb-[40px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr] lg:gap-16">
          <div className="order-last lg:order-1 flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex flex-col gap-[4.9px]">
              <span className="font-[family-name:var(--font-barlow-condensed)] text-2xl text-black">
                Dakshayini Minerals
              </span>
              <span className="text-xs tracking-[0.2em] text-[#474747]">
                M-SAND AND AGGREGATES
              </span>
            </Link>
            <p className="text-base text-[var(--color-text)] leading-relaxed">
              Supplying high quality manufactured sand and aggregates to
              Bangalore&apos;s construction industry from three strategically
              located crushing plants.
            </p>
          </div>

          <div className="lg:order-2 flex flex-col gap-5">
            <h4 className="small-caps text-xl font-medium text-black">Products</h4>
            <div className="flex flex-col gap-5">
              {[
                { label: "Fine Aggregates", href: "/products" },
                { label: "Course Aggregates", href: "/products" },
                { label: "Road Construction Materials", href: "/products" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="text-base text-[var(--color-text)] hover:text-black transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:order-3 flex flex-col gap-5">
            <h4 className="small-caps text-xl font-medium text-black">Contact</h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-1.5">
                <img src="/icons/footer-location.svg" alt="" className="mt-0.5 w-[18px] h-[18px] shrink-0" />
                <span className="text-base text-[var(--color-text)] leading-[1.3]">
                  #1, &ldquo;Patel&apos;s Inn Club &amp; Resort&rdquo;, 15th Cross, 2nd Block,
                  Govindraj Gardens, RT Nagar, Bangalore - 560032
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <img src="/icons/footer-phone.svg" alt="" className="w-[18px] h-[18px] shrink-0" />
                <span className="text-base text-[var(--color-text)]">+91 9865489876</span>
              </div>
              <div className="flex items-center gap-1.5">
                <img src="/icons/footer-email.svg" alt="" className="w-[18px] h-[18px] shrink-0" />
                <span className="text-base text-[var(--color-text)]">dakshayinimsand@gmail.com</span>
              </div>
              <div className="flex items-center gap-1.5">
                <img src="/icons/footer-clock.svg" alt="" className="w-[18px] h-[18px] shrink-0" />
                <span className="text-base text-[var(--color-text)]">Mon&ndash;Sat: 8AM &ndash; 6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-black/10">
          <p className="text-sm text-[#3d3d3d]">
            &copy; 2025 Dakshayini Minerals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
