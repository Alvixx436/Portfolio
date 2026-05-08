import { Project } from "../type/image";

type Props = {
  project: Project;
};

export default function ProjectDetails({ project }: Props) {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 transition-colors duration-300">
      {/* HEADER */}
      <div className="flex items-center gap-4 animate-fade-in py-6">
        <a
          className="
            inline-flex items-center gap-2 text-sm
            text-muted-foreground hover:text-foreground
            transition-colors
          "
          href="/projects"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Projects
        </a>

        <h1 className="text-2xl font-bold">Details</h1>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGE */}
          <div
            className="
              rounded-2xl overflow-hidden shadow-lg
              border border-border
              bg-muted
            "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div>
            <span
              className="
                text-sm px-3 py-1 rounded-full
                bg-primary/10 text-primary
              "
            >
              Featured Project
            </span>

            <h1 className="text-4xl font-bold mt-4 mb-4">{project.title}</h1>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.Overview}
            </p>

            {/* TECH STACK */}
            <div>
              <h3 className="text-sm text-muted-foreground mb-2 tracking-wide">
                TECH STACK
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="
                      px-3 py-1 text-sm
                      bg-muted
                      border border-border
                      rounded-full
                      flex items-center gap-1
                      transition-colors
                    "
                  >
                    <tech.logo className={tech.color} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div
          className="
            mt-16 p-8 rounded-2xl
            bg-muted
            border border-border
          "
        >
          <h2 className="text-2xl font-semibold mb-4">About the Project</h2>

          <p className="text-muted-foreground leading-relaxed">
            {project.About}
          </p>
        </div>
      </div>
    </div>
  );
}
