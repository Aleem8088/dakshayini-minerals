import Carousel from "./Carousel";

export default function Features() {
  const features = [
    { icon: "/icons/feature-1.svg", text: "50–300 TPH Installed Crushing Capacity" },
    { icon: "/icons/feature-2.svg", text: "Multi-Stage Crushing (Jaw, Cone, VSI)" },
    { icon: "/icons/feature-3.svg", text: "6mm | 12mm | 20mm | 40mm M-Sand, P-Sand, W-Sand" },
    { icon: "/icons/feature-4.svg", text: "High Volume, Consistent Supply Capability" },
  ];

  return (
    <section className="w-full bg-white px-6 md:px-[100px] py-[40px]">
      <div className="mx-auto max-w-[1240px]">
        <Carousel gridClass="lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex h-full flex-col gap-3 p-6 bg-white border border-[#BFBFBF] hover:shadow-md transition-shadow duration-300"
            >
              <img src={feature.icon} alt="" className="w-10 h-10" />
              <p className="small-caps text-xl font-medium text-[#444E46]">
                {feature.text}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
