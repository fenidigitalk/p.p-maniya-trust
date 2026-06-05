"use client";

import React from "react";

const trustDetails = [
  {
    label: "Name of the Trust",
    value: "Late Popatbhai Premjibhai Maniya (P.P. Maniya) Education and Medical Trust",
  },
  {
    label: "Registered Office",
    value: "A/35, Rachna Society, Kapodara Char Rasta, Varachha Road, Surat, Gujarat",
  },
  {
    label: "Nature of Organization",
    value: "Charitable and Educational Trust",
  },
  {
    label: "Area of Operation",
    value: "Across India",
  },
];

export default function Trust() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-4" id="about">
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#4A2E24" }}>
          Trust Details
        </h2>
        <p className="text-stone-600 text-base leading-relaxed">
          Officially registered under public charity acts, the trust operates with full
          legal compliance and transparency across Gujarat and India.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto max-w-7xl">
        {trustDetails.map(({ label, value }) => (
          <div
            key={label}
            className="bg-white border-l-4 border-[#D4B07A] rounded-r-2xl rounded-tl-none rounded-bl-none p-5"
          >
            <p className="font-bold text-base mb-1" style={{ color: "#4A2E24" }}>
              {label}
            </p>
            <p className="text-sm text-[#0b1c30] leading-relaxed">{value}</p>
          </div>
        ))}

        {/* Year of Establishment — special card */}
        <div className="bg-white border-l-4 border-[#D4B07A] rounded-r-2xl p-5 rounded-tl-none rounded-bl-none">
          <p className="font-bold text-base mb-1" style={{ color: "#4A2E24" }}>
            Year of Establishment
          </p>
          <p className="text-2xl font-semibold text-[#4A2E24]">2019</p>
        </div>
      </div>
    </section>
  );
}