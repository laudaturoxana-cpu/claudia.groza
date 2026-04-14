"use client";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1E2A3A] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-4">
              <div className="flex items-baseline gap-1.5 mb-1">
                <span
                  className="text-2xl font-normal text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Claudia
                </span>
                <span
                  className="text-2xl font-medium text-[#D4E8F0] uppercase tracking-widest"
                  style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.12em" }}
                >
                  Groza
                </span>
              </div>
              <span
                className="text-sm text-[#5A6478]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Educația în Valiță
              </span>
            </div>
            <p
              className="text-[#5A6478] text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.7" }}
            >
              Educație cu suflet, pentru copii ambițioși și mame care nu renunță.
            </p>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook Claudia Groza"
                className="w-9 h-9 rounded-lg bg-[#2A3A4E] flex items-center justify-center hover:bg-[#3B5E8C] transition-colors duration-200"
                title="[Link Facebook — de completat]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="text-[#D4E8F0]">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram Claudia Groza"
                className="w-9 h-9 rounded-lg bg-[#2A3A4E] flex items-center justify-center hover:bg-[#3B5E8C] transition-colors duration-200"
                title="[Link Instagram — de completat]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="text-[#D4E8F0]">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Threads */}
              <a
                href="#"
                aria-label="Threads Claudia Groza"
                className="w-9 h-9 rounded-lg bg-[#2A3A4E] flex items-center justify-center hover:bg-[#3B5E8C] transition-colors duration-200"
                title="[Link Threads — de completat dacă există]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="text-[#D4E8F0]">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.028-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.267-.883-2.24-.887h-.044c-.72 0-1.979.198-2.976 1.08l-1.129-1.592c1.276-1.071 2.725-1.595 4.125-1.595h.065c3.135.013 5.013 1.889 5.315 5.175a21.898 21.898 0 0 1 1.791.875c1.153.68 2.027 1.558 2.521 2.732.87 2.017.795 5.003-1.571 7.316-1.782 1.751-3.958 2.525-7.16 2.548zM11.41 14.87c.91-.048 1.596-.354 2.038-.908.34-.424.564-1.016.674-1.773a11.232 11.232 0 0 0-2.54-.11c-1.784.099-2.369.78-2.33 1.49.04.736.757 1.34 2.158 1.301z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-sm font-medium text-white uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Navigare rapidă
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Servicii", id: "servicii" },
                { label: "Despre Claudia", id: "despre" },
                { label: "Cum lucrăm", id: "proces" },
                { label: "Testimoniale", id: "testimoniale" },
                { label: "FAQ", id: "faq" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-sm text-[#5A6478] hover:text-[#D4E8F0] transition-colors duration-200"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-sm font-medium text-white uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Legal
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                "Politică de confidențialitate",
                "Termeni și condiții",
                "GDPR",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-[#5A6478] hover:text-[#D4E8F0] transition-colors duration-200"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2A3A4E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-[#5A6478] text-center sm:text-left"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © {year} Claudia Groza / Educația în Valiță. Toate drepturile rezervate.
          </p>
          <p
            className="text-xs text-[#5A6478]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            claudiagroza.ro
          </p>
        </div>
      </div>
    </footer>
  );
}
