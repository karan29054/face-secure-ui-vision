import { Shield, Github, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Face Secure
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Leading AI-powered mask detection technology for enhanced safety and security. 
              Protect your community with intelligent monitoring solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Face Secure. All rights reserved.
          </p>
          <div className="flex items-center text-muted-foreground text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
            <span>for a safer world</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;