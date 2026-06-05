"use client";

import React from "react";

const GALLERY_BOOK =
  "https://3.imimg.com/data3/JQ/TX/MY-9143304/distribution-of-educational-material-to-poor-students.jpg";
const GALLERY_CLINIC =
  "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWIzNDdmNjUwLTRlNTEtMTFlZi1iY2QwLWE3OWM3NTZjMGJlZS5qcGc=";
const GALLERY_ELDERLY =
  "https://cdnbbsr.s3waas.gov.in/s324917db15c4e37e421866448c9ab23d8/uploads/2024/06/202406241029121454-1024x683.jpg";
const GALLERY_CLASSROOM =
  "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202503/rural-education-in-india-314337492-16x9.png?VersionId=zVixh_vNr_XhLFyRENRREerK2mpfHdRA&size=690:388";

export default function gallery() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="gallery">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6D2C2C]">
          Gallery of Impact
        </h2>
        <p className="text-[#4A2E24] text-base">
          Honest captures of our actual projects, check distributions,
          diagnostic camps, and educational programs.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            src: GALLERY_BOOK,
            tag: "Rural School Outreach",
            title: "Book & Notebook Distribution",
            desc: "Ensuring every child has high-grade writing materials for the upcoming academic year.",
          },
          {
            src: GALLERY_CLINIC,
            tag: "Free Medical Camps",
            title: "Outpatient Health Diagnostics",
            desc: "Providing free clinical checkups, basic consultations, and generic medicine distribution.",
          },
          {
            src: GALLERY_ELDERLY,
            tag: "Senior Support Campaigns",
            title: "Elderly Yoga & Wellness Support",
            desc: "Supporting mental tranquility and physical mobility for elderly community members.",
          },
          {
            src: GALLERY_CLASSROOM,
            tag: "School Infrastructure",
            title: "Classroom Renovation Funding",
            desc: "Equipping rural schools with desks, white writing boards, and educational learning charts.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group relative rounded-3xl overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Default gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Tag - always visible */}
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#E9D9C7]/90 text-[#0b1c30] px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Default bottom text */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h5 className="font-extrabold text-white text-sm mb-1">
                  {item.title}
                </h5>
                {/* Desc - only on hover */}
                <p className="text-white/80 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
