"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Clock,
  Building2,
} from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Commercial Interior Fit-Out",
    location: "Bengaluru",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-grow">
        {/* Contact Page Header */}
        <section className="bg-[#071325] py-20 sm:py-24 relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050e1a]/95 via-[#07152b]/85 to-[#0b1e38]/70" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
              <span>Let's Discuss Your Project</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Get in Touch with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                Venus Projects
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Connect with our team for turnkey project solutions, corporate
              interiors, and infrastructure consulting across South India.
            </p>
          </div>
        </section>

        {/* Contact Grid Section */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left Column: Direct Info & Channels */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] tracking-tight">
                    Corporate Headquarters
                  </h2>
                  <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
                    Have an upcoming project or need turnkey execution? Reach out
                    directly to our technical leadership team.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="space-y-4">
                  {/* Address Card */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-cyan-600 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                        Registered Office
                      </div>
                      <div className="text-base font-bold text-[#0a192f] mt-1 flex items-center gap-2">
                        Venus Projects
                        <span className="text-[10px] bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded-full uppercase tracking-wide">
                          Est. 2024
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        Flat No. 502, 5th Floor, SV Towers-I,
                        <br />
                        Old Safilguda, Secunderabad,
                        <br />
                        Medchal–Malkajgiri, Telangana.
                      </p>
                      <div className="mt-3 pt-3 border-t border-slate-200">
                        <p className="text-xs text-slate-500">
                          <span className="font-semibold text-slate-700">GSTIN:</span> 36EIMPR9864P1ZT
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-cyan-600 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                        Official Inquiries
                      </div>
                      <a
                        href="mailto:venusprojects@yahoo.com"
                        className="text-base font-bold text-slate-900 hover:text-cyan-600 transition-colors block mt-1"
                      >
                        venusprojects@yahoo.com
                      </a>
                      <p className="text-xs text-slate-500 mt-1">
                        Typical response within 24 business hours.
                      </p>
                    </div>
                  </div>

                  {/* Phone & WhatsApp Card */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-cyan-600 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                        Phone & Instant Support
                      </div>
                      <div className="text-base font-bold text-[#0a192f] mt-1">
                        +91 96407 56979
                      </div>
                      <div className="text-sm font-semibold text-slate-700">
                        +91 78420 69696
                      </div>
                      <div className="pt-2">
                        <a
                          href="https://wa.me/917842069696?text=Hello%20Venus%20Projects,%20I%20would%20like%20to%20discuss%20a%20turnkey%20project"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Message on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Inquiry Form */}
              <div className="lg:col-span-7">
                <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white shadow-xl">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a192f] tracking-tight">
                    Request a Project Consultation
                  </h3>
                  <p className="text-slate-600 text-sm mt-1 mb-8">
                    Fill out the details below and our infrastructure consultants
                    will get back to you promptly.
                  </p>

                  {formSubmitted ? (
                    <div className="p-8 rounded-2xl bg-cyan-50 border border-cyan-200 text-center animate-in fade-in duration-300">
                      <div className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-[#0a192f]">
                        Inquiry Received Successfully!
                      </h4>
                      <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                        Thank you for reaching out to Venus Projects. Our team has
                        received your details and will contact you via email or phone
                        within 24 hours.
                      </p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="mt-6 px-6 py-2.5 rounded-xl bg-[#0a192f] text-white text-xs font-bold uppercase tracking-wider hover:bg-cyan-600 transition-colors"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm text-slate-900 bg-slate-50/50"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm text-slate-900 bg-slate-50/50"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm text-slate-900 bg-slate-50/50"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                            Project Type
                          </label>
                          <select
                            value={formData.projectType}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                projectType: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm text-slate-900 bg-slate-50/50"
                          >
                            <option>Commercial Interior Fit-Out</option>
                            <option>Turnkey Project Solution</option>
                            <option>Civil Construction & Architecture</option>
                            <option>Technical MEP Infrastructure</option>
                            <option>Industrial / Warehouse Facility</option>
                            <option>Residential Development</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Project Location (South India)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Bengaluru, Chennai, Hyderabad, Kochi"
                          value={formData.location}
                          onChange={(e) =>
                            setFormData({ ...formData, location: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm text-slate-900 bg-slate-50/50"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Project Brief & Requirements
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Please describe approximate area, timeline, and any specific technical requirements..."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm text-slate-900 bg-slate-50/50 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0a192f] hover:bg-cyan-600 text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                      >
                        <span>Submit Project Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}