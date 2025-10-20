import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Globe, Search, TrendingUp, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 -z-10" />
        
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="mb-6 leading-tight">
                Build Your Digital Presence with{" "}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Lovable
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We help businesses thrive online — starting with your website. Professional, modern design with measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="rounded-full w-full sm:w-auto">
                    Get Started
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <img 
                src={heroImage} 
                alt="Modern workspace with laptop showing website design" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="mb-6">Who We Help</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We specialize in helping businesses that don't yet have a website or strong online presence. 
            Whether you're a startup, local business, or established company ready to modernize, we're here to help you succeed.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to establish and grow your online presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Globe}
              title="Website Creation"
              description="Beautiful, responsive websites tailored to your brand and goals"
            />
            <ServiceCard
              icon={Search}
              title="SEO Optimization"
              description="Get found online with strategic keyword optimization and local SEO"
            />
            <ServiceCard
              icon={TrendingUp}
              title="Digital Strategy"
              description="Data-driven approach to grow your online presence and reach"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Lovable */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose Lovable</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver results that matter for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Get your website up and running quickly without compromising quality
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl mb-2">Professional Design</h3>
              <p className="text-muted-foreground">
                Modern, clean designs that make your business stand out
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl mb-2">Measurable Results</h3>
              <p className="text-muted-foreground">
                Track your success with analytics and ongoing optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="mb-6">Ready to Build Your Digital Presence?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create something amazing together. Get started today.
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-full">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
