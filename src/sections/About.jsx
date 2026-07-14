import { motion } from "framer-motion";
import { Code2, Rocket, Building2, Target } from "lucide-react";
import SectionWrapper, { SectionHeader } from "../components/SectionWrapper";
import { personalInfo } from "../database/personal";

const highlights = [
  {
    icon: Code2,
    title: "Engineering Depth",
    description:
      "Strong command over the MERN stack with a focus on building clean, maintainable, and scalable code.",
  },
  {
    icon: Rocket,
    title: "Startup Builder",
    description:
      "Founded Emrift and took it from concept to production — handling architecture, development, and deployment.",
  },
  {
    icon: Building2,
    title: "Product Ownership",
    description:
      "End-to-end product thinking: from system design and API architecture to UI implementation and launch.",
  },
  {
    icon: Target,
    title: "Execution Focus",
    description:
      "Shipped real products under real constraints. I prioritize getting things done right, not just getting them done.",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="container-width mx-auto">
        <SectionHeader
          title="About Me"
          subtitle="Full stack developer with founder-level execution experience."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-surface-600 dark:text-surface-400">
              <p>{personalInfo.bio}</p>
              <p>{personalInfo.longBio}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {personalInfo.availableFor.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="card-base card-hover col-span-2 sm:col-span-1"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
                    <item.icon size={18} />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-surface-900 dark:text-surface-100">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-surface-500 dark:text-surface-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
