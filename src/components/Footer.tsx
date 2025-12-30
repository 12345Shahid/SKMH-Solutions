import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe, ArrowRight } from "lucide-react";

const footerLinks = {
  company: [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Solutions", href: "/solutions" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "CRM Platform", href: "/features" },
    { label: "AI Voice Agents", href: "/features" },
    { label: "Automation Tools", href: "/features" },
    { label: "Custom Software", href: "/solutions" },
    { label: "AI Development", href: "/solutions" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">SM</span>
              </div>
              <span className="text-xl font-bold">SKMH Solutions</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Your complete CRM & automation platform to scale any business. Based in Hong Kong, serving businesses worldwide.
            </p>
            <div className="flex items-center gap-2 text-primary font-medium text-sm group cursor-pointer">
              <span>Get started today</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-background/70 text-sm">Hong Kong</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a href="mailto:skmhsolutions@gmail.com" className="text-background/70 hover:text-primary transition-colors text-sm">
                  skmhsolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bars */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} SKMH Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-background/50 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-background/50 hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
