import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import SectionWrapper, { SectionHeader } from "../components/SectionWrapper";
import { education } from "../database/education";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="container-width mx-auto">
        <SectionHeader
          title="Education"
          subtitle="Academic background and continuous learning."
        />

        <div className="mx-auto max-w-3xl space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="card-base card-hover p-6 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-surface-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {edu.field}
                    </p>
                    <p className="mt-1 text-sm text-surface-600 dark:text-surface-400">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 sm:items-end">
                  <div className="flex items-center gap-1.5 text-sm text-surface-500 dark:text-surface-400">
                    <Calendar size={14} />
                    {edu.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-surface-400 dark:text-surface-500">
                    <MapPin size={12} />
                    {edu.location}
                  </div>
                </div>
              </div>

              {edu.summary && (
                <p className="mt-4 text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                  {edu.summary}
                </p>
              )}

              {edu.highlights && edu.highlights.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {edu.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-surface-500 dark:text-surface-400"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
