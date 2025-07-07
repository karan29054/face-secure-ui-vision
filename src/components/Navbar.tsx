import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Shield } from "lucide-react";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ isDarkMode, toggleDarkMode }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Face Secure
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="hover:bg-secondary"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="hover:bg-secondary"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-secondary"
            >
              <div className="space-y-1">
                <div className="w-4 h-0.5 bg-foreground"></div>
                <div className="w-4 h-0.5 bg-foreground"></div>
                <div className="w-4 h-0.5 bg-foreground"></div>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-3">
              <a 
                href="#home" 
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;