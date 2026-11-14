import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-cyan-500 selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* SECTION 1: HERO */}
        <Hero />

        {/* SECTION 2: ABOUT VENUS PROJECTS */}
        <AboutSection />

        {/* SECTION 3: OUR CLIENTS */}
        <ClientsSection />
      </main>

      {/* SECTION 4: FOOTER */}
      <Footer />
    </div>
  );
}
