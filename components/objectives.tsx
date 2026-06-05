"use client";

import React from "react";
import { School, Activity, Award, Megaphone, Leaf, Wrench, Heart } from "lucide-react";

const objectives = [
  { icon: School, title: "Promote Education", desc: "Extend quality education access to economically weaker sections of society." },
  { icon: Activity, title: "Medical Assistance", desc: "Offer healthcare support and medical aid to those who cannot afford it." },
  { icon: Award, title: "Scholarships & Aid", desc: "Support students through scholarships, tuition aid, and educational grants." },
  { icon: Megaphone, title: "Social Welfare Programs", desc: "Organize awareness camps and welfare drives benefiting underserved communities." },
  { icon: Leaf, title: "Yoga, Sports & Growth", desc: "Encourage yoga, sports, meditation, and holistic personality development." },
  { icon: Wrench, title: "Vocational Training", desc: "Provide skill development and vocational training for sustainable livelihoods." },
  { icon: Heart, title: "Welfare of the Needy", desc: "Work actively for the welfare of poor and marginalized individuals across Gujarat." },
];

export default function ObjectivesSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto" id="objectives">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#4A2E24" }}>
          Objectives of the Trust
        </h2>
        <p className="text-stone-600 text-base leading-relaxed">
          Guided by a commitment to uplift every section of society, our trust pursues
          a broad mandate — from classrooms and clinics to community halls and open fields.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {objectives.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:translate-y-[-4px] transition-all duration-300 flex gap-4 items-start"
          >
            <div
              className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center"
              style={{ backgroundColor: "#f9f0e8" }}
            >
              <Icon size={22} style={{ color: "#795900" }} />
            </div>
            <div>
              <h3 className="font-bold text-base mb-1" style={{ color: "#4A2E24" }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#7a6860" }}>
                {desc}
              </p>
            </div>
          </div>
        ))}

        {/* Quote card */}
        <div
          className="rounded-2xl p-6 flex flex-col justify-center gap-3"
          style={{ background: "linear-gradient(135deg, #4A2E24, #6b3e2e)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#D4B07A" }}>
            Our Promise
          </p>
          <p className="text-base font-semibold leading-relaxed" style={{ color: "#f5ede5" }}>
            "Serving humanity is the highest form of service to God."
          </p>
          <p className="text-xs" style={{ color: "#c4a882" }}>
            — Spirit of Late Popatbhai Premjibhai Maniya
          </p>
        </div>
      </div>
    </section>
  );
}