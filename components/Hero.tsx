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
      {/* Background organic shape */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute right-0 top-0 w-[60%] h-full opacity-30"
          viewBox="0 0 600 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M200 0 C300 100, 600 150, 600 300 C600 450, 450 500, 500 650 C550 800, 300 800, 200 800 L600 800 L600 0 Z"
            fill="#D4E8F0"
            opacity="0.4"
          />
          <path
            d="M350 0 C450 80, 600 200, 600 400 C600 600, 500 700, 600 800 L600 0 Z"
            fill="#D4E8F0"
            opacity="0.3"
          />
        </svg>
        {/* Decorative dots */}
        <div className="absolute top-32 right-[15%] w-3 h-3 rounded-full bg-[#C47B2B] opacity-40" />
        <div className="absolute top-64 right-[25%] w-2 h-2 rounded-full bg-[#3B5E8C] opacity-30" />
        <div className="absolute bottom-32 right-[20%] w-4 h-4 rounded-full bg-[#2C7A4B] opacity-25" />
        <div className="absolute top-48 right-[40%] w-2 h-2 rounded-full bg-[#C47B2B] opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          {/* Tagline pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4E8F0] rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#3B5E8C]" />
            <span
              className="text-sm text-[#3B5E8C] font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              21 de ani la catedră · Metodă proprie · Online, din toată România
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1E2A3A] mb-6"
            style={{ fontFamily: "'Playfair Display', serif", lineHeight: "1.2" }}
          >
            Faci tot ce poți
            <br />
            pentru el.
            <br />
            <span className="text-[#3B5E8C]">Eu fac restul.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg text-[#5A6478] mb-10 max-w-xl"
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.7" }}
          >
            21 de ani la catedră, metodă proprie, biologie pe înțelesul oricui —
            împreună ajungem unde vă doriți amândoi.
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
          <div className="flex flex-wrap gap-3">
            {[
              { icon: "✦", text: "21 de ani la catedră" },
              { icon: "✦", text: "Metodă proprie de învățare" },
              { icon: "✦", text: "Online, din toată România" },
              { icon: "✦", text: "Prima discuție gratuită" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/70 rounded-full border border-[#EAE0D0]"
              >
                <span className="text-[#C47B2B] text-xs">{badge.icon}</span>
                <span
                  className="text-xs text-[#5A6478] font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60 L0 40 C240 10, 480 55, 720 35 C960 15, 1200 50, 1440 30 L1440 60 Z"
            fill="#EAE0D0"
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
