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
  RefreshCw,
  Star,
  Share2,
  Mic,
  Mail,
  CalendarDays,
  Workflow
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Centralized CRM",
    description: "Full client management system with contact profiles, deal tracking, task management, and custom pipelines to organize your entire business.",
  },
  {
    icon: RefreshCw,
    title: "Automated Follow-Ups",
    description: "Personalized email and SMS campaigns that nurture prospects automatically based on their behavior and stage in your funnel.",
  },
  {
    icon: Star,
    title: "Reputation Management",
    description: "Collect reviews from happy customers automatically, monitor your online reputation, and respond to feedback in one place.",
  },
  {
    icon: Share2,
    title: "Social Media Tools",
    description: "Schedule posts, manage campaigns, and track engagement across all your social platforms from a single dashboard.",
  },
  {
    icon: Mic,
    title: "Voice-Enabled AI Agent",
    description: "Intelligent voice assistant that handles calls, books appointments, captures lead information, and responds naturally 24/7.",
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Communication",
    description: "SMS, WhatsApp, phone calls, and email unified in one inbox. Never miss a conversation or opportunity again.",
  },
  {
    icon: Bot,
    title: "AI Chat Assistants",
    description: "Deploy intelligent chatbots on your website that qualify leads, answer FAQs, and provide instant customer support.",
  },
  {
    icon: CalendarDays,
    title: "Smart Scheduling",
    description: "Automated appointment booking with calendar sync, reminders, and no-show prevention to keep your schedule optimized.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Visual workflow builder to create complex automations without code. Trigger actions based on any event or condition.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive dashboards with real-time insights on sales, marketing, team performance, and customer behavior.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Beautiful email templates, A/B testing, segmentation, and detailed analytics to maximize your email ROI.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Assign tasks, track progress, share notes, and keep your entire team aligned with built-in collaboration tools.",
  },
];

const Features = () => {
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Features</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Powerful Tools to Transform Your Business
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              From CRM to AI automation, discover all the features designed to help you grow faster and work smarter.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Book Your Free Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-8 bg-card rounded-2xl border border-border/50 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-transparent rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Schedule a personalized demo and see how these powerful tools can transform your business operations.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
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

export default Features;
