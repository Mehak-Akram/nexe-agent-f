import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { 
  Target, 
  Lightbulb, 
  Layers, 
  Shield, 
  ArrowRight,
  Sparkles,
  Users,
  Zap,
  Brain
} from "lucide-react";

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

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8">
              <Users size={16} />
              <span>About Nexa-Agent</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Building the Future of <span className="text-gradient">Intelligent Business</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Nexa-Agent was founded on a simple belief: technology should amplify human potential, 
              not complicate it. We are a team of engineers, designers, and strategists united by 
              a mission to make artificial intelligence accessible, practical, and transformative 
              for businesses of every size.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary to-card border border-border p-8 relative overflow-hidden">
                {/* Abstract Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-10 left-10 w-40 h-40 border border-primary/20 rounded-full" />
                  <div className="absolute top-20 left-20 w-60 h-60 border border-primary/10 rounded-full" />
                  <div className="absolute bottom-10 right-10 w-32 h-32 border border-primary/30 rounded-full" />
                </div>
                
                <div className="relative h-full flex flex-col justify-center items-center text-center">
                  <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 animate-float">
                    <Target className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground max-w-sm">
                    A world where every business has access to intelligent systems that 
                    eliminate manual work and unlock exponential growth.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Reducing Manual Work, <span className="text-gradient">Increasing Efficiency</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We started Nexa-Agent because we saw too many businesses drowning in 
                repetitive tasks, outdated processes, and disconnected systems. Every hour 
                spent on manual work is an hour not spent on innovation, customer relationships, 
                or strategic growth.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our purpose is to change that equation. By combining artificial intelligence, 
                automation, and thoughtful software design, we help organizations reclaim their 
                time, reduce errors, and focus on what truly matters.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From startups looking to scale efficiently to enterprises seeking digital 
                transformation, we partner with businesses ready to embrace the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide every decision and every line of code we write.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group p-8 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-8" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Your Success Is Our Measure
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              We measure our success not by the complexity of what we build, but by the 
              real-world impact it creates for our clients. When you grow, we grow. When 
              you succeed, that success reflects the quality of our partnership.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you are looking to launch a new product, automate your operations, or 
              reimagine your digital presence, we are here to make it happen. Let us show 
              you what intelligent technology can do.
            </p>
            
            <Button variant="glow" size="xl" asChild className="mt-12">
              <Link to="/contact" className="gap-3">
                Start a Conversation
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
