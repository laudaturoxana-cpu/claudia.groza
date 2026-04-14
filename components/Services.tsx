"use client";

const services = [
  {
    id: "bac",
    bg: "#D4E8F0",
    accentColor: "#3B5E8C",
    btnColor: "#C47B2B",
    btnHover: "#b36e24",
    icon: "🎓",
    tag: "Bacalaureat",
    title: "Curs de biologie pentru bacalaureat",
    description:
      "Pentru elevii de clasa XI–XII care dau biologie la BAC. Metodă proprie de înțelegere — nu de memorare mecanică. Online, din orice colț din România.",
    duration: "[Durată — de confirmat cu Claudia]",
    price: "[Preț — de confirmat cu Claudia]",
    btnLabel: "Vreau să mă înscriu",
    messageParent: "Faci tot ce poți pentru el. Eu fac restul.",
    messageStudent:
      "Nu trebuie să iubești biologia. Trebuie doar să o înțelegi.",
    scrollTo: "contact",
  },
  {
    id: "copii",
    bg: "#EAF3EC",
    accentColor: "#2C7A4B",
    btnColor: "#2C7A4B",
    btnHover: "#236640",
    icon: "🌿",
    tag: "6–12 ani",
    title: "Atelier de biologie distractivă",
    description:
      "Pentru copiii cu vârste între 6–12 ani care descoperă lumea științei prin joacă, experimente și curiozitate. Locul unde știința devine aventură.",
    duration: "[Durată — de confirmat cu Claudia]",
    price: "[Preț — de confirmat cu Claudia]",
    btnLabel: "Înscrie copilul",
    messageParent:
      "Curiozitatea se trezește devreme. Atelierul de biologie distractivă e locul unde știința devine joacă — și unde dragostea pentru învățat începe.",
    scrollTo: "contact",
  },
  {
    id: "scriere",
    bg: "#EDE5F5",
    accentColor: "#7B5EA7",
    btnColor: "#7B5EA7",
    btnHover: "#6a4f92",
    icon: "✍️",
    tag: "Femei",
    title: "Atelier de scriere — spațiul tău",
    description:
      "Pentru femeile și mamele care vor să își spună povestea. Atelierul de scriere e spațiul tău — să te regăsești, să îți dai voce, să fii tu.",
    duration: "[Durată — de confirmat cu Claudia]",
    price: "[Preț — de confirmat cu Claudia]",
    btnLabel: "Rezervă un loc",
    messageParent:
      "Îngrijești pe toți ceilalți. Povestea ta cine o spune? Atelierul de scriere e spațiul tău — să te regăsești, să îți dai voce, să fii tu.",
    scrollTo: "contact",
  },
];

export default function Services() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicii" className="py-20 bg-[#EAE0D0]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="text-sm font-medium text-[#C47B2B] uppercase tracking-widest mb-3 block"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Servicii
          </span>
          <h2
            className="text-4xl sm:text-5xl font-normal text-[#1E2A3A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Cum te pot ajuta
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300"
              style={{ backgroundColor: service.bg }}
            >
              {/* Card header */}
              <div className="p-8 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full text-white"
                    style={{
                      backgroundColor: service.accentColor,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {service.tag}
                  </span>
                </div>
                <h3
                  className="text-xl font-medium mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: service.accentColor,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[#5A6478] leading-relaxed mb-6 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.7" }}
                >
                  {service.description}
                </p>
              </div>

              {/* Duration & Price */}
              <div className="px-8 pb-4 flex gap-4">
                <div className="flex-1 bg-white/50 rounded-lg p-3 text-center">
                  <p
                    className="text-xs text-[#5A6478] mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Durată
                  </p>
                  <p
                    className="text-sm font-medium text-[#1E2A3A]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {service.duration}
                  </p>
                </div>
                <div className="flex-1 bg-white/50 rounded-lg p-3 text-center">
                  <p
                    className="text-xs text-[#5A6478] mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Preț
                  </p>
                  <p
                    className="text-sm font-medium text-[#1E2A3A]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {service.price}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="px-8 pb-6 mt-auto">
                <button
                  onClick={() => scrollTo(service.scrollTo)}
                  className="w-full py-3 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                  style={{
                    backgroundColor: service.btnColor,
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      service.btnHover)
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      service.btnColor)
                  }
                >
                  {service.btnLabel}
                </button>
              </div>

              {/* Message */}
              <div
                className="px-8 pb-8"
                style={{ borderTop: `2px solid ${service.accentColor}20` }}
              >
                <p
                  className="text-xs text-[#5A6478] italic pt-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "{service.messageParent}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p
            className="text-[#5A6478] mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Nu știi ce se potrivește mai bine situației tale?
          </p>
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-4 bg-[#C47B2B] text-white font-medium rounded-lg hover:bg-[#b36e24] transition-all duration-200 hover:shadow-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Vreau să aflu mai mult
          </button>
        </div>
      </div>
    </section>
  );
}
