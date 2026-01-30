'use client';

import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Users,
  Sparkles,
  Brain,
  Code,
  Zap,
  Target,
  Lightbulb,
  Layers,
  Shield,
  Terminal
} from 'lucide-react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Projects Completed', code: 'EXEC_050' },
  { value: '98%', label: 'Client Satisfaction', code: 'SAT_V98' },
  { value: '5+', label: 'Years Experience', code: 'EXP_Y05' },
  { value: '24/7', label: 'Support Available', code: 'UP_TIME' },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We pursue emerging technologies and creative solutions that give our clients a competitive edge.",
  },
  {
    icon: Brain,
    title: "Intelligent Design",
    description: "Every system we build incorporates smart logic that adapts, learns, and improves over time.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "From day one, we engineer solutions that grow seamlessly with your business demands.",
  },
  {
    icon: Shield,
    title: "Uncompromising Reliability",
    description: "We build systems that businesses depend on, with uptime, security, and performance you can trust.",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#020202] text-slate-300">

        {/* --- HERO: SYSTEM BRIEFING --- */}
        <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 text-primary font-mono text-xs tracking-[0.3em] uppercase mb-6"
                >
                  <Terminal size={14} />
                  Origin_Story.log
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8"
                >
                  Building the Future of <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/40 italic">
                    Intelligent Business
                  </span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-slate-400 leading-relaxed max-w-2xl border-l-2 border-primary/20 pl-8"
                >
                  Nexe-Agent was founded on a simple belief: technology should amplify human potential,
                  not complicate it. We make artificial intelligence accessible, practical, and transformative
                  for businesses of every size.
                </motion.p>
              </div>

              {/* Decorative Tech ID Sidebar */}
              <div className="hidden lg:block lg:col-span-4 border-l border-white/5 pl-12">
                <div className="space-y-8 py-4 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                   <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">System_Parameters</div>
                   <div className="flex flex-col gap-1 text-xs font-mono">
                      <span>{'>'} AGENT_TYPE: HUMAN_AUGMENTATION</span>
                      <span>{'>'} STATUS: OPERATIONAL_V.2.4</span>
                      <span>{'>'} ENCRYPTION: AES_256_ACTIVE</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- STATS: DATA METRICS --- */}
        <section className="py-20 bg-primary/[0.02] border-b border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="relative group p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-primary/30 transition-all">
                  <div className="text-[10px] font-mono text-slate-500 mb-2">{stat.code}</div>
                  <div className="text-4xl font-black text-white mb-1 group-hover:text-primary transition-colors">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- MISSION: CORE DIRECTIVE --- */}
        <section className="py-32 relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              {/* Visual Box */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative aspect-video rounded-3xl bg-[#050505] border border-white/10 p-12 overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-slate-600">MISSION_CONTROL</div>
                  <div className="flex flex-col items-center justify-center h-full space-y-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center animate-pulse">
                      <Target className="w-10 h-10 text-primary" />
                    </div>
                    <div className="text-center space-y-2">
                       <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Our Vision</h3>
                       <p className="text-slate-500 text-sm max-w-xs mx-auto italic">
                        "A world where intelligent systems eliminate manual work and unlock exponential growth for every business."
                       </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none">
                  Reducing Manual Work, <br />
                  <span className="text-primary">Increasing Efficiency</span>
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                  We saw too many businesses drowning in repetitive tasks and outdated processes.
                  Every hour spent on manual work is an hour not spent on innovation or customer relationships.
                </p>
                <div className="grid gap-4">
                  {[
                    { icon: Brain, text: 'Cutting-edge AI integration' },
                    { icon: Code, text: 'Clean, maintainable architecture' },
                    { icon: Zap, text: 'Reclaiming time for what truly matters' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-slate-200 font-medium tracking-tight">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- VALUES: SYSTEM GUIDELINES --- */}
        <section className="py-32 bg-white/[0.02] border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mb-20 space-y-4">
              <h2 className="text-4xl font-bold text-white tracking-tight uppercase">
                Core <span className="text-primary">Values</span>
              </h2>
              <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">
                The principles that guide every decision and every line of code we write.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="group relative p-8 rounded-2xl bg-black border border-white/5 hover:border-primary/40 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{value.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FINAL CALL TO ACTION --- */}
        <section className="py-40 relative overflow-hidden text-center">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
              className="max-w-2xl mx-auto space-y-10"
            >
              <Sparkles className="w-12 h-12 text-primary mx-auto animate-pulse" />
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
                  Ready to <br /> Work With Us?
                </h2>
                <p className="text-lg text-slate-500 font-mono uppercase tracking-widest">
                  {"//"} Join the growing list of businesses transforming operations.
                </p>
              </div>
              <Button variant="glow" size="xl" asChild className="rounded-full px-12 h-16 text-lg font-bold">
                <Link href="/contact" className="gap-3">
                  Start a Conversation
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}