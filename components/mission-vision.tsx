"use client";

import React from "react";

export default function missionVision() {
  return (
    <div className="flex flex-col gap-16 py-16 px-4 sm:px-8 mb-16 max-w-7xl mx-auto bg-white border-t border-stone-200">
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#6D2C2C] mb-4">
              Our Mission
            </h2>
            <ul className="list-disc list-inside space-y-2 text-stone-500 text-sm sm:text-base leading-relaxed">
              <li>To serve society through charitable initiatives.</li>
              <li>
                To empower underprivileged children and families through
                education.
              </li>
              <li>To improve community health and well-being.</li>
              <li>To encourage self-reliance through skill development.</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3 h-80">
            <div className="rounded-2xl bg-slate-200 overflow-hidden row-span-2">
              <div className="w-full h-full bg-gradient-to-br from-[#C35214]/20 to-[#C35214]/5 flex items-center justify-center">
                <img
                  src="/mission_img3.jpeg"
                  alt="charity"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl bg-slate-100 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center">
                <img
                  src="/mission_img1.jpeg"
                  alt="healthcare"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl bg-slate-100 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center">
                <img
                  src="/mission_img2.jpeg"
                  alt="charity"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Vision - image left, text right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-3 h-80">
            <div className="rounded-2xl bg-slate-200 overflow-hidden row-span-2">
              <div className="w-full h-full bg-gradient-to-br from-[#2563EB]/20 to-[#2563EB]/5 flex items-center justify-center">
                <img
                  src="/vision_img1.jpeg"
                  alt="Community"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl bg-slate-100 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center">
                <img
                  src="/vision_img2.jpeg"
                  alt="Donation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl bg-slate-100 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center">
                <img
                  src="/vision_img3.jpeg"
                  alt="welfare"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#6D2C2C] mb-4">
              Our Vision
            </h2>
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed mb-6">
              To build a socially responsible and educated society by creating
              equal opportunities in education, healthcare, and welfare
              activities for all.
            </p>
          </div>
        </div>
      </div>
  ) 
}