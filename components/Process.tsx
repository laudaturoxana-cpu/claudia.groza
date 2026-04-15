"use client";

const steps = [
  {
    number: "01",
    title: "Ne cunoaștem",
    description:
      "Îmi scrii — prin formularul de contact sau pe WhatsApp. Îți răspund în maxim 24 de ore și stabilim o discuție scurtă ca să înțeleg exact ce ai nevoie.",
    icon: "💬",
    color: "#3B5E8C",
    bg: "#D4E8F0",
  },
  {
    number: "02",
    title: "Găsim soluția potrivită",
    description:
      "Îți prezint cursul sau atelierul care se potrivește cel mai bine. Fără presiune, fără grăbire.",
    icon: "🎯",
    color: "#C47B2B",
    bg: "#EAE0D0",
  },
  {
    number: "03",
    title: "Începem",
    description:
      "Te înscrii și primești acces imediat la materiale și la programul de întâlniri. Eu sunt alături de tine de la primul moment — inclusiv când ai vrea să renunți.",
    icon: "🚀",
    color: "#3B5E8C",
    bg: "#D4E8F0",
  },
  {
    number: "04",
    title: "Ajungem unde ne-am propus",
    description:
      "Biologia nu se mai tocește. Se înțelege. Și cu înțelegerea vine și nota, și liniștea.",
    icon: "✨",
    color: "#C47B2B",
    bg: "#EAE0D0",
  },
];

export default function Process() {
  return (
    <section id="proces" className="py-20 bg-[#EAE0D0]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="text-sm font-medium text-[#C47B2B] uppercase tracking-widest mb-3 block"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Pas cu pas
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1E2A3A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Cum funcționează
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-[#EAE0D0] to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center group">
                {/* Step circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-sm group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: step.bg, border: `2px solid ${step.color}20` }}
                >
                  <span className="text-2xl">{step.icon}</span>
                </div>

                {/* Number */}
                <div
                  className="absolute top-0 right-1/2 translate-x-10 -translate-y-2 text-xs font-bold"
                  style={{ color: step.color, fontFamily: "'Inter', sans-serif" }}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div
                  className="rounded-xl p-6 w-full flex-1"
                  style={{ backgroundColor: step.bg }}
                >
                  <h3
                    className="text-lg font-medium mb-3"
                    style={{ fontFamily: "'Playfair Display', serif", color: step.color }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm text-[#5A6478] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.7" }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Arrow — mobile only */}
                {index < steps.length - 1 && (
                  <div className="sm:hidden mt-4 text-[#EAE0D0] text-2xl">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom validation text */}
        <div className="text-center mt-14">
          <div className="inline-block bg-[#F7F2EB] border border-[#EAE0D0] rounded-xl px-8 py-6 max-w-2xl">
            <p
              className="text-lg text-[#1E2A3A] italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "Poți veni și doar cu 'nu știu de unde să încep'. E de ajuns."
            </p>
            <p
              className="text-sm text-[#5A6478] mt-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              — Claudia Groza
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
