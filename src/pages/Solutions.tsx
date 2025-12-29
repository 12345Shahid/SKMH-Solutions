import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight,
  Utensils,
  Home,
  ShoppingBag,
  Briefcase,
  Bot,
  Code,
  Brain,
  Cpu,
  Eye,
  Workflow
} from "lucide-react";

const industries = [
  {
    icon: Utensils,
    title: "Restaurants & Hospitality",
    description: "Manage reservations, collect customer feedback, run targeted promotions, and build loyalty programs that keep customers coming back.",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Capture property leads, automate follow-ups, manage listings, and close more deals with intelligent pipeline management.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description: "Build customer loyalty programs, run promotions, manage inventory alerts, and create personalized shopping experiences.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Streamline scheduling, invoicing, client communication, and project management for consultants, lawyers, and agencies.",
  },
];

const aiServices = [
  {
    icon: Bot,
    title: "AI Chatbots & Virtual Assistants",
    description: "Custom-built conversational AI that understands your business, handles customer queries, and drives engagement 24/7.",
  },
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description: "From predictive analytics to recommendation engines, we build ML models tailored to your specific business challenges.",
  },
  {
    icon: Eye,
    title: "Computer Vision Applications",
    description: "Image recognition, object detection, and visual analysis solutions for quality control, security, and more.",
  },
  {
    icon: Code,
    title: "Custom Web Applications",
    description: "Full-stack development of scalable web applications with modern technologies and beautiful user experiences.",
  },
  {
    icon: Cpu,
    title: "Natural Language Processing",
    description: "Text analysis, sentiment detection, document processing, and language understanding for smarter workflows.",
  },
  {
    icon: Workflow,
    title: "AI-Powered Automation",
    description: "Intelligent process automation that learns and adapts, eliminating repetitive tasks and human error.",
  },
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Solutions</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Tailored Solutions for Every Industry
            </h1>
            <p className="text-lg text-muted-foreground">
              Whether you need a complete CRM platform or custom AI development, we have solutions that scale with your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground">
              Our CRM platform adapts to the unique needs of your industry with specialized workflows and features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-card rounded-2xl border border-border/50 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-muted-foreground mb-6">
              No matter your business size — small shop or large enterprise — our CRM adapts to you.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AI & Custom Development Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">AI Development</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              Custom Software & AI Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              We don't just provide CRM — we build custom AI-powered applications from concept to deployment. Everything related to AI, from zero to hero.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-card rounded-2xl border border-border/50 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
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
              Have a Unique Challenge?
            </h2>
            <p className="text-background/70 text-lg mb-10">
              Let's discuss how we can build a custom solution tailored to your specific needs. From simple automations to complex AI systems.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="bg-primary text-foreground hover:bg-primary/90">
                Let's Talk
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
