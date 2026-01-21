import { Link } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-cyan-glow flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="font-display font-bold text-primary-foreground text-lg">N</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Nexa<span className="text-gradient">-Agent</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              We build intelligent digital solutions that transform how businesses operate. 
              From AI-powered websites to custom automation systems, we deliver technology that thinks.
            </p>
            <a 
              href="mailto:nexagent3@gmail.com" 
              className="inline-flex items-center gap-2 text-primary hover:text-cyan-glow transition-colors duration-300"
            >
              <Mail size={18} />
              <span>nexagent3@gmail.com</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "AI Websites",
                "Custom Software",
                "Business Automation",
                "AI Chatbots",
                "API Integration",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            {currentYear} Nexa-Agent. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Building the future, one algorithm at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
