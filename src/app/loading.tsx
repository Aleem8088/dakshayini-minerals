export default function Loading() {
  return (
    <div aria-busy="true" aria-label="Loading">
      {/* Hero skeleton */}
      <div className="skeleton h-[440px] w-full md:h-[503px]" />

      {/* Content skeleton */}
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-16 md:px-[100px] md:py-[80px]">
        <div className="flex flex-col gap-3">
          <div className="skeleton h-10 w-3/5 max-w-[420px]" />
          <div className="skeleton h-4 w-4/5 max-w-[560px]" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="skeleton h-[190px] w-full" />
              <div className="skeleton h-5 w-3/4" />
              <div className="skeleton h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
