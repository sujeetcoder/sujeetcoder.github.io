import { motion } from "framer-motion";
import {
  FolderCheck,
  Layers,
  Cable,
  Rocket,
  Clock,
  Boxes,
} from "lucide-react";
import SectionWrapper, { SectionHeader } from "../components/SectionWrapper";
import { stats } from "../database/stats";

const iconMap = {
  FolderCheck,
  Layers,
  Cable,
  Rocket,
  Clock,
  Boxes,
};

export default function Stats() {
  return (
    <SectionWrapper id="stats" className="bg-surface-50/50 dark:bg-surface-900/30">
      <div className="container-width mx-auto">
        <SectionHeader
          title="By the Numbers"
          subtitle="A snapshot of what I've built and the capabilities I bring."
        />

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => {
            const IconComp = iconMap[stat.icon] || FolderCheck;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="card-base card-hover group text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100 dark:bg-primary-950/50 dark:text-primary-400 dark:group-hover:bg-primary-900/50">
                  <IconComp size={20} />
                </div>
                <div className="mt-3 text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-surface-700 dark:text-surface-300">
                  {stat.label}
                </div>
                <div className="mt-0.5 text-xs text-surface-400 dark:text-surface-500">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
