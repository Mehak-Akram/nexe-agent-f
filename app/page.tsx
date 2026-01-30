'use client';

import NextLink from "next/link";
import { Button } from '@/components/ui/button';
import { Zap, Shield, Cpu, Rocket, ArrowRight, Brain, Code, Bot, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';
import { motion } from "framer-motion";

const valueProps = [
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Every solution we build incorporates cutting-edge AI to automate decisions and enhance user experiences.',
  },
  {
    icon: Rocket,
    title: 'Lightning Fast Delivery',
    description: 'From concept to deployment in record time without compromising quality or functionality.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Bank-level security protocols protect your data and your customers at every touchpoint.',
  },
  {
    icon: Zap,
    title: 'Infinitely Scalable',
    description: 'Architecture designed to grow with your business, from startup to enterprise scale.',
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - The "Control Center" Reveal */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#020202]">
        {/* Technical Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-50" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Animated Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-8"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
                System_Status: Optimal
              </span>
            </motion.div>

            {/* Cinematic Headline */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8"
            >
              WE BUILD WEBSITES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/40">
                THAT THINK.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12"
            >
              Transform your business with AI-powered automation, intelligent systems,
              and digital products that work smarter so you can scale faster.
            </motion.p>

            {/* High-Contrast Action Hub */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Button variant="glow" size="xl" asChild className="rounded-2xl px-10 h-16 text-lg font-bold shadow-[0_0_40px_rgba(var(--primary),0.3)]">
                <NextLink href="/contact" className="gap-3">
                  Get a Free Audit <ArrowRight size={20} />
                </NextLink>
              </Button>
              <Button variant="heroOutline" size="xl" asChild className="rounded-2xl px-10 h-16 text-lg border-white/10 hover:bg-white/5">
                <NextLink href="/contact">Contact Us</NextLink>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Props - The "Technical Specifications" Grid */}
      <section className="py-32 relative bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-primary" />
                <span className="text-primary font-mono text-xs uppercase tracking-widest">Core Infrastructure</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Built for the <span className="italic text-slate-500">Future</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm font-mono text-sm leading-relaxed">
              {"//"} Every solution we deliver is engineered with tomorrow in mind. Standard protocols applied.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {valueProps.map((prop, index) => (
              <div
                key={prop.title}
                className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/40 transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <prop.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{prop.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{prop.description}</p>
                </div>
                {/* Subtle Background Number */}
                <span className="absolute -bottom-4 -right-2 text-6xl font-black text-white/[0.03] group-hover:text-primary/5 transition-colors">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nexe-Agent - The "Split-System" View */}
      <section className="py-32 bg-[#020202] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                  Why <span className="text-primary underline underline-offset-8 decoration-1">Nexe-Agent</span>?
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  We are not just developers. We are strategic partners who understand that
                  technology should serve your business goals.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Code, text: "Custom solutions tailored to your exact needs" },
                  { icon: Bot, text: "AI integration that actually adds value" },
                  { icon: Cpu, text: "Scalable architecture from day one" },
                ].map((item, i) => (
                  <motion.div 
                    whileHover={{ x: 10 }}
                    key={item.text} 
                    className="flex items-center gap-5 p-4 rounded-2xl bg-white/[0.03] border border-white/5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <item.icon size={20} />
                    </div>
                    <span className="text-slate-200 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <Button variant="hero" size="lg" asChild className="rounded-xl px-8 h-14 font-bold">
                <NextLink href="/about" className="gap-2">
                  Learn More About Us <ArrowRight size={18} />
                </NextLink>
              </Button>
            </div>

            {/* Interactive Visual Element */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative aspect-square rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-1 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                <div className="w-full h-full rounded-[2.8rem] bg-[#050505] flex items-center justify-center relative overflow-hidden">
                  {/* Rotating Tech Rings */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-64 h-64 border border-dashed border-primary/30 rounded-full"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute w-80 h-80 border border-dotted border-white/10 rounded-full"
                  />
                  <Brain className="w-20 h-20 text-primary animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - The "Terminal Shutdown" Aesthetic */}
      <section className="py-40 relative overflow-hidden bg-[#050505]">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter">
              READY TO BUILD <br />
              <span className="text-slate-500 italic">INTELLIGENT?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Let us analyze your business and show you exactly how AI and automation
              can transform your operations.
            </p>
            <div className="pt-8">
                <Button variant="glow" size="xl" asChild className="rounded-full px-12 h-16 text-lg font-bold">
                    <NextLink href="/contact" className="gap-3">
                        Get Your Free Audit <ArrowRight size={20} />
                    </NextLink>
                </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}