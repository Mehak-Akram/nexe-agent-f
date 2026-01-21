import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Cpu, Rocket, ArrowRight, Brain, Code, Bot, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const valueProps = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Every solution we build incorporates cutting-edge AI to automate decisions and enhance user experiences.",
  },
  {
    icon: Rocket,
    title: "Lightning Fast Delivery",
    description: "From concept to deployment in record time without compromising quality or functionality.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level security protocols protect your data and your customers at every touchpoint.",
  },
  {
    icon: Zap,
    title: "Infinitely Scalable",
    description: "Architecture designed to grow with your business, from startup to enterprise scale.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="AI Neural Network Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8 animate-fade-up">
              <Sparkles size={16} />
              <span>Next-Generation Digital Solutions</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-up delay-100">
              We Build Websites{" "}
              <span className="text-gradient">That Think.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
              Transform your business with AI-powered automation, intelligent systems, 
              and digital products that work smarter so you can scale faster.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
              <Button variant="glow" size="xl" asChild>
                <Link to="/contact" className="gap-3">
                  Get a Free Audit
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground text-sm animate-fade-up delay-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>AI-First Approach</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for the <span className="text-gradient">Future</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every solution we deliver is engineered with tomorrow in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, index) => (
              <div
                key={prop.title}
                className="group p-8 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <prop.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nexa-Agent Section */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why <span className="text-gradient">Nexa-Agent</span>?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We are not just developers. We are strategic partners who understand that 
                technology should serve your business goals, not complicate them. Our team 
                combines deep technical expertise with business acumen to deliver solutions 
                that drive real results.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Code, text: "Custom solutions tailored to your exact needs" },
                  { icon: Bot, text: "AI integration that actually adds value" },
                  { icon: Cpu, text: "Scalable architecture from day one" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg" asChild className="mt-10">
                <Link to="/about" className="gap-2">
                  Learn More About Us
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary to-card border border-border p-8 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Floating Elements */}
                  <div className="absolute top-8 left-8 w-20 h-20 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center animate-float">
                    <Brain className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute top-1/4 right-8 w-16 h-16 rounded-xl bg-cyan-dark/20 border border-cyan-dark/30 flex items-center justify-center animate-float delay-200">
                    <Code className="w-8 h-8 text-cyan-glow" />
                  </div>
                  <div className="absolute bottom-8 left-1/4 w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-float delay-400">
                    <Zap className="w-12 h-12 text-primary" />
                  </div>
                  <div className="absolute bottom-1/4 right-1/4 w-14 h-14 rounded-lg bg-secondary border border-border flex items-center justify-center animate-float delay-300">
                    <Bot className="w-7 h-7 text-muted-foreground" />
                  </div>
                  
                  {/* Center Glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary/20 blur-2xl animate-pulse-glow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Build Something <span className="text-gradient">Intelligent</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Let us analyze your business and show you exactly how AI and automation 
              can transform your operations. No obligations, just insights.
            </p>
            <Button variant="glow" size="xl" asChild>
              <Link to="/contact" className="gap-3">
                Get Your Free Audit
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
