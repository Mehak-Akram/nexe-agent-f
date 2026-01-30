'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Cpu, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/", id: "01" },
  { name: "Services", path: "/services", id: "02" },
  { name: "About", path: "/about", id: "03" },
  { name: "Contact", path: "/contact", id: "04" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`relative flex items-center justify-between transition-all duration-500 px-6 rounded-2xl border ${
          scrolled 
          ? "h-16 bg-background/60 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
          : "h-20 bg-transparent border-transparent"
        }`}>
          
          {/* --- LEFT: LOGO & SYSTEM ID --- */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:bg-primary/30 transition-all" />
              <img
                src="/logo.png"
                alt="Logo"
                className="relative w-full h-full object-contain transition-transform duration-500 group-hover:rotate-[360deg]"
              />
            </div>
            <div className="hidden lg:block border-l border-white/10 pl-4">
              <p className="text-[10px] font-mono text-primary leading-none uppercase tracking-[0.2em] mb-1">Agentic_OS</p>
              <p className="text-sm font-bold text-foreground tracking-tighter">NEXE.AGENT</p>
            </div>
          </Link>

          {/* --- CENTER: NAV LINKS --- */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-6 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-300 rounded-lg group ${
                  pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {pathname === link.path && (
                  <motion.div 
                    layoutId="nav-glow"
                    className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20" 
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <span className={`text-[8px] ${pathname === link.path ? "text-primary" : "text-slate-600"}`}>
                    {link.id}
                  </span>
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* --- RIGHT: CTA & STATUS --- */}
          <div className="hidden md:flex items-center gap-6">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-mono text-emerald-500 uppercase tracking-tight">System_Active</span>
            </div>
            <Button 
              variant="hero" 
              size="sm" 
              asChild 
              className="rounded-xl px-6 h-10 font-bold group"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get Started
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 rounded-xl bg-white/5 border border-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* --- MOBILE OVERLAY --- */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-6 right-6 mt-4 p-6 rounded-3xl bg-background/95 backdrop-blur-2xl border border-white/10 md:hidden z-50 shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`flex items-center justify-between px-4 py-4 rounded-2xl transition-all ${
                      pathname === link.path
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "text-muted-foreground hover:bg-white/5"
                    }`}
                  >
                    <span className="text-sm font-bold uppercase tracking-widest">{link.name}</span>
                    <span className="text-[10px] font-mono opacity-50">{link.id}</span>
                  </Link>
                ))}
                <div className="h-px bg-white/5 my-4" />
                <Button variant="hero" size="lg" asChild className="w-full rounded-2xl py-7 text-lg">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;