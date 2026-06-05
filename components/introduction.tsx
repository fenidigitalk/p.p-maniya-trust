"use client";

import React from "react";

const values = [
  "No caste discrimination",
  "No religious bias",
  "Gender equality",
  "Inclusive community",
];

export default function FounderSection() {
  return (
    <section className="py-16 px-6 bg-[#fdf9f7]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center">
          {/* Title */}
          <h2
            className="text-2xl md:text-3xl font-medium leading-snug mb-1"
            style={{ color: "#4A2E24" }}
          >
            Late Popatbhai Premjibhai Maniya
          </h2>
          <p
            className="text-xl font-medium italic mb-6"
            style={{ color: "#7a4a38" }}
          >
            (P.P. Maniya) Education &amp; Medical Trust
          </p>

          {/* Description */}
          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "#5a3a2e" }}
          >
            A non-profit charitable organisation established with the objective
            of serving society through educational, medical, and social welfare
            activities. The Trust is dedicated to the upliftment of economically
            weaker and underprivileged sections of society — without
            discrimination of caste, religion, gender, or community.
          </p>

          {/* Value Chips */}
          <div className="flex flex-wrap justify-center gap-2">
            {values.map((chip) => (
              <span
                key={chip}
                className="text-xs rounded-full px-4 py-1 border"
                style={{
                  color: "#4A2E24",
                  borderColor: "#c4907e",
                  backgroundColor: "transparent",
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}