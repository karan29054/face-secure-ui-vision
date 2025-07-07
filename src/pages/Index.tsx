import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CameraSection from "@/components/CameraSection";
import UploadSection from "@/components/UploadSection";
import DetectionLog from "@/components/DetectionLog";
import Footer from "@/components/Footer";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
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
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="camera">
          <CameraSection />
        </section>
        
        <section id="upload">
          <UploadSection />
        </section>
        
        <section id="history">
          <DetectionLog />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
