import { Briefcase, BugIcon, Code, User } from "lucide-react";

import { SiReact, SiTailwindcss } from "react-icons/si";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Full-stack Web Developer
            </h3>

            <p className="text-muted-foreground">
              Fresh Graduate. No Experience
            </p>

            <p className="text-muted-foreground">
              Lorem ipsum <strong>I enjoy</strong> dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor <strong>anime</strong>{" "}
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. <strong>I also frequently watch</strong>{" "}
              . Duis aute irure dolor in reprehenderit in voluptate velit{" "}
              <strong>movies</strong> esse cillum dolore eu fugiat nulla
              pariatur. <strong>And what I especially love are</strong> .
              Excepteur sint occaecat cupidatat non{" "}
              <strong>plots full of</strong> proident, sunt in culpa qui officia
              deserunt mollit anim id est <strong>mystery</strong> laborum.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <SiReact className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Front-end Development
                  </h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <SiTailwindcss className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences using frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BugIcon className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Vibe Coding</h4>
                  <p className="text-muted-foreground">
                    Using AI to learn and to leverage debugging..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
