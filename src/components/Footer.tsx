import React from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  ArrowUpRight,
  Shield,
  Clock,
} from "lucide-react";
import VenusLogo from "./VenusLogo";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Quality Orientation", href: "/quality-orientation" },
    { label: "Our Clients", href: "/#clients" },
    { label: "Contact Us", href: "/contact" },
  ];

  const serviceLinks = [
    {
      label: "Turnkey Project Execution",
      href: "/quality-orientation",
    },
    {
      label: "Corporate Interior Design",
      href: "/quality-orientation",
    },
    {
      label: "Civil Construction & Architecture",
      href: "/quality-orientation",
    },
    {
      label: "Technical & MEP Infrastructure",
      href: "/quality-orientation",
    },
    {
      label: "Industrial & Warehousing",
      href: "/quality-orientation",
    },
  ];

  return (
    <footer className="bg-[#050e1a] text-slate-300 border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle Top Glowing Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Col 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-5">
            <VenusLogo variant="light" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mt-2">
              Your trusted partner for turnkey projects, interior design, and
              infrastructure solutions across South India. Delivering excellence
              in commercial, residential, and industrial developments.
            </p>

            {/* WhatsApp Contact Action */}
            <div className="pt-2">
              <a
                href="https://wa.me/917842069696?text=Hello%20Venus%20Projects,%20I%20would%20like%20to%20discuss%20a%20turnkey%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wide uppercase transition-all duration-200 group"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Chat with us on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="h-px w-2 bg-slate-700 group-hover:w-3 group-hover:bg-cyan-400 transition-all" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quality Orientation (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Our Solutions</span>
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="h-px w-2 bg-slate-700 group-hover:w-3 group-hover:bg-cyan-400 transition-all" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Office & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Headquarters</span>
            </h3>

            {/* Address */}
            <div className="flex items-start gap-3 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
              <div className="leading-relaxed">
                <span className="font-semibold text-slate-200 block">
                  Venus Projects
                </span>
                Flat No. 502, 5th Floor, SV Towers-I,
                <br />
                Old Safilguda, Secunderabad,
                <br />
                Medchal–Malkajgiri, Telangana.
              </div>
            </div>

            {/* GSTIN */}
            <div className="text-[11px] text-slate-500 font-medium pl-7">
              GSTIN: 36EIMPR9864P1ZT
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-sm pt-1">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <a
                href="mailto:venusprojects@yahoo.com"
                className="text-cyan-300 hover:text-cyan-200 hover:underline font-medium"
              >
                venusprojects@yahoo.com
              </a>
            </div>

            {/* Phone numbers */}
            <div className="flex items-start gap-3 text-sm pt-1">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div className="text-slate-400 space-y-0.5">
                <div>+91 96407 56979</div>
                <div>+91 78420 69696</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Badges */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-slate-500">
  
          {/* Left Side */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 order-2 lg:order-1">
            <span>© {new Date().getFullYear()} Venus Projects. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-slate-400 font-medium">
              Established in 2024
            </span>
          </div>

          {/* Middle: BIG Highlighted Autofy Link */}
          <div className="order-1 lg:order-2 flex items-center justify-center w-full lg:w-auto my-2 lg:my-0">
            <a 
              href="https://autofy-ai-agency.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-slate-800/80 border border-cyan-500/30 rounded-full hover:bg-slate-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,180,216,0.15)] hover:shadow-[0_0_30px_rgba(0,180,216,0.4)]"
            >
              <span className="text-sm text-slate-200 font-medium group-hover:text-white transition-colors">
                Prepared by
              </span>
              <span className="text-base sm:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 tracking-wide uppercase drop-shadow-sm">
                Autofy.ai
              </span>
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6 order-3">
            <span className="text-slate-500 hover:text-slate-400 transition-colors text-center lg:text-right">
              South India Turnkey & Infrastructure
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}