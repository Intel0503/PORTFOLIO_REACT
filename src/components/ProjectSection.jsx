import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "DisciplineEase: A WEB-BASED DISCIPLINE MANAGEMENT SYSTEM",
    description: "A final project created in my 4th-year college. ",
    image: "/projects/dms2.png",
    tags: [
      "HTML",
      "Bootstrap5",
      "CSS",
      "Javascript",
      "PhP",
      "MySQL",
      "PhpMyAdmin",
      "Composer",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Lego Dashboard Sales",
    description: "Data Visualization of Lego Sales.",
    image: "/projects/lego.png",
    tags: ["Power Bi", "Color Hunt", "Power Query"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Finance Sales",
    description:
      "This Dashboard is my first project while learning data visualization and relational database.",
    image: "/projects/Sales.png",
    tags: ["Power Bi", "Color Hunt", "Power Query", "Star Schema"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 4,
    title: "Chocolates Sales Dashboard",
    description:
      "A Dashboard with story telling which chocolates is populare and what country are most of it sold. ",
    image: "/projects/Choco.png",
    tags: ["Power Bi", "DAX", "Color Hunt", "Power Query", "Star Schema"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 5,
    title: "Student Dashboard for Enrolee.",
    description:
      "Dashboard that represent,how many students enrolled during that day. This project is web app and created during my college so it's ugly.",
    image: "/projects/students.jpg",
    tags: ["Php", "CSS", "JS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Cocktails Page.",
    description: "Landing Page about Cocktails and it's best seller.",
    image: "/projects/cocktails.png",
    tags: ["React", "CSS", "JS", "Tailwind", "GSAP"],
    demoUrl: "https://cocktailsgsap-ivory.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Movie List",
    description: "Tier list of movies from TMDB.",
    image: "/projects/Movie.png",
    tags: ["React", "CSS", "Tailwind", "API"],
    demoUrl: "https://movie-bice-chi-77.vercel.app/",
    githubUrl: "#",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Each project created during my college
          days. So expect some error or something you didn't like. I didn't
          remove those errors for some reason i want to maintain it as is to
          reflect and learn.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 items-center justify-evenly">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Intel0503"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
