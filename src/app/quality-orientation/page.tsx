"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Ruler, 
  Layers, Hammer, Paintbrush, Cpu, 
  Building2, DoorOpen, LayoutGrid, MonitorSmartphone, AirVent, Cable
} from "lucide-react";

// 1. ALL 16 Services from the PDF Works Contract Services
const worksContractServices = [
  "Civil Construction Works", "Bore Well Works", "Ceiling Works", 
  "Flooring Works", "Wall Painting Services", "ACP Works", 
  "Partition Works", "Modular Furniture's", "Carpentry Works", 
  "Electrical & Networking", "Plumbing Works", "Fire Sprinkler Works", 
  "Fabrication Works", "FAS & PAS Works", "Security Management System", 
  "Air Conditioning Installations"
];

// 2. Detailed Services configured for the alternating layout
const detailedServices = [
  {
    icon: <Building2 className="w-6 h-6 text-cyan-600" />,
    title: "Civil Construction Works",
    desc: "At Venus Projects, we aim to deliver high quality, reliable construction services for Commercial, Residential & Industrial Ventures. We offer the highest standards for safety, quality, and integrity.",
    points: ["Excavation & Compaction", "Leveling & Blinding Concrete", "Steel Reinforcement", "Concrete Curing & Backfilling", "Wall Construction & Finishing"],
    image: "https://images.unsplash.com/photo-1487491424367-7571f9afbb30?q=80&w=1169&auto=format&fit=crop"
  },
  {
    icon: <Layers className="w-6 h-6 text-cyan-600" />,
    title: "Flooring Works",
    desc: "Our skilled staff are trained to recognize the issues with each individual sub-floor and designate the correct product for the job. All floor preparation is carried out to the strictest manufacturer recommendations.",
    points: ["Tiles & Carpet Flooring", "Wooden & Laminate Flooring", "Marble & Granite Flooring", "Precise Sub-floor preparation"],
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: <DoorOpen className="w-6 h-6 text-cyan-600" />,
    title: "Partitions, Doors & Windows",
    desc: "Office partitions and doors are the quickest, easiest, and most cost-effective way of creating a more productive workspace. Available in many styles depending on the look and finish you require.",
    points: ["Timber, Glass & Aluminum Partitions", "Acoustic Panels & Fire Rated Partitions", "Sliding, Foldable & uPVC Doors", "Aluminum & Wooden Windows"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: <LayoutGrid className="w-6 h-6 text-cyan-600" />,
    title: "Modular Furniture & Carpentry",
    desc: "We supply a wide range of Domestic and Commercial Modular Furniture manufactured using high-grade quality material. Customized designs that are attractive and durable.",
    points: ["Reception & Conference Tables", "Workstations & Manager Cabins", "Canteen Furniture & Filing Storage", "Leather Chairs & Executive Sofas"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: <Paintbrush className="w-6 h-6 text-cyan-600" />,
    title: "Painting & ACP Works",
    desc: "Painting work gives the finishing touch to any construction. ACP structural glazing enhances the look of buildings and finds usage for external cladding and signage.",
    points: ["Acrylic Emulsion & Enamel Paint", "Textured & Metallic Paint", "Facade & External ACP Cladding", "Internal ACP Partitions & Signage"],
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: <Cable className="w-6 h-6 text-cyan-600" />,
    title: "Electrical & Networking Systems",
    desc: "We offer comprehensive services including design, installation, and maintenance for residential, commercial, and office buildings. All works meet quality norms within your budget.",
    points: ["Light Installation & Circuit Repairs", "LAN & WiFi Hotspot Solutions", "WAN Coverage Areas", "Customized Wireless Layouts"],
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-cyan-600" />,
    title: "CCTV & Security Systems",
    desc: "CCTV installation services and solutions are one of the key specializations of Venus Projects. We deliver the best security system for our clients, setting a standard of high safety and superior quality.",
    points: ["High-definition CCTV Surveillance", "Residential, Commercial & Industrial", "Threat Inspection & Security Management", "FAS (Fire Alarm) & PAS Works"],
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: <AirVent className="w-6 h-6 text-cyan-600" />,
    title: "HVAC & Fabrication Works",
    desc: "HVAC supply & installation services for Commercial and Domestic Air Conditioning. We also offer fabrication works rendered as per your designs and specifications.",
    points: ["Commercial & Domestic AC Installation", "Planned Maintenance & Breakdown Service", "Stainless Steel & MS Fabrication", "Plumbing & Fire Sprinkler Works"],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80"
  }
];

export default function QualityOrientationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      {/* CLEAN HERO SECTION (No color overlays, 100% clear image) */}
            {/* PREMIUM SPLIT-SCREEN HERO SECTION */}
      <section className="relative flex flex-col lg:flex-row min-h-[calc(100vh-80px)] bg-[#071325] overflow-hidden">
        
        {/* Left Side: Clean Typography Container */}
        <div className="relative z-20 w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-20 pt-32 lg:pt-20">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-8"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>End-to-End Turnkey Execution</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 text-white tracking-tight leading-[1.1]"
            >
              Modernizing Spaces. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
                Elevating Workflow.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10"
            >
              Venus Projects is committed to adopting the best practices in design, material selection, 
              and execution to deliver state-of-the-art infrastructure across South India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
            </motion.div>
          </div>
        </div>

        {/* Right Side: Clear, Un-merged Image with Floating Animation */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
              alt="Architectural Construction"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Soft fade edge so the image blends into the dark background smoothly */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#071325] to-transparent hidden lg:block z-10" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#071325] to-transparent lg:hidden z-10" />
        </div>
      </section>

      {/* WORKS CONTRACT SERVICES (The 16 items) */}
      <section className="py-20 bg-[#071325] border-b border-slate-800 relative z-20 -mt-10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Comprehensive Works Contract</h2>
            <p className="text-slate-400">We undertake strategic planning to gather requirements and share material specifications.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {worksContractServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-2 p-3 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:bg-slate-700 hover:border-cyan-500/50 transition-all"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200 leading-tight">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ALTERNATING DETAILED SERVICES LAYOUT */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a192f] mb-6">
              In-Depth Service Expertise
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl">
              Our team has deep insights and knowledge in selecting quality materials. 
              From the initial evaluation process to the final finishing touch, here is what we deliver.
            </p>
          </div>

          <div className="space-y-24 sm:space-y-32">
            {detailedServices.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full lg:w-1/2 relative"
                  >
                    {/* Decorative background shape */}
                    <div className={`absolute inset-0 bg-cyan-600 rounded-3xl transform ${isEven ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'} opacity-10`} />
                    
                    <div className="relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </motion.div>

                  {/* Text Side */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="w-full lg:w-1/2 space-y-6"
                  >
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-cyan-50 rounded-2xl border border-cyan-100 shadow-sm">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#0a192f]">
                        {service.title}
                      </h3>
                    </div>

                    {/* Main Paragraph */}
                    <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                      {service.desc}
                    </p>

                    {/* Bullet Points Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                      {service.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-slate-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* WHY VENUS PROJECTS */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a192f] mb-4">Why Partner With Venus Projects?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We ensure longevity through repeat and referral business achieved by unmatched customer satisfaction, 
              professionalism, integrity, and fairness.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Quality Materials", desc: "Our managers and supervisors have deep insights in selecting the best materials.", icon: <Ruler /> },
              { title: "Expert Execution", desc: "Skilled workmanship ensures creativity stands atop with exceptional work.", icon: <Hammer /> },
              { title: "Strict Monitoring", desc: "Frequent checks on equipment and tools during each stage of the work.", icon: <Cpu /> },
              { title: "Pre-Handover Testing", desc: "Exercising strict testing procedures before handing over the keys to the owner.", icon: <ShieldCheck /> }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] text-center hover:shadow-lg transition-all duration-300">
                <div className="mx-auto w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-600 mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-[#0a192f] mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 bg-[#0a192f] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img 
             src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" 
             alt="Office Space" 
             className="w-full h-full object-cover" 
           />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">
            Let's Build Something Exceptional
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Our top interior design executives offer you the best consultations to ensure your vision becomes reality.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#0a192f] font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,180,216,0.4)]"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}