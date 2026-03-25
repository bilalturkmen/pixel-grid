import { ThemeProvider } from "./components/context/ThemeContext";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsExperienceSection from "./components/sections/SkillsExperienceSection";
import RecommendationsSection from "./components/sections/RecommendationsSection";
import ContactSection from "./components/sections/ContactSection";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // if someone arrives with a hash in the URL, the app waits a split second for the layout to settle and then scrolls (e.g., #projects)
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <NavBar />
        <main>
          <HeroSection />
          <ProjectsSection />
          <SkillsExperienceSection />
          <RecommendationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
