import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Image, Video, Shield, Waves, FileCheck } from "lucide-react";

const HowItWorks = () => {
  const imagePipeline = [
    { step: "Decode", description: "Input image analyzed", icon: Image },
    { step: "Adaptive Transform", description: "Pixel-level cloaking applied", icon: Shield },
    { step: "Adversarial Cloak", description: "AI confusion layer added", icon: Waves },
    { step: "Spectral Watermark", description: "Invisible mid-band mark embedded", icon: FileCheck },
    { step: "C2PA Embed", description: "Provenance data added", icon: Shield },
    { step: "Export", description: "Protected image ready", icon: Image },
  ];

  const videoPipeline = [
    { step: "Scene Detect", description: "Video analyzed for scenes", icon: Video },
    { step: "Optical-Flow Temporal", description: "Frame-to-frame protection", icon: Shield },
    { step: "Phase-Locked Watermark", description: "Temporal watermark applied", icon: Waves },
    { step: "Ladder Check", description: "Quality verification", icon: FileCheck },
    { step: "C2PA Embed", description: "Provenance sealed", icon: Shield },
    { step: "Export", description: "Protected video ready", icon: Video },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">
            How <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">PikSign</span> Works
          </h1>
          <p className="text-xl text-muted-foreground">
            Advanced protection pipelines that keep your media safe from AI misuse while maintaining perfect visual quality.
          </p>
        </div>

        <Tabs defaultValue="images" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="images" className="text-lg">
              <Image className="w-5 h-5 mr-2" />
              Images
            </TabsTrigger>
            <TabsTrigger value="videos" className="text-lg">
              <Video className="w-5 h-5 mr-2" />
              Videos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="images">
            <Card className="glass border-border/50 mb-8">
              <CardHeader>
                <CardTitle>Image Protection Pipeline</CardTitle>
                <CardDescription>
                  Six-stage process that makes images AI-proof while maintaining visual perfection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {imagePipeline.map((stage, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                        <stage.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline">{index + 1}</Badge>
                          <h3 className="font-semibold">{stage.step}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{stage.description}</p>
                      </div>
                      {index < imagePipeline.length - 1 && (
                        <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border/50">
                  <h3 className="font-semibold mb-4">Quality Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-card/50">
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold text-primary mb-1">≥ 0.90</div>
                        <div className="text-sm text-muted-foreground">SSIM Score Target</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-card/50">
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold text-secondary mb-1">Minimal</div>
                        <div className="text-sm text-muted-foreground">CLIP Drift</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="videos">
            <Card className="glass border-border/50 mb-8">
              <CardHeader>
                <CardTitle>Video Protection Pipeline</CardTitle>
                <CardDescription>
                  Advanced temporal defense with optical-flow analysis for flicker-free protection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {videoPipeline.map((stage, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                        <stage.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline">{index + 1}</Badge>
                          <h3 className="font-semibold">{stage.step}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{stage.description}</p>
                      </div>
                      {index < videoPipeline.length - 1 && (
                        <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border/50">
                  <h3 className="font-semibold mb-4">Video Quality Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-card/50">
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold text-primary mb-1">≥ 0.92</div>
                        <div className="text-sm text-muted-foreground">tSSIM Score Target</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-card/50">
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold text-secondary mb-1">Flicker-Free</div>
                        <div className="text-sm text-muted-foreground">Temporal Consistency</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HowItWorks;
