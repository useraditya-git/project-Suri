import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileCheck, Video, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import beforeAfter from "@/assets/before-after.jpg";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Adaptive Transform",
      description: "Pixel-level cloaking that keeps your images human-perfect but AI-useless",
    },
    {
      icon: Video,
      title: "Temporal Defense",
      description: "Optical-flow protection for videos that's flicker-free and screenshot-resilient",
    },
    {
      icon: FileCheck,
      title: "Spectral Watermark",
      description: "Invisible mid-band watermarks that survive screenshots and compression",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img src={heroBanner} alt="AI Protection" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Patent-Pending Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Protect Your Media from{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Misuse
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              PikSign makes your images & videos human-perfect but AI-useless. Stop deepfakes, prevent style theft, and secure your creative work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-cyan" asChild>
                <Link to="/contact">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Protect My Image
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
                <Link to="/contact">
                  <Video className="w-4 h-4 mr-2" />
                  Protect My Video
                </Link>
              </Button>
            </div>
            
            <Button variant="ghost" className="mt-6" asChild>
              <Link to="/how-it-works">Learn How It Works →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass border-border/50 hover:border-primary/50 transition-smooth">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 glow-cyan">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-semibold">Patent-Pending Protection</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Trusted by Content Creators Worldwide</span>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              See Protection in Action
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Visual quality stays perfect. AI models get completely confused.
            </p>
            
            <Card className="glass border-border/50 overflow-hidden">
              <img src={beforeAfter} alt="Before and After Protection" className="w-full" />
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">≥0.90</div>
                    <div className="text-sm text-muted-foreground">SSIM Score</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary mb-1">≥0.92</div>
                    <div className="text-sm text-muted-foreground">tSSIM Score</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="glass border-primary/50 glow-cyan">
            <CardContent className="p-12 text-center">
              <Eye className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">AI Can't Learn You Anymore</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join creators, celebrities, and enterprises protecting their content with PikSign's patent-pending technology.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90" asChild>
                <Link to="/pricing">Get Started Today</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
