"use client";

import React from "react";
import { motion } from "framer-motion";
import ClientLogosGrid from "./ClientLogos";

export default function ClientsSection() {
  return (
    <section id="clients" className="py-24 sm:py-32 bg-slate-50/70 relative overflow-hidden border-y border-slate-200/70">
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-slate-200/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-cyan-700 text-xs font-bold tracking-widest uppercase mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <span>Enterprise Partnerships</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a192f] tracking-tight leading-tight"
          >
            Trusted By Our Clients
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            Delivering robust turnkey environments, refined corporate interiors,
            and reliable infrastructure for pioneering enterprises and shared
            workspace providers.
          </motion.p>
        </div>

        {/* 3 Authentic Client Cards */}
        <ClientLogosGrid />

        {/* Subtle Assurance Micro-Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Precision Civil & Interior Delivery • High-Performance Workspaces
          </p>
        </motion.div>
      </div>
    </section>
  );
}
