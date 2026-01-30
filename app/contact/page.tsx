'use client';

import { useState } from "react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare, 
  Clock, 
  Sparkles, 
  User, 
  Briefcase,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Transmission Received",
      description: "Data packet successfully sent. Response scheduled within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#020202] text-slate-300">
        
        {/* --- HERO: UPLINK STATUS --- */}
        <section className="relative pt-40 pb-20 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-primary font-mono text-xs tracking-widest uppercase mb-6"
              >
                <Terminal size={14} />
                Communication_Channel_Secure
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
                Let's Build Something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/40 italic">Brilliant</span>
              </h1>
              
              <p className="text-xl text-slate-400 leading-relaxed font-light border-l-2 border-primary/20 pl-8">
                Whether you have a specific project in mind or just want to explore 
                what is possible, we are here to listen. Every great partnership starts 
                with a conversation.
              </p>
            </div>
          </div>
        </section>

        {/* --- MAIN INTERFACE --- */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* --- TRANSMISSION FORM --- */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="relative group">
                  {/* Glowing Border Decor */}
                  <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000" />
                  
                  <div className="relative p-8 md:p-12 rounded-2xl bg-black border border-white/10 shadow-2xl">
                    <div className="flex justify-between items-center mb-10 border-b border-white/5 pb-6">
                       <div>
                          <h2 className="text-2xl font-bold text-white tracking-tight">Send Us a Message</h2>
                          <p className="text-slate-500 text-xs font-mono uppercase mt-1">Status: Ready_For_Input</p>
                       </div>
                       <ShieldCheck className="text-primary/40 w-8 h-8" />
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Subject_Name</label>
                          <div className="relative">
                            <Input 
                              id="name" 
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe" 
                              className="h-14 pl-12 bg-white/[0.02] border-white/10 focus:border-primary/50 text-white placeholder:text-slate-700 rounded-xl" 
                              required 
                            />
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Email_Address</label>
                          <div className="relative">
                            <Input 
                              id="email" 
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@company.com" 
                              className="h-14 pl-12 bg-white/[0.02] border-white/10 focus:border-primary/50 text-white placeholder:text-slate-700 rounded-xl" 
                              required 
                            />
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Organization (Optional)</label>
                        <div className="relative">
                          <Input 
                            id="company" 
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company Name" 
                            className="h-14 pl-12 bg-white/[0.02] border-white/10 focus:border-primary/50 text-white placeholder:text-slate-700 rounded-xl" 
                          />
                          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Message_Body</label>
                        <Textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project, goals, or questions..." 
                          rows={5}
                          className="bg-white/[0.02] border-white/10 focus:border-primary/50 text-white placeholder:text-slate-700 rounded-xl resize-none p-6"
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        variant="glow" 
                        size="xl" 
                        className="w-full h-16 gap-3 text-black font-black uppercase tracking-widest rounded-xl transition-all active:scale-[0.98]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Transmitting..." : "Initialize Transfer"}
                        <Send className="w-5 h-5" />
                      </Button>
                    </form>
                  </div>
                </div>
              </div>

              {/* --- SIDEBAR: SYSTEM INFO --- */}
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
                <div className="space-y-10">
                  <h2 className="text-3xl font-bold text-white tracking-tight">
                    Connection <span className="text-primary">Points</span>
                  </h2>
                  
                  <div className="space-y-8">
                    {[
                      { icon: Mail, title: "Email Us Directly", detail: "nexegent3@gmail.com", isLink: true },
                      { icon: Clock, title: "Response Time", detail: "Latency: < 24 Hours (Business Days)", isLink: false },
                      { icon: MapPin, title: "Global Reach", detail: "Distributed Network: Global Support", isLink: false }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 transition-all duration-500">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-sm font-mono uppercase tracking-widest text-slate-500">{item.title}</h3>
                          {item.isLink ? (
                            <a href={`mailto:${item.detail}`} className="text-xl font-bold text-white hover:text-primary transition-colors block">
                              {item.detail}
                            </a>
                          ) : (
                            <p className="text-xl font-bold text-white">{item.detail}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Sparkles size={60} className="text-primary" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 italic">Get a Free AI Audit</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
                      Not sure where to start? Request a complimentary analysis of your 
                      business operations and discover AI opportunities.
                    </p>
                    <Button variant="outline" className="w-full h-12 border-primary/40 text-primary hover:bg-primary hover:text-black font-bold uppercase tracking-tighter transition-all">
                      Request Free Audit
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- FOOTER BANNER --- */}
        <section className="py-24 border-t border-white/5 bg-white/[0.01]">
          <div className="container mx-auto px-6 text-center">
            <motion.div 
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
                The Future Starts With a <span className="text-primary">Single Message</span>
              </h2>
              <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">
                {"//"} Break the cycle of manual operations. Update your system today.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}