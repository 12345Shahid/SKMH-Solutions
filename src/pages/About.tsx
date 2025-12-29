import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight,
  Target,
  Lightbulb,
  Users,
  Zap,
  Globe,
  Award
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to helping businesses grow with technology that's powerful yet simple to use.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay at the cutting edge of AI and automation to bring you the most advanced solutions.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Your success is our success. We work closely with you to understand and solve your unique challenges.",
  },
  {
    icon: Zap,
    title: "Speed & Quality",
    description: "We deliver high-quality solutions quickly, so you can start seeing results without delay.",
  },
];

const stats = [
  { value: "100+", label: "Clients Served" },
  { value: "50+", label: "AI Projects" },
  { value: "24/7", label: "Support" },
  { value: "99%", label: "Client Satisfaction" },
];

const About = () => {
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Building the Future of Business Technology
            </h1>
            <p className="text-lg text-muted-foreground">
              We're a Hong Kong-based technology company helping businesses scale faster with modern CRM, AI, and automation tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Create Halal Software Solutions was founded with a simple mission: to make powerful business technology accessible to companies of all sizes.
                </p>
                <p>
                  We saw businesses struggling with disconnected tools, manual processes, and expensive enterprise solutions that were overkill for their needs. So we built something better — an integrated platform that brings CRM, automation, and AI together in one place.
                </p>
                <p>
                  Today, we've expanded beyond CRM to offer custom software development and cutting-edge AI solutions. Whether you need a simple automation or a complex machine learning system, we build it from concept to deployment.
                </p>
                <p>
                  Based in Hong Kong, we serve businesses worldwide with a commitment to simplicity, innovation, and customer success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-8 bg-card rounded-2xl border border-border/50 card-shadow text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground">
              These core principles guide everything we do, from product development to customer support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Create Halal?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Globe, title: "Global Reach", desc: "Based in Hong Kong, serving businesses worldwide with 24/7 support." },
                { icon: Zap, title: "Fast Delivery", desc: "Quick turnaround on projects without compromising on quality." },
                { icon: Award, title: "Proven Results", desc: "Track record of successful implementations across industries." },
                { icon: Users, title: "Dedicated Support", desc: "Personal attention and ongoing support for every client." },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
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
              Let's Build Something Great Together
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Ready to transform your business with intelligent technology? Let's talk about your goals.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
