"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  School,
  Activity,
  Users,
  Mail,
  Award,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  Sparkles,
  Coins,
  Check,
  Globe,
  Megaphone, Leaf, Wrench
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LOGO_BASE64 } from "@/lib/logo-base64";

// Quick assets links from user HTML
const HERO_ILLUSTRATION =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCDy26mE8NwMjjti5y5_j8Cjk68IQzueBJx0KwxGFtDTPWIjBXdpZvlA2xt8J-Q3RaPIllewYFFY-FbyJchIpJtxOd5Iay1i-dSiay7ijZd-68aeMAVSMtD_AWaqPJ-sXdpTU9E_yjsv5WTF4JV9kQrJNAwC9QftbPotyz6v9EACEci9k8Pow-30cwQtfRl-Uhx4-21kfSHuNIrmSdVNjue3gWhEdA0FMKTrCGXH7vKkYX7YfhkXoA2VlJi37xOvj9TyE2Cal3rH5HV";
const GALLERY_BOOK =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA1WyPCNsaaCi10P4VjUMq-F1bDwx8ypCGuvflV2U_zuJwFvq3zBHOKu0I5AotHDPIlJCe3_eYbMLM23xqsPg47aXwm4gfYUk4i11l0pFv77O78kShfa7ZS0OKHMkBv4jv00MayxuYuRFoq_zj6oYa38ex9cCfNoCcUvtYPiNGFhfRlJp9Te5ztWwrZs5NjruByfFLO4O-6p-NTlyuLxceZPxFmOf4zqbJBl8XsvkXTwjEWHs6Cu2aIVNfrZ1PwiU6RGhez3_6Eb8Km";
const GALLERY_CLINIC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDHT1piJp13_MDe-xmy5X7ZUB6iWs_C1Z3CiKc4gqIt1f_Te1uEG_PcPu_Ic4u7kw9C3eUXw1HKo3RIOxPY-ITqQk17kFNT6sGeoOYJSWcSl_sGk_kjbnVSutFvS_leFJUQTtGpAsjRnf1YcayZGRERPOKOSfwHw3wSWPG6q1_Frp6dBDe5zD_ycFT4qXKihKZHtSx2tR1gOczpDLDQafdhxx0ZvlK5pW-IWLiRsqN4eOrgdDdnHk4d0FMBpS90vbEfW1RlwCUhAFBX";
const GALLERY_ELDERLY =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCUFeIVMWJsnfta4o2eJPkc-_izbkXUiV2cfV18eo5wYFlpOuk6gdw-EvndZU_eA7Z2t-G0zMWWpiF0xSRR9Dba7SmQ87d_kUSj20hmULiEv33L2a0bsNvtUVwj77PsahRfnRauX2au5rXgim_Tea47hsZ07Mn7mzfhOOhWCOfeN_8Q_qa1PaCNQ0vLE2Q0aY_zLnqbT7pJIjCzeWy-wzm-13Q3vCk6C-eW0Ucp39ZDHtMsf3r-kSl9Os4g37uvrKOuSiuvL61kQDlG";
const GALLERY_CLASSROOM =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBg9WBly5pRv2Fgw5yDYSYCN_y526AvGWZQiMNevpgcziJBE-pW-E6ai1iZwiFDFteghviyFc_056L2Mvw-S9qgWekRqpMKQI_igXCCCZ_944guetEhYqo3yxvhcPczjjqHUhLsNgOKPCU9CZwBFfq_kSnPrgnltG-ctt6mkEupRYP7Hm8XJlnqfnuhRvPCDsp_nkvopBPugsmrvOwkoUAl1Y85_FmLmstPYaVSXK4sFZ_Q0D4evEWlDwYNaBEZeCeYjE6TV10yT7dE";

