import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  SiApifox,
  SiBootstrap,
  SiCodeblocks,
  SiGit,
  SiGoogleanalytics,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiPhpmyadmin,
  SiReact,
  SiTailwindcss,
  SiVirustotal,
} from "react-icons/si";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 50, category: "frontend", icon: <SiHtml5 /> },
  {
    name: "JavaScript",
    level: 50,
    category: "frontend",
    icon: <SiJavascript />,
  },
  { name: "React", level: 50, category: "frontend", icon: <SiReact /> },
  { name: "BootStrap", level: 50, category: "frontend", icon: <SiBootstrap /> },
  {
    name: "Tailwind CSS",
    level: 50,
    category: "frontend",
    icon: <SiTailwindcss />,
  },

  // Backend
  { name: "PHP", level: 50, category: "backend", icon: <SiPhp /> },
  { name: "MySQL", level: 50, category: "backend", icon: <SiMysql /> },
  { name: "REST-API", level: 50, category: "backend", icon: <SiApifox /> },

  // Tools
  { name: "Git/GitHub", level: 50, category: "others", icon: <SiGit /> },
  {
    name: "Microsoft Power Bi",
    level: 50,
    category: "others",
    icon: <SiGoogleanalytics />,
  },
  {
    name: "Google Colab",
    level: 50,
    category: "others",
    icon: <SiGoogleanalytics />,
  },
  { name: "VS Code", level: 50, category: "others", icon: <SiVirustotal /> },
  { name: "WindSurf", level: 50, category: "others", icon: <SiCodeblocks /> },
  { name: "ChatGPT", level: 50, category: "others", icon: <SiCodeblocks /> },
  { name: "XAMPP", level: 50, category: "others", icon: <SiPhpmyadmin /> },
];

const categories = ["all", "frontend", "backend", "others"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center mb-4 space-x-2">
                <span className="text-2xl w-6 h-6">{skill.icon}</span>
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
