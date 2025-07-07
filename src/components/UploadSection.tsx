import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, Image, CheckCircle, XCircle, FileImage } from "lucide-react";

const UploadSection = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [detectionResult, setDetectionResult] = useState<'mask' | 'no-mask' | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setDetectionResult(null);
        
        // Simulate AI analysis
        setIsAnalyzing(true);
        setTimeout(() => {
          setDetectionResult(Math.random() > 0.5 ? 'mask' : 'no-mask');
          setIsAnalyzing(false);
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    const input = document.getElementById('image-upload') as HTMLInputElement;
    input?.click();
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Image Upload Detection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Upload an image to analyze mask compliance. Supports JPG, PNG, and WebP formats.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Area */}
            <Card className="bg-gradient-card shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-primary" />
                  Upload Image
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  onClick={triggerFileInput}
                  className="border-2 border-dashed border-border hover:border-primary/50 rounded-lg p-8 text-center cursor-pointer transition-colors duration-200 bg-background/50 hover:bg-primary/5"
                >
                  <FileImage className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground mb-2">
                    Click to upload an image
                  </p>
                  <p className="text-sm text-muted-foreground">
                    JPG, PNG, WebP up to 10MB
                  </p>
                </div>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                
                <div className="mt-6">
                  <Button 
                    onClick={triggerFileInput}
                    className="w-full bg-gradient-primary hover:shadow-hover transition-all duration-300"
                    size="lg"
                  >
                    <Upload className="h-5 w-5 mr-2" />
                    Choose Image File
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Preview and Results */}
            <Card className="bg-gradient-card shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="h-5 w-5 text-primary" />
                  Analysis Result
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!uploadedImage ? (
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Image className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p>Upload an image to see analysis</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Image Preview */}
                    <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={uploadedImage} 
                        alt="Uploaded" 
                        className="w-full h-full object-cover"
                      />
                      {/* Analysis overlay */}
                      {isAnalyzing && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                            <p className="text-sm">Analyzing...</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Detection Result */}
                    {detectionResult && !isAnalyzing && (
                      <div className="text-center">
                        <Badge 
                          variant={detectionResult === 'mask' ? 'default' : 'destructive'}
                          className={`text-base py-2 px-4 ${
                            detectionResult === 'mask' 
                              ? 'bg-success hover:bg-success/90 text-success-foreground' 
                              : 'bg-warning hover:bg-warning/90 text-warning-foreground'
                          }`}
                        >
                          {detectionResult === 'mask' ? (
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
                        
                        <div className="mt-4 text-sm text-muted-foreground">
                          <p>
                            Analysis complete in {Math.floor(Math.random() * 500 + 200)}ms
                          </p>
                          <p className="mt-1">
                            Confidence: {Math.floor(Math.random() * 20 + 80)}%
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;