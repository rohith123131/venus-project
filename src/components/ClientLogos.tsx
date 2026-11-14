"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface ClientItem {
  id: string;
  name: string;
  category: string;
  logo: React.ReactNode;
}

export const CLIENTS: ClientItem[] = [
  {
    id: "wework",
    name: "WeWork",
    category: "Global Workspace Solutions",
    logo: (
      <div className="flex items-center justify-center w-full">
        <Image
          src="/images/wework.png"
          alt="WeWork Logo"
          width={600}
          height={200}
          className="object-contain w-full max-w-[200px] h-30" // 👈 Adjusted sizing
        />
      </div>
    ),
  },
  {
    id: "workafella",
    name: "Workafella",
    category: "Coworking & Business Centers",
    logo: (
      <div className="flex items-center justify-center w-full">
        <Image
          src="/images/workafella.png"
          alt="Workafella Logo"
          width={600}
          height={200}
          className="object-contain w-full max-w-[220px] h-16" // 👈 Adjusted sizing
        />
      </div>
    ),
  },
  {
    id: "dataavail",
    name: "DataAvail",
    category: "Enterprise Data & Cloud Solutions",
    logo: (
      <div className="flex items-center justify-center w-full">
        <Image
          src="/images/datavail.png"
          alt="DataAvail Logo"
          width={600}
          height={200}
          className="object-contain w-full max-w-[200px] h-16" // 👈 Adjusted sizing
        />
      </div>
    ),
  },
  {
    id: "Orchids",
    name: "Orchids",
    category:"International School",
    logo: (
      <div className="flex items-center justify-center w-full">
        <Image
          src="/images/orchids.png"
          alt="Orchids Logo"
          width={600}
          height={200}
          className="object-contain w-full max-w-[180px] h-30" // 👈 Adjusted sizing
        />
      </div>
    ),
  },
  {
    id: "Tao Digitals",
    name: "Tao Digitals",
    category: "Digital & IT Solutions",
    logo: (
      <div className="flex items-center justify-center w-full">
        <Image 
          src="/images/tao.png"
          alt="Tao Digitals Logo"
          width={600}
          height={200}
          className="object-contain w-full max-w-[200px] h-30" // 👈 Adjusted sizing
        />
      </div>
    ),
  },
  {
    id: "Embassy",
    name: "Embassy",
    category:  "Commercial Real Estate & Office Parks",
    logo: (
      <div className="flex items-center justify-center w-full">
        <Image
          src="/images/embassy.png"
          alt="Tao Digitals Logo"
          width={600} 
          height={200}
          className="object-contain w-full max-w-[200px] h-30" // 👈 Adjusted sizing
        />
      </div>
    ),
  },
];

export default function ClientLogosGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {CLIENTS.map((client, index) => (
        <motion.div
          key={client.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="group relative flex flex-col items-center justify-center p-8 sm:p-10 bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,180,216,0.15)] hover:border-cyan-400/50 transition-all duration-300"
        >
          {/* Subtle top accent line on hover */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full transition-all duration-300 group-hover:w-24" />

          {/* Logo container */}
          <div className="w-full flex items-center justify-center min-h-[90px] transition-transform duration-300 group-hover:scale-105"> {/* 👈 Increased min-h to 90px */}
            {client.logo}
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-slate-100 my-4 transition-all duration-300 group-hover:w-20 group-hover:bg-cyan-100" />

          {/* Client Category / Micro-label */}
          <span className="text-xs font-medium text-slate-500 tracking-wide text-center group-hover:text-cyan-700 transition-colors">
            {client.category}
          </span>
        </motion.div>
      ))}
    </div>
  );
}