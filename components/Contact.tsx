"use client";

import { useState } from "react";

const interests = [
  "Curs biologie BAC",
  "Atelier biologie distractivă",
  "Atelier scriere",
  "Nu știu încă",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic — connect to Formspree / EmailJS / custom API
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#3B5E8C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div className="lg:pt-4">
            <span
              className="text-sm font-medium text-[#D4E8F0] uppercase tracking-widest mb-3 block"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Hai să vorbim
            </span>
            <h2
              className="text-4xl sm:text-5xl font-normal text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hai să vorbim
            </h2>
            <p
              className="text-[#D4E8F0] mb-10 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.7" }}
            >
              Nu trebuie să știi exact ce cauți. Scrie-mi — și găsim împreună
              soluția potrivită pentru tine.
            </p>

            {/* Contact info */}
            <div className="space-y-5 mb-10">
              {[
                {
                  icon: "✉️",
                  label: "Email",
                  value: "[email@claudiagroza.ro — de confirmat]",
                  isPlaceholder: true,
                },
                {
                  icon: "📱",
                  label: "Telefon / WhatsApp",
                  value: "[Număr — de confirmat cu Claudia]",
                  isPlaceholder: true,
                },
                {
                  icon: "🕐",
                  label: "Program",
                  value: "[Program de lucru — de confirmat cu Claudia]",
                  isPlaceholder: true,
                },
                {
                  icon: "📍",
                  label: "Locație",
                  value: "[Online sau cu adresă fizică — de confirmat cu Claudia]",
                  isPlaceholder: true,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D4E8F0]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <div>
                    <p
                      className="text-xs text-[#D4E8F0]/60 mb-0.5 uppercase tracking-wide"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className={`text-sm ${item.isPlaceholder ? "text-[#D4E8F0]/50 italic" : "text-white"}`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reassurance */}
            <div className="bg-[#D4E8F0]/10 border border-[#D4E8F0]/20 rounded-xl p-5">
              <p
                className="text-[#D4E8F0] text-sm italic"
                style={{ fontFamily: "'Playfair Display', serif", lineHeight: "1.6" }}
              >
                "Îți răspund în maxim 24 de ore. E în regulă să nu știi de unde să
                începi."
              </p>
              <p
                className="text-[#D4E8F0]/60 text-xs mt-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                — Claudia Groza
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#F7F2EB] rounded-2xl p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#EAF3EC] flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✅</span>
                </div>
                <h3
                  className="text-2xl font-medium text-[#1E2A3A] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Mesajul tău a ajuns!
                </h3>
                <p
                  className="text-[#5A6478]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Îți răspund în maxim 24 de ore. Mulțumesc că ai scris!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    className="block text-sm font-medium text-[#1E2A3A] mb-1.5"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Numele tău <span className="text-[#C47B2B]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ex. Maria Ionescu"
                    className="w-full px-4 py-3 rounded-lg border border-[#EAE0D0] bg-white text-[#1E2A3A] placeholder-[#5A6478]/40 focus:outline-none focus:border-[#3B5E8C] focus:ring-1 focus:ring-[#3B5E8C]/20 transition-colors text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block text-sm font-medium text-[#1E2A3A] mb-1.5"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Adresa de email <span className="text-[#C47B2B]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ex. maria@email.ro"
                    className="w-full px-4 py-3 rounded-lg border border-[#EAE0D0] bg-white text-[#1E2A3A] placeholder-[#5A6478]/40 focus:outline-none focus:border-[#3B5E8C] focus:ring-1 focus:ring-[#3B5E8C]/20 transition-colors text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    className="block text-sm font-medium text-[#1E2A3A] mb-1.5"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Telefon{" "}
                    <span className="text-[#5A6478] text-xs font-normal">(opțional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="ex. 0722 123 456"
                    className="w-full px-4 py-3 rounded-lg border border-[#EAE0D0] bg-white text-[#1E2A3A] placeholder-[#5A6478]/40 focus:outline-none focus:border-[#3B5E8C] focus:ring-1 focus:ring-[#3B5E8C]/20 transition-colors text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                {/* Interest dropdown */}
                <div>
                  <label
                    className="block text-sm font-medium text-[#1E2A3A] mb-1.5"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Mă interesează <span className="text-[#C47B2B]">*</span>
                  </label>
                  <select
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#EAE0D0] bg-white text-[#1E2A3A] focus:outline-none focus:border-[#3B5E8C] focus:ring-1 focus:ring-[#3B5E8C]/20 transition-colors text-sm appearance-none cursor-pointer"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <option value="" disabled>
                      Alege un serviciu...
                    </option>
                    {interests.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-sm font-medium text-[#1E2A3A] mb-1.5"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Mesajul tău
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Spune-mi câteva cuvinte despre situație — orice detaliu ajută..."
                    className="w-full px-4 py-3 rounded-lg border border-[#EAE0D0] bg-white text-[#1E2A3A] placeholder-[#5A6478]/40 focus:outline-none focus:border-[#3B5E8C] focus:ring-1 focus:ring-[#3B5E8C]/20 transition-colors text-sm resize-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#C47B2B] text-white font-medium rounded-lg hover:bg-[#b36e24] transition-all duration-200 hover:shadow-md text-base"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Trimite mesajul
                </button>

                {/* GDPR notice */}
                <p
                  className="text-xs text-[#5A6478] text-center"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Datele tale sunt în siguranță. Nu le vom distribui niciodată terților.
                  Vezi{" "}
                  <a href="#" className="underline hover:text-[#3B5E8C]">
                    Politica de confidențialitate
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
