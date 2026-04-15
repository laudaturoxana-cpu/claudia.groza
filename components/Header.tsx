"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F7F2EB]/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex-shrink-0 hover:opacity-85 transition-opacity duration-200"
            aria-label="Acasă — Claudia Groza"
          >
            <Image
              src="/logo.svg"
              alt="Claudia Groza — Educația în Valiță"
              width={180}
              height={40}
              priority
              className="h-8 sm:h-10 w-auto max-w-[150px] sm:max-w-none"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Servicii", id: "servicii" },
              { label: "Despre", id: "despre" },
              { label: "Proces", id: "proces" },
              { label: "Testimoniale", id: "testimoniale" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium text-[#5A6478] hover:text-[#3B5E8C] transition-colors duration-200"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="px-5 py-2.5 bg-[#C47B2B] text-white text-sm font-medium rounded-lg hover:bg-[#b36e24] transition-all duration-200 hover:shadow-md"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Vreau să aflu mai mult
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Meniu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#1E2A3A] transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1E2A3A] transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1E2A3A] transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#F7F2EB] border-t border-[#EAE0D0] py-4 px-2 shadow-lg">
            {[
              { label: "Servicii", id: "servicii" },
              { label: "Despre", id: "despre" },
              { label: "Proces", id: "proces" },
              { label: "Testimoniale", id: "testimoniale" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left py-3 px-4 text-[#1E2A3A] hover:text-[#3B5E8C] hover:bg-[#D4E8F0]/30 rounded-lg transition-colors duration-200 font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-3 pb-1">
              <button
                onClick={() => scrollTo("contact")}
                className="w-full py-3 bg-[#C47B2B] text-white font-medium rounded-lg hover:bg-[#b36e24] transition-colors duration-200"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Vreau să aflu mai mult
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
