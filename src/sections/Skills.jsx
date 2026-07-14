import { useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Wrench,
  Cloud,
  Plug,
  Rocket,
} from "lucide-react";
import SectionWrapper, { SectionHeader } from "../components/SectionWrapper";
import { skillCategories } from "../database/skills";

const iconMap = {
  Monitor,
  Server,
  Database,
  Wrench,
  Cloud,
  Plug,
  Rocket,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <SectionWrapper id="skills" className="bg-surface-50/50 dark:bg-surface-900/30">
      <div className="container-width mx-auto">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Technologies and capabilities across the full stack, plus founder-level product skills."
        />

        <div className="flex flex-wrap justify-center gap-2">
          {skillCategories.map((cat, index) => {
            const IconComp = iconMap[cat.icon] || Monitor;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  activeCategory === index
                    ? "bg-primary-600 text-white shadow-md shadow-primary-500/25"
                    : "border border-surface-200 bg-white text-surface-600 hover:border-primary-200 hover:text-primary-600 dark:border-surface-700 dark:bg-surface-800 dark:text-surface-400 dark:hover:border-primary-800 dark:hover:text-primary-400"
                }`}
              >
                <IconComp size={16} />
                {cat.title}
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mt-10"
        >
          <div className="card-base mx-auto max-w-3xl p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {skillCategories[activeCategory].skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-surface-700 dark:text-surface-300">
                      {skill.name}
                    </span>
                    <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-surface-100 dark:bg-surface-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
