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
      {/* ═══════════════════════════════════════════
          DECORAȚII BIOLOGICE — FUNDAL
      ═══════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">

        {/* Blob mare dreptun — fundal albăstrui */}
        <svg
          className="absolute right-0 top-0 h-full w-[52%] opacity-[0.13]"
          viewBox="0 0 700 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMid slice"
        >
          <path
            d="M150 0 C350 80, 700 100, 680 350 C660 600, 480 680, 520 850 C560 1020, 200 900, 150 900 Z"
            fill="#3B5E8C"
          />
        </svg>

        {/* ── 1. HELIX ADN — dreapta sus ── */}
        <svg
          className="absolute top-24 right-[6%] w-20 h-52 bio-float-slow"
          viewBox="0 0 56 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          opacity="0.45"
        >
          {/* Catenă stângă */}
          <path
            d="M8 0 C8 18, 48 22, 48 35 C48 48, 8 52, 8 65 C8 78, 48 82, 48 95 C48 108, 8 112, 8 125 C8 138, 48 138, 48 140"
            stroke="#3B5E8C" strokeWidth="2.5" strokeLinecap="round" fill="none"
            strokeDasharray="6 3" className="bio-dash"
          />
          {/* Catenă dreaptă */}
          <path
            d="M48 0 C48 18, 8 22, 8 35 C8 48, 48 52, 48 65 C48 78, 8 82, 8 95 C8 108, 48 112, 48 125 C48 138, 8 138, 8 140"
            stroke="#3B5E8C" strokeWidth="2.5" strokeLinecap="round" fill="none"
            strokeDasharray="6 3" style={{ animationDelay: "1.5s" }} className="bio-dash"
          />
          {/* Punți de hidrogen */}
          {[22, 49, 76, 103].map((y) => (
            <line key={y} x1="11" y1={y} x2="45" y2={y}
              stroke="#C47B2B" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"
            />
          ))}
          {/* Noduri */}
          {[0, 35, 65, 95, 125].map((y, i) => (
            <circle key={y} cx={i % 2 === 0 ? 8 : 48} cy={y} r="3.5"
              fill="#3B5E8C" opacity="0.9"
            />
          ))}
        </svg>

        {/* ── 2. CELULĂ cu nucleu — stânga jos ── */}
        <svg
          className="absolute bottom-24 left-[4%] w-28 h-28 bio-pulse"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          opacity="0.38"
        >
          {/* Membrană celulară externă */}
          <ellipse cx="50" cy="50" rx="46" ry="42" stroke="#2C7A4B" strokeWidth="1.5"
            strokeDasharray="4 3" fill="#2C7A4B" fillOpacity="0.08"
          />
          {/* Membrană internă */}
          <ellipse cx="50" cy="50" rx="38" ry="34" stroke="#2C7A4B" strokeWidth="1"
            fill="none" opacity="0.4"
          />
          {/* Nucleu */}
          <ellipse cx="50" cy="50" rx="18" ry="16" fill="#3B5E8C" fillOpacity="0.55"
            stroke="#3B5E8C" strokeWidth="1.5"
          />
          {/* Nucleol */}
          <circle cx="50" cy="50" r="6" fill="#C47B2B" fillOpacity="0.75" />
          {/* Organite — mitocondrii verzi */}
          <ellipse cx="24" cy="36" rx="7" ry="4" fill="#2C7A4B" fillOpacity="0.5" transform="rotate(-30 24 36)" />
          <ellipse cx="74" cy="64" rx="7" ry="4" fill="#2C7A4B" fillOpacity="0.5" transform="rotate(20 74 64)" />
          <ellipse cx="30" cy="68" rx="5" ry="3" fill="#2C7A4B" fillOpacity="0.4" transform="rotate(45 30 68)" />
          {/* Cloroplaste suplimentare */}
          <ellipse cx="70" cy="32" rx="5" ry="3" fill="#2C7A4B" fillOpacity="0.35" transform="rotate(-15 70 32)" />
        </svg>

        {/* ── 3. FRUNZĂ BOTANICĂ — dreapta mijloc ── */}
        <svg
          className="absolute top-1/2 right-[2%] w-16 h-24 bio-float"
          style={{ marginTop: "-48px" }}
          viewBox="0 0 60 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          opacity="0.42"
        >
          {/* Corp frunză — verde */}
          <path
            d="M30 85 C30 85, 5 65, 5 40 C5 18, 18 5, 30 2 C42 5, 55 18, 55 40 C55 65, 30 85, 30 85 Z"
            fill="#2C7A4B" fillOpacity="0.22" stroke="#2C7A4B" strokeWidth="1.5"
          />
          {/* Nervură centrală */}
          <line x1="30" y1="85" x2="30" y2="5" stroke="#2C7A4B" strokeWidth="1.5" strokeLinecap="round" />
          {/* Nervuri laterale */}
          {[20, 35, 50, 65].map((y, i) => (
            <g key={y}>
              <line x1="30" y1={y} x2={30 - 12 - i * 2} y2={y + 8}
                stroke="#2C7A4B" strokeWidth="1" strokeLinecap="round" opacity="0.65"
              />
              <line x1="30" y1={y} x2={30 + 12 + i * 2} y2={y + 8}
                stroke="#2C7A4B" strokeWidth="1" strokeLinecap="round" opacity="0.65"
              />
            </g>
          ))}
        </svg>

        {/* ── 4. MOLECULĂ (structură hexagonală) — sus stânga ── */}
        <svg
          className="absolute top-32 left-[6%] w-24 h-24 bio-spin"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          opacity="0.2"
        >
          {/* Hexagon central */}
          <polygon
            points="45,10 73,27 73,63 45,80 17,63 17,27"
            stroke="#3B5E8C" strokeWidth="1.5" fill="none"
          />
          {/* Atomi în vârfuri — albastru, chihlimbar, verde alternând */}
          {[
            [45, 10], [73, 27], [73, 63], [45, 80], [17, 63], [17, 27]
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="4.5"
              fill={i % 3 === 0 ? "#3B5E8C" : i % 3 === 1 ? "#2C7A4B" : "#C47B2B"} opacity="0.85"
            />
          ))}
          {/* Atom central */}
          <circle cx="45" cy="45" r="6" fill="#3B5E8C" opacity="0.6" />
          {/* Legături de la centru */}
          {[
            [45, 10], [73, 27], [73, 63], [45, 80], [17, 63], [17, 27]
          ].map(([x2, y2], i) => (
            <line key={i} x1="45" y1="45" x2={x2} y2={y2}
              stroke="#3B5E8C" strokeWidth="0.8" opacity="0.4"
            />
          ))}
        </svg>

        {/* ── 5. MICROSCOPIE — cercuri concentrice — fundalul drept ── */}
        <svg
          className="absolute bottom-16 right-[8%] w-32 h-32 bio-pulse"
          style={{ animationDelay: "2.5s" }}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          opacity="0.18"
        >
          <circle cx="60" cy="60" r="56" stroke="#3B5E8C" strokeWidth="1" strokeDasharray="5 4" />
          <circle cx="60" cy="60" r="42" stroke="#3B5E8C" strokeWidth="1" />
          <circle cx="60" cy="60" r="28" stroke="#C47B2B" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="60" cy="60" r="14" fill="#3B5E8C" fillOpacity="0.25" stroke="#3B5E8C" strokeWidth="1" />
          <circle cx="60" cy="60" r="5" fill="#C47B2B" fillOpacity="0.6" />
          {/* Cruciuliță de aliniere microscopie */}
          <line x1="60" y1="4" x2="60" y2="20" stroke="#3B5E8C" strokeWidth="1" opacity="0.5" />
          <line x1="60" y1="100" x2="60" y2="116" stroke="#3B5E8C" strokeWidth="1" opacity="0.5" />
          <line x1="4" y1="60" x2="20" y2="60" stroke="#3B5E8C" strokeWidth="1" opacity="0.5" />
          <line x1="100" y1="60" x2="116" y2="60" stroke="#3B5E8C" strokeWidth="1" opacity="0.5" />
        </svg>

      </div>

      {/* ═══════════════════════════════════════════
          CONȚINUT PRINCIPAL
      ═══════════════════════════════════════════ */}
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
            {/* Card principal — glass effect */}
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.72)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.6)",
              }}
            >
              {/* Header card */}
              <div className="bg-[#3B5E8C] px-8 py-6 relative overflow-hidden">
                {/* Mini helix decorativ în card */}
                <svg className="absolute right-4 top-3 opacity-10" width="40" height="60" viewBox="0 0 40 60" fill="none">
                  <path d="M5 0 C5 10,35 14,35 20 C35 26,5 30,5 36 C5 42,35 46,35 52 C35 58,5 58,5 60"
                    stroke="white" strokeWidth="2" fill="none" strokeDasharray="4 2"/>
                  <path d="M35 0 C35 10,5 14,5 20 C5 26,35 30,35 36 C35 42,5 46,5 52 C5 58,35 58,35 60"
                    stroke="white" strokeWidth="2" fill="none" strokeDasharray="4 2"/>
                </svg>
                <p
                  className="text-white/90 text-lg italic leading-relaxed relative z-10"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "Biologia nu se tocește. Se înțelege. Și cu înțelegerea vine
                  și nota, și liniștea."
                </p>
                <p
                  className="text-[#D4E8F0] text-sm mt-3 relative z-10"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  — Claudia Groza
                </p>
              </div>

              {/* Foto placeholder */}
              <div className="flex flex-col items-center justify-center py-10 px-8 bg-[#EAE0D0]/40">
                <div className="w-20 h-20 rounded-full bg-[#D4E8F0] flex items-center justify-center mb-4 shadow-sm ring-4 ring-white/60">
                  <span className="text-4xl">👩‍🏫</span>
                </div>
                <p
                  className="font-medium text-[#1E2A3A] text-base"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Claudia Groza
                </p>
                <p className="text-sm text-[#5A6478] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Educația în Valiță
                </p>
                <p className="text-xs text-[#5A6478]/50 italic mt-3 text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
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
                  className="flex flex-col items-center gap-2 py-4 px-2 rounded-xl hover:-translate-y-1 transition-transform duration-200 cursor-pointer border border-white/60"
                  style={{
                    backgroundColor: s.color,
                    backdropFilter: "blur(8px)",
                  }}
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

      {/* Wave jos */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 50 L0 35 C360 5, 720 48, 1080 20 C1260 8, 1380 38, 1440 25 L1440 50 Z"
            fill="#EAE0D0" opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
