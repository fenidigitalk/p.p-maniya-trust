"use client";

import React from "react";
import Image from "next/image";
import {
  Check,
} from "lucide-react";

export default function activities() {
  return (
     <section className="pb-16 bg-white ">
        <div className="max-w-7xl mx-auto px-6 border-t border-stone-200">
          {/* Header */}
          <div className="text-center my-16">
            <span className="text-3xl md:text-4xl font-bold text-[#6D2C2C]">
              Major Activities Undertaken by the Trust
            </span>
            <h2 className="text-[#4A2E24] text-base mt-3 mx-50">
              Organizing free medical camps, providing medicines, humanitarian aid, and awareness programs to uplift underprivileged communities across Gujarat.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Medical & Healthcare */}
            <div className="relative rounded-3xl overflow-hidden">
              <div className="relative h-65">
                <Image
                  src="/medical_activities.jpeg"
                  fill
                  alt="Medical Activities"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4B07A] block mb-1">
                    Healthcare
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    Medical & Healthcare Activities
                  </h3>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-b-3xl p-6">
                <ul className="space-y-3">
                  {[
                    "Organizing medical camps and free health check-up programs.",
                    "Providing medicines and healthcare support to needy patients.",
                    "Supporting public health awareness initiatives.",
                    "Providing food, fruits, and nutritional support to patients.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#6D2C2C]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#795900]" />
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Welfare */}
            <div className="relative rounded-3xl overflow-hidden">
              <div className="relative h-65">
                <Image
                  src="/welfare_activities.jpeg"
                  fill
                  alt="Social Welfare"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4B07A] block mb-1">
                    Welfare
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    Social Welfare Activities
                  </h3>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-b-3xl p-6">
                <ul className="space-y-3">
                  {[
                    "Conducting charitable and humanitarian activities.",
                    "Supporting underprivileged communities during emergencies.",
                    "Organizing awareness programs on education, health, and hygiene.",
                    "Promoting community development initiatives.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#6D2C2C]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#795900]" />
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}