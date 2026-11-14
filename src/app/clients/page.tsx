import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientsSection from "@/components/ClientsSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Our Clients | Venus Projects",
  description:
    "Trusted by leading workspace and technology enterprises across South India including WeWork, Workafella, and DataAvail.",
};

export default function ClientsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-grow">
        {/* Banner */}
        <section className="bg-[#071325] py-16 sm:py-20 relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050e1a]/95 via-[#07152b]/85 to-[#0b1e38]/70" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Our Trusted{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                Client Partners
              </span>
            </h1>
            <p className="mt-3 text-base text-slate-300 max-w-2xl leading-relaxed">
              We take immense pride in delivering turnkey commercial spaces and
              robust infrastructure for industry leaders.
            </p>
          </div>
        </section>

        {/* Clients Section Component */}
        <ClientsSection />
      </main>

      <Footer />
    </div>
  );
}
