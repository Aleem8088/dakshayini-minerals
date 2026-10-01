import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Dakshayani Minerals",
  description:
    "Get in touch with Dakshayani Minerals for bulk orders, pricing, and delivery schedules.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Contact us for bulk orders, pricing, delivery schedules, and test certificates."
        image="/images/hero-bg.jpg"
      />
      <ContactForm />
    </>
  );
}
