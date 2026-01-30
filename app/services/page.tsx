'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Cpu, Rocket, Brain, Code, Bot, Sparkles, Terminal, Activity } from 'lucide-react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Brain,
    title: 'AI-Powered Websites',
    id: 'MOD_01',
    description: 'Websites that think and adapt to your users, making decisions in real-time to optimize conversions and engagement.',
  },
  {
    icon: Code,
    title: 'Custom Software',
    id: 'MOD_02',
    description: 'Tailored solutions built specifically for your business needs, integrating seamlessly with your existing workflows.',
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    id: 'MOD_03',
    description: 'Intelligent conversational agents that handle customer inquiries, bookings, and support 24/7.',
  },
  {
    icon: Zap,
    title: 'Business Automation',
    id: 'MOD_04',
    description: 'Streamline operations by automating repetitive tasks and connecting your tools for maximum efficiency.',
  },
  {
    icon: Shield,
    title: 'API Integration',
    id: 'MOD_05',
    description: 'Connect your systems and enable seamless data flow between applications with secure API solutions.',
  },
  {
    icon: Cpu,
    title: 'Data Analytics',
    id: 'MOD_06',
    description: 'Transform raw data into actionable insights with custom dashboards and reporting tools.',
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#020202] text-slate-300 selection:bg-primary/30">
        
        {/* --- HERO: ARCHITECTURAL OVERVIEW --- */}
        <section className="relative pt-40 pb-20 overflow-hidden border-b border-white/5">
          {/* Subtle Grid & Scanline Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-md border border-primary/20 bg-primary/5 mb-8">
                <Terminal size={14} className="text-primary" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary">Capabilities_v4.0</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
                OUR <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 italic">SERVICES</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                Comprehensive digital solutions designed to accelerate your business growth through
                <span className="text-white font-medium"> intelligence and automation.</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- MODULE MATRIX: SERVICES GRID --- */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative p-10 bg-[#020202] hover:bg-white/[0.02] transition-all duration-500 overflow-hidden"
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 p-6 text-[10px] font-mono text-slate-700 group-hover:text-primary/40 transition-colors">
                    {service.id}
                  </div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:translate-x-1 transition-transform">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="h-px w-8 bg-primary/40" />
                      <span className="text-[10px] font-mono text-primary uppercase">Initialize_Module</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PARTNERSHIP DIRECTIVE: WHY NEXE-AGENT --- */}
        <section className="py-32 bg-[#050505] border-y border-white/5 relative overflow-hidden">
          {/* Animated Background Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto px-6 flex flex-col items-center text-center">
             <div className="max-w-4xl relative z-10">
                <div className="flex justify-center mb-8">
                  <Activity className="text-primary w-10 h-10 animate-pulse" />
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 leading-none">
                  Why <span className="text-primary italic">Nexe-Agent</span>?
                </h2>
                
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-16 max-w-3xl mx-auto">
                  We are not just developers. We are strategic partners who understand that
                  technology should serve your business goals, not complicate them. Our team
                  combines deep technical expertise with business acumen to deliver solutions
                  that drive real results.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                   {[
                     { icon: Code, label: "Custom Solutions", code: "SRC_MAIN" },
                     { icon: Bot, label: "AI Value-Add", code: "NEURAL_V2" },
                     { icon: Cpu, label: "Scalable Architecture", code: "CLOUD_DIST" }
                   ].map((item, i) => (
                     <div key={i} className="flex flex-col items-center gap-4 group">
                        <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all duration-500">
                          <item.icon className="text-primary w-8 h-8" />
                        </div>
                        <div className="text-center">
                          <span className="block text-sm font-bold text-white tracking-wide">{item.label}</span>
                          <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">{item.code}</span>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* --- CALL TO ACTION: FINAL HANDSHAKE --- */}
        <section className="py-40 relative overflow-hidden text-center">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              className="max-w-3xl mx-auto space-y-12"
            >
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.8]">
                Ready to Build Something <br />
                <span className="text-primary underline underline-offset-[12px] decoration-1">Intelligent?</span>
              </h2>
              
              <p className="text-slate-500 font-mono text-sm uppercase tracking-[0.2em] max-w-xl mx-auto">
                {"//"} Let us analyze your business and show you exactly how AI and automation 
                can transform your operations.
              </p>

              <div className="pt-6">
                <Button variant="glow" size="xl" asChild className="rounded-full px-12 h-16 text-lg font-bold shadow-[0_0_50px_rgba(var(--primary),0.2)]">
                  <Link href="/contact" className="gap-3">
                    Get Your Free Audit
                    <ArrowRight size={20} />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}