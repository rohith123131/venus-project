import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Venus Projects | Turnkey Projects, Interior Design & Infrastructure",
  description:
    "Your trusted partner for turnkey projects, interior design, and infrastructure solutions across South India. Commercial, residential, and industrial expertise established in 2024.",
  keywords: [
    "Venus Projects",
    "Turnkey Projects South India",
    "Interior Design Bengaluru",
    "Civil Construction South India",
    "Technical Infrastructure",
    "Commercial Interiors",
  ],
  authors: [{ name: "Venus Projects" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
