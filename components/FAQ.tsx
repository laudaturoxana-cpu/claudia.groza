"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question:
      "Cursul de biologie e pentru orice nivel sau trebuie să fie deja bun la materie?",
    answer:
      "[Răspuns de confirmat cu Claudia. Exemplu: 'Cursul meu e gândit pentru orice nivel de plecare — de la elevi care nu știu nimic până la cei care vor să consolideze. Evaluez situația fiecărui cursant la prima discuție și adaptez abordarea. Nu există 'prea slab pentru mine'.']",
    isPlaceholder: true,
  },
  {
    id: 2,
    question: "Cursurile sunt online sau față în față?",
    answer:
      "[Răspuns de confirmat cu Claudia. Exemplu: 'Cursurile sunt online, prin platformă video. Pot fi accesate din orice colț din România, fără deplasare. [Sau: Am și cursuri față în față în Cluj — discutăm la prima întâlnire ce se potrivește mai bine.]']",
    isPlaceholder: true,
  },
  {
    id: 3,
    question: "Cum plătesc și când primesc acces?",
    answer:
      "[Răspuns de confirmat cu Claudia. Exemplu: 'Plata se face online, prin transfer bancar sau link de plată. Accesul la materiale și la programul de ore îl primești imediat după confirmare, în maxim 24 de ore.']",
    isPlaceholder: true,
  },
  {
    id: 4,
    question: "Ce se întâmplă dacă copilul meu nu vrea să participe?",
    answer:
      "[Răspuns de confirmat cu Claudia. Exemplu: 'E mai frecvent decât crezi. La prima oră ne cunoaștem — fără presiune, fără materie. Obiectivul meu e să îl fac pe copilul tău să vrea să revină. Dacă după primele 2 ore nu simte o diferență, discutăm soluții.']",
    isPlaceholder: true,
  },
  {
    id: 5,
    question: "Există o primă lecție gratuită?",
    answer:
      "[Răspuns de confirmat cu Claudia. Exemplu: 'Da — ofer o primă discuție gratuită de 20 de minute în care înțeleg situația și îți explic cum pot ajuta. [SAU: Prima oră este o sesiune de evaluare gratuită, ca să știm amândoi de unde plecăm.]']",
    isPlaceholder: true,
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-[#F7F2EB]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="text-sm font-medium text-[#C47B2B] uppercase tracking-widest mb-3 block"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Clarificări
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1E2A3A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Întrebări frecvente
          </h2>
        </div>

        {/* Notice — placeholder */}
        <div className="bg-[#D4E8F0] border border-[#3B5E8C]/20 rounded-xl p-4 mb-10 flex items-start gap-3">
          <span className="text-[#3B5E8C] text-base flex-shrink-0 mt-0.5">ℹ️</span>
          <p
            className="text-sm text-[#5A6478]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Răspunsurile de mai jos sunt placeholder-e. Claudia va furniza răspunsurile reale.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-xl overflow-hidden border border-[#EAE0D0] bg-white/60"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F7F2EB]/80 transition-colors duration-200"
              >
                <span
                  className="font-medium text-[#1E2A3A] pr-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openId === faq.id
                      ? "bg-[#C47B2B] text-white rotate-180"
                      : "bg-[#EAE0D0] text-[#5A6478]"
                  }`}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              {openId === faq.id && (
                <div className="px-6 pb-6">
                  <div
                    className="pt-1 border-t border-[#EAE0D0]"
                  />
                  <p
                    className="text-[#5A6478] pt-4 leading-relaxed text-sm"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.7" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* More questions prompt */}
        <div className="text-center mt-10">
          <p
            className="text-[#5A6478] mb-4 text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Ai o întrebare la care nu ai găsit răspuns?
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 border-2 border-[#3B5E8C] text-[#3B5E8C] font-medium rounded-lg hover:bg-[#3B5E8C] hover:text-white transition-all duration-200 text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Întreabă-mă direct
          </button>
        </div>
      </div>
    </section>
  );
}
