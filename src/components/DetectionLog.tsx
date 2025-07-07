import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle, XCircle, Clock, Trash2, Download } from "lucide-react";

// Mock data for detection log
const mockDetections = [
  {
    id: 1,
    timestamp: new Date(Date.now() - 2 * 60 * 1000).toLocaleString(),
    result: 'mask' as const,
    confidence: 94,
    source: 'Camera Feed'
  },
  {
    id: 2,
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toLocaleString(),
    result: 'no-mask' as const,
    confidence: 88,
    source: 'Image Upload'
  },
  {
    id: 3,
    timestamp: new Date(Date.now() - 8 * 60 * 1000).toLocaleString(),
    result: 'mask' as const,
    confidence: 96,
    source: 'Camera Feed'
  },
  {
    id: 4,
    timestamp: new Date(Date.now() - 15 * 60 * 1000).toLocaleString(),
    result: 'mask' as const,
    confidence: 91,
    source: 'Image Upload'
  },
  {
    id: 5,
    timestamp: new Date(Date.now() - 23 * 60 * 1000).toLocaleString(),
    result: 'no-mask' as const,
    confidence: 87,
    source: 'Camera Feed'
  },
  {
    id: 6,
    timestamp: new Date(Date.now() - 31 * 60 * 1000).toLocaleString(),
    result: 'mask' as const,
    confidence: 95,
    source: 'Camera Feed'
  }
];

const DetectionLog = () => {
  const maskCount = mockDetections.filter(d => d.result === 'mask').length;
  const noMaskCount = mockDetections.filter(d => d.result === 'no-mask').length;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Detection History
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track all detection events with detailed logs and analytics.
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-card shadow-card border-border/50">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-success mb-2">{maskCount}</div>
                <div className="text-sm text-muted-foreground">Mask Detections</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card shadow-card border-border/50">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-warning mb-2">{noMaskCount}</div>
                <div className="text-sm text-muted-foreground">No Mask Detections</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card shadow-card border-border/50">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {Math.round((maskCount / mockDetections.length) * 100)}%
                </div>
                <div className="text-sm text-muted-foreground">Compliance Rate</div>
              </CardContent>
            </Card>
          </div>

          {/* Detection Log Card */}
          <Card className="bg-gradient-card shadow-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Recent Detections
              </CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {mockDetections.map((detection) => (
                    <div 
                      key={detection.id}
                      className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50 hover:bg-background/80 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-4">
                        {/* Status Icon */}
                        <div className={`p-2 rounded-full ${
                          detection.result === 'mask' 
                            ? 'bg-success/10' 
                            : 'bg-warning/10'
                        }`}>
                          {detection.result === 'mask' ? (
                            <CheckCircle className="h-5 w-5 text-success" />
                          ) : (
                            <XCircle className="h-5 w-5 text-warning" />
                          )}
                        </div>

                        {/* Detection Info */}
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge 
                              variant={detection.result === 'mask' ? 'default' : 'destructive'}
                              className={`${
                                detection.result === 'mask' 
                                  ? 'bg-success hover:bg-success/90 text-success-foreground' 
                                  : 'bg-warning hover:bg-warning/90 text-warning-foreground'
                              }`}
                            >
                              {detection.result === 'mask' ? 'Mask Detected' : 'No Mask'}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              via {detection.source}
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {detection.timestamp}
                          </div>
                        </div>
                      </div>

                      {/* Confidence */}
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">
                          {detection.confidence}%
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Confidence
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DetectionLog;