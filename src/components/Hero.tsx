"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* Animated Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1655975719898-8f3432eed322?w=1920&auto=format&fit=crop&q=80")`,
          }}
        />
      </motion.div>

      {/* Text Animation Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        
        {/* Animated Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30, letterSpacing: "0.5em", filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.2em", filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
        >
          Venus
        </motion.h1>

        {/* Animated Subtitle and Glowing Line */}
        <div className="overflow-hidden flex flex-col items-center mt-4">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
            className="h-[2px] w-24 sm:w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8)] mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
            className="text-cyan-300 text-sm sm:text-xl md:text-3xl font-semibold tracking-[0.4em] uppercase drop-shadow-md"
          >
            Projects
          </motion.p>
        </div>
        
        {/* Optional subtle tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
          className="mt-8 text-slate-200 text-xs sm:text-sm tracking-widest font-medium opacity-80"
        >
          Turnkey Infrastructure & Interiors
        </motion.p>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white hover:text-cyan-300 transition-colors drop-shadow-md bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm"
        aria-label="Scroll down to About section"
      >
        <span className="text-[11px] font-bold tracking-widest uppercase">
          Explore
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
      </motion.a>
    </section>
  );
}