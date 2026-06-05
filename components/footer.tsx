"use client";

import React from "react";
import { Mail, Globe } from "lucide-react";

export default function footer() {
  return (
    <footer className="text-stone-300 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-stone-200 pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-sans font-extrabold text-xl text-[#6D2C2C] tracking-tight">
                Late Popatbhai Premjibhai Maniya (P.P. Maniya)
              </span>
            </div>

            <p className="text-xs text-[#4A2E24] leading-relaxed">
              The Trust continuously works towards educational growth,
              healthcare support, and social welfare with a commitment to
              humanitarian values and community development.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-8 h-8 rounded-[30%] bg-[#E9D9C7] hover:bg-[#C89A6A] text-[#4A2E24] hover:text-[#4A2E24] transition-colors flex items-center justify-center ">
                <Globe size={14} className="cursor-pointer" />
              </div>
              <div className="w-8 h-8 rounded-[30%] bg-[#E9D9C7] hover:bg-[#C89A6A] text-[#4A2E24] hover:text-[#4A2E24] transition-colors flex items-center justify-center">
                <Mail size={14} className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-[#6D2C2C] text-sm mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="#home"
                  className="text-[#4A2E24] hover:text-[#C89A6A] transition-colors"
                >
                  Home Portal
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[#4A2E24] hover:text-[#C89A6A] transition-colors"
                >
                  About Trust Foundation
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="text-[#4A2E24] hover:text-[#C89A6A] transition-colors"
                >
                  Sponsorship Eligibility Estimator
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="text-[#4A2E24] hover:text-[#C89A6A] transition-colors"
                >
                  Our Welfare Activities
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-[#4A2E24] hover:text-[#C89A6A] transition-colors"
                >
                  Gallery of Impact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-[#6D2C2C] text-sm mb-4">
              Welfare Programs
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="text-[#4A2E24] hover:text-[#C89A6A] transition-colors cursor-pointer">
                  Notebook Kits Delivery
                </span>
              </li>
              <li>
                <span className="text-[#4A2E24] hover:text-[#C89A6A] transition-colors cursor-pointer">
                  School Desk Allocations
                </span>
              </li>
              <li>
                <span className="text-[#4A2E24] hover:text-[#C89A6A] transition-colors cursor-pointer">
                  Clinical Outpatient Medicine Tokens
                </span>
              </li>
              <li>
                <span className="text-[#4A2E24] hover:text-[#C89A6A] transition-colors cursor-pointer">
                  Youth Desktop Skill Classes
                </span>
              </li>
              <li>
                <span className="text-[#4A2E24] hover:text-[#C89A6A] transition-colors cursor-pointer">
                  Elderly Physical Wellness Camps
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-[#6D2C2C] text-sm mb-4">
              Trust Governance Ethics
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="text-[#4A2E24] hover:text-[#C89A6A] transition-colors cursor-pointer">
                  Donor Refund Policies
                </span>
              </li>
              <li>
                <span className="text-[#4A2E24] hover:text-[#C89A6A] transition-colors cursor-pointer">
                  100% Transparency Audits
                </span>
              </li>
              <li>
                <span className="text-[#4A2E24] hover:text-[#C89A6A] transition-colors cursor-pointer">
                  Tax Exemption Certificates (80G)
                </span>
              </li>
              <li>
                <span className="text-[#4A2E24] hover:text-[#C89A6A] transition-colors cursor-pointer">
                  Surat Municipal Board Compliances
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#4A2E24]">
          <p>
            © 2026 Late Popatbhai Premjibhai Maniya (P.P. Maniya) Trust. All
            Rights Meticulously Administered.
          </p>
          <div className="flex gap-6">
            <span className="text-[#4A2E24]">Surat, Gujarat, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
