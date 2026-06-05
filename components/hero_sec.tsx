"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/slide1.jpeg" },
  { src: "/slide2.jpeg" },
  { src: "/slide3.jpeg" },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const prev = () => setActiveSlide((activeSlide - 1 + slides.length) % slides.length);
  const next = () => setActiveSlide((activeSlide + 1) % slides.length);

  return (
    <div className="lg:col-span-5 relative mt-6 lg:mt-0">
      <div className="relative z-10 rounded-2xl overflow-hidden h-[1000px] w-full aspect-[4/3]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: activeSlide === i ? 1 : 0 }}
          >
            <img
              src={slide.src}
              alt={`Slide ${i + 1}`}
              className="w-full h-[1000px] object-cover"
            />
          </div>
        ))}

        {/* Prev Button */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-3 -translate-y-1/2 w-9 h-9 rounded-full bg-[#4A2E24] backdrop-blur-sm text-white flex items-center justify-center border-none transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute top-1/2 right-3 -translate-y-1/2 w-9 h-9 rounded-full bg-[#4A2E24] backdrop-blur-sm text-white flex items-center justify-center border-none transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: activeSlide === i ? "#D4B07A" : "rgba(255,255,255,0.5)",
                transform: activeSlide === i ? "scale(1.3)" : "scale(1)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}