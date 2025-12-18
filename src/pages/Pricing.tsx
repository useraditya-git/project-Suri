import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const tiers = [
    {
      name: "Individual",
      icon: Sparkles,
      price: "$19",
      period: "/month",
      description: "Perfect for personal use and small projects",
      features: [
        "100 images/month",
        "10 videos/month",
        "C2PA embedding",
        "Screenshot-resilient watermarks",
        "Email support",
        "Regular updates",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Creator",
      icon: Zap,
      price: "$79",
      period: "/month",
      description: "For professional creators and artists",
      features: [
        "1,000 images/month",
        "100 videos/month",
        "Everything in Individual",
        "Priority processing",
        "Batch processing",
        "Priority support",
        "Custom watermarks",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      icon: Building2,
      price: "Custom",
      period: "",
      description: "For studios, brands, and organizations",
      features: [
        "Unlimited processing",
        "Everything in Creator",
        "API access",
        "SSO integration",
        "Dedicated support",
        "SLA guarantee",
        "Custom integration",
        "Volume discounts",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const commonFeatures = [
    "Image & video protection",
    "Adaptive transform technology",
    "Temporal defense (videos)",
    "Spectral watermarking",
    "C2PA provenance embedding",
    "No-AI policy directives",
    "SSIM ≥ 0.90 (images)",
    "tSSIM ≥ 0.92 (videos)",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Simple, <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your needs. All plans include our core protection technology.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`glass relative ${
                tier.popular
                  ? "border-primary glow-cyan scale-105 md:scale-110"
                  : "border-border/50"
              } transition-smooth`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <tier.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  size="lg"
                  className={`w-full mb-6 ${
                    tier.popular
                      ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      : ""
                  }`}
                  variant={tier.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to="/contact">{tier.cta}</Link>
                </Button>
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Common Features */}
        <Card className="glass border-border/50 max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">All Plans Include</CardTitle>
            <CardDescription>Core protection features available in every tier</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {commonFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ Snippet */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Pricing?</h2>
          <p className="text-muted-foreground mb-8">
            Check our FAQ or contact our sales team for custom enterprise solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/faq">View FAQ</Link>
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
