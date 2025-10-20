import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatCard from "@/components/StatCard";
import { Globe, Search, TrendingUp, CheckCircle, Zap, Award, Users, Rocket, Target, Clock } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 -z-10" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-6">
                <span className="text-sm font-semibold gradient-text">🚀 Transform Your Business Online</span>
              </div>
              <h1 className="mb-6 leading-tight">
                Build Your{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse-glow">
                  Dream Website
                </span>
                {" "}Today
              </h1>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                We create stunning, high-converting websites that make your business stand out. From zero to hero in just weeks — not months. 💎
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact">
                  <Button size="lg" className="rounded-full w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg hover:shadow-xl transition-all">
                    Get Started Free 🎉
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5">
                    Explore Services →
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Fast delivery</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-30 animate-pulse-glow" />
              <img 
                src={heroImage} 
                alt="Modern workspace with laptop showing website design" 
                className="rounded-3xl shadow-2xl w-full relative z-10 border-4 border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <StatCard icon={Rocket} value="50+" label="Projects Launched" color="primary" />
            <StatCard icon={Users} value="100%" label="Client Satisfaction" color="accent" />
            <StatCard icon={Zap} value="2 Weeks" label="Average Delivery" color="success" />
            <StatCard icon={Award} value="4.9★" label="Average Rating" color="warning" />
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />
        <div className="container mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="mb-6">
              <span className="gradient-text">Perfect For</span> Ambitious Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you're starting from scratch or ready to level up, we've got you covered 💪
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-primary/5 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl mb-3 font-bold">Startups</h3>
              <p className="text-muted-foreground leading-relaxed">
                Launch your business with a professional website that attracts investors and customers from day one.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-accent/5 border border-accent/10 hover:border-accent/30 transition-all hover:shadow-xl">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-2xl mb-3 font-bold">Local Businesses</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get found by local customers with SEO-optimized websites that drive foot traffic and online sales.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-secondary/5 border border-secondary/10 hover:border-secondary/30 transition-all hover:shadow-xl">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl mb-3 font-bold">Growing Companies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Modernize your digital presence with cutting-edge design that scales with your business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-4">
              <span className="text-sm font-semibold gradient-text">✨ Our Services</span>
            </div>
            <h2 className="mb-6">Everything You Need to <span className="gradient-text">Dominate Online</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From stunning design to powerful SEO — we handle it all so you can focus on growing your business 🎯
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              icon={Globe}
              title="Website Creation"
              description="Jaw-dropping, mobile-first websites that convert visitors into customers. Fast, secure, and built to last."
            />
            <ServiceCard
              icon={Search}
              title="SEO Optimization"
              description="Rank #1 on Google with our proven SEO strategies. Get found by customers actively searching for your services."
            />
            <ServiceCard
              icon={TrendingUp}
              title="Digital Strategy"
              description="Data-driven marketing strategies that grow your brand, increase engagement, and boost revenue."
            />
            <ServiceCard
              icon={Target}
              title="Brand Identity"
              description="Stand out with a unique brand identity — logos, colors, and messaging that resonates with your audience."
            />
            <ServiceCard
              icon={Zap}
              title="Speed Optimization"
              description="Lightning-fast websites that load in under 2 seconds. Speed = more customers = more revenue."
            />
            <ServiceCard
              icon={Clock}
              title="24/7 Support"
              description="Round-the-clock support and maintenance. We're always here when you need us — guaranteed."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-4">
              <span className="text-sm font-semibold gradient-text">⭐ Testimonials</span>
            </div>
            <h2 className="mb-6">What Our <span className="gradient-text">Clients Say</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it — hear from businesses we've helped transform 🎉
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard
              name="Sarah Johnson"
              role="Founder"
              company="Fresh Bites Cafe"
              content="Lovable transformed our business! Our new website is stunning and we've seen a 300% increase in online orders. Best investment we ever made."
              rating={5}
            />
            <TestimonialCard
              name="Michael Chen"
              role="CEO"
              company="TechStart Solutions"
              content="From zero to hero in just 2 weeks. The team was professional, responsive, and delivered beyond our expectations. Highly recommend!"
              rating={5}
            />
            <TestimonialCard
              name="Emma Rodriguez"
              role="Owner"
              company="Bloom Yoga Studio"
              content="Our website is not just beautiful — it actually brings in new clients every day. The SEO work they did is incredible. Thank you Lovable!"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Lovable */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6">Why <span className="gradient-text">Lovable</span> is Different</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not just another web agency — we're your growth partner 🚀
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-card to-success/5 border border-success/10 hover:border-success/30 transition-all hover:shadow-xl">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-success to-accent flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3 font-bold">Lightning Fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                Launch in weeks, not months. We move fast without cutting corners — quality and speed together.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-card to-primary/5 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3 font-bold">Award-Winning Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Stunning, modern designs that make you look like an industry leader — even if you're just starting out.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-card to-accent/5 border border-accent/10 hover:border-accent/30 transition-all hover:shadow-xl">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3 font-bold">Results-Driven</h3>
              <p className="text-muted-foreground leading-relaxed">
                We track everything. Real data, real growth, real ROI. Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto text-center max-w-4xl relative">
          <div className="bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-xl rounded-3xl p-12 md:p-16 border-2 border-primary/20 shadow-2xl">
            <div className="text-5xl mb-6">🚀</div>
            <h2 className="mb-6">Ready to <span className="gradient-text">Transform</span> Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join 50+ businesses that chose Lovable and never looked back. Your dream website is just one click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact">
                <Button size="lg" className="rounded-full w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg hover:shadow-xl transition-all text-lg px-8">
                  Start Your Project 🎉
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 text-lg px-8">
                  View Pricing →
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              💎 Free consultation • ⚡ 2-week turnaround • ✅ 100% satisfaction guarantee
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
