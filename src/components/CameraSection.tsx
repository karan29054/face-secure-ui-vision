import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Play, Square, CheckCircle, XCircle } from "lucide-react";

const CameraSection = () => {
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectionStatus, setDetectionStatus] = useState<'mask' | 'no-mask' | null>(null);

  const toggleDetection = () => {
    setIsDetecting(!isDetecting);
    if (!isDetecting) {
      // Simulate detection result after 2 seconds
      setTimeout(() => {
        setDetectionStatus(Math.random() > 0.5 ? 'mask' : 'no-mask');
      }, 2000);
    } else {
      setDetectionStatus(null);
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Live Camera Detection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Use your camera for real-time mask detection. Our AI analyzes the video feed instantly.
            </p>
          </div>

          {/* Camera Card */}
          <Card className="bg-gradient-card shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Camera className="h-6 w-6 text-primary" />
                Camera Feed
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Camera Feed Area */}
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden border-2 border-dashed border-border">
                {/* Mock camera feed */}
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  {isDetecting ? (
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-muted-foreground">Analyzing video feed...</p>
                    </div>
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <Camera className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p>Camera feed will appear here</p>
                      <p className="text-sm mt-2">Click "Start Detection" to begin</p>
                    </div>
                  )}
                </div>

                {/* Detection Overlay Box */}
                {isDetecting && detectionStatus && (
                  <div className="absolute inset-4">
                    <div 
                      className={`border-2 border-dashed rounded-lg h-32 w-32 mx-auto mt-8 ${
                        detectionStatus === 'mask' 
                          ? 'border-success bg-success/10' 
                          : 'border-warning bg-warning/10'
                      }`}
                    >
                      <div className="flex items-center justify-center h-full">
                        <span className="text-xs font-medium">
                          {detectionStatus === 'mask' ? 'Face + Mask' : 'Face Only'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="flex justify-center">
                <Button 
                  onClick={toggleDetection}
                  size="lg"
                  className={`h-12 px-8 ${
                    isDetecting 
                      ? 'bg-warning hover:bg-warning/90' 
                      : 'bg-gradient-primary hover:shadow-hover'
                  } transition-all duration-300`}
                >
                  {isDetecting ? (
                    <>
                      <Square className="h-5 w-5 mr-2" />
                      Stop Detection
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5 mr-2" />
                      Start Detection
                    </>
                  )}
                </Button>
              </div>

              {/* Status Indicator */}
              <div className="flex justify-center">
                {detectionStatus && (
                  <Badge 
                    variant={detectionStatus === 'mask' ? 'default' : 'destructive'}
                    className={`text-base py-2 px-4 ${
                      detectionStatus === 'mask' 
                        ? 'bg-success hover:bg-success/90 text-success-foreground' 
                        : 'bg-warning hover:bg-warning/90 text-warning-foreground'
                    }`}
                  >
                    {detectionStatus === 'mask' ? (
                      <>
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Mask Detected
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5 mr-2" />
                        No Mask Detected
                      </>
                    )}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CameraSection;