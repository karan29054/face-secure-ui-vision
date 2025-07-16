import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Shield, Target, Users, Zap } from "lucide-react";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              About Face Secure
            </h1>
            <p className="text-xl text-muted-foreground">
              Leading the future of AI-powered safety solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg border border-border">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide cutting-edge AI technology that ensures safety and compliance through intelligent mask detection systems, making public spaces safer for everyone.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the global leader in AI-powered safety solutions, creating a world where technology seamlessly protects and empowers communities.
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Face Secure?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Real-time Detection</h4>
                <p className="text-sm text-muted-foreground">
                  Instant mask detection with high accuracy using advanced AI algorithms
                </p>
              </div>
              
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">User-Friendly</h4>
                <p className="text-sm text-muted-foreground">
                  Simple interface designed for easy integration and use across various environments
                </p>
              </div>
              
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Privacy Focused</h4>
                <p className="text-sm text-muted-foreground">
                  Built with privacy in mind, ensuring user data protection and compliance
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of organizations already using Face Secure to enhance their safety protocols.
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Start Detection
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;