import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { MatrixBackground } from "@/components/MatrixBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { SoundController } from "@/components/SoundController";
import { LoadingScreen } from "@/components/LoadingScreen";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
// TestimonialsSection removed as requested
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-transparent relative cursor-none">
      <CustomCursor />

      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <SoundController />
          <MatrixBackground />
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />

          <ContactSection />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
};

export default Index;
