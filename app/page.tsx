"use client";

import React from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero_sec";
import ObjectivesSection from "@/components/objectives";
import Introduction from "@/components/introduction";
import Trust from "@/components/trust";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Mission_Vision from "@/components/mission-vision";
import Activities from "@/components/activities";
import Gallery from "@/components/gallery";

export default function HomeView() {
  return (
    <div id="home" className="min-h-screen flex flex-col justify-between bg-white">
      <Header />
      <HeroSection />
      <ObjectivesSection />
      <Introduction />
      <Trust/>
      <Gallery />

      <Activities />

      <Mission_Vision />

      <Contact />

      <Footer />
    </div>
  )
}