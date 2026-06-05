"use client";

import { useState } from "react";
import { MapPin, ShieldCheck, Globe, Calendar, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function contact() {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("Donation Inquiry");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) {
      alert("Please fully fill Name, Email, and Message body.");
      return;
    }
    setContactSuccess(true);
    setContactName("");
    setContactEmail("");
    setContactMessage("");
    setTimeout(() => {
      setContactSuccess(false);
    }, 5000);
  };

  return (
    <section
      className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left - Info */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-[#6D2C2C]">
              Connect with Our Desk
            </h2>
          </div>

          <p className="text-[#4A2E24] text-sm leading-relaxed">
            We look forward to receiving your cooperation proposal. Write to our desk directly, or inspect real public interactions and answers in our living dashboard stream below.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#e5eeff] rounded-xl flex items-center justify-center text-[#6D2C2C] shrink-0 mt-0.5">
                <MapPin size={18} />
              </div>
              <div>
                <h6 className="font-bold text-sm text-[#4A2E24]">Postal Address</h6>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  A/35, Rachna Society, Kapodara Char Rasta, Varachha Road, Surat, Gujarat
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#e5eeff] rounded-xl flex items-center justify-center text-[#6D2C2C] shrink-0 mt-0.5">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h6 className="font-bold text-sm text-[#4A2E24]">Nature of Organization</h6>
                <p className="text-xs text-stone-500 mt-1">Charitable and Educational Trust</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#e5eeff] rounded-xl flex items-center justify-center text-[#6D2C2C] shrink-0 mt-0.5">
                <Globe size={18} />
              </div>
              <div>
                <h6 className="font-bold text-sm text-[#4A2E24]">Area of Operation</h6>
                <p className="text-xs text-stone-500 mt-1">Across India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#e5eeff] rounded-xl flex items-center justify-center text-[#6D2C2C] shrink-0 mt-0.5">
                <Calendar size={18} />
              </div>
              <div>
                <h6 className="font-bold text-sm text-[#4A2E24]">Year of Establishment</h6>
                <p className="text-xs text-stone-500 mt-1">2019</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm relative">
          <h4 className="font-bold text-lg text-[#6D2C2C] mb-6">Send Us a Direct Message</h4>

          <form onSubmit={handleContactSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase mb-2">My Full Name</label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-stone-200 p-4 text-sm bg-stone-50 focus:bg-white focus:ring-1 focus:ring-[#795900] focus:border-[#795900] outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase mb-2">My Email Address</label>
                <input
                  type="email"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="example@mail.org"
                  className="w-full rounded-xl border border-stone-200 p-4 text-sm bg-stone-50 focus:bg-white focus:ring-1 focus:ring-[#795900] focus:border-[#795900] outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Message Topic</label>
              <select
                value={contactSubject}
                onChange={(e) => setContactSubject(e.target.value)}
                className="w-full rounded-xl border border-stone-200 p-4 text-sm bg-stone-50 focus:bg-white focus:ring-1 focus:ring-[#795900] focus:border-[#795900] outline-none"
              >
                <option value="Donation Inquiry">Donation Sponsorship Inquiry</option>
                <option value="Volunteer Interest">Volunteer Application / Request</option>
                <option value="Healthcare Support">Apply for Medical Outpatient Voucher</option>
                <option value="General Suggestion">General Suggestion or Feedback</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase mb-2">My Message Body</label>
              <textarea
                rows={4}
                required
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder="Tell us about how we can collaborate, or request scholarship details..."
                className="w-full rounded-xl border border-stone-200 p-4 text-sm bg-stone-50 focus:bg-white focus:ring-1 focus:ring-[#795900] focus:border-[#795900] outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#6D2C2C] text-white py-4 rounded-xl font-bold hover:bg-amber-900 transition-colors shadow-md text-sm cursor-pointer"
            >
              Submit Message
            </button>
          </form>

          <AnimatePresence>
            {contactSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl flex flex-col justify-center items-center text-center p-6 space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                  <CheckCircle size={36} />
                </div>
                <h5 className="font-bold text-xl text-[#0b1c30]">Message Filed Successfully</h5>
                <p className="text-xs text-stone-500 max-w-md">
                  Thank you! We have filed your message securely. We will review and reply swiftly.
                </p>
                <button
                  onClick={() => setContactSuccess(false)}
                  className="text-stone-600 border border-stone-200 px-5 py-2 rounded-xl text-xs hover:bg-stone-50 font-semibold"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}