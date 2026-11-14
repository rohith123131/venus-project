import React from "react";
import Link from "next/link";
import Image from "next/image";

interface VenusLogoProps {
  variant?: "light" | "dark";
  className?: string;
  showSubtitle?: boolean;
}

export default function VenusLogo({
  variant = "dark",
  className = "",
  showSubtitle = true,
}: VenusLogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3.5 transition-transform duration-200 hover:scale-[1.01] ${className}`}
      aria-label="Venus Projects Home"
    >
      {/* Logo Image */}
      <div className="relative flex items-center justify-center">
        <Image
          src="/images/logo.png" // 👈 Replace with your logo image path or URL
          alt="Venus Projects Logo"
          width={100}
          height={100}
          priority
          className="transition-transform duration-300 group-hover:rotate-1 object-contain"
        />

        {/* Subtle Cyan Glow on Hover */}
        <div className="absolute -inset-1 rounded-xl bg-cyan-400/20 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`text-2xl font-black tracking-[0.18em] leading-none ${
              isLight ? "text-white" : "text-[#0a192f]"
            }`}
          >
            VENUS
          </span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
        </div>
        {showSubtitle && (
          <div className="flex items-center justify-between gap-1 mt-1">
            <span
              className={`text-[10px] font-semibold tracking-[0.35em] uppercase leading-none ${
                isLight ? "text-cyan-300/90" : "text-cyan-600"
              }`}
            >
              PROJECTS
            </span>
            <span
              className={`text-[8px] font-medium tracking-wider uppercase leading-none opacity-60 ${
                isLight ? "text-slate-400" : "text-slate-500"
              }`}
            >
              ESTD 2025
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}