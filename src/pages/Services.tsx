import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Globe, Search, BarChart3, HeadphonesIcon, Zap, Target, Palette, Code, Shield, Smartphone } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        
        <div className="container mx-auto text-center max-w-4xl relative">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-6 animate-fade-in">
            <span className="text-sm font-semibold gradient-text">✨ Premium Services</span>
          </div>
          <h1 className="mb-6 animate-fade-in">
            Everything You Need to <span className="gradient-text">Succeed Online</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
            From stunning websites to powerful SEO — we deliver results that transform your business 🚀
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              icon={Globe}
              title="Website Development"
              description="Stunning, mobile-responsive websites built with the latest tech. Lightning-fast loading, pixel-perfect design, and optimized for conversions. Your website will be your best salesperson."
            />
            
            <ServiceCard
              icon={Search}
              title="SEO Optimization"
              description="Dominate Google search results with our proven SEO strategies. Keyword research, on-page optimization, technical SEO, and local SEO to drive organic traffic that converts."
            />
            
            <ServiceCard
              icon={BarChart3}
              title="Digital Strategy"
              description="Data-driven marketing strategies that actually work. We analyze your market, competitors, and audience to create a roadmap for sustainable online growth and success."
            />
            
            <ServiceCard
              icon={Zap}
              title="Performance Optimization"
              description="Speed is money. We optimize your website to load in under 2 seconds, boosting user experience, SEO rankings, and conversion rates. Every millisecond counts."
            />
            
            <ServiceCard
              icon={Palette}
              title="Brand Design"
              description="Stand out with a unique brand identity. Custom logos, color palettes, typography, and brand guidelines that make your business memorable and professional."
            />
            
            <ServiceCard
              icon={Target}
              title="Conversion Rate Optimization"
              description="Turn more visitors into customers. A/B testing, user behavior analysis, and strategic improvements to increase your website's conversion rate by up to 400%."
            />
            
            <ServiceCard
              icon={Code}
              title="Custom Development"
              description="Need something special? We build custom features, integrations, and web applications tailored to your unique business needs. Sky's the limit."
            />
            
            <ServiceCard
              icon={Shield}
              title="Security & Maintenance"
              description="Sleep soundly knowing your website is secure, backed up, and always up-to-date. 24/7 monitoring, automatic updates, and instant issue resolution."
            />
            
            <ServiceCard
              icon={HeadphonesIcon}
              title="Priority Support"
              description="Get help when you need it with our dedicated support team. Fast response times, expert guidance, and ongoing optimization to keep your website performing at its best."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/50 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-5xl relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-4">
              <span className="text-sm font-semibold gradient-text">🎯 How It Works</span>
            </div>
            <h2 className="mb-4">Our <span className="gradient-text">Proven Process</span></h2>
            <p className="text-xl text-muted-foreground">
              Simple, transparent, and designed for your success — from concept to launch in just weeks 🚀
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-6 p-8 rounded-2xl bg-gradient-to-br from-card to-primary/5 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                1
              </div>
              <div>
                <h3 className="text-2xl mb-3 font-bold">Discovery & Strategy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We dive deep into your business, competitors, and target audience. Every great website starts with understanding what makes you unique and what your customers actually want.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-8 rounded-2xl bg-gradient-to-br from-card to-accent/5 border border-accent/10 hover:border-accent/30 transition-all hover:shadow-xl group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                2
              </div>
              <div>
                <h3 className="text-2xl mb-3 font-bold">Design & Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our designers and developers work in perfect harmony to create a stunning website that's both beautiful and functional. You'll see progress every step of the way.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-8 rounded-2xl bg-gradient-to-br from-card to-secondary/5 border border-secondary/10 hover:border-secondary/30 transition-all hover:shadow-xl group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                3
              </div>
              <div>
                <h3 className="text-2xl mb-3 font-bold">Testing & Launch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rigorous testing across all devices and browsers ensures everything works perfectly. Then we launch your site and watch the magic happen — new visitors, new leads, new customers.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-8 rounded-2xl bg-gradient-to-br from-card to-success/5 border border-success/10 hover:border-success/30 transition-all hover:shadow-xl group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-success to-primary flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                4
              </div>
              <div>
                <h3 className="text-2xl mb-3 font-bold">Growth & Optimization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Launch is just the beginning. We continuously monitor, analyze, and optimize your website to improve performance, rankings, and conversions. Your success is our mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto text-center max-w-4xl relative">
          <div className="bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl rounded-3xl p-12 md:p-16 border-2 border-primary/20 shadow-2xl">
            <div className="text-5xl mb-6">💎</div>
            <h2 className="mb-6">Ready to <span className="gradient-text">Level Up</span> Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's create something extraordinary together. Schedule your free consultation today and discover how we can transform your online presence.
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg hover:shadow-xl transition-all text-lg px-10">
                Get Your Free Consultation 🚀
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-6">
              ✨ No obligations • 🎯 Custom strategy • ⚡ Fast turnaround
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
