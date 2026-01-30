'use client';

import Link from "next/link";
import { Mail, ArrowRight, Terminal, Shield, Globe, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = ["Home", "Services", "About", "Contact"];
  const services = [
    "AI Websites",
    "Custom Software",
    "Business Automation",
    "AI Chatbots",
    "API Integration",
  ];

  return (
    <footer className="bg-[#020202] border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Element: Technical Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="container mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* --- BRAND ARCHIVE --- */}
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg group-hover:border-primary/50 transition-all duration-500 shadow-inner">
                <img
                  src="/logo.png"
                  alt="Nexe-Agent Logo"
                  className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="font-display font-black text-2xl text-white tracking-tighter uppercase">
                Nexe<span className="text-primary italic">-Agent</span>
              </span>
            </Link>
            
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-light">
              We build intelligent digital solutions that transform how businesses operate. 
              From AI-powered websites to custom automation systems, we deliver 
              <span className="text-slate-300"> technology that thinks.</span>
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em]">
                <Globe size={12} className="text-primary" />
                Connectivity_Established
              </div>
              <a
                href="mailto:nexegent3@gmail.com"
                className="group flex items-center gap-3 text-slate-300 hover:text-primary transition-colors duration-300 font-mono text-sm"
              >
                <div className="w-8 h-8 rounded border border-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                  <Mail size={14} />
                </div>
                nexegent3@gmail.com
              </a>
            </div>
          </div>

          {/* --- NAVIGATION MATRIX --- */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-mono font-bold text-white uppercase tracking-[0.3em] border-l-2 border-primary pl-3">
                System_Map
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                      className="text-slate-500 hover:text-primary transition-all duration-300 flex items-center gap-2 group text-sm"
                    >
                      <span className="text-primary opacity-0 group-hover:opacity-100 transition-all font-mono text-xs">{">"}</span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Matrix */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-mono font-bold text-white uppercase tracking-[0.3em] border-l-2 border-primary pl-3">
                Modules
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-slate-500 hover:text-primary transition-all duration-300 flex items-center gap-2 group text-sm"
                    >
                      <span className="text-primary opacity-0 group-hover:opacity-100 transition-all font-mono text-xs">{">"}</span>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security/Terminal Decor */}
            
          </div>
        </div>

        {/* --- BASEMENT: LEGAL & METRICS --- */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <p className="text-slate-600 text-[10px] font-mono uppercase tracking-widest">
              © {currentYear} Nexe-Agent. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </div>
            <p className="hidden sm:block text-slate-700 text-[10px] font-mono uppercase italic tracking-tighter">
              "Building the future, one algorithm at a time."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;