import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Building2,
  Compass,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Calendar,
} from "lucide-react";

export const metadata = {
  title: "About Us | Venus Projects - Turnkey Infrastructure & Interiors",
  description:
    "Learn about Venus Projects, established in 2025 as a premier turnkey infrastructure, civil construction, and interior design firm across South India.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Established in 2025",
      desc: "Founded with modern engineering methodology, agility, and a vision to redefine commercial and residential turnkey execution.",
      icon: <Calendar className="w-6 h-6 text-cyan-600" />,
    },
    {
      title: "Pan-South India Operations",
      desc: "Headquartered in Bengaluru with robust operational execution across Karnataka, Tamil Nadu, Telangana, and Andhra Pradesh.",
      icon: <MapPin className="w-6 h-6 text-cyan-600" />,
    },
    {
      title: "Turnkey Accountability",
      desc: "Single-point ownership managing everything from architectural design and approvals to civil construction, fit-outs, and technical MEP.",
      icon: <Layers className="w-6 h-6 text-cyan-600" />,
    },
    {
      title: "Triple-Domain Mastery",
      desc: "Dedicated expertise spanning modern commercial offices, high-end residential spaces, and heavy industrial facilities.",
      icon: <ShieldCheck className="w-6 h-6 text-cyan-600" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-grow">
        {/* Page Header Banner */}
        <section className="bg-[#071325] py-20 sm:py-24 relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050e1a]/95 via-[#07152b]/85 to-[#0b1e38]/70" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
              <span>Established in 2025</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Transforming Spaces{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                Through Excellence
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Your trusted partner for turnkey projects, interior design, and
              infrastructure solutions across South India.
            </p>
          </div>
        </section>

        {/* Detailed Narrative Section */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] tracking-tight">
                  Pioneering Next-Generation Corporate Architecture & Execution
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Established in 2025, Venus Projects was created to meet the
                  growing demand for unified turnkey project solutions across
                  South India. By bridging the gap between visionary
                  architectural design, rigorous civil construction, and
                  sophisticated MEP engineering, we deliver turnkey projects on
                  time and within budget.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Our portfolio encompasses high-energy commercial coworking
                  spaces, corporate headquarters, private residential
                  developments, and large-scale industrial warehouses. We take
                  pride in being trusted by blue-chip brands like WeWork,
                  Workafella, and DataAvail.
                </p>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-[#0a192f]">
                        Civil & Structural Excellence
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        End-to-end structural engineering built to highest
                        safety codes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-[#0a192f]">
                        Turnkey Interiors & MEP
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        HVAC, power, fire safety, and bespoke corporate
                        finishes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                  <div
                    className="aspect-[4/3] w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80")`,
                    }}
                  />
                  <div className="p-6 bg-slate-900 text-white">
                    <div className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                      Our Promise
                    </div>
                    <div className="text-lg font-bold text-white mt-1">
                      Uncompromised Engineering Precision
                    </div>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Every square foot is engineered with intentionality,
                      sustainability, and architectural elegance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values / Pillars */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-cyan-400 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-3 w-fit rounded-xl bg-white border border-slate-200 mb-4">
                    {v.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#0a192f] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#0a192f] to-[#0f284e] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <h3 className="text-2xl font-bold">
                  Ready to Build Your Next Project?
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  Connect with our technical and turnkey project specialists.
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="/quality-orientation"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-semibold transition-colors"
                >
                  View Quality Orientation
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#0a192f] text-sm font-bold transition-colors shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
