import React from "react";
import { motion } from "framer-motion";
import car from "../../assets/rentcar.png.png";


// Temporary custom data array (you can later move this to a separate data file)
const projectsData = [
  {
    id: 1,
    title: "Online Rent Car Platform",
    description:
      "A modern car rental platform dedicated to reliable vehicles and comfortable travel experiences",
    image: car,
    liveLink: `https://online-rentcar-platform.netlify.app/`,
    skillTeach: ["React", "Firebase", "Tailwind", "Express", "Mongodb"],
  },
  {
    id: 2,
    title: "Public-Infrastructure ",
    description: "A modern platform to showcase public infrastructure projects. It provides detailed information, images, and locations. Designed to make infrastructure data easily accessible to everyone.",
    image:'',
    skillTeach: ["React", "Firebase", "Tailwind", "Express", "Mongodb", "DaisyUI"],
    liveLink: `https://public-infrastructure-system.netlify.app/`,
  },

  {
    id: 3,
    title: "Online Shoping Platform",
    description:"A modern e-commerce platform offering high-quality products with a smooth and convenient shopping experience.",
    image: '',
    liveLink: `https://my-app-seven-swart-35.vercel.app/`,
    skillTeach: ["Next.js", "NextAuth", "Tailwind" ],
  },
];

const ProjectSection = ({ project, isReversed }) => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-0">
        {/* 1. Visual container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className={`
            relative z-0 overflow-hidden rounded-2xl border border-[color:var(--app-border)]
            shadow-[0_30px_80px_rgba(0,0,0,0.35)]
            aspect-[16/10] md:aspect-[16/9]
            ${isReversed ? "md:col-span-7 md:col-start-6" : "md:col-span-7 md:col-start-1"}
          `}
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative h-full w-full p-6 flex items-end">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm text-[color:var(--app-muted)] hover:text-[color:var(--app-fg)]"
            >
              Preview
            </a>
          </div>
        </motion.div>

        {/* 2. Text card */}
        <motion.div
          initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className={`
            relative z-10 rounded-2xl p-7 sm:p-9 md:p-10
            bg-[color:var(--app-card-bg)]/65 backdrop-blur-2xl border border-[color:var(--app-border)]
            shadow-[0_26px_75px_rgba(0,0,0,0.55)]
            hover:shadow-[var(--app-card-hover-shadow)] hover:border-[color:var(--app-accent)]
            transition-shadow transition-border duration-300 ease-out
            ${
              isReversed
                ? "md:col-span-6 md:col-start-1 md:row-start-1 md:mr-[-56px]"
                : "md:col-span-6 md:col-start-7 md:row-start-1 md:ml-[-56px]"
            }
          `}
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_0%_0%,_var(--app-glow)_0%,_transparent_55%),radial-gradient(circle_at_100%_100%,_var(--app-glow-strong)_0%,_transparent_60%)] opacity-60" />
          <div className="relative z-10">
            <p className="text-[color:var(--app-accent)] font-medium tracking-[0.2em] text-xs uppercase mb-3">
              Featured Project
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[color:var(--app-fg)] tracking-tight">
              {project.title}
            </h3>

            <p className="mt-4 text-[color:var(--app-muted)] leading-relaxed text-base sm:text-[15px]">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {project.skillTeach?.map((skill, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full border border-[color:var(--app-border)] text-[color:var(--app-muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* <div className="flex gap-4 mt-7">
              <button
                type="button"
                className="btn btn-ghost btn-sm text-[color:var(--app-muted)] hover:text-[color:var(--app-fg)]"
              >
                ✨
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-sm text-[color:var(--app-muted)] hover:text-[color:var(--app-fg)]"
              >
                🖱️
              </button>
            </div> */}
          </div>
        </motion.div>
      </div>

      {/* Background radial glow */}
      <div
        className={`absolute -z-10 w-80 h-80 sm:w-96 sm:h-96 bg-[color:var(--app-glow)] blur-[150px] rounded-full ${
          isReversed ? "-right-10" : "-left-10"
        } -top-10`}
      />
    </div>
  );
};

const ProjectsOverview = () => {
  return (
    <section id="projects" className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="mb-10 sm:mb-14">
          <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--app-muted)]">
            Selected Work
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[color:var(--app-fg)]">
            Projects
          </h2>
        </div>

        <div className="space-y-14 sm:space-y-20 md:space-y-24">
          {projectsData.map((project, index) => (
            <ProjectSection
              key={project.id}
              project={project}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsOverview;
