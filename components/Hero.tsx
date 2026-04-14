"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#F7F2EB] overflow-hidden pt-20"
    >
      {/* Background blob dreapta */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute right-0 top-0 h-full w-[55%] opacity-20"
          viewBox="0 0 700 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMid slice"
        >
          <ellipse cx="500" cy="450" rx="340" ry="420" fill="#D4E8F0" />
          <ellipse cx="600" cy="200" rx="200" ry="180" fill="#3B5E8C" opacity="0.15" />
        </svg>
        <div className="absolute top-1/4 right-[12%] w-4 h-4 rounded-full bg-[#C47B2B] opacity-30" />
        <div className="absolute top-1/2 right-[30%] w-2 h-2 rounded-full bg-[#3B5E8C] opacity-20" />
        <div className="absolute bottom-1/4 right-[18%] w-5 h-5 rounded-full bg-[#2C7A4B] opacity-20" />
      </div>

      {/* ── GRID PRINCIPAL ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-80px)] py-16 lg:py-0">

          {/* ── COLOANA STÂNGA — text ── */}
          <div className="flex flex-col justify-center">
            {/* Pill tagline */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#D4E8F0] rounded-full mb-8 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#3B5E8C] flex-shrink-0" />
              <span
                className="text-sm text-[#3B5E8C] font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                21 de ani la catedră · Metodă proprie · Online
              </span>
            </div>

            {/* H1 */}
            <h1
              className="text-5xl sm:text-6xl xl:text-7xl font-normal text-[#1E2A3A] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", lineHeight: "1.15" }}
            >
              Faci tot ce poți
              <br />
              pentru el.
              <br />
              <span className="text-[#3B5E8C]">Eu fac restul.</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg xl:text-xl text-[#5A6478] mb-10 max-w-lg"
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.7" }}
            >
              21 de ani la catedră, metodă proprie, biologie pe înțelesul
              oricui — împreună ajungem unde vă doriți amândoi.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 bg-[#C47B2B] text-white font-medium rounded-lg hover:bg-[#b36e24] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Vreau să aflu mai mult
              </button>
              <button
                onClick={() => scrollTo("proces")}
                className="px-8 py-4 border-2 border-[#3B5E8C] text-[#3B5E8C] font-medium rounded-lg hover:bg-[#3B5E8C] hover:text-white transition-all duration-200 text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Vezi cum lucrez
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2.5">
              {[
                "21 de ani la catedră",
                "Metodă proprie de învățare",
                "Online, din toată România",
                "Prima discuție gratuită",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/80 rounded-full border border-[#EAE0D0]"
                >
                  <span className="text-[#C47B2B] text-xs leading-none">✦</span>
                  <span
                    className="text-xs text-[#5A6478] font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── COLOANA DREAPTA — card vizual ── */}
          <div className="hidden lg:flex flex-col gap-5 items-center justify-center">
            {/* Card principal — citat + foto placeholder */}
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Header card */}
              <div className="bg-[#3B5E8C] px-8 py-6">
                <p
                  className="text-white/90 text-lg italic leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "Biologia nu se tocește. Se înțelege. Și cu înțelegerea vine
                  și nota, și liniștea."
                </p>
                <p
                  className="text-[#D4E8F0] text-sm mt-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  — Claudia Groza
                </p>
              </div>

              {/* Foto placeholder */}
              <div
                className="flex flex-col items-center justify-center py-10 px-8"
                style={{ backgroundColor: "#EAE0D0" }}
              >
                <div className="w-20 h-20 rounded-full bg-[#D4E8F0] flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-4xl">👩‍🏫</span>
                </div>
                <p
                  className="font-medium text-[#1E2A3A] text-base"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Claudia Groza
                </p>
                <p
                  className="text-sm text-[#5A6478] mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Educația în Valiță
                </p>
                <p
                  className="text-xs text-[#5A6478]/60 italic mt-3 text-center"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  [Foto profesională — de înlocuit]
                </p>
              </div>
            </div>

            {/* 3 mini-carduri servicii */}
            <div className="w-full max-w-md grid grid-cols-3 gap-3">
              {[
                { icon: "🎓", label: "Biologie BAC", color: "#D4E8F0", accent: "#3B5E8C" },
                { icon: "🌿", label: "Atelier copii", color: "#EAF3EC", accent: "#2C7A4B" },
                { icon: "✍️", label: "Atelier scriere", color: "#EDE5F5", accent: "#7B5EA7" },
              ].map((s) => (
                <button
                  key={s.label}
                  onClick={() => scrollTo("servicii")}
                  className="flex flex-col items-center gap-2 py-4 px-2 rounded-xl hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
                  style={{ backgroundColor: s.color }}
                >
                  <span className="text-2xl">{s.icon}</span>
                  <span
                    className="text-xs font-medium text-center leading-tight"
                    style={{ fontFamily: "'Inter', sans-serif", color: s.accent }}
                  >
                    {s.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Wave de jos */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 50 L0 35 C360 5, 720 48, 1080 20 C1260 8, 1380 38, 1440 25 L1440 50 Z"
            fill="#EAE0D0"
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
