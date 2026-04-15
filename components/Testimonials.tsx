"use client";

const placeholderTestimonials = [
  {
    id: 1,
    text: "[Testimonial real — de completat de Claudia. Exemplu: 'Fiul meu a luat 9.5 la bacalaureat după 3 luni cu Claudia. Nu mai era stresat, înțelegea materia și era chiar entuziasmat de ore. Mulțumesc din suflet!']",
    name: "A.M.",
    context: "mamă, copil clasa XII",
    isPlaceholder: true,
  },
  {
    id: 2,
    text: "[Testimonial real — de completat de Claudia. Exemplu: 'Claudia are un har special de a explica. Fiica mea zicea că nu înțelege nimic din biologie. Acum îmi povestește cu entuziasm ce a aflat la oră. Incredibil!']",
    name: "M.P.",
    context: "mamă, copil clasa XI",
    isPlaceholder: true,
  },
  {
    id: 3,
    text: "[Testimonial real — de completat de Claudia. Exemplu: 'Atelierul de scriere mi-a dat curajul să pun pe hârtie lucruri pe care le purtam de ani de zile. Un spațiu sigur și cald — exact ce aveam nevoie.']",
    name: "L.C.",
    context: "femeie, atelier scriere",
    isPlaceholder: true,
  },
];

export default function Testimonials() {
  return (
    <section id="testimoniale" className="py-20 bg-[#EAE0D0]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="text-sm font-medium text-[#C47B2B] uppercase tracking-widest mb-3 block"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Rezultate reale
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#1E2A3A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ce spun cei care au trecut prin asta
          </h2>
        </div>

        {/* Notice banner — placeholder state */}
        <div className="bg-[#D4E8F0] border border-[#3B5E8C]/20 rounded-xl p-5 mb-10 flex items-start gap-3">
          <span className="text-[#3B5E8C] text-xl flex-shrink-0 mt-0.5">ℹ️</span>
          <div>
            <p
              className="text-sm font-medium text-[#3B5E8C] mb-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Testimonialele de mai jos sunt placeholder-e vizuale
            </p>
            <p
              className="text-sm text-[#5A6478]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Claudia va furniza minim 3 testimoniale reale (text + prenume + inițială + context).
              Nu se inventează testimoniale. Se înlocuiesc textele din paranteze.
            </p>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderTestimonials.map((t) => (
            <div
              key={t.id}
              className={`rounded-xl p-8 flex flex-col justify-between ${
                t.isPlaceholder ? "border-2 border-dashed border-[#C47B2B]/30" : ""
              }`}
              style={{ backgroundColor: "#EAE0D0", borderLeft: "3px solid #C47B2B" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#C47B2B] text-sm">★</span>
                ))}
              </div>

              {/* Quote mark */}
              <p
                className="text-4xl text-[#C47B2B]/30 leading-none mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "
              </p>

              {/* Text */}
              <p
                className="text-[#1E2A3A] italic flex-1 mb-6 text-sm leading-relaxed"
                style={{ fontFamily: "'Playfair Display', serif", lineHeight: "1.7" }}
              >
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#C47B2B]/15">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0"
                  style={{ backgroundColor: "#3B5E8C" }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p
                    className="text-sm font-medium text-[#1E2A3A]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs text-[#5A6478]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t.context}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-12">
          <p
            className="text-[#5A6478] text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Biologia nu se tocește. Se înțelege. Și cu înțelegerea vine și nota, și liniștea.
          </p>
        </div>
      </div>
    </section>
  );
}
