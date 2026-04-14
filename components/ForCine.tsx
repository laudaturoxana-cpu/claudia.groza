"use client";

const cards = [
  {
    id: 1,
    bg: "#D4E8F0",
    accent: "#3B5E8C",
    icon: "📚",
    title: "Bacalaureatul se apropie și ți-e frică",
    text: "Copilul tău nu reține, nu înțelege, nu vrea să audă de biologie. Tu ai făcut tot ce ai putut. Știu. De-acum fac eu restul.",
  },
  {
    id: 2,
    bg: "#EAE0D0",
    accent: "#3B5E8C",
    icon: "🔬",
    title: "Biologia pare imposibilă",
    text: "Nu trebuie să iubești biologia. Trebuie doar să o înțelegi. Eu îți arăt cum — fără să tocești, fără să te pierzi în materie.",
  },
  {
    id: 3,
    bg: "#D4E8F0",
    accent: "#3B5E8C",
    icon: "🌱",
    title: "Vrei mai mult pentru copilul tău",
    text: "Curiozitatea se trezește devreme. Un atelier de biologie distractivă poate fi primul pas spre o relație bună cu știința.",
  },
  {
    id: 4,
    bg: "#EAE0D0",
    accent: "#3B5E8C",
    icon: "✍️",
    title: "Îngrijești pe toți ceilalți",
    text: "Povestea ta cine o spune? Există un spațiu pentru tine — să te regăsești, să îți dai voce, să fii tu.",
  },
];

export default function ForCine() {
  return (
    <section id="pentru-cine" className="py-20 bg-[#F7F2EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="text-sm font-medium text-[#C47B2B] uppercase tracking-widest mb-3 block"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Ești în locul potrivit
          </span>
          <h2
            className="text-4xl sm:text-5xl font-normal text-[#1E2A3A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Te recunoști?
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cards.map((card) => (
            <div
              key={card.id}
              className="rounded-xl p-8 group hover:-translate-y-1 transition-transform duration-300 cursor-default"
              style={{ backgroundColor: card.bg }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0 mt-0.5">{card.icon}</span>
                <div>
                  <h3
                    className="text-xl font-medium mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: card.accent,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[#5A6478] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.7" }}
                  >
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sub-text */}
        <div className="text-center">
          <p
            className="text-lg text-[#5A6478] italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "Nu trebuie să știi exact ce cauți. De-aici începem."
          </p>
        </div>
      </div>
    </section>
  );
}