export default function HomeView() {
  // Mobile Nav Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Stats Counters
  const [stats, setStats] = useState({
    established: 0,
    benefited: 0,
    medicalCases: 0,
    programs: 0,
  });

  const slides = [
    { src: "/slide1.jpeg" },
    { src: "/slide2.jpeg" },
    { src: "/slide3.jpeg" },
  ];

  // Modals
  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [assistanceModalOpen, setAssistanceModalOpen] = useState(false);

  // Donation step states
  const [donationStep, setDonationStep] = useState(1);
  const [donationAmount, setDonationAmount] = useState("1000");
  const [donationCause, setDonationCause] = useState("Education Fund Support");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorMessage, setDonorMessage] = useState("");
  const [aiWriting, setAiWriting] = useState(false);
  const [donorLetterPreview, setDonorLetterPreview] = useState("");
  const [recentDonations, setRecentDonations] = useState<any[]>([
    {
      name: "Arvindbhai Patel",
      amount: 5000,
      cause: "Healthcare Outreach",
      date: "Just now",
    },
    {
      name: "Meena Shah",
      amount: 1000,
      cause: "Direct Student Scholarship",
      date: "15 mins ago",
    },
    {
      name: "Rajeshbhai Maniya",
      amount: 15000,
      cause: "Rural Yoga and Wellness Setup",
      date: "2 hours ago",
    },
  ]);

  // Volunteer step states
  const [volunteerName, setVolunteerName] = useState("");
  const [volunteerEmail, setVolunteerEmail] = useState("");
  const [volunteerPhone, setVolunteerPhone] = useState("");
  const [volunteerExpertise, setVolunteerExpertise] = useState(
    "Educational Mentoring",
  );
  const [volunteerFile, setVolunteerFile] = useState<File | null>(null);
  const [volunteerProgress, setVolunteerProgress] = useState(0);
  const [volunteerSuccess, setVolunteerSuccess] = useState(false);
  const [volunteersList, setVolunteersList] = useState<any[]>([
    {
      name: "Dr. Kamlesh Vyas",
      core: "Free Clinic Medical Care Specialist",
      status: "Active Badge",
    },
    {
      name: "Priyaben Savani",
      core: "Digital Skill Empowerment Mentor",
      status: "Active Badge",
    },
  ]);

  // Contact Form
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("Donation Inquiry");
  const [contactMessage, setContactMessage] = useState("");
  const [messagesList, setMessagesList] = useState<any[]>([
    {
      name: "Hasmukh Savani",
      subject: "Classroom Construction Support",
      body: "We wish to sponsor school computers in association with P.P. Maniya.",
      reply:
        "Thank you Hasmukhbhai! Our trust secretary will reach you tomorrow morning.",
    },
  ]);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Assistance eligibility state
  const [monthlyIncome, setMonthlyIncome] = useState("12000");
  const [educationClass, setEducationClass] = useState("Primary School");
  const [assistanceResults, setAssistanceResults] = useState<any>(null);

  // Location selection state
  const [selectedBranch, setSelectedBranch] = useState("Surat Head Office");

  // File Upload drag states
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Assistance upload state
  const [certFile, setCertFile] = useState<File | null>(null);
  const [certDragOver, setCertDragOver] = useState(false);
  const [certProgress, setCertProgress] = useState(0);

  // Load and trigger state details
  useEffect(() => {
    // Stats Counting Loop
    const interval = setInterval(() => {
      setStats((prev) => {
        const nextEstablished =
          prev.established < 2019
            ? Math.min(prev.established + 43, 2019)
            : 2019;
        const nextBenefited =
          prev.benefited < 1244 ? Math.min(prev.benefited + 29, 1244) : 1244;
        const nextMedicalCases =
          prev.medicalCases < 61 ? Math.min(prev.medicalCases + 2, 61) : 61;
        const nextPrograms =
          prev.programs < 30 ? Math.min(prev.programs + 1, 30) : 30;

        if (
          nextEstablished === 2019 &&
          nextBenefited === 1244 &&
          nextMedicalCases === 61 &&
          nextPrograms === 30
        ) {
          clearInterval(interval);
        }

        return {
          established: nextEstablished,
          benefited: nextBenefited,
          medicalCases: nextMedicalCases,
          programs: nextPrograms,
        };
      });
    }, 25);

    // Load dynamic saved localStorage arrays if on client
    if (typeof window !== "undefined") {
      const savedM = localStorage.getItem("pp_trust_messages");
      if (savedM) setMessagesList(JSON.parse(savedM));

      const savedV = localStorage.getItem("pp_trust_volunteers");
      if (savedV) setVolunteersList(JSON.parse(savedV));

      const savedD = localStorage.getItem("pp_trust_donations");
      if (savedD) setRecentDonations(JSON.parse(savedD));
    }

    return () => clearInterval(interval);
  }, []);

  // Sync to local storage
  const saveToLocalStorage = (key: string, data: any) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(data));
    }
  };

  // Run AI Supporter Note generation
  const handleGenerateAINote = async () => {
    if (!donorName) {
      alert(
        "Please enter your name first so Gemini can personalize your supporter letter!",
      );
      return;
    }
    setAiWriting(true);
    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: donorName,
          purpose: donationCause,
          prompt:
            donorMessage ||
            "Write a heartfelt support statement as a community donor.",
        }),
      });
      const data = await response.json();
      setDonorLetterPreview(data.text);
      setDonorMessage(data.text);
    } catch (e) {
      console.error(e);
      setDonorLetterPreview(
        "Thank you so much to P.P. Maniya Education and Medical Trust for your exemplary social service.",
      );
    } finally {
      setAiWriting(false);
    }
  };

  // Submit Donation Flow
  const handleSubmitDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !donorEmail) {
      alert("Please fill your Name and Email address to confirm donation.");
      return;
    }
    const newDonation = {
      name: donorName,
      amount: parseInt(donationAmount) || 500,
      cause: donationCause,
      date: "Just now",
    };
    const updated = [newDonation, ...recentDonations];
    setRecentDonations(updated);
    saveToLocalStorage("pp_trust_donations", updated);
    setDonationStep(3); // success view
  };

  // File drag & drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleVolunteerFileAssign(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleVolunteerFileAssign(e.target.files[0]);
    }
  };

  const handleVolunteerFileAssign = (file: File) => {
    setVolunteerFile(file);
    // Simulate interactive secure check/upload bars
    setVolunteerProgress(0);
    const interval = setInterval(() => {
      setVolunteerProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          return 100;
        }
        return old + 10;
      });
    }, 60);
  };

  // Submit Volunteer Flow
  const handleSubmitVolunteer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerName || !volunteerEmail) {
      alert("Please provide your name and email to proceed.");
      return;
    }
    const newVol = {
      name: volunteerName,
      core: volunteerExpertise,
      status: "Verification Pending",
    };
    const updated = [newVol, ...volunteersList];
    setVolunteersList(updated);
    saveToLocalStorage("pp_trust_volunteers", updated);
    setVolunteerSuccess(true);
  };

  // Contact Form Submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) {
      alert("Please fully fill Name, Email, and Message body.");
      return;
    }
    const newMessage = {
      name: contactName,
      subject: contactSubject,
      body: contactMessage,
      reply:
        "Our administrative team has received your message and will review it meticulously. We will send a confirmation summary to you shortly.",
    };
    const updated = [newMessage, ...messagesList];
    setMessagesList(updated);
    saveToLocalStorage("pp_trust_messages", updated);
    setContactSuccess(true);

    // Reset fields
    setContactName("");
    setContactEmail("");
    setContactMessage("");

    setTimeout(() => {
      setContactSuccess(false);
    }, 5000);
  };

  // Calculator diagnostic function
  const handleCalculateEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    const income = parseInt(monthlyIncome) || 12000;
    let scholarship = 0;
    let rank = "Bronze Support Tier";
    let desc = "";

    if (income <= 8000) {
      scholarship = 100;
      rank = "Platinum Coverage Tier";
      desc =
        "Full free tuition assistance, notebook kits, and zero-cost medical treatment tokens approved for continuous monthly support.";
    } else if (income <= 15000) {
      scholarship = 75;
      rank = "Gold Coverage Tier";
      desc =
        "75% school fee reimbursement coverage and free access to diagnostics & generic medicines at P.P. Maniya partner clinics.";
    } else if (income <= 25000) {
      scholarship = 40;
      rank = "Silver Coverage Tier";
      desc =
        "40% Merit-cum-Means assistance coverage program and subsidized diagnostic charges.";
    } else {
      scholarship = 15;
      rank = "Subsidized Counselling & Books support";
      desc =
        "Includes free access to counseling programs, health camps, and zero-cost library reading rooms in our Surat campus.";
    }

    setAssistanceResults({
      percent: scholarship,
      tier: rank,
      explanation: desc,
      grade: educationClass,
    });
  };

  const branches = {
    "Surat Head Office": {
      address:
        "A/35, Rachna Society, Kapodara Char Rasta, Varachha Road, Surat, Gujarat - 395006",
      phone: "+91 98765 43210",
      hours: "09:00 AM - 06:00 PM (Monday to Saturday)",
      specialty: "Educational Scholarships and Welfare coordination",
    },
    "Katargam Medical Center Branch": {
      address:
        "Shop 12-14, Shalin Complex, Opp. GIDC Ground, Katargam Road, Surat - 395004",
      phone: "+91 98765 43211",
      hours: "08:00 AM - 08:00 PM (Emergency outpatient support)",
      specialty:
        "Free general medicine consultation and blood test diagnostic camps",
    },
    "Adajan Community Hub Clinic": {
      address: "S-4, Prime Arcade, Anand Mahal Road, Adajan, Surat - 395009",
      phone: "+91 98765 43212",
      hours: "10:00 AM - 07:00 PM (All days exception of national holidays)",
      specialty:
        "Daily yoga programs, senior citizen physical support counseling",
    },
  };
  return (
    <div id="home" className="min-h-screen flex flex-col justify-between bg-white">
      {/* HEADER NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#f8f9ff]/90 backdrop-blur-md border-b border-[#d3c5ac]/30 shadow-sm h-20">
        <div className="flex justify-between items-center h-full px-6 max-w-7xl mx-auto">
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
              onClick={() => {
                setDonationStep(1);
                setDonationModalOpen(true);
              }}
              className="bg-[#D4B07A] text-[#6D2C2C] px-5 py-2.5 rounded-lg hover:bg-[#6D2C2C] hover:text-[#D4B07A] text-sm font-bold shadow-sm active:scale-95"
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
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#6D2C2C] hover:text-[#D4B07A] transition-colors text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#6D2C2C] hover:text-[#D4B07A] transition-colors text-sm font-medium"
              >
                About Trust
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#6D2C2C] hover:text-[#D4B07A] transition-colors text-sm font-medium"
              >
                Eligibility Calculator
              </a>
              <a
                href="#activities"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#6D2C2C] hover:text-[#D4B07A] transition-colors text-sm font-medium"
              >
                Our Activities
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#6D2C2C] hover:text-[#D4B07A] transition-colors text-sm font-medium"
              >
                Gallery of Impact
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#6D2C2C] hover:text-[#D4B07A] transition-colors text-sm font-medium"
              >
                Contact Us
              </a>

              <div className="grid grid-cols-2 gap-3 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setDonationStep(1);
                    setDonationModalOpen(true);
                  }}
                  className="bg-[#D4B07A] text-[#6D2C2C] hover:bg-[#6D2C2C] hover:text-[#D4B07A] px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm active:scale-95"
                >
                  Donate
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setVolunteerModalOpen(true);
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

      {/* HERO SECTION */}

      <div className="lg:col-span-5 relative mt-6 lg:mt-0">
        <div className="relative z-10 rounded-2xl overflow-hidden h-[1000px] w-full aspect-[4/3]">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0  transition-opacity duration-700"
              style={{ opacity: activeSlide === i ? 1 : 0 }}
            >
              <img src={slide.src} className="w-full h-[1000px] object-cover" />

            </div>
          ))}

          {/* Prev / Next */}
          <button
            onClick={() => setActiveSlide((activeSlide - 1 + 3) % 3)}
            className="absolute top-1/2 left-3 -translate-y-1/2 w-9 h-9 rounded-full bg-[#4A2E24] backdrop-blur-sm text-white flex items-center justify-center border-none  transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setActiveSlide((activeSlide + 1) % 3)}
            className="absolute top-1/2 right-3 -translate-y-1/2 w-9 h-9 rounded-full bg-[#4A2E24] backdrop-blur-sm text-white flex items-center justify-center border-none  transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>


      </div>

      {/* ABOUT TRUST SECTION WITH OFFICIAL CREDENTIALS TABLE */}
      <section className="py-16 px-6 max-w-7xl mx-auto" id="objectives">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#4A2E24' }}>
            Objectives of the Trust
          </h2>

          <p className="text-stone-600 text-base leading-relaxed">
            Guided by a commitment to uplift every section of society, our trust pursues
            a broad mandate — from classrooms and clinics to community halls and open fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: School, title: 'Promote Education', desc: 'Extend quality education access to economically weaker sections of society.' },
            { icon: Activity, title: 'Medical Assistance', desc: 'Offer healthcare support and medical aid to those who cannot afford it.' },
            { icon: Award, title: 'Scholarships & Aid', desc: 'Support students through scholarships, tuition aid, and educational grants.' },
            { icon: Megaphone, title: 'Social Welfare Programs', desc: 'Organize awareness camps and welfare drives benefiting underserved communities.' },
            { icon: Leaf, title: 'Yoga, Sports & Growth', desc: 'Encourage yoga, sports, meditation, and holistic personality development.' },
            { icon: Wrench, title: 'Vocational Training', desc: 'Provide skill development and vocational training for sustainable livelihoods.' },
            { icon: Heart, title: 'Welfare of the Needy', desc: 'Work actively for the welfare of poor and marginalized individuals across Gujarat.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:translate-y-[-4px] transition-all duration-300 flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: '#f9f0e8' }}>
                <Icon size={22} style={{ color: '#795900' }} />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1" style={{ color: '#4A2E24' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#7a6860' }}>{desc}</p>
              </div>
            </div>
          ))}

          {/* Quote card */}
          <div className="rounded-2xl p-6 flex flex-col justify-center gap-3" style={{ background: 'linear-gradient(135deg, #4A2E24, #6b3e2e)' }}>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#D4B07A' }}>Our Promise</p>
            <p className="text-base font-semibold leading-relaxed" style={{ color: '#f5ede5' }}>"Serving humanity is the highest form of service to God."</p>
            <p className="text-xs" style={{ color: '#c4a882' }}>— Spirit of Late Popatbhai Premjibhai Maniya</p>
          </div>
        </div>
      </section>

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
              {[
                "No caste discrimination",
                "No religious bias",
                "Gender equality",
                "Inclusive community",
              ].map((chip) => (
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

      <section className="max-w-7xl mx-auto py-16">
        {/* DYNAMIC ELIGIBILITY DIAGNOSTIC CALCULATOR (SAVES USER CONFUSED THOUGHTS) */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4" id="about">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#4A2E24' }}>
            Trust Details
          </h2>

          <p className="text-stone-600 text-base leading-relaxed">
            Officially registered under public charity acts, the trust operates with full legal compliance and transparency across Gujarat and India.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto max-w-7xl">

          <div className="bg-white border-l-4 border-[#D4B07A] rounded-r-2xl rounded-tl-none rounded-bl-none p-5">
            <p className="font-bold text-base mb-1" style={{ color: '#4A2E24' }}>Name of the Trust</p>
            <p className="text-sm text-[#0b1c30] leading-relaxed">Late Popatbhai Premjibhai Maniya (P.P. Maniya) Education and Medical Trust</p>
          </div>

          <div className="bg-white border-l-4 border-[#D4B07A] rounded-r-2xl rounded-tl-none rounded-bl-none p-5">
            <p className="font-bold text-base mb-1" style={{ color: '#4A2E24' }}>Registered Office</p>
            <p className="text-sm text-[#0b1c30] leading-relaxed">A/35, Rachna Society, Kapodara Char Rasta, Varachha Road, Surat, Gujarat</p>
          </div>

          <div className="bg-white border-l-4 border-[#D4B07A] rounded-r-2xl p-5 rounded-tl-none rounded-bl-none">
            <p className="font-bold text-base mb-1" style={{ color: '#4A2E24' }}>Nature of Organization</p>
            <p className="text-sm text-[#0b1c30]">Charitable and Educational Trust</p>
          </div>

          <div className="bg-white border-l-4 border-[#D4B07A] rounded-r-2xl p-5 rounded-tl-none rounded-bl-none">
            <p className="font-bold text-base mb-1" style={{ color: '#4A2E24' }}>Area of Operation</p>
            <p className="text-sm text-[#0b1c30]">Across India</p>
          </div>

          <div className="bg-white border-l-4 border-[#D4B07A] rounded-r-2xl p-5 rounded-tl-none rounded-bl-none">
            <p className="font-bold text-base mb-1" style={{ color: '#4A2E24' }}>Year of Establishment</p>
            <p className="text-2xl font-semibold text-[#4A2E24]">2019</p>
          </div>
        </div>
      </section>
    </div>
  )
}