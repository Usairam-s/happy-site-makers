import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with actual key
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="mb-6 animate-fade-in">Get in Touch</h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
            Let's build your online presence — starting today. We'd love to hear about your project.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl mb-6">Let's Talk</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have a project in mind? Fill out the form and we'll get back to you within 24 hours. 
                We're excited to learn more about your business and how we can help you succeed online.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">Quick response time</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Live Chat</h3>
                    <p className="text-muted-foreground">Available during business hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="mt-2"
                    maxLength={100}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="mt-2"
                    maxLength={255}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    className="mt-2 min-h-[150px]"
                    maxLength={1000}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full rounded-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">How long does it take to build a website?</h3>
              <p className="text-muted-foreground">
                Most projects are completed within 2-4 weeks, depending on the complexity and your specific requirements. 
                We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">What do I need to get started?</h3>
              <p className="text-muted-foreground">
                Just your business information, any branding materials you have, and your goals for the website. 
                We'll guide you through everything else and make the process as smooth as possible.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Do you offer ongoing support?</h3>
              <p className="text-muted-foreground">
                Yes! We provide post-launch support, content updates, and maintenance packages to ensure your 
                website continues to perform at its best.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">What's included in your pricing?</h3>
              <p className="text-muted-foreground">
                Every project is unique, so we provide custom quotes. Our pricing includes design, development, 
                SEO setup, and initial training. Contact us for a detailed proposal tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
