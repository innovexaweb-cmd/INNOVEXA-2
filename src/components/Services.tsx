import { Globe, TrendingUp, Palette, Check } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "WordPress Development",
    description: "Complete WordPress solutions to build powerful, secure, and easy-to-manage websites.",
    features: [
      "Custom Development",
      "E-commerce (WooCommerce)",
      "Speed Optimization",
      "Security & Maintenance",
      "Migration & Bug Fixing",
    ],
    gradient: "from-primary to-blue-400",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Result-driven strategies to grow your business online.",
    features: [
      "Facebook/Insta/TikTok Ads",
      "Lead Generation",
      "Google Search & Display Ads",
      "Campaign Optimization",
      "Monthly Reporting",
    ],
    gradient: "from-accent to-teal-400",
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    description: "Creative visuals that make your brand stand out.",
    features: [
      "Social Media Posts",
      "Ad Creatives",
      "Branding & Logos",
      "Banners & Flyers",
      "Thumbnails",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card p-8 glow-effect hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}>
                <service.icon className="w-8 h-8 text-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                      <Check className="w-3 h-3 text-foreground" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
