import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type PricingCategory = "web" | "marketing" | "design";

interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const pricingData: Record<PricingCategory, PricingPlan[]> = {
  web: [
    {
      name: "Startup",
      price: "$299",
      description: "Perfect for small businesses getting started online",
      features: [
        "1-5 Page Business Site",
        "Mobile Responsive Design",
        "Contact Form Integration",
        "1 Month Support",
        "Basic SEO Setup",
      ],
    },
    {
      name: "Business",
      price: "$599",
      description: "For growing businesses that need more features",
      features: [
        "Up to 10 Pages",
        "SEO Basic Setup",
        "Speed Optimization",
        "Social Media Integration",
        "3 Months Support",
        "Google Analytics Setup",
      ],
      popular: true,
    },
    {
      name: "E-Commerce",
      price: "$999",
      description: "Complete online store solution",
      features: [
        "Full WooCommerce Setup",
        "Product Uploads (up to 20)",
        "Payment Gateway Integration",
        "Security Suite",
        "6 Months Support",
        "Inventory Management",
      ],
    },
  ],
  marketing: [
    {
      name: "Social Starter",
      price: "$450",
      period: "/mo",
      description: "Get started with social media marketing",
      features: [
        "FB & Instagram Management",
        "12 Posts per Month",
        "Basic Ad Setup",
        "Community Engagement",
        "Monthly Report",
      ],
    },
    {
      name: "Growth Pro",
      price: "$850",
      period: "/mo",
      description: "Scale your social media presence",
      features: [
        "FB, Insta & TikTok",
        "20 Posts per Month",
        "Advanced Ad Campaigns",
        "Lead Generation",
        "Monthly Report",
        "Dedicated Manager",
      ],
      popular: true,
    },
    {
      name: "Google Domination",
      price: "$700",
      period: "/mo",
      description: "Dominate Google search results",
      features: [
        "Search & Display Ads",
        "Keyword Research",
        "Conversion Tracking",
        "ROI Optimization",
        "Weekly Reports",
        "A/B Testing",
      ],
    },
  ],
  design: [
    {
      name: "Essential",
      price: "$200",
      period: "/mo",
      description: "Basic design needs covered",
      features: [
        "10 Social Media Posts",
        "2 Ad Creatives",
        "Source Files Included",
        "2 Revisions per Design",
        "48hr Turnaround",
      ],
    },
    {
      name: "Branding Kit",
      price: "$350",
      description: "Complete brand identity package",
      features: [
        "Logo Design (3 Concepts)",
        "Business Card Design",
        "Letterhead Design",
        "Social Media Kit",
        "Brand Guidelines",
        "Unlimited Revisions",
      ],
      popular: true,
    },
    {
      name: "Unlimited Creative",
      price: "$800",
      period: "/mo",
      description: "All your design needs, unlimited",
      features: [
        "Unlimited Requests",
        "Flyers, Banners, Posts",
        "Thumbnails & Creatives",
        "48hr Turnaround",
        "Dedicated Designer",
        "Priority Support",
      ],
    },
  ],
};

const categories: { key: PricingCategory; label: string }[] = [
  { key: "web", label: "WordPress" },
  { key: "marketing", label: "Marketing" },
  { key: "design", label: "Design" },
];

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState<PricingCategory>("web");

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Choose Your <span className="gradient-text">Package</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible pricing plans designed to fit your business needs and budget.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-secondary/50 border border-border/50">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={cn(
                  "px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                  activeCategory === category.key
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingData[activeCategory].map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "relative glass-card p-8 transition-all duration-500",
                plan.popular
                  ? "border-primary/50 scale-105 lg:scale-110 z-10"
                  : "hover:border-primary/30"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-3">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
