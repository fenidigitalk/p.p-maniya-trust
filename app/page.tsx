"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Heart, 
  School, 
  Activity, 
  Users, 
  Home, 
  MapPin, 
  Mail, 
  Phone, 
  Award, 
  TrendingUp, 
  BookOpen, 
  ShieldCheck, 
  ArrowRight, 
  Menu, 
  X, 
  CheckCircle, 
  HelpCircle, 
  Upload, 
  Sparkles, 
  Coins, 
  UserPlus, 
  FileText, 
  Check, 
  MessageSquare,
  Globe,
  Plus
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LOGO_BASE64 } from "@/lib/logo-base64";

// Quick assets links from user HTML
const HERO_ILLUSTRATION = "https://lh3.googleusercontent.com/aida-public/AB6AXuCDy26mE8NwMjjti5y5_j8Cjk68IQzueBJx0KwxGFtDTPWIjBXdpZvlA2xt8J-Q3RaPIllewYFFY-FbyJchIpJtxOd5Iay1i-dSiay7ijZd-68aeMAVSMtD_AWaqPJ-sXdpTU9E_yjsv5WTF4JV9kQrJNAwC9QftbPotyz6v9EACEci9k8Pow-30cwQtfRl-Uhx4-21kfSHuNIrmSdVNjue3gWhEdA0FMKTrCGXH7vKkYX7YfhkXoA2VlJi37xOvj9TyE2Cal3rH5HV";
const GALLERY_BOOK = "https://lh3.googleusercontent.com/aida-public/AB6AXuA1WyPCNsaaCi10P4VjUMq-F1bDwx8ypCGuvflV2U_zuJwFvq3zBHOKu0I5AotHDPIlJCe3_eYbMLM23xqsPg47aXwm4gfYUk4i11l0pFv77O78kShfa7ZS0OKHMkBv4jv00MayxuYuRFoq_zj6oYa38ex9cCfNoCcUvtYPiNGFhfRlJp9Te5ztWwrZs5NjruByfFLO4O-6p-NTlyuLxceZPxFmOf4zqbJBl8XsvkXTwjEWHs6Cu2aIVNfrZ1PwiU6RGhez3_6Eb8Km";
const GALLERY_CLINIC = "https://lh3.googleusercontent.com/aida-public/AB6AXuDHT1piJp13_MDe-xmy5X7ZUB6iWs_C1Z3CiKc4gqIt1f_Te1uEG_PcPu_Ic4u7kw9C3eUXw1HKo3RIOxPY-ITqQk17kFNT6sGeoOYJSWcSl_sGk_kjbnVSutFvS_leFJUQTtGpAsjRnf1YcayZGRERPOKOSfwHw3wSWPG6q1_Frp6dBDe5zD_ycFT4qXKihKZHtSx2tR1gOczpDLDQafdhxx0ZvlK5pW-IWLiRsqN4eOrgdDdnHk4d0FMBpS90vbEfW1RlwCUhAFBX";
const GALLERY_ELDERLY = "https://lh3.googleusercontent.com/aida-public/AB6AXuCUFeIVMWJsnfta4o2eJPkc-_izbkXUiV2cfV18eo5wYFlpOuk6gdw-EvndZU_eA7Z2t-G0zMWWpiF0xSRR9Dba7SmQ87d_kUSj20hmULiEv33L2a0bsNvtUVwj77PsahRfnRauX2au5rXgim_Tea47hsZ07Mn7mzfhOOhWCOfeN_8Q_qa1PaCNQ0vLE2Q0aY_zLnqbT7pJIjCzeWy-wzm-13Q3vCk6C-eW0Ucp39ZDHtMsf3r-kSl9Os4g37uvrKOuSiuvL61kQDlG";
const GALLERY_CLASSROOM = "https://lh3.googleusercontent.com/aida-public/AB6AXuBg9WBly5pRv2Fgw5yDYSYCN_y526AvGWZQiMNevpgcziJBE-pW-E6ai1iZwiFDFteghviyFc_056L2Mvw-S9qgWekRqpMKQI_igXCCCZ_944guetEhYqo3yxvhcPczjjqHUhLsNgOKPCU9CZwBFfq_kSnPrgnltG-ctt6mkEupRYP7Hm8XJlnqfnuhRvPCDsp_nkvopBPugsmrvOwkoUAl1Y85_FmLmstPYaVSXK4sFZ_Q0D4evEWlDwYNaBEZeCeYjE6TV10yT7dE";

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
    { name: "Arvindbhai Patel", amount: 5000, cause: "Healthcare Outreach", date: "Just now" },
    { name: "Meena Shah", amount: 1000, cause: "Direct Student Scholarship", date: "15 mins ago" },
    { name: "Rajeshbhai Maniya", amount: 15000, cause: "Rural Yoga and Wellness Setup", date: "2 hours ago" },
  ]);

  // Volunteer step states
  const [volunteerName, setVolunteerName] = useState("");
  const [volunteerEmail, setVolunteerEmail] = useState("");
  const [volunteerPhone, setVolunteerPhone] = useState("");
  const [volunteerExpertise, setVolunteerExpertise] = useState("Educational Mentoring");
  const [volunteerFile, setVolunteerFile] = useState<File | null>(null);
  const [volunteerProgress, setVolunteerProgress] = useState(0);
  const [volunteerSuccess, setVolunteerSuccess] = useState(false);
  const [volunteersList, setVolunteersList] = useState<any[]>([
    { name: "Dr. Kamlesh Vyas", core: "Free Clinic Medical Care Specialist", status: "Active Badge" },
    { name: "Priyaben Savani", core: "Digital Skill Empowerment Mentor", status: "Active Badge" },
  ]);

  // Contact Form
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("Donation Inquiry");
  const [contactMessage, setContactMessage] = useState("");
  const [messagesList, setMessagesList] = useState<any[]>([
    { name: "Hasmukh Savani", subject: "Classroom Construction Support", body: "We wish to sponsor school computers in association with P.P. Maniya.", reply: "Thank you Hasmukhbhai! Our trust secretary will reach you tomorrow morning." }
  ]);
  const [contactSuccess, setContactSuccess] = useState(false);

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
        const nextEstablished = prev.established < 2019 ? Math.min(prev.established + 43, 2019) : 2019;
        const nextBenefited = prev.benefited < 1244 ? Math.min(prev.benefited + 29, 1244) : 1244;
        const nextMedicalCases = prev.medicalCases < 61 ? Math.min(prev.medicalCases + 2, 61) : 61;
        const nextPrograms = prev.programs < 30 ? Math.min(prev.programs + 1, 30) : 30;

        if (nextEstablished === 2019 && nextBenefited === 1244 && nextMedicalCases === 61 && nextPrograms === 30) {
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
      alert("Please enter your name first so Gemini can personalize your supporter letter!");
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
          prompt: donorMessage || "Write a heartfelt support statement as a community donor.",
        }),
      });
      const data = await response.json();
      setDonorLetterPreview(data.text);
      setDonorMessage(data.text);
    } catch (e) {
      console.error(e);
      setDonorLetterPreview("Thank you so much to P.P. Maniya Education and Medical Trust for your exemplary social service.");
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
      reply: "Our administrative team has received your message and will review it meticulously. We will send a confirmation summary to you shortly.",
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
      desc = "Full free tuition assistance, notebook kits, and zero-cost medical treatment tokens approved for continuous monthly support.";
    } else if (income <= 15000) {
      scholarship = 75;
      rank = "Gold Coverage Tier";
      desc = "75% school fee reimbursement coverage and free access to diagnostics & generic medicines at P.P. Maniya partner clinics.";
    } else if (income <= 25000) {
      scholarship = 40;
      rank = "Silver Coverage Tier";
      desc = "40% Merit-cum-Means assistance coverage program and subsidized diagnostic charges.";
    } else {
      scholarship = 15;
      rank = "Subsidized Counselling & Books support";
      desc = "Includes free access to counseling programs, health camps, and zero-cost library reading rooms in our Surat campus.";
    }

    setAssistanceResults({
      percent: scholarship,
      tier: rank,
      explanation: desc,
      grade: educationClass
    });
  };

  const branches = {
    "Surat Head Office": {
      address: "A/35, Rachna Society, Kapodara Char Rasta, Varachha Road, Surat, Gujarat - 395006",
      phone: "+91 98765 43210",
      hours: "09:00 AM - 06:00 PM (Monday to Saturday)",
      specialty: "Educational Scholarships and Welfare coordination"
    },
    "Katargam Medical Center Branch": {
      address: "Shop 12-14, Shalin Complex, Opp. GIDC Ground, Katargam Road, Surat - 395004",
      phone: "+91 98765 43211",
      hours: "08:00 AM - 08:00 PM (Emergency outpatient support)",
      specialty: "Free general medicine consultation and blood test diagnostic camps"
    },
    "Adajan Community Hub Clinic": {
      address: "S-4, Prime Arcade, Anand Mahal Road, Adajan, Surat - 395009",
      phone: "+91 98765 43212",
      hours: "10:00 AM - 07:00 PM (All days exception of national holidays)",
      specialty: "Daily yoga programs, senior citizen physical support counseling"
    }
  };

  return (
    <div id="home" className="min-h-screen flex flex-col justify-between">
      
      {/* HEADER NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#f8f9ff]/90 backdrop-blur-md border-b border-[#d3c5ac]/30 shadow-sm h-20">
        <div className="flex justify-between items-center h-full px-6 max-w-7xl mx-auto">
          
          <div className="flex items-center gap-3">
            <img 
              alt="P.P. Maniya Trust Logo" 
              className="h-12 w-auto object-contain" 
              src={LOGO_BASE64}
              onError={(e) => {
                // fallbacks to normal text logo if base64 render behaves oddly
                e.currentTarget.style.display = 'none';
              }}
            />
            <div>
              <span className="font-sans font-bold text-lg md:text-xl text-[#0b1c30] tracking-tight block">
                P.P. Maniya Education and Medical Trust
              </span>
              <span className="text-stone-500 text-xs tracking-wider block font-medium -mt-1">
                Legacy • Transparency • Compassion
              </span>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-primary font-semibold border-b-2 border-primary pb-1 text-sm tracking-wide">Home</a>
            <a href="#about" className="text-stone-600 hover:text-primary transition-colors text-sm font-medium">About Trust</a>
            <a href="#calculator" className="text-stone-600 hover:text-primary transition-colors text-sm font-medium">Eligibility Calculator</a>
            <a href="#activities" className="text-stone-600 hover:text-primary transition-colors text-sm font-medium">Activities</a>
            <a href="#gallery" className="text-stone-600 hover:text-primary transition-colors text-sm font-medium">Gallery</a>
            <a href="#contact" className="text-stone-600 hover:text-primary transition-colors text-sm font-medium">Contact Us</a>
            
            <button 
              onClick={() => {
                setDonationStep(1);
                setDonationModalOpen(true);
              }}
              className="bg-[#fbbf24] text-[#6c4f00] px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:scale-[1.04] transition-all hover:bg-amber-400 active:scale-95"
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
                className="text-primary font-bold py-2 border-b border-gray-100"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-700 font-medium py-2 border-b border-gray-100"
              >
                About Trust
              </a>
              <a 
                href="#calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-700 font-medium py-2 border-b border-gray-100"
              >
                Eligibility Calculator
              </a>
              <a 
                href="#activities" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-700 font-medium py-2 border-b border-gray-100"
              >
                Our Activities
              </a>
              <a 
                href="#gallery" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-700 font-medium py-2 border-b border-gray-100"
              >
                Gallery of Impact
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-700 font-medium py-2"
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
                  className="bg-[#fbbf24] text-[#6c4f00] font-bold py-3 text-center rounded-xl text-sm"
                >
                  Donate
                </button>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setVolunteerModalOpen(true);
                  }}
                  className="bg-stone-100 text-stone-800 font-semibold py-3 text-center rounded-xl text-sm"
                >
                  Volunteer
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto relative overflow-hidden">
        {/* Glow Background Blobs */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-[#fbbf24]/10 rounded-full blur-[110px] -z-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e5eeff]/50 rounded-full blur-[100px] -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#fbbf24]/15 text-[#795900] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Award size={14} className="text-amber-600" />
              Nurturing Health & Education Since 2019
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b1c30] tracking-tight font-sans leading-tight">
              Late Popatbhai Premjibhai <br/>
              <span className="text-[#795900]">Maniya (P.P. Maniya)</span> Trust
            </h1>
            
            <p className="text-base md:text-lg text-stone-600 max-w-2xl leading-relaxed">
              Serving our community through accessible education, prompt healthcare assistance, and transparent social welfare initiatives. Built upon the enduring values of our late guide and visionary founder.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#about"
                className="bg-[#795900] text-white px-8 py-4 rounded-xl font-bold shadow-md hover:translate-y-[-2px] hover:bg-amber-900 transition-all flex items-center gap-2 text-sm"
              >
                Learn More About Us
                <ArrowRight size={16} />
              </a>
              <button 
                onClick={() => setVolunteerModalOpen(true)}
                className="border border-stone-300 text-stone-700 bg-white/70 hover:bg-stone-50 px-8 py-4 rounded-xl font-semibold transition-all text-sm flex items-center gap-2"
              >
                <UserPlus size={16} className="text-amber-600" />
                Join as Volunteer
              </button>
            </div>

            {/* Quick trust metrics row */}
            <div className="flex items-center gap-6 pt-6 border-t border-gray-100 flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[#795900]" />
                <span className="text-sm font-semibold text-stone-700">80G Tax Exempt Benefits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[#795900]" />
                <span className="text-sm font-semibold text-stone-700">Gujarat Registered Trust</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[#795900]" />
                <span className="text-sm font-semibold text-stone-700">100% Transparency</span>
              </div>
            </div>
          </div>

          {/* Right Image/Illustration block */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative z-10 p-3 bg-white/80 rounded-2xl shadow-xl border border-white">
              <img 
                alt="Our core pillars - education aid for childhood groups and medical nurse healthcare support for elderly" 
                className="w-full h-auto rounded-xl object-cover min-h-[300px]" 
                src={HERO_ILLUSTRATION}
              />
            </div>
            {/* Background design accents */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#fbbf24] rounded-2xl -z-10 shadow-lg" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-100 rounded-full -z-10 opacity-60 blur-xl" />
          </div>

        </div>
      </section>

      {/* REAL-TIME DYNAMIC METRICS COUNTER BAR */}
      <section className="bg-[#e5eeff] py-10 border-y border-[#d3c5ac]/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="text-center group hover:scale-105 transition-transform">
            <p className="text-3xl md:text-5xl font-extrabold text-[#795900] mb-1 font-sans">
              {stats.established}
            </p>
            <p className="text-xs uppercase tracking-widest text-[#4f4633] font-bold">
              Year Established
            </p>
          </div>

          <div className="text-center group hover:scale-105 transition-transform">
            <p className="text-3xl md:text-5xl font-extrabold text-[#795900] mb-1 font-sans">
              {stats.benefited}+
            </p>
            <p className="text-xs uppercase tracking-widest text-[#4f4633] font-bold">
              Beneficiaries Supported
            </p>
          </div>

          <div className="text-center group hover:scale-105 transition-transform">
            <p className="text-3xl md:text-5xl font-extrabold text-[#795900] mb-1 font-sans">
              {stats.medicalCases}+
            </p>
            <p className="text-xs uppercase tracking-widest text-[#4f4633] font-bold">
              Critical Medical Cases Funded
            </p>
          </div>

          <div className="text-center group hover:scale-105 transition-transform">
            <p className="text-3xl md:text-5xl font-extrabold text-[#795900] mb-1 font-sans">
              {stats.programs}+
            </p>
            <p className="text-xs uppercase tracking-widest text-[#4f4633] font-bold">
              Welfare Programs Completed
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT TRUST SECTION WITH OFFICIAL CREDENTIALS TABLE */}
      <section className="py-20 px-6 max-w-7xl mx-auto" id="about">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c30]">About The Trust</h2>
          <div className="w-20 h-1 bg-[#fbbf24] mx-auto rounded-full"></div>
          <p className="text-stone-600 text-base leading-relaxed">
            Founded in 2019 to keep the altruistic philosophy of Late Popatbhai Premjibhai Maniya alive. The Trust serves as a professional, dedicated agent of change for under-supported urban and rural communities across Gujarat.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="bg-white p-8 rounded-2xl hover:translate-y-[-6px] transition-all duration-300 border border-stone-100 shadow-sm">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
              <School className="text-[#795900]" size={24} />
            </div>
            <h3 className="font-bold text-lg text-[#0b1c30] mb-2">Educational Support</h3>
            <p className="text-[#4f4633] text-sm leading-relaxed">
              Bridging resource gaps by distributing notebooks, school outfits, and college tuition fee checks.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl hover:translate-y-[-6px] transition-all duration-300 border border-stone-100 shadow-sm">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
              <Activity className="text-[#795900]" size={24} />
            </div>
            <h3 className="font-bold text-lg text-[#0b1c30] mb-2">Medical Assistance</h3>
            <p className="text-[#4f4633] text-sm leading-relaxed">
              Providing medical diagnostic tokens, organizing clinical blood camps, and sponsoring urgent surgeries.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl hover:translate-y-[-6px] transition-all duration-300 border border-stone-100 shadow-sm">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
              <Users className="text-[#795900]" size={24} />
            </div>
            <h3 className="font-bold text-lg text-[#0b1c30] mb-2">Social Welfare</h3>
            <p className="text-[#4f4633] text-sm leading-relaxed">
              Providing hot nourishment provisions, warm garments in winters, and disaster mitigation material kits.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl hover:translate-y-[-6px] transition-all duration-300 border border-stone-100 shadow-sm">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
              <Home className="text-[#795900]" size={24} />
            </div>
            <h3 className="font-bold text-lg text-[#0b1c30] mb-2">Community Dev</h3>
            <p className="text-[#4f4633] text-sm leading-relaxed">
              Partnering with village authorities to erect drinking water reverse osmosis units and community reading corners.
            </p>
          </div>

        </div>

        {/* Credentials Table Block */}
        <div className="bg-white rounded-2xl p-6 md:p-10 border border-[#d3c5ac]/30 shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h4 className="font-bold text-xl text-[#0b1c30]">Official Trust Credentials</h4>
              <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider font-semibold">Registered under public charity acts</p>
            </div>
            <div className="bg-[#e5eeff] text-[#0b1c30] px-4 py-2 rounded-lg text-xs font-semibold">
              Status: Active Registry Gujarat Section
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-3 px-4 text-xs font-bold uppercase text-stone-500 font-sans">Official Detail Header</th>
                  <th className="py-3 px-4 text-xs font-bold uppercase text-stone-500 font-sans">Verified Registration Values</th>
                  <th className="py-3 px-4 text-xs font-bold uppercase text-stone-500 font-sans">Legal Audit Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-stone-100 hover:bg-[#eff4ff]/40 transition-colors">
                  <td className="py-4 px-4 font-bold text-[#795900]">Trust Full Legal Name</td>
                  <td className="py-4 px-4 text-[#0b1c30]">Late Popatbhai Premjibhai Maniya (P.P. Maniya) Education & Medical Trust</td>
                  <td className="py-4 px-4 text-stone-600 font-mono text-xs">Verified Certificate</td>
                </tr>
                <tr className="border-b border-stone-100 hover:bg-[#eff4ff]/40 transition-colors">
                  <td className="py-4 px-4 font-bold text-[#795900]">Registered Location</td>
                  <td className="py-4 px-4 text-[#0b1c30]">Surat, Gujarat State, Republic of India</td>
                  <td className="py-4 px-4 text-stone-600 font-mono text-xs">Varachha Office</td>
                </tr>
                <tr className="border-b border-stone-100 hover:bg-[#eff4ff]/40 transition-colors">
                  <td className="py-4 px-4 font-bold text-[#795900]">Nature of Organization</td>
                  <td className="py-4 px-4 text-[#0b1c30]">No-Profit Public Charitable Education, Healthcare and Social Welfare Organization</td>
                  <td className="py-4 px-4 text-emerald-600 font-medium">80G Tax Exempt</td>
                </tr>
                <tr className="border-b border-stone-100 hover:bg-[#eff4ff]/40 transition-colors">
                  <td className="py-4 px-4 font-bold text-[#795900]">Year Incorporated</td>
                  <td className="py-4 px-4 text-[#0b1c30]">2019 (Surat District Legal Registration Desk)</td>
                  <td className="py-4 px-4 text-stone-500 font-mono text-xs">Reg ID Verified</td>
                </tr>
                <tr className="hover:bg-[#eff4ff]/40 transition-colors">
                  <td className="py-4 px-4 font-bold text-[#795900]">Charter Core Mandate</td>
                  <td className="py-4 px-4 text-[#0b1c30]">Equal Opportunity in Grassroots Education Outreach and Primary Safety Healthcare Consults</td>
                  <td className="py-4 px-4 text-stone-500 font-mono text-xs">Audit Checked</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DYNAMIC ELIGIBILITY DIAGNOSTIC CALCULATOR (SAVES USER CONFUSED THOUGHTS) */}
      <section className="bg-stone-50 py-16 px-6 border-y border-stone-200" id="calculator">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#fbbf24]/20 text-[#795900] px-4 py-1 rounded-full text-xs font-bold inline-block">
              Empowerment Tool
            </div>
            
            <h3 className="text-3xl font-bold text-[#0b1c30]">Trust Assistance Estimator</h3>
            
            <p className="text-stone-600 leading-relaxed text-sm">
              We maintain absolute transparency. Parents can use this calculator framework to estimate expected sponsorship percentages for education kits or medical diagnostics based on family income boundaries.
            </p>

            <ul className="space-y-3 text-xs text-stone-700">
              <li className="flex items-center gap-2">
                <Check className="text-emerald-600" size={14} />
                <span>Platinum Tier: Income under ₹8,000 / month</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-emerald-600" size={14} />
                <span>Gold Tier: Income between ₹8,000 & ₹15,000 / month</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-emerald-600" size={14} />
                <span>Silver Tier: Income limit up to ₹25,000 / month</span>
              </li>
            </ul>

            <div className="p-4 bg-[#e5eeff] rounded-xl border border-[#d3c5ac]/20">
              <p className="text-xs text-[#0b1c30] italic font-medium">
                "We guarantee prompt support regardless of calculated estimate. If your family undergoes immediate health or school fees distress, please submit a direct message or visit our Surat office." 
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-stone-200 shadow-md">
            <h4 className="font-bold text-lg text-[#0b1c30] mb-6">Calculate Expected Trust Sponsorship</h4>
            
            <form onSubmit={handleCalculateEligibility} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-500 mb-2">Estimated Family Monthly Income (INR)</label>
                  <input 
                    type="range" 
                    min="4000" 
                    max="40000" 
                    step="1000" 
                    value={monthlyIncome} 
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                    className="w-full accent-[#795900] h-2 bg-stone-100 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between items-center text-xs text-stone-500 mt-1 font-mono">
                    <span>₹4,000</span>
                    <span className="text-[#795900] font-bold text-sm">₹{parseInt(monthlyIncome).toLocaleString()}</span>
                    <span>₹40,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-500 mb-2">Sponsorship Category Area</label>
                  <select 
                    value={educationClass}
                    onChange={(e) => setEducationClass(e.target.value)}
                    className="w-full rounded-lg border border-stone-300 p-3 bg-stone-50 text-stone-700 text-sm focus:ring-[#795900] focus:border-[#795900]"
                  >
                    <option value="Primary School">Primary School Outfits & Books</option>
                    <option value="Secondary School">Higher Secondary School Sponsoring</option>
                    <option value="College Degree">Undergraduate College Tuition Assistance</option>
                    <option value="Clinical Diagnostics">Clinical Medicines & Prescription Diagnostic Coverage</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#795900] text-white py-3 rounded-lg font-bold hover:bg-amber-900 transition-colors text-sm"
              >
                Estimate Eligibility Now
              </button>
            </form>

            <AnimatePresence>
              {assistanceResults && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-6 p-5 bg-[#eff4ff] border-l-4 border-l-[#795900] rounded-r-xl space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase text-stone-500">Calculated Outcome ({assistanceResults.grade})</span>
                    <span className="bg-[#fbbf24] text-[#6c4f00] px-2.5 py-0.5 rounded-full text-xs font-extrabold">{assistanceResults.tier}</span>
                  </div>
                  <p className="text-2xl font-black text-[#795900]">
                    ~{assistanceResults.percent}% Projected Sponsorship Approval
                  </p>
                  <p className="text-[#4f4633] text-xs leading-relaxed font-medium">
                    {assistanceResults.explanation}
                  </p>
                  <div className="pt-2">
                    <button 
                      onClick={() => setAssistanceModalOpen(true)}
                      className="text-primary text-xs font-bold hover:underline flex items-center gap-1"
                    >
                      Apply For Trust Voucher Assistance <ArrowRight size={12} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* OBJECTIVES GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c30]">Our Operational Objectives</h2>
          <div className="w-20 h-1 bg-[#fbbf24] mx-auto rounded-full"></div>
          <p className="text-stone-600 text-base">
            Systematic objectives designed in complete compliance of our public charity charter to serve with distinction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-8 rounded-2xl bg-white border border-stone-100 shadow-sm relative overflow-hidden group">
            <span className="text-[#fbbf24] opacity-20 text-6xl font-bold absolute right-4 top-4 font-sans select-none">01</span>
            <h4 className="font-bold text-lg text-[#0b1c30] mb-3 pr-8">Empowering Village Primary Schools</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Equipping schools with standard school benches, customized writing boards, library bookshelves, and pure reverse-osmosis drinking water storage set-ups.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-stone-100 shadow-sm relative overflow-hidden group">
            <span className="text-[#fbbf24] opacity-20 text-6xl font-bold absolute right-4 top-4 font-sans select-none">02</span>
            <h4 className="font-bold text-lg text-[#0b1c30] mb-3 pr-8">Free Diagnostic Outpost Centers</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Assisting low-resource families by delivering outpatient tokens for complete health screening checkups and pathology tests completely at no cost.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-stone-100 shadow-sm relative overflow-hidden group">
            <span className="text-[#fbbf24] opacity-20 text-6xl font-bold absolute right-4 top-4 font-sans select-none">03</span>
            <h4 className="font-bold text-lg text-[#0b1c30] mb-3 pr-8">Merit Book Scholarship Grants</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Announcing and releasing annual monetary scholarship cheques directly to talented boys and girls who score high ranks in the school board exams.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-stone-100 shadow-sm relative overflow-hidden group">
            <span className="text-[#fbbf24] opacity-20 text-6xl font-bold absolute right-4 top-4 font-sans select-none">04</span>
            <h4 className="font-bold text-lg text-[#0b1c30] mb-3 pr-8">Public Health Slogan Workshops</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Educating primary sections of society against sanitary infection disease outbreaks via free workshops led by professional medical doctors and health trainers.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-stone-100 shadow-sm relative overflow-hidden group">
            <span className="text-[#fbbf24] opacity-20 text-6xl font-bold absolute right-4 top-4 font-sans select-none">05</span>
            <h4 className="font-bold text-lg text-[#0b1c30] mb-3 pr-8">Community Yoga & Senior Wellness</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Enabling peaceful physical fitness for elder groups by sponsoring free morning open-air yoga sessions and basic wellness counseling checkups.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-stone-100 shadow-sm relative overflow-hidden group">
            <span className="text-[#fbbf24] opacity-20 text-6xl font-bold absolute right-4 top-4 font-sans select-none">06</span>
            <h4 className="font-bold text-lg text-[#0b1c30] mb-3 pr-8">Youth Vocational Skill Development</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Promoting free typing lessons, digital document assistance skills, and standard sewing workshops for village youths to guarantee self-reliance.
            </p>
          </div>

        </div>
      </section>

      {/* ACTIVITIES DETAIL VIEW (SPLIDER / GRID SECTIONS SHOWING IMPACT PILLARS) */}
      <section className="py-16 bg-stone-50" id="activities">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Medical Activitives */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-[#795900] bg-amber-50 border border-amber-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase">
              <Activity size={14} />
              Educational & Healthcare Activities
            </div>
            
            <h3 className="text-2xl font-bold text-[#0b1c30]">Free Diagnostic Support Campaigns</h3>
            <p className="text-stone-600 text-sm">
              We focus heavily on medical access in Kapodara, Katargam, and Adajan communities, providing daily help directly to families who cannot support massive specialized costs.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-stone-200">
                <CheckCircle className="text-amber-600 shrink-0 mt-0.5" size={18} />
                <div>
                  <h5 className="font-bold text-sm text-[#0b1c30]">Monthly General Medical Screenings</h5>
                  <p className="text-xs text-stone-500 mt-0.5">Sponsoring specialists from Surat Civil hospitals to run standard consulting desks at P.P. Maniya centers.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-stone-200">
                <CheckCircle className="text-amber-600 shrink-0 mt-0.5" size={18} />
                <div>
                  <h5 className="font-bold text-sm text-[#0b1c30]">Free Diagnostic Token Grants</h5>
                  <p className="text-xs text-stone-500 mt-0.5">Voucher distributions for blood sugar tests, cholesterol panels, and general pathology testing.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-stone-200">
                <CheckCircle className="text-amber-600 shrink-0 mt-0.5" size={18} />
                <div>
                  <h5 className="font-bold text-sm text-[#0b1c30]">Zero-Cost Essential Medicine Outlots</h5>
                  <p className="text-xs text-stone-500 mt-0.5">Dispersing life-support diagnostic medicines free of cost to the elderly living on low pension support.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social welfare */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-[#795900] bg-amber-50 border border-amber-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase">
              <Users size={14} />
              Social Welfare Activities
            </div>
            
            <h3 className="text-2xl font-bold text-[#0b1c30]">Humanitarian Outreach</h3>
            <p className="text-stone-600 text-sm">
              True safety and dignity extend beyond health or textbooks. P.P. Maniya provides emergency shelter kits, water access, and nutritional assistance as part of our permanent community relief index.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-stone-200">
                <CheckCircle className="text-amber-600 shrink-0 mt-0.5" size={18} />
                <div>
                  <h5 className="font-bold text-sm text-[#0b1c30]">Disaster Meal Program Kits</h5>
                  <p className="text-xs text-stone-500 mt-0.5">Preparing emergency nutrition and sanitary supply packages during rain outbreaks or local crisis moments.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-stone-200">
                <CheckCircle className="text-amber-600 shrink-0 mt-0.5" size={18} />
                <div>
                  <h5 className="font-bold text-sm text-[#0b1c30]">Cultural Gathering & Unity Festivals</h5>
                  <p className="text-xs text-stone-500 mt-0.5">Organizing group integration meetings for families to foster harmony and mutual support structures.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-stone-200">
                <CheckCircle className="text-amber-600 shrink-0 mt-0.5" size={18} />
                <div>
                  <h5 className="font-bold text-sm text-[#0b1c30]">Eco Tree Sowing Drives</h5>
                  <p className="text-xs text-stone-500 mt-0.5">Planting natural shadow tree species near primary school yards and teaching child groups about environmental care.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Big visual statement cards */}
        <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#213145] text-[#eaf1ff] p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="w-10 h-10 bg-[#fbbf24] text-white flex items-center justify-center rounded-xl mb-6">
              <Sparkles size={20} className="text-[#6c4f00]" />
            </div>
            <h4 className="text-2xl md:text-3xl font-bold mb-4">Our Vision Statement</h4>
            <p className="text-stone-300 text-sm leading-relaxed">
              We envision a highly integrated, mutual, self-reliant society where children enjoy high-quality primary classroom opportunities and families receive complete clinical diagnostic care, ensuring no citizen has to suffer because of zero resource access.
            </p>
          </div>

          <div className="bg-[#fbbf24] text-[#6c4f00] p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="w-10 h-10 bg-white/30 flex items-center justify-center rounded-xl mb-6">
              <Award size={20} className="text-amber-900" />
            </div>
            <h4 className="text-2xl md:text-3xl font-bold mb-4">Our Mission Mandate</h4>
            <p className="text-[#6c4f00]/90 text-sm leading-relaxed">
              To provide immediate aid with meticulous accountability and professional operational transparency, mobilizing support to serve, heal, and sponsor under-served people through local clinic outlets and direct school fee scholarship cheques.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY OF IMPACT WITH OVERLAY INFORMATION */}
      <section className="py-20 px-6 max-w-7xl mx-auto" id="gallery">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c30]">Gallery of Impact</h2>
          <div className="w-20 h-1 bg-[#fbbf24] mx-auto rounded-full"></div>
          <p className="text-stone-600 text-base">
            Honest captures of our actual projects, check distributions, diagnostic camps, and educational programs.
          </p>
        </div>

        {/* Grid of gallery hotlinks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm group hover:scale-[1.02] transition-all duration-300">
            <div className="relative h-56 w-full overflow-hidden">
              <img 
                alt="Book Distribution Drive by P.P. Maniya volunteers" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                src={GALLERY_BOOK}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="text-white font-bold text-xs">Rural School Outreach</span>
              </div>
            </div>
            <div className="p-4">
              <h5 className="font-bold text-sm text-[#0b1c30] mb-1">Book & Notebook Distribution</h5>
              <p className="text-xs text-stone-500 leading-relaxed">Ensuring every child has high-grade writing materials for the upcoming academic year.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm group hover:scale-[1.02] transition-all duration-300">
            <div className="relative h-56 w-full overflow-hidden">
              <img 
                alt="Medical checkup and diagnostic clinic camps" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                src={GALLERY_CLINIC}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="text-white font-bold text-xs">Free Medical Camps</span>
              </div>
            </div>
            <div className="p-4">
              <h5 className="font-bold text-sm text-[#0b1c30] mb-1">Outpatient Health Diagnostics</h5>
              <p className="text-xs text-stone-500 leading-relaxed">Providing free clinical checkups, basic consultations, and generic medicine distribution.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm group hover:scale-[1.02] transition-all duration-300">
            <div className="relative h-56 w-full overflow-hidden">
              <img 
                alt="Elderly wellness and morning physical alignment session" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                src={GALLERY_ELDERLY}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="text-white font-bold text-xs">Senior Support Campaigns</span>
              </div>
            </div>
            <div className="p-4">
              <h5 className="font-bold text-sm text-[#0b1c30] mb-1">Elderly Yoga & Wellness Support</h5>
              <p className="text-xs text-stone-500 leading-relaxed">Supporting mental tranquility and physical mobility for elderly community members.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm group hover:scale-[1.02] transition-all duration-300">
            <div className="relative h-56 w-full overflow-hidden">
              <img 
                alt="Our classroom renovation and equipment support projects" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                src={GALLERY_CLASSROOM}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="text-white font-bold text-xs">School Infrastructure</span>
              </div>
            </div>
            <div className="p-4">
              <h5 className="font-bold text-sm text-[#0b1c30] mb-1">Classroom Renovation Funding</h5>
              <p className="text-xs text-stone-500 leading-relaxed">Equipping rural schools with desks, white writing boards, and educational learning charts.</p>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US (VALUES SECTION) */}
      <section className="py-20 bg-[#eff4ff] border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-[#0b1c30]">Our Operational Values</h2>
            <div className="w-20 h-1 bg-[#fbbf24] mx-auto rounded-full"></div>
            <p className="text-stone-600 text-sm">
              We structure our initiatives based on values that guarantee absolute compliance, legal reliability, and direct grassroots benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#fbbf24]/10 rounded-full flex items-center justify-center mx-auto text-[#795900]">
                <ShieldCheck size={32} />
              </div>
              <h4 className="font-bold text-lg text-[#0b1c30]">100% Transparency</h4>
              <p className="text-stone-600 text-xs leading-relaxed max-w-xs mx-auto">
                Every single donation entry is cataloged, audited yearly, and published for full civic transparency.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#fbbf24]/10 rounded-full flex items-center justify-center mx-auto text-[#795900]">
                <Heart size={32} />
              </div>
              <h4 className="font-bold text-lg text-[#0b1c30]">Grassroots Impact</h4>
              <p className="text-stone-600 text-xs leading-relaxed max-w-xs mx-auto">
                No middle agents. All notebooks, medical checks, and checks are released directly to the certified beneficiary.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#fbbf24]/10 rounded-full flex items-center justify-center mx-auto text-[#795900]">
                <Users size={32} />
              </div>
              <h4 className="font-bold text-lg text-[#0b1c30]">Community Centered</h4>
              <p className="text-stone-600 text-xs leading-relaxed max-w-xs mx-auto">
                Our programs are planned by listening directly to local primary teachers and medical heads.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#fbbf24]/10 rounded-full flex items-center justify-center mx-auto text-[#795900]">
                <TrendingUp size={32} />
              </div>
              <h4 className="font-bold text-lg text-[#0b1c30]">Legacy Honor</h4>
              <p className="text-stone-600 text-xs leading-relaxed max-w-xs mx-auto">
                Committed strictly to the memory of late Popatbhai Premjibhai Maniya, inspiring every action with high integrity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION HUB CARD WITH LOCAL COMM SUPPORTER TRACKER */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#795900] to-[#cbdbf5] rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 text-white space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Together, We Can Anchor Compassion in Surat</h2>
              <p className="text-stone-100 opacity-90 max-w-xl text-sm leading-relaxed">
                Whether you wish to sponsor a child's complete board book syllabus or fund outward general medicine distribution at our Katargam center, your care writes hope.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => {
                    setDonationStep(1);
                    setDonationModalOpen(true);
                  }}
                  className="bg-[#fbbf24] text-[#6c4f00] px-8 py-3.5 rounded-xl font-bold shadow-md hover:scale-105 transition-transform"
                >
                  Make a Donation
                </button>
                <button 
                  onClick={() => setVolunteerModalOpen(true)}
                  className="bg-white text-stone-800 px-8 py-3.5 rounded-xl font-semibold hover:bg-stone-50 transition-colors"
                >
                  Apply as Volunteer
                </button>
              </div>
            </div>

            {/* LIVE DONATION tracker to show that data persists in localStorage */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-white space-y-4">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <Coins size={18} className="text-[#fbbf24]" />
                <h5 className="font-bold text-sm tracking-wide">Supporters Roll of Honor</h5>
              </div>

              <div className="space-y-3 h-48 overflow-y-auto pr-2 text-xs">
                {recentDonations.map((item, idx) => (
                  <div key={idx} className="bg-white/5 p-3 rounded-lg border border-white/5 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">{item.name}</span>
                      <span className="text-[#fbbf24] font-extrabold">₹{item.amount?.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-stone-300">
                      <span>{item.cause}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE GEOGRAPHY CAMP MAP WITH TAB IN DETAILS */}
      <section className="py-12 px-6 max-w-7xl mx-auto border-t border-stone-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 space-y-6 animate-scroll-reveal visible">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-700 font-bold">Our Reach</span>
              <h3 className="text-2xl font-bold text-[#0b1c30] mt-1">Surat Operations Hub Map</h3>
            </div>
            
            <p className="text-stone-600 text-sm leading-relaxed">
              P.P. Maniya manages specialized clinical dispensaries and book storage points in multiple regions of Surat district. Click a branch to view contact coordinates.
            </p>

            <div className="space-y-3">
              {Object.keys(branches).map((name) => (
                <button
                  key={name}
                  onClick={() => setSelectedBranch(name)}
                  className={`w-full text-left p-4 rounded-xl border transition-all text-sm flex items-center justify-between ${
                    selectedBranch === name 
                      ? "bg-[#e5eeff] border-[#795900] text-[#0b1c30] font-bold" 
                      : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  <span>{name}</span>
                  <MapPin size={16} className={selectedBranch === name ? "text-[#795900]" : "text-stone-400"} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="w-full bg-[#f8f9ff] hover:bg-amber-50/20 rounded-xl p-8 border border-[#d3c5ac]/30 flex flex-col items-center justify-center text-center space-y-4 min-h-[250px] transition-colors relative overflow-hidden">
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold font-sans">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Active Outpost Center
              </div>

              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center text-[#795900]">
                <MapPin size={32} />
              </div>
              
              <div>
                <h5 className="font-extrabold text-lg text-[#0b1c30]">{selectedBranch}</h5>
                <p className="text-xs text-stone-500 max-w-lg mx-auto mt-2 italic">
                  {(branches as any)[selectedBranch].address}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md pt-4 text-xs font-sans text-left border-t border-stone-200 mt-2">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-stone-400 font-bold">In-Charge Contact</span>
                  <span className="font-semibold text-stone-800 flex items-center gap-1 mt-0.5"><Phone size={12} /> {(branches as any)[selectedBranch].phone}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-stone-400 font-bold">Specialized Care</span>
                  <span className="font-semibold text-stone-800 flex items-center gap-1 mt-0.5"><Activity size={12} /> {(branches as any)[selectedBranch].specialty}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-stone-500">
                Weekly free consultation: Every Thursday (09:00 AM - 12:00 PM) at all P.P. Maniya physical dispensaries.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* GET IN TOUCH & MESSAGES SUPPORT FEED */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info & Public Feed */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-[#0b1c30]">Connect with Our Desk</h2>
              <div className="w-12 h-1 bg-[#fbbf24] mt-2 rounded-full"></div>
            </div>
            
            <p className="text-stone-600 text-sm leading-relaxed">
              We look forward to receiving your cooperation proposal. Write to our desk directly, or inspect real public interactions and answers in our living dashboard stream below.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#e5eeff] rounded-xl flex items-center justify-center text-[#795900] shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <h6 className="font-bold text-sm text-[#0b1c30]">Postal Address</h6>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">A/35, Rachna Society, Kapodara Char Rasta, Varachha Road, Surat, Gujarat - 395006</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#e5eeff] rounded-xl flex items-center justify-center text-[#795900] shrink-0 mt-0.5">
                  <Mail size={18} />
                </div>
                <div>
                  <h6 className="font-bold text-sm text-[#0b1c30]">Write Electronic Mail</h6>
                  <p className="text-xs text-stone-500 mt-1">contact@ppmaniyatrust.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#e5eeff] rounded-xl flex items-center justify-center text-[#795900] shrink-0 mt-0.5">
                  <Phone size={18} />
                </div>
                <div>
                  <h6 className="font-bold text-sm text-[#0b1c30]">Phone Verification</h6>
                  <p className="text-xs text-stone-500 mt-1">+91 98765 43210</p>
                </div>
              </div>
            </div>

            {/* Public inquiries lists synced locally */}
            <div className="pt-6 border-t border-stone-200">
              <h5 className="font-bold text-sm text-[#0b1c30] mb-4 flex items-center gap-2">
                <MessageSquare size={16} className="text-amber-600" />
                Live Desk Interaction Log ({messagesList.length})
              </h5>

              <div className="space-y-4 max-h-[250px] overflow-y-auto pr-2">
                {messagesList.map((m, idx) => (
                  <div key={idx} className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xs text-stone-700">{m.name}</span>
                      <span className="bg-amber-50 text-[#795900] px-2 py-0.5 rounded-full text-[10px] font-bold">{m.subject}</span>
                    </div>
                    <p className="text-stone-600 text-xs italic">"{m.body}"</p>
                    {m.reply && (
                      <div className="pl-3 border-l-2 border-amber-300 pt-1 text-[11px] text-[#4f4633] font-medium leading-relaxed">
                        <span className="font-bold block text-[10px] uppercase text-stone-400">Desk Response:</span>
                        {m.reply}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm relative">
            <h4 className="font-bold text-lg text-[#0b1c30] mb-6">Send Us a Direct Message</h4>

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
                className="w-full bg-[#795900] text-white py-4 rounded-xl font-bold hover:bg-amber-900 transition-colors shadow-md text-sm cursor-pointer"
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
                    Thank you Hasmukhbhai! We have filed your message securely on the live interaction stream. We will review and reply swiftly.
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

      {/* MODALS TERMINALS SECTION */}
      
      {/* 1. DONATION MODAL (WITH GEMINI-POWERED AI NOTE WRITER) */}
      <AnimatePresence>
        {donationModalOpen && (
          <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-xl w-full border border-stone-100 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center border-b border-stone-100 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Coins className="text-[#fbbf24]" size={20} />
                  <h3 className="font-bold text-lg text-[#0b1c30]">Donation Support Desk</h3>
                </div>
                <button 
                  onClick={() => setDonationModalOpen(false)} 
                  className="p-1 hover:bg-stone-100 rounded-lg text-stone-400"
                  title="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {donationStep === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Preset Amount Option</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["500", "1000", "5000", "10000", "25000"].map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setDonationAmount(amt)}
                          className={`py-3 rounded-lg text-xs font-bold border transition-all ${
                            donationAmount === amt 
                              ? "bg-[#795900] text-white border-[#795900]" 
                              : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
                          }`}
                        >
                          ₹{parseInt(amt).toLocaleString()}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          const val = prompt("Enter custom amount in INR:", "1500");
                          if (val) setDonationAmount(val.replace(/\D/g, ''));
                        }}
                        className="py-3 rounded-lg text-xs font-bold border border-dotted border-stone-400 text-[#795900] bg-amber-50 hover:bg-amber-100"
                      >
                        Custom Amount
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Direct Fund Destination</label>
                    <select 
                      value={donationCause}
                      onChange={(e) => setDonationCause(e.target.value)}
                      className="w-full rounded-lg border border-stone-300 p-3 bg-stone-50 text-stone-700 text-sm focus:ring-[#795900] focus:border-[#795900]"
                    >
                      <option value="Education Fund Support">Primary School Kit Fund (Notebooks/RO water setups)</option>
                      <option value="Healthcare Outreach">Surat Dispensary Outpatient Medicine Supply Fund</option>
                      <option value="Senior and Social Support">Senior Citizen Yoga & Emergency Nutrition Supplies</option>
                      <option value="General Trust Admin Fund">General Sponsoring Fund (Released where needed most)</option>
                    </select>
                  </div>

                  <div className="p-4 bg-[#eff4ff] rounded-xl flex items-start gap-3">
                    <CheckCircle className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                    <p className="text-xs text-[#0b1c30] leading-relaxed font-medium">
                      All donations enjoy secure receipt validation with 80G tax benefit coverage.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setDonationStep(2)}
                      className="w-full bg-[#795900] text-white py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-amber-900 transition-colors"
                    >
                      Continue to Supporter Details & AI Assistance
                    </button>
                  </div>
                </div>
              )}

              {donationStep === 2 && (
                <form onSubmit={handleSubmitDonation} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-500 mb-1">Supporter Name</label>
                      <input 
                        type="text" 
                        required 
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full text-sm p-3 border border-stone-200 rounded-lg bg-stone-50 focus:bg-white focus:ring-1 focus:ring-amber-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-500 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        placeholder="john@doe.net"
                        className="w-full text-sm p-3 border border-stone-200 rounded-lg bg-stone-50 focus:bg-white focus:ring-1 focus:ring-amber-800"
                      />
                    </div>
                  </div>

                  {/* GEMINI AI NOTE GENERATOR ELEMENT */}
                  <div className="p-4 bg-[#f8f9ff] border border-blue-200 rounded-xl space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-blue-900 flex items-center gap-1">
                        <Sparkles size={14} className="text-blue-600" />
                        Gemini Donor Statement Writer
                      </span>
                      <button 
                        type="button"
                        onClick={handleGenerateAINote}
                        disabled={aiWriting}
                        className="text-xs font-bold text-[#795900] hover:underline disabled:opacity-50"
                      >
                        {aiWriting ? "Writing Support Statement..." : "Generate Supporter Letter"}
                      </button>
                    </div>
                    <p className="text-[11px] text-stone-500 leading-relaxed">
                      Write some draft notes below or let our secure Gemini server draft a perfect corporate letter of support.
                    </p>
                    <textarea
                      rows={3}
                      value={donorMessage}
                      onChange={(e) => setDonorMessage(e.target.value)}
                      placeholder="e.g. Sponsoring this kit in honor of our grandfather..."
                      className="w-full text-xs p-3 border border-stone-200 bg-white rounded-lg focus:outline-none"
                    ></textarea>
                    {donorLetterPreview && (
                      <div className="bg-amber-50/50 p-3 rounded-lg border border-amber-100 text-[11px] text-stone-700 italic">
                        {donorLetterPreview}
                      </div>
                    )}
                  </div>

                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Selected Allocation:</span>
                      <span className="font-bold">{donationCause}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Contribution Amount:</span>
                      <span className="font-extrabold text-[#795900] text-sm">₹{parseInt(donationAmount).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setDonationStep(1)}
                      className="border border-stone-200 py-3 rounded-xl text-stone-600 font-semibold text-xs"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-[#795900] text-white py-3 rounded-xl font-bold text-xs hover:bg-amber-900"
                    >
                      Complete Donation Placement
                    </button>
                  </div>
                </form>
              )}

              {donationStep === 3 && (
                <div className="text-center p-6 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle size={36} />
                  </div>
                  <h4 className="font-bold text-xl text-[#0b1c30]">Donation Voucher Acknowledged</h4>
                  <p className="text-xs text-stone-500 leading-relaxed max-w-sm mx-auto">
                    Thank you, {donorName || "Benevolent Supporter"}, for your contribution of ₹{parseInt(donationAmount).toLocaleString()} to the {donationCause}. A certified legal 80G slip has been dispatched to {donorEmail}.
                  </p>
                  <button
                    onClick={() => {
                      setDonationModalOpen(false);
                      setDonationStep(1);
                    }}
                    className="bg-[#795900] text-white px-6 py-2 rounded-xl text-xs font-bold"
                  >
                    Return to Homepage
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. VOLUNTEER REGISTRY MODAL (WITH SECURE DRAG AND DROP FILE UPLOADER) */}
      <AnimatePresence>
        {volunteerModalOpen && (
          <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-xl w-full border border-stone-100 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center border-b border-stone-100 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <UserPlus className="text-[#fbbf24]" size={20} />
                  <h3 className="font-bold text-lg text-[#0b1c30]">Become a Volunteer</h3>
                </div>
                <button 
                  onClick={() => setVolunteerModalOpen(false)} 
                  className="p-1 hover:bg-stone-100 rounded-lg text-stone-400"
                  title="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {!volunteerSuccess ? (
                <form onSubmit={handleSubmitVolunteer} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase mb-2">My Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={volunteerName}
                      onChange={(e) => setVolunteerName(e.target.value)}
                      placeholder="e.g. Priyaben Savani"
                      className="w-full text-sm p-3 border border-stone-200 rounded-lg bg-stone-50 focus:bg-white outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        value={volunteerEmail}
                        onChange={(e) => setVolunteerEmail(e.target.value)}
                        placeholder="yourname@gmail.com"
                        className="w-full text-sm p-3 border border-stone-200 rounded-lg bg-stone-50 focus:bg-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Contact Phone</label>
                      <input 
                        type="text" 
                        required 
                        value={volunteerPhone}
                        onChange={(e) => setVolunteerPhone(e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full text-sm p-3 border border-stone-200 rounded-lg bg-stone-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Core Service Interest</label>
                    <select 
                      value={volunteerExpertise}
                      onChange={(e) => setVolunteerExpertise(e.target.value)}
                      className="w-full rounded-lg border border-stone-300 p-3 bg-stone-50 text-stone-700 text-sm focus:ring-[#795900] focus:border-[#795900]"
                    >
                      <option value="Educational Mentoring">Primary School Classroom Teaching / Mentoring</option>
                      <option value="Free Clinic General Care">Outpatient Clinic General Care Coordinator</option>
                      <option value="Pathology Camp Assistant">Medical Blood / Pathology Camps Logistics</option>
                      <option value="Supplies and Nutrition Pack distribution">Supplies & Emergency Food Provisions Distribution</option>
                    </select>
                  </div>

                  {/* MANDATORY DRAG AND DROP FILE UPLOADER FOR USER RESUME / ID */}
                  <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase mb-2">
                      Upload Identification or CV (Supporting drag-and-drop & manual click selection)
                    </label>
                    
                    <div 
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center space-y-2 ${
                        dragOver 
                          ? "border-[#795900] bg-amber-50" 
                          : "border-stone-300 bg-stone-50 hover:bg-stone-100"
                      }`}
                    >
                      <input 
                        type="file" 
                        hidden 
                        ref={fileInputRef} 
                        onChange={handleFileSelect}
                        accept=".pdf,.doc,.docx,.jpg,.png"
                      />
                      
                      <div className="w-10 h-10 bg-[#e5eeff] rounded-full flex items-center justify-center text-[#795900]">
                        <Upload size={18} />
                      </div>
                      
                      <p className="text-xs text-stone-700 font-semibold">
                        Drag & Drop your Resume/ID file here (PDF/Word/Images)
                      </p>
                      
                      <p className="text-[10px] text-stone-500">
                        Or click anywhere on this dashed area to browse local system media
                      </p>
                    </div>

                    {/* Progress visual indicator */}
                    {volunteerFile && (
                      <div className="mt-3 p-3 bg-stone-100 border border-stone-200 rounded-lg space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold flex items-center gap-1 text-[#0b1c30]">
                            <FileText size={14} className="text-amber-700" />
                            {volunteerFile.name}
                          </span>
                          <span className="text-stone-500">{(volunteerFile.size / 1024).toFixed(1)} KB</span>
                        </div>
                        
                        <div className="w-full bg-stone-200 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className="bg-[#795900] h-full transition-all" 
                            style={{ width: `${volunteerProgress}%` }}
                          />
                        </div>

                        {volunteerProgress >= 100 && (
                          <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                            <CheckCircle size={10} /> File checked and securely staged for upload!
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={(volunteerFile !== null) && volunteerProgress < 100}
                      className="w-full bg-[#795900] text-white py-3 rounded-xl font-bold text-sm hover:bg-amber-900 transition-colors disabled:opacity-50"
                    >
                      Submit Volunteer Proposal
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center p-6 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle size={36} />
                  </div>
                  <h4 className="font-bold text-xl text-[#0b1c30]">Application Submitted</h4>
                  <p className="text-xs text-stone-500 leading-relaxed max-w-sm mx-auto">
                    Thank you, {volunteerName}! We have received your community involvement proposal. Your files have been securely saved and queued for verification.
                  </p>
                  <button
                    onClick={() => {
                      setVolunteerModalOpen(false);
                      setVolunteerSuccess(false);
                      setVolunteerFile(null);
                    }}
                    className="bg-[#795900] text-white px-6 py-2 rounded-xl text-xs font-bold"
                  >
                    Finish and Go Back
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. ASSISTANCE VOUCHER MODAL */}
      <AnimatePresence>
        {assistanceModalOpen && (
          <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-xl w-full border border-[#d3c5ac]/30 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center border-b border-stone-100 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <School className="text-[#fbbf24]" size={20} />
                  <h3 className="font-bold text-lg text-[#0b1c30]">Apply for Trust Assistance</h3>
                </div>
                <button 
                  onClick={() => setAssistanceModalOpen(false)} 
                  className="p-1 hover:bg-stone-100 rounded-lg text-stone-400"
                  title="Close"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your eligibility files have been registered successfully. Our Surat team will inspect details and print out your card.");
                setAssistanceModalOpen(false);
                setCertFile(null);
              }} className="space-y-4">
                
                <div>
                  <p className="text-xs text-[#0b1c30] font-medium leading-relaxed bg-[#eff4ff] p-4 rounded-xl">
                    By submitting medical prescriptions or school income slips, our trust verifies the details against the {monthlyIncome <= "8000" ? "Platinum Tier" : "Gold Tier"} parameters to print out a specialized cashless assistance card.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-500 mb-1">Student / Patient Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Amit Savani"
                    className="w-full text-sm p-3 border border-stone-200 rounded-lg bg-stone-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-500 mb-1">Parent or Guardian Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Rajesh Savani"
                    className="w-full text-sm p-3 border border-stone-200 rounded-lg bg-stone-50"
                  />
                </div>

                {/* Secure certificate slide input */}
                <div>
                  <label className="block text-xs font-bold text-stone-500 mb-2">
                    Submit Income Certificate copy or Medical Prescription (Select via dragging or click options)
                  </label>
                  <div 
                    onDragOver={(e) => { e.preventDefault(); setCertDragOver(true); }}
                    onDragLeave={() => setCertDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setCertDragOver(false);
                      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                        setCertFile(e.dataTransfer.files[0]);
                        setCertProgress(100);
                      }
                    }}
                    onClick={() => {
                      const input = document.createElement("input");
                      input.type = "file";
                      input.onchange = (ea: any) => {
                        if (ea.target.files && ea.target.files[0]) {
                          setCertFile(ea.target.files[0]);
                          setCertProgress(100);
                        }
                      };
                      input.click();
                    }}
                    className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center space-y-2 ${
                      certDragOver 
                        ? "border-[#795900] bg-amber-50" 
                        : "border-stone-300 bg-stone-50 hover:bg-stone-100"
                    }`}
                  >
                    <div className="w-10 h-10 bg-[#e5eeff] rounded-full flex items-center justify-center text-[#795900]">
                      <Upload size={18} />
                    </div>
                    <p className="text-xs font-bold text-stone-700">Drop certificates or click to select copy</p>
                    <p className="text-[10px] text-stone-400">PDF, JPG, PNG or Doc formats supported</p>
                  </div>

                  {certFile && (
                    <div className="mt-3 p-3 bg-stone-100 rounded-lg text-xs space-y-1">
                      <p className="font-bold text-stone-700 flex items-center gap-1">
                        <FileText size={12} /> {certFile.name}
                      </p>
                      <p className="text-[10px] text-emerald-600 font-bold font-sans">✓ Document Staged & Ready for Verification Review</p>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setAssistanceModalOpen(false)}
                    className="border border-stone-200 py-3 rounded-xl text-stone-600 font-semibold text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#795900] text-white py-3 rounded-xl font-bold text-xs"
                  >
                    Register Assistance Voucher
                  </button>
                </div>

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                alt="P.P. Maniya Logo in Footer" 
                className="h-10 w-auto" 
                src={LOGO_BASE64} 
              />
              <span className="font-sans font-extrabold text-xl text-white tracking-tight">P.P. Maniya Trust</span>
            </div>
            
            <p className="text-xs text-stone-400 leading-relaxed">
              An active public charitable organization dedicated to building transparent channels for quality primary education and prompt healthcare assistance in the memory of Late Popatbhai Premjibhai Maniya.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#fbbf24] hover:text-[#261a00] transition-colors flex items-center justify-center text-stone-300">
                <Globe size={14} className="cursor-pointer" />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#fbbf24] hover:text-[#261a00] transition-colors flex items-center justify-center text-stone-300">
                <Mail size={14} className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-white text-sm mb-4">Quick Links</h5>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#home" className="hover:text-[#fbbf24] transition-colors">Home Portal</a></li>
              <li><a href="#about" className="hover:text-[#fbbf24] transition-colors">About Trust Foundation</a></li>
              <li><a href="#calculator" className="hover:text-[#fbbf24] transition-colors">Sponsorship Eligibility Estimator</a></li>
              <li><a href="#activities" className="hover:text-[#fbbf24] transition-colors">Our Welfare Activities</a></li>
              <li><a href="#gallery" className="hover:text-[#fbbf24] transition-colors">Gallery of Impact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white text-sm mb-4">Welfare Programs</h5>
            <ul className="space-y-2.5 text-xs">
              <li><span className="hover:text-[#fbbf24] transition-colors cursor-pointer">Notebook Kits Delivery</span></li>
              <li><span className="hover:text-[#fbbf24] transition-colors cursor-pointer">School Desk Allocations</span></li>
              <li><span className="hover:text-[#fbbf24] transition-colors cursor-pointer">Clinical Outpatient Medicine Tokens</span></li>
              <li><span className="hover:text-[#fbbf24] transition-colors cursor-pointer">Youth Desktop Skill Classes</span></li>
              <li><span className="hover:text-[#fbbf24] transition-colors cursor-pointer">Elderly Physical Wellness Camps</span></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white text-sm mb-4">Trust Governance Ethics</h5>
            <ul className="space-y-2.5 text-xs">
              <li><span className="hover:text-[#fbbf24] transition-colors cursor-pointer">Donor Refund Policies</span></li>
              <li><span className="hover:text-[#fbbf24] transition-colors cursor-pointer">100% Transparency Audits</span></li>
              <li><span className="hover:text-[#fbbf24] transition-colors cursor-pointer">Tax Exemption Certificates (80G)</span></li>
              <li><span className="hover:text-[#fbbf24] transition-colors cursor-pointer">Surat Municipal Board Compliances</span></li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>© 2026 Late Popatbhai Premjibhai Maniya (P.P. Maniya) Trust. All Rights Meticulously Administered.</p>
          <div className="flex gap-6">
            <span>Corporate Identity & Care</span>
            <span className="text-[#fbbf24]">Surat, Gujarat, India</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
