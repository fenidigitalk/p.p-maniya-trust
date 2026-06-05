"use client";

import React from "react";

import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Mission_Vision from "@/components/mission-vision";
import Activities from "@/components/activities";
import Gallery from "@/components/gallery";

export default function HomeView() {
  return (
    <div>
      <Gallery />

      <Activities />

      <Mission_Vision />

      <Contact />

      <Footer />
    </div>
  );
}
