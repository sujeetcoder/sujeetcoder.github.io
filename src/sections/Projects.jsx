import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, ArrowUpRight } from "lucide-react";
import BrandIcon from "../components/BrandIcon";
import SectionWrapper, { SectionHeader } from "../components/SectionWrapper";
import { projects } from "../database/projects";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <SectionWrapper id="projects">
      <div className="container-width mx-auto">
        <SectionHeader
          title="Projects"
          subtitle="Products and systems I've built from concept to deployment."
        />

        <div className="mx-auto max-w-4xl">
          {featuredProjects.length > 0 && (
            <div className="mb-10 space-y-6">
              <div className="flex items-center gap-2">
                <Star size={16} className="text-amber-500" />
                <span className="text-sm font-semibold text-surface-500 dark:text-surface-400">
                  Featured
                </span>
              </div>

              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="card-base card-hover group relative overflow-hidden p-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-primary-500/10" />
                  {project.image && (
                    <div className="relative aspect-video w-full overflow-hidden border-b border-surface-200 dark:border-surface-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="relative p-6 sm:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="rounded-lg bg-primary-100 px-2.5 py-1 text-xs font-bold text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
                            {project.type}
                          </span>
                          {project.status && (
                            <span className="flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400">
                              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                              {project.status}
                            </span>
                          )}
                        </div>

                        <h3 className="mt-3 text-xl font-bold text-surface-900 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">
                          {project.tagline}
                        </p>

                        <p className="mt-3 text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-xs"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-xs"
                        >
                          <BrandIcon icon="github" size={14} className="text-current" />
                          Source Code
                        </a>
                      )}
                      {project.caseStudyLink && (
                        <a
                          href={project.caseStudyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-xs"
                        >
                          <ArrowUpRight size={14} />
                          Case Study
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {otherProjects.length > 0 && (
            <div>
              <div className="mb-6 flex flex-wrap gap-2">
                {["all", ...new Set(projects.map((p) => p.type))].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilter(type)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium capitalize transition-all ${
                      filter === type
                        ? "bg-primary-600 text-white"
                        : "border border-surface-200 text-surface-500 hover:border-primary-200 hover:text-primary-600 dark:border-surface-700 dark:text-surface-400 dark:hover:border-primary-800"
                    }`}
                  >
                    {type === "all" ? "All Projects" : type}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={filter}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="grid gap-4 sm:grid-cols-2"
                >
                   {filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      className="card-base card-hover group"
                    >
                      {project.image && (
                        <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-xl border border-surface-200 dark:border-surface-800">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                          {project.type}
                        </span>
                        {project.status && (
                          <span className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                            {project.status}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 text-base font-bold text-surface-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs text-primary-600 dark:text-primary-400">
                        {project.tagline}
                      </p>

                      <p className="mt-2 text-sm leading-relaxed text-surface-500 dark:text-surface-400 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 5).map((tech) => (
                          <span key={tech} className="rounded bg-surface-100 px-2 py-0.5 text-[10px] font-medium text-surface-600 dark:bg-surface-800 dark:text-surface-400">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 5 && (
                          <span className="rounded bg-surface-100 px-2 py-0.5 text-[10px] font-medium text-surface-400 dark:bg-surface-800">
                            +{project.techStack.length - 5}
                          </span>
                        )}
                      </div>

                      <div className="mt-4 flex gap-2">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                          >
                            <ExternalLink size={12} />
                            Live
                          </a>
                        )}
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-medium text-surface-500 hover:text-surface-700 dark:text-surface-400 dark:hover:text-surface-300"
                          >
                            <BrandIcon icon="github" size={12} className="text-current" />
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
