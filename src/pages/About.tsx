import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Users, Zap, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="mb-6 animate-fade-in">About Lovable</h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
            We're passionate about helping businesses establish and grow their online presence
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-3xl mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Lovable, we believe every business deserves a strong online presence. Our mission is to make 
                  professional web development and digital marketing accessible to businesses of all sizes. We're here 
                  to help you thrive in the digital world — starting with a website that truly represents your brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl mb-8 text-center">Who We Are</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We're a team of passionate designers, developers, and digital strategists dedicated to helping businesses 
            succeed online. With years of experience in web development and digital marketing, we understand what it 
            takes to create websites that not only look great but also drive real results.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're launching your first website or looking to modernize your existing online presence, we're 
            here to guide you every step of the way. We pride ourselves on our friendly approach, transparent 
            communication, and commitment to delivering exceptional results.
          </p>
        </div>
      </section>

      {/* Why Lovable */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-5xl py-20">
          <h2 className="text-3xl mb-12 text-center">Why Choose Lovable</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl mb-3">Friendly & Professional</h3>
              <p className="text-muted-foreground">
                We combine professionalism with a personal touch, making the web development process enjoyable and stress-free.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl mb-3">Clean, Modern Design</h3>
              <p className="text-muted-foreground">
                Our design philosophy focuses on creating beautiful, intuitive websites that users love and that achieve your goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl mb-3">Tailored Solutions</h3>
              <p className="text-muted-foreground">
                Every business is unique. We create custom solutions specifically designed to meet your goals and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl mb-12 text-center">Quick Facts</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Fast</div>
              <p className="text-muted-foreground">Delivery Times</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <p className="text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="mb-6">Let's Build Something Great Together</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to take your business online? We'd love to hear from you.
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

export default About;
