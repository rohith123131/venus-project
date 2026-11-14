"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building,
  Layers,
  Wrench,
  MapPin,
} from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      title: "Established in 2025",
      desc: "Founded with modern engineering methodology, agile execution frameworks, and uncompromising quality standards.",
      icon: <Building className="w-5 h-5 text-cyan-600" />,
    },
    {
      title: "Turnkey Project Solutions",
      desc: "End-to-end project management across South India—from initial spatial planning and approvals to final turnkey delivery.",
      icon: <Layers className="w-5 h-5 text-cyan-600" />,
    },
    {
      title: "Commercial, Residential & Industrial",
      desc: "Comprehensive multi-sector capability tailored to corporate offices, modern residences, logistics hubs, and industrial spaces.",
      icon: <ShieldCheck className="w-5 h-5 text-cyan-600" />,
    },
    {
      title: "Integrated Design & Infrastructure",
      desc: "Harmonizing refined interior architecture, structural civil construction, and mission-critical technical MEP systems.",
      icon: <Wrench className="w-5 h-5 text-cyan-600" />,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="subtle-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="#0a192f"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#subtle-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Kicker Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-cyan-700 text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <span>About Venus Projects</span>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a192f] tracking-tight leading-[1.15]">
              Transforming Spaces{" "}
              <span className="text-cyan-600">Through Excellence</span>
            </h2>

            {/* Narrative Paragraphs */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Established in 2025,{" "}
              <strong className="text-slate-900 font-semibold">Venus Projects</strong>{" "}
              delivers premier turnkey solutions, interior architecture, and robust
              infrastructure across South India. We combine engineering rigor with
              aesthetic elegance to bring complex commercial, residential, and
              industrial visions into tangible reality.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              With a single point of accountability, our multi-disciplinary team
              seamlessly manages civil construction, custom interior fit-outs, and
              technical MEP systems—guaranteeing on-time delivery, cost certainty,
              and supreme structural integrity.
            </p>

            {/* Structured Pillars Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-cyan-400/60 hover:bg-white hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-white border border-slate-200/70 shadow-2xs group-hover:bg-cyan-50 transition-colors">
                      {pillar.icon}
                    </div>
                    <h3 className="text-sm font-bold text-[#0a192f] tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-normal pl-0 sm:pl-1">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Read More Button */}
            <div className="mt-8 pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#0a192f] hover:bg-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Architectural Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Corner Bracket (Cyan) */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-cyan-500 rounded-tr-2xl z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-cyan-500 rounded-bl-2xl z-20 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
                <div
                  className="aspect-[4/5] sm:aspect-[3/4] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80")`,
                  }}
                />

                {/* Subtle Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 via-[#0a192f]/20 to-transparent" />

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-600">
                      Regional Footprint
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                      South India
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#0a192f] leading-snug">
                    Turnkey Engineering, Civil & Interior Solutions
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Serving Bengaluru, Chennai, Hyderabad & industrial zones.
                  </p>
                </div>
              </div>

              {/* Floating Established Badge */}
              <div className="absolute -top-5 -left-5 bg-[#0a192f] text-white p-4 rounded-xl shadow-xl border border-cyan-500/30 flex items-center gap-3 z-30">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center font-black text-cyan-300 text-sm">
                  25
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-cyan-400">
                    Established
                  </div>
                  <div className="text-sm font-extrabold text-white">
                    Year 2025
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
