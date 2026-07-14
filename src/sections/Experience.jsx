import { motion } from "framer-motion";
import { Briefcase, ExternalLink, ChevronRight } from "lucide-react";
import SectionWrapper, { SectionHeader } from "../components/SectionWrapper";
import { experiences } from "../database/experience";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="container-width mx-auto">
        <SectionHeader
          title="Experience"
          subtitle="Professional work and founder-level execution."
        />

        <div className="mx-auto max-w-3xl space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="card-base card-hover p-0"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-surface-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                            >
                              {exp.company}
                              <ExternalLink size={12} />
                            </a>
                          ) : (
                            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                              {exp.company}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 text-right sm:flex-row sm:items-center sm:gap-3">
                    <span className="text-sm font-medium text-surface-500 dark:text-surface-400">
                      {exp.duration}
                    </span>
                    <span className="hidden sm:inline text-surface-300 dark:text-surface-600">·</span>
                    <span className="text-xs text-surface-400 dark:text-surface-500">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                  {exp.summary}
                </p>

                <ul className="mt-5 space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-surface-600 dark:text-surface-400">
                      <ChevronRight size={14} className="mt-0.5 flex-shrink-0 text-primary-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
