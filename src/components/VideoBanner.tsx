import Image from "@/components/BlurImage";

export default function VideoBanner() {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[614px] overflow-hidden">
      <Image
        src="/images/video-banner.jpg"
        alt=""
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          aria-label="Play video"
          className="flex items-center justify-center w-11 h-11 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
        >
          <img src="/icons/play.svg" alt="" className="w-7 h-7" />
        </button>
      </div>
    </section>
  );
}
