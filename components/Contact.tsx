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
    <section id="contact" className="py-20 bg-[#3B5E8C] relative overflow-hidden">
      {/* Decorații biologice — fundal secțiune contact */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">

        {/* Helix ADN — colț stânga sus, vizibil și pe mobile (mai mic) */}
        <svg className="absolute -top-2 -left-2 w-14 h-28 sm:w-24 sm:h-40 bio-float-slow opacity-25 sm:opacity-30"
          viewBox="0 0 56 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0 C8 18,48 22,48 35 C48 48,8 52,8 65 C8 78,48 82,48 95 C48 108,8 112,8 125 C8 138,48 138,48 140"
            stroke="#D4E8F0" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 3" className="bio-dash"/>
          <path d="M48 0 C48 18,8 22,8 35 C8 48,48 52,48 65 C48 78,8 82,8 95 C8 108,48 112,48 125 C48 138,8 138,8 140"
            stroke="#D4E8F0" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 3"/>
          {[22, 49, 76, 103].map((y) => (
            <line key={y} x1="11" y1={y} x2="45" y2={y} stroke="#C47B2B" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
          ))}
          {[0, 35, 65, 95, 125].map((y, i) => (
            <circle key={y} cx={i % 2 === 0 ? 8 : 48} cy={y} r="3.5" fill="#D4E8F0" opacity="0.9"/>
          ))}
        </svg>

        {/* Frunză — colț dreapta sus, vizibilă și pe mobile */}
        <svg className="absolute top-6 right-4 w-10 h-16 sm:w-16 sm:h-24 bio-float opacity-20 sm:opacity-25"
          style={{ animationDelay: "2s" }}
          viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 85 C30 85,5 65,5 40 C5 18,18 5,30 2 C42 5,55 18,55 40 C55 65,30 85,30 85 Z"
            fill="#2C7A4B" fillOpacity="0.4" stroke="#6EC99A" strokeWidth="1.5"/>
          <line x1="30" y1="85" x2="30" y2="5" stroke="#6EC99A" strokeWidth="1.5" strokeLinecap="round"/>
          {[20, 35, 50, 65].map((y, i) => (
            <g key={y}>
              <line x1="30" y1={y} x2={30 - 12 - i * 2} y2={y + 8} stroke="#6EC99A" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
              <line x1="30" y1={y} x2={30 + 12 + i * 2} y2={y + 8} stroke="#6EC99A" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
            </g>
          ))}
        </svg>

        {/* Celulă — centru jos, ascunsă pe mobile */}
        <svg className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 w-36 h-36 bio-pulse opacity-20"
          viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="50" rx="46" ry="42" stroke="#D4E8F0" strokeWidth="1.5" strokeDasharray="4 3" fill="#D4E8F0" fillOpacity="0.06"/>
          <ellipse cx="50" cy="50" rx="38" ry="34" stroke="#D4E8F0" strokeWidth="1" fill="none" opacity="0.5"/>
          <ellipse cx="50" cy="50" rx="18" ry="16" fill="#D4E8F0" fillOpacity="0.2" stroke="#D4E8F0" strokeWidth="1.5"/>
          <circle cx="50" cy="50" r="6" fill="#C47B2B" fillOpacity="0.9"/>
          <ellipse cx="28" cy="38" rx="6" ry="3.5" fill="#6EC99A" fillOpacity="0.6" transform="rotate(-25 28 38)"/>
          <ellipse cx="72" cy="62" rx="6" ry="3.5" fill="#6EC99A" fillOpacity="0.6" transform="rotate(20 72 62)"/>
        </svg>

        {/* Moleculă hexagonală — dreapta jos, ascunsă pe mobile */}
        <svg className="hidden sm:block absolute bottom-12 right-12 w-24 h-24 bio-spin opacity-25"
          viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="45,10 73,27 73,63 45,80 17,63 17,27" stroke="#D4E8F0" strokeWidth="1.5" fill="none"/>
          {[[45,10],[73,27],[73,63],[45,80],[17,63],[17,27]].map(([cx,cy],i) => (
            <circle key={i} cx={cx} cy={cy} r="4.5"
              fill={i % 3 === 0 ? "#D4E8F0" : i % 3 === 1 ? "#6EC99A" : "#C47B2B"} opacity="0.9"/>
          ))}
          <circle cx="45" cy="45" r="5.5" fill="#D4E8F0" opacity="0.6"/>
          {[[45,10],[73,27],[73,63],[45,80],[17,63],[17,27]].map(([x2,y2],i) => (
            <line key={i} x1="45" y1="45" x2={x2} y2={y2} stroke="#D4E8F0" strokeWidth="0.8" opacity="0.25"/>
          ))}
        </svg>

      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-6"
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
