"use client";

import { Children, useRef, useState } from "react";

/**
 * Mobile: horizontal scroll-snap carousel with pagination dots.
 * Desktop (lg+): falls back to a normal grid (pass the grid columns via `gridClass`).
 */
export default function Carousel({
  children,
  gridClass,
  itemClass = "w-[85%] sm:w-[46%]",
}: {
  children: React.ReactNode;
  gridClass: string;
  itemClass?: string;
}) {
  const items = Children.toArray(children);
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(el.children).forEach((c, i) => {
      const node = c as HTMLElement;
      const dist = Math.abs(node.offsetLeft + node.offsetWidth / 2 - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActive(best);
  };

  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const node = el.children[i] as HTMLElement;
    el.scrollTo({
      left: node.offsetLeft - (el.clientWidth - node.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        ref={ref}
        onScroll={onScroll}
        className={`flex gap-5 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0 lg:pb-0 lg:overflow-visible lg:grid ${gridClass}`}
      >
        {items.map((child, i) => (
          <div key={i} className={`snap-center shrink-0 ${itemClass} lg:w-auto`}>
            {child}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6 lg:hidden">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === i ? "w-5 bg-[var(--color-brand)]" : "w-1.5 bg-[#D9D9D9]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
