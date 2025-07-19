import StarBackground from "@/components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectSection from "../components/ProjectSection";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}
        <NavBar />
        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
        </main>
        {/* Footer */}
      </div>
    </>
  );
};

export default Home;
