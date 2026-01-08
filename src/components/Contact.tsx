import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  Get in Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to <span className="gradient-text">Transform</span> Your Business?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Let's discuss how we can help you achieve your digital goals. Book a free consultation today.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:InnovexaWeb@gmail.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span>InnovexaWeb@gmail.com</span>
                  </a>
                  <a
                    href="tel:+923293932429"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <span>+923293932429</span>
                  </a>
                </div>
              </div>

              {/* Right Content - CTA */}
              <div className="text-center lg:text-left">
                <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                  <h3 className="text-2xl font-bold mb-4">Free Consultation</h3>
                  <p className="text-muted-foreground mb-6">
                    30-minute strategy session with our experts to discuss your project goals.
                  </p>
                  <Button variant="hero" size="xl" className="group w-full">
                    Book Your Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
