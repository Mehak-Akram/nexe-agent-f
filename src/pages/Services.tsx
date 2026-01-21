import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { 
  Globe, 
  Code, 
  Bot, 
  MessageSquare, 
  Plug, 
  Settings, 
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Cpu,
  Layers
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "AI-Powered Website Development",
    description: "We create websites that do more than display information. Our AI-integrated sites personalize content, predict user needs, and automate interactions to convert visitors into customers.",
    features: ["Smart Content Personalization", "Predictive Analytics", "Automated User Journeys"],
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "From complex enterprise applications to streamlined business tools, we build custom software solutions that solve your specific challenges and integrate seamlessly with your existing systems.",
    features: ["Tailored Solutions", "Seamless Integration", "Future-Proof Architecture"],
  },
  {
    icon: Bot,
    title: "Business Automation & AI Agents",
    description: "Eliminate repetitive tasks and reduce human error with intelligent automation. Our AI agents handle everything from data processing to customer service, freeing your team for strategic work.",
    features: ["Workflow Automation", "Intelligent Decision Making", "24/7 Operations"],
  },
  {
    icon: MessageSquare,
    title: "Chatbots & AI Assistants",
    description: "Deploy conversational AI that understands context, learns from interactions, and provides human-like support around the clock. Reduce support costs while improving customer satisfaction.",
    features: ["Natural Language Processing", "Multi-Channel Support", "Continuous Learning"],
  },
  {
    icon: Plug,
    title: "API Integration & Backend Systems",
    description: "Connect your tools, platforms, and data sources into a unified ecosystem. We build robust backend systems and APIs that ensure your technology stack works together flawlessly.",
    features: ["Third-Party Integrations", "Secure Data Flow", "Real-Time Sync"],
  },
  {
    icon: Settings,
    title: "Maintenance, Scaling & Optimization",
    description: "Technology requires ongoing care. We provide proactive maintenance, performance optimization, and scaling support to ensure your systems grow with your business.",
    features: ["Proactive Monitoring", "Performance Tuning", "Scalability Planning"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8">
              <Layers size={16} />
              <span>Full-Stack Solutions</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Services That <span className="text-gradient">Transform</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              From intelligent websites to autonomous AI agents, we deliver end-to-end 
              solutions that automate complexity and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 md:p-10 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground border border-border"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology that delivers results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discover", desc: "We analyze your needs and identify opportunities" },
              { step: "02", title: "Design", desc: "Architect solutions that align with your goals" },
              { step: "03", title: "Develop", desc: "Build with precision using modern technologies" },
              { step: "04", title: "Deploy", desc: "Launch, monitor, and optimize for performance" },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-6">
                    <span className="font-display text-xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get <span className="text-gradient">Started</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Tell us about your project and discover how our services can 
              transform your business operations.
            </p>
            <Button variant="glow" size="xl" asChild>
              <Link to="/contact" className="gap-3">
                Start Your Project
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
