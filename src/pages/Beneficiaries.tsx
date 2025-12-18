import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Palette, Star, Building2, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Beneficiaries = () => {
  const beneficiaries = [
    {
      icon: User,
      title: "Individuals",
      description: "Protect personal photos from AI misuse",
      details: "Keep your family photos, personal images, and private moments safe from unauthorized AI training and deepfake creation.",
      color: "from-primary/20 to-primary/10",
    },
    {
      icon: Palette,
      title: "Content Creators & Artists",
      description: "Stop style theft & re-creation",
      details: "Prevent AI models from learning your unique artistic style, technique, or creative signature.",
      color: "from-secondary/20 to-secondary/10",
    },
    {
      icon: Star,
      title: "Celebrities & Public Figures",
      description: "Prevent deepfakes & likeness abuse",
      details: "Protect your image from unauthorized use in deepfakes, manipulated videos, or AI-generated impersonations.",
      color: "from-primary/20 to-primary/10",
    },
    {
      icon: Building2,
      title: "Studios & Brands",
      description: "Safeguard campaigns & exclusives",
      details: "Secure your marketing materials, product photos, and exclusive content from AI replication and unauthorized use.",
      color: "from-secondary/20 to-secondary/10",
    },
    {
      icon: Shield,
      title: "Enterprises & Defense",
      description: "AI-secure watermarking for sensitive media",
      details: "Enterprise-grade protection for confidential documents, sensitive imagery, and classified visual materials.",
      color: "from-primary/20 to-primary/10",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Who <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Benefits</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            PikSign protects everyone from AI misuse, whether you're an individual, creator, or enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {beneficiaries.map((beneficiary, index) => (
            <Card key={index} className="glass border-border/50 hover:border-primary/50 transition-smooth group">
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${beneficiary.color} flex items-center justify-center mb-4 glow-cyan group-hover:scale-110 transition-smooth`}>
                  <beneficiary.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{beneficiary.title}</CardTitle>
                <CardDescription className="text-base">{beneficiary.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{beneficiary.details}</p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80" asChild>
                  <Link to="/contact">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="glass border-primary/50 glow-cyan max-w-3xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Content?</h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of creators, brands, and individuals securing their media with PikSign.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50" asChild>
                  <Link to="/contact">Request Demo</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Beneficiaries;
