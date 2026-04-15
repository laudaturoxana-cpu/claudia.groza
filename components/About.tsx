"use client";

const specializations = [
  { color: "#3B5E8C", bg: "#D4E8F0", label: "Biologie pentru bacalaureat (clasele XI–XII)" },
  { color: "#2C7A4B", bg: "#EAF3EC", label: "Biologie distractivă pentru copii (6–12 ani)" },
  { color: "#7B5EA7", bg: "#EDE5F5", label: "Scriere creativă și terapeutică pentru femei" },
];

const highlights = [
  { number: "21", label: "ani la catedră" },
  { number: "3", label: "servicii specializate" },
  { number: "∞", label: "răbdare și metodă" },
];

export default function About() {
  return (
    <section id="despre" className="py-20 bg-[#F7F2EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="text-sm font-medium text-[#C47B2B] uppercase tracking-widest mb-3 block"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Povestea mea
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1E2A3A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Cine sunt eu
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Photo placeholder */}
          <div className="relative pb-6 sm:pb-0">
            <div
              className="aspect-[3/2] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl flex items-center justify-center overflow-hidden relative"
              style={{ backgroundColor: "#EAE0D0" }}
            >
              {/* Placeholder photo area */}
              <div className="text-center px-8">
                <div className="w-24 h-24 rounded-full bg-[#D4E8F0] flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">👩‍🏫</span>
                </div>
                <p
                  className="text-[#5A6478] text-sm italic"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Fotografie profesională Claudia Groza
                </p>
                <p
                  className="text-[#5A6478] text-xs mt-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  [De înlocuit cu fotografia reală — lumină caldă, context la catedră sau cu cărțile]
                </p>
              </div>

              {/* Decorative element */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3 opacity-30 rounded-b-2xl"
                style={{
                  background:
                    "linear-gradient(to top, #3B5E8C20, transparent)",
                }}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-[#C47B2B] text-white rounded-xl p-3 sm:p-4 shadow-lg">
              <p
                className="text-3xl font-bold leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                21
              </p>
              <p
                className="text-xs mt-0.5 opacity-90"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                ani la catedră
              </p>
            </div>
          </div>

          {/* Text content */}
          <div className="lg:pt-4">
            {/* Stats row */}
            <div className="flex gap-6 sm:gap-8 mb-8 sm:mb-10">
              {highlights.map((h) => (
                <div key={h.label} className="text-center">
                  <p
                    className="text-3xl font-medium text-[#3B5E8C]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {h.number}
                  </p>
                  <p
                    className="text-xs text-[#5A6478] mt-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {h.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Main text */}
            <div className="space-y-5 mb-10">
              <p
                className="text-[#1E2A3A] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.7" }}
              >
                Sunt <strong>Claudia Groza</strong> — profesoară de biologie de 21 de ani,
                autoare de cărți pentru copii și creatoarea{" "}
                <em style={{ fontFamily: "'Playfair Display', serif" }}>
                  Educației în Valiță
                </em>
                .
              </p>
              <p
                className="text-[#1E2A3A] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.7" }}
              >
                Am ales să fiu profesoară pentru că știu că un om care înțelege
                poate obține orice. Nu predau biologie — predau cum să înveți.
                Și asta face toată diferența.
              </p>
              <p
                className="text-[#1E2A3A] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.7" }}
              >
                Empatie, metodă proprie și personalizare pentru fiecare cursant —
                acestea sunt secretul meu.
              </p>
            </div>

            {/* Experience pills */}
            <div className="mb-10">
              <p
                className="text-xs font-medium text-[#5A6478] uppercase tracking-widest mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Specializări
              </p>
              <div className="flex flex-col gap-2">
                {specializations.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg"
                    style={{ backgroundColor: spec.bg }}
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: spec.color }}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: spec.color,
                      }}
                    >
                      {spec.label}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#F7F2EB] border border-dashed border-[#EAE0D0]">
                  <div className="w-2 h-2 rounded-full flex-shrink-0 bg-[#EAE0D0]" />
                  <span
                    className="text-sm text-[#5A6478] italic"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    [Studii, certificări, alte specializări — de confirmat cu Claudia]
                  </span>
                </div>
              </div>
            </div>

            {/* Differentiator quote */}
            <blockquote className="border-l-4 border-[#C47B2B] pl-6 py-2">
              <p
                className="text-[#1E2A3A] italic"
                style={{ fontFamily: "'Playfair Display', serif", lineHeight: "1.6" }}
              >
                "Cursurile mele nu sunt doar despre materie — includ metodă de
                învățare pentru viață, susținere motivațională și personalizare
                pentru fiecare cursant."
              </p>
              <cite
                className="text-sm text-[#5A6478] mt-2 block not-italic"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                — Claudia Groza
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
