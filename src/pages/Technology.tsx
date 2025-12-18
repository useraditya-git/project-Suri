import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Waves, Lock, FileCheck, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Technology = () => {
  const technologies = [
    {
      icon: Shield,
      title: "Adaptive Transform Engine",
      description: "Pixel-level cloaking that preserves visual quality",
      details: "Our adaptive transform engine applies imperceptible perturbations at the pixel level, creating an adversarial cloak that confuses AI models while maintaining perfect visual fidelity for human viewers.",
      metrics: ["SSIM ≥ 0.90", "Imperceptible to humans", "AI-blocking efficacy > 95%"],
    },
    {
      icon: Waves,
      title: "Temporal Defense Engine",
      description: "Optical-flow protection for videos",
      details: "Advanced optical-flow analysis ensures frame-to-frame consistency, eliminating flicker while maintaining robust protection. Our temporal defense adapts to scene changes and motion patterns.",
      metrics: ["tSSIM ≥ 0.92", "Flicker-free playback", "Scene-adaptive protection"],
    },
    {
      icon: FileCheck,
      title: "Spectral Watermark",
      description: "Screenshot-resilient mid-band watermarking",
      details: "Invisible watermarks embedded in the mid-frequency spectral bands survive screenshots, compression, and transformations. Our watermarks are undetectable to the human eye but verifiable through our system.",
      metrics: ["Screenshot resilient", "Compression stable", "Forensically verifiable"],
    },
    {
      icon: Lock,
      title: "Provenance & Policy",
      description: "C2PA standards with no-AI directives",
      details: "Full C2PA compliance ensures your content's provenance is cryptographically sealed. We embed no-AI usage policies directly in the metadata, creating legal and technical barriers to AI training.",
      metrics: ["C2PA certified", "Cryptographic sealing", "Policy enforcement"],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Technology</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Patent-pending protection powered by advanced computer vision, spectral analysis, and adversarial AI techniques.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="glass border-border/50 hover:border-primary/50 transition-smooth">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 glow-cyan">
                    <tech.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{tech.title}</CardTitle>
                    <CardDescription className="text-base">{tech.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{tech.details}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dual-Metric Control */}
        <Card className="glass border-border/50 mt-8 max-w-5xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Dual-Metric Quality Control</CardTitle>
            <CardDescription>
              Advanced quality assurance using SSIM/tSSIM and embedding drift analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Visual Similarity</h3>
                <p className="text-muted-foreground text-sm">
                  SSIM (Structural Similarity Index) ensures protected images remain visually identical to originals, with scores ≥ 0.90 for images and ≥ 0.92 for videos.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">AI Embedding Drift</h3>
                <p className="text-muted-foreground text-sm">
                  CLIP embedding drift measurement ensures maximum confusion for AI models while maintaining semantic meaning for human viewers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Whitepaper */}
        <div className="mt-16 text-center">
          <Card className="glass border-primary/50 glow-cyan max-w-3xl mx-auto">
            <CardContent className="p-12">
              <Download className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Technical Whitepaper</h2>
              <p className="text-muted-foreground mb-8">
                Deep dive into our patent-pending technology, including technical specifications, performance benchmarks, and security analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Download Whitepaper
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50" asChild>
                  <Link to="/contact">Contact Research Team</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Technology;
