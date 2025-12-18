import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "What does 'AI Proof' actually mean?",
      answer: "AI Proof means your protected media cannot be effectively used to train AI models. Our technology applies imperceptible transformations that confuse machine learning systems while keeping the content perfectly viewable for humans. This prevents style theft, deepfake creation, and unauthorized AI training on your content.",
    },
    {
      question: "Will protection affect my image or video quality?",
      answer: "No. Our protection maintains visual quality with SSIM scores ≥ 0.90 for images and ≥ 0.92 for videos. These scores indicate near-perfect visual similarity. The human eye cannot detect the protection, but AI models are completely confused by it.",
    },
    {
      question: "Does PikSign work with screenshots?",
      answer: "Yes! Our spectral watermarking technology is specifically designed to survive screenshots, screen recordings, and social media compression. The watermark remains embedded in the mid-frequency bands that persist through these transformations.",
    },
    {
      question: "What video formats and lengths are supported?",
      answer: "We support all major video formats (MP4, MOV, AVI, etc.) with our temporal defense engine. Video length limits depend on your plan tier. Our optical-flow analysis ensures frame-to-frame consistency without flicker, regardless of video length or scene complexity.",
    },
    {
      question: "Which platforms can I share protected media on?",
      answer: "Protected media can be shared on any platform - social media, websites, messaging apps, or cloud storage. The protection travels with your media wherever it goes. Our C2PA embedding ensures provenance data remains intact across platforms.",
    },
    {
      question: "Is using PikSign legal?",
      answer: "Absolutely. PikSign is a legal protection tool that helps you exercise your rights over your creative work. Our C2PA-compliant no-AI directives provide both technical and legal barriers to unauthorized use. We comply with international copyright and data protection laws.",
    },
    {
      question: "How does C2PA provenance work?",
      answer: "C2PA (Coalition for Content Provenance and Authenticity) is an open standard for embedding tamper-evident provenance data in media. PikSign uses C2PA to cryptographically seal your content's origin, creation details, and usage policies, creating an auditable chain of custody.",
    },
    {
      question: "Can I protect media I've already shared?",
      answer: "For best protection, apply PikSign before sharing. However, we can still protect previously shared media. The protection will apply from the point of processing forward, preventing future AI training and misuse.",
    },
    {
      question: "What's the difference between image and video protection?",
      answer: "Image protection uses our Adaptive Transform Engine for pixel-level cloaking. Video protection adds our Temporal Defense Engine with optical-flow analysis to ensure frame-to-frame consistency. Both include spectral watermarking and C2PA embedding, but videos require additional processing for temporal coherence.",
    },
    {
      question: "Do you offer API access?",
      answer: "Yes! Enterprise plans include full API access for batch processing and integration into your existing workflows. Contact our sales team to discuss API documentation, rate limits, and custom integration support.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about PikSign's AI-proof protection technology.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass border-border/50">
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="text-left font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </Card>
            ))}
          </Accordion>
        </div>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="glass border-border/50 hover:border-primary/50 transition-smooth">
            <CardHeader>
              <Download className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Full FAQ Document</CardTitle>
              <CardDescription>
                Download our comprehensive FAQ PDF with detailed technical information and use cases.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Download PDF
              </Button>
            </CardContent>
          </Card>

          <Card className="glass border-border/50 hover:border-primary/50 transition-smooth">
            <CardHeader>
              <MessageCircle className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Still Have Questions?</CardTitle>
              <CardDescription>
                Our team is here to help. Get in touch for personalized answers and demos.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
