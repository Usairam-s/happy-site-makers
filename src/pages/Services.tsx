import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Globe, Search, BarChart3, HeadphonesIcon } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="mb-6 animate-fade-in">Our Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
            Comprehensive digital solutions tailored to help your business succeed online
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ServiceCard
              icon={Globe}
              title="Website Development"
              description="Responsive, fast, and SEO-optimized websites tailored to your brand. We create beautiful, modern designs that work perfectly on all devices and help you stand out from the competition."
            />
            
            <ServiceCard
              icon={Search}
              title="SEO Services"
              description="Keyword strategy, on-page optimization, and local SEO setup. Get found by customers searching for your services online with our proven SEO techniques and strategies."
            />
            
            <ServiceCard
              icon={BarChart3}
              title="Digital Presence Audit"
              description="Ideal for businesses starting from zero — we analyze your current digital footprint and provide actionable recommendations to establish and grow your online presence effectively."
            />
            
            <ServiceCard
              icon={HeadphonesIcon}
              title="Ongoing Support & Updates"
              description="Post-launch support, content updates, and analytics tracking. We're here to help your website evolve with your business and ensure it continues to deliver results."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              Simple, transparent, and designed for your success
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl mb-2">Discovery</h3>
                <p className="text-muted-foreground">
                  We learn about your business, goals, and target audience to create the perfect strategy.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl mb-2">Design & Development</h3>
                <p className="text-muted-foreground">
                  Our team creates a beautiful, functional website that represents your brand perfectly.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl mb-2">Launch & Optimize</h3>
                <p className="text-muted-foreground">
                  We launch your site and continuously optimize it for better performance and results.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl mb-2">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  We provide continuous support, updates, and improvements to help your business grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help your business thrive online
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-full">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
