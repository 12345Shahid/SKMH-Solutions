import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Users, 
  MessageSquare, 
  Bot, 
  BarChart3, 
  ArrowRight,
  Zap,
  Shield,
  Globe
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Centralized CRM",
    description: "Manage leads, customers, and pipeline in one place with powerful organization tools.",
  },
  {
    icon: MessageSquare,
    title: "Smart Communication Hub",
    description: "Calls, SMS, WhatsApp & Email — all in one unified dashboard for seamless outreach.",
  },
  {
    icon: Bot,
    title: "AI Voice & Chat Agents",
    description: "Book appointments, capture leads, and respond 24/7 with intelligent automation.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Clear insights and real-time data to track growth and make informed decisions.",
  },
];

const highlights = [
  { icon: Zap, label: "Lightning Fast" },
  { icon: Shield, label: "Enterprise Secure" },
  { icon: Globe, label: "Global Scale" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8"
            >
              <Zap className="w-4 h-4" />
              <span>AI-Powered Business Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Your Complete{" "}
              <span className="text-gradient">CRM & Automation</span>{" "}
              Platform to Scale Any Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              All-in-one CRM, AI voice agents, automation, and analytics — plus custom software development and AI solutions from zero to hero.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="#features">
                <Button variant="heroOutline" size="xl">
                  Explore Features
                </Button>
              </a>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-8 mt-16"
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Everything You Need to Grow
            </h2>
            <p className="text-muted-foreground">
              Powerful tools designed to streamline operations, boost engagement, and accelerate your business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-card rounded-2xl border border-border/50 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Custom Development Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">AI Excellence</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Custom Software & AI Development
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Beyond CRM, we specialize in building custom web applications and cutting-edge AI solutions. From concept to deployment, we handle everything:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Custom AI Chatbots & Virtual Assistants",
                  "Machine Learning Model Development",
                  "Natural Language Processing Solutions",
                  "Computer Vision Applications",
                  "AI-Powered Automation Workflows",
                  "Full-Stack Web Application Development"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/solutions">
                <Button variant="hero" size="lg">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  {[
                    { icon: Bot, label: "AI Agents" },
                    { icon: Globe, label: "Web Apps" },
                    { icon: Zap, label: "Automation" },
                    { icon: BarChart3, label: "Analytics" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-card rounded-2xl border border-border/50 flex flex-col items-center justify-center gap-3 card-shadow animate-float"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      <item.icon className="w-8 h-8 text-primary" />
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
              Start Scaling Your Business Today
            </h2>
            <p className="text-background/70 text-lg mb-10">
              Join hundreds of businesses using SKMH Solutions to grow faster, work smarter, and achieve more.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="bg-primary text-foreground hover:bg-primary/90">
                Book Your Free Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
