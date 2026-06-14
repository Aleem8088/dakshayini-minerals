"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    material: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will get back to you within 24 hours.");
    setFormData({ name: "", phone: "", email: "", company: "", material: "", description: "" });
  };

  return (
    <section className="w-full bg-white px-6 md:px-[100px] py-16 md:py-[80px]">
      <div className="mx-auto max-w-[1240px]">
        <ScrollReveal>
          <div className="bg-[var(--color-cream)] border border-[#F8EACC] p-6 sm:p-10">
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-10">
              {/* Left Info */}
              <div className="flex flex-col gap-4 lg:w-[400px] shrink-0">
                <h2 className="small-caps text-3xl sm:text-[40px] font-semibold leading-[1.2] text-[var(--color-dark-green)]">
                  Ready to Supply Your Next Project?
                </h2>
                <p className="text-base text-[var(--color-text)] leading-relaxed">
                  Fill in the form and we&apos;ll get back to you within 24
                  hours.
                </p>
              </div>

              {/* Right Form */}
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="small-caps block text-xl font-medium text-[#2B3A2E] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-[#E8DDD0] text-base placeholder:text-[#868686] focus:outline-none focus:border-[var(--color-brand)] transition-colors bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="small-caps block text-xl font-medium text-[#2B3A2E] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-[#E8DDD0] text-base placeholder:text-[#868686] focus:outline-none focus:border-[var(--color-brand)] transition-colors bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="small-caps block text-xl font-medium text-[#2B3A2E] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-[#E8DDD0] text-base placeholder:text-[#868686] focus:outline-none focus:border-[var(--color-brand)] transition-colors bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="small-caps block text-xl font-medium text-[#2B3A2E] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-[#E8DDD0] text-base placeholder:text-[#868686] focus:outline-none focus:border-[var(--color-brand)] transition-colors bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="small-caps block text-xl font-medium text-[#2B3A2E] mb-2">
                    Material Required
                  </label>
                  <select
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                    className="w-full px-4 py-3 border border-[#E8DDD0] text-base placeholder:text-[#868686] focus:outline-none focus:border-[var(--color-brand)] transition-colors bg-white"
                    required
                  >
                    <option value="">Select material type</option>
                    <option value="m-sand">M-Sand</option>
                    <option value="p-sand">P-Sand</option>
                    <option value="w-sand">W-Sand</option>
                    <option value="aggregates">Aggregates (6mm, 12mm, 20mm, 40mm)</option>
                    <option value="gsb">GSB &amp; Wet Mix Macadam</option>
                  </select>
                </div>

                <div>
                  <label className="small-caps block text-xl font-medium text-[#2B3A2E] mb-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Describe your requirements"
                    rows={5}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 border border-[#E8DDD0] text-base placeholder:text-[#868686] focus:outline-none focus:border-[var(--color-brand)] transition-colors resize-none bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--color-brand)] text-white font-medium text-base py-4 border border-[var(--color-brand)] hover:bg-white hover:text-[var(--color-brand)] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
