"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header({ onDonateClick, onVolunteerClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f8f9ff]/90 backdrop-blur-md border-b border-[#d3c5ac]/30 shadow-sm h-20">
      <div className="flex justify-between items-center h-full px-6 max-w-7xl mx-auto">
        {/* Logo / Title */}
        <div className="flex items-center gap-3">
          <div>
            <span className="font-sans font-bold text-lg md:text-xl text-[#6D2C2C] tracking-tight block">
              P.P. Maniya Education and <br /> Medical Trust
            </span>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          <a
            href="#home"
            className="text-[#6D2C2C] hover:text-[#D4B07A] font-semibold text-sm tracking-wide"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-[#6D2C2C] hover:text-[#D4B07A] transition-colors text-sm font-medium"
          >
            About Trust
          </a>
          <a
            href="#activities"
            className="text-[#6D2C2C] hover:text-[#D4B07A] transition-colors text-sm font-medium"
          >
            Activities
          </a>
          <a
            href="#gallery"
            className="text-[#6D2C2C] hover:text-[#D4B07A] transition-colors text-sm font-medium"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-[#6D2C2C] hover:text-[#D4B07A] transition-colors text-sm font-medium"
          >
            Contact Us
          </a>

          <button
            onClick={onDonateClick}
            className="bg-[#D4B07A] text-[#6D2C2C] px-5 py-2.5 rounded-lg hover:bg-[#6D2C2C] hover:text-[#D4B07A] text-sm font-bold shadow-sm active:scale-95 transition-colors"
          >
            Donate Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#0b1c30] p-2 hover:bg-[#eaf1ff] rounded-lg transition-colors"
          title="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-[#d3c5ac]/40 shadow-xl p-6 flex flex-col gap-4 z-40 lg:hidden"
          >
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About Trust" },
              { href: "#calculator", label: "Eligibility Calculator" },
              { href: "#activities", label: "Our Activities" },
              { href: "#gallery", label: "Gallery of Impact" },
              { href: "#contact", label: "Contact Us" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#6D2C2C] hover:text-[#D4B07A] transition-colors text-sm font-medium"
              >
                {label}
              </a>
            ))}

            <div className="grid grid-cols-2 gap-3 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDonateClick?.();
                }}
                className="bg-[#D4B07A] text-[#6D2C2C] hover:bg-[#6D2C2C] hover:text-[#D4B07A] px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm active:scale-95 transition-colors"
              >
                Donate
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onVolunteerClick?.();
                }}
                className="bg-stone-100 text-[#6D2C2C] font-semibold py-3 text-center rounded-xl text-sm"
              >
                Volunteer
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}