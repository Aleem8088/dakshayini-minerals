import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutOverview from "@/components/AboutOverview";
import ProductsTabs from "@/components/ProductsTabs";
import PlantsSection from "@/components/PlantsSection";
import ContactForm from "@/components/ContactForm";
import VideoBanner from "@/components/VideoBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutOverview />
      <ProductsTabs />
      <PlantsSection />
      <ContactForm />
      <VideoBanner />
    </>
  );
}
