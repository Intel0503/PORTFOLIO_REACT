import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Z3R0{" "}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              B0urb0n
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            This portfolio created using React + Tailwind-CSS. I'm aspiring
            Full-Stack Developer. But i'll approach it one at a time. My goal
            right now is to practiced every single day for my Front-end skills
            through cloning YT Projects,in a way i will learn not in easy
            output. This summary will be updated based in my progress.
          </p>
          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a href="#projects" className="cosmic-button">
              View My Works
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2 "> Scroll</span>
        <ArrowDown className="h-5 w-3 text-primary " />
      </div>
    </section>
  );
};

export default HeroSection;
