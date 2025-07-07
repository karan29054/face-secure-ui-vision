import { Button } from "@/components/ui/button";
import { Play, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/20 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Zap className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">AI-Powered Technology</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI-powered
            </span>
            <br />
            <span className="text-foreground">Mask Detection</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Ensure safety by verifying mask usage in real-time with our advanced 
            computer vision technology. Protect your community with intelligent monitoring.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-hover transition-all duration-300 text-lg px-8 py-6 h-auto"
            >
              <Play className="h-5 w-5 mr-2" />
              Start Detection
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/5 text-lg px-8 py-6 h-auto"
            >
              <Shield className="h-5 w-5 mr-2" />
              Learn More
            </Button>
          </div>

          {/* Features highlight */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Real-time Detection</h3>
              <p className="text-sm text-muted-foreground">Instant mask recognition</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">High Accuracy</h3>
              <p className="text-sm text-muted-foreground">99%+ detection rate</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Play className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Easy Integration</h3>
              <p className="text-sm text-muted-foreground">Plug and play solution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;