import { motion } from "framer-motion";
import {
  Lightbulb,
  Puzzle,
  Layers,
  Quote,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import SectionWrapper, { SectionHeader } from "../components/SectionWrapper";
import { founderData } from "../database/founder";

export default function Founder() {
  return (
    <SectionWrapper id="founder" className="bg-surface-50/50 dark:bg-surface-900/30">
      <div className="container-width mx-auto">
        <SectionHeader
          title={founderData.startupName}
          subtitle={founderData.tagline}
        />

        <div className="mx-auto max-w-4xl space-y-12">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Lightbulb,
                title: "Vision",
                text: founderData.vision,
              },
              {
                icon: Puzzle,
                title: "Problem",
                text: founderData.problem,
              },
              {
                icon: Layers,
                title: "Solution",
                text: founderData.solution,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-base card-hover"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
                  <item.icon size={18} />
                </div>
                <h3 className="mt-3 text-base font-semibold text-surface-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-base p-8"
          >
            <h3 className="text-lg font-semibold text-surface-900 dark:text-white">
              Key Platform Features
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {founderData.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-surface-600 dark:text-surface-400"
                >
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-primary-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-base p-8"
          >
            <h3 className="text-lg font-semibold text-surface-900 dark:text-white">
              Tech Architecture
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {Object.entries(founderData.techArchitecture).map(([key, value]) => (
                <div key={key}>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                    {key}
                  </span>
                  <p className="mt-1 text-sm text-surface-600 dark:text-surface-400">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {founderData.metrics.map((metric) => (
              <div
                key={metric.label}
                className="card-base text-center"
              >
                <div className="text-2xl font-bold text-gradient">{metric.value}</div>
                <div className="mt-1 text-xs font-medium text-surface-500 dark:text-surface-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-surface-200 bg-gradient-to-br from-primary-50 to-white p-8 dark:from-primary-950/20 dark:to-surface-900 dark:border-surface-800"
          >
            <Quote size={32} className="absolute top-6 right-6 text-primary-200 dark:text-primary-800" />
            <p className="relative z-10 text-base italic leading-relaxed text-surface-700 dark:text-surface-300">
              {founderData.founderQuote}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/50" />
              <div>
                <p className="text-sm font-semibold text-surface-900 dark:text-white">
                  {founderData.founderTitle}, {founderData.startupName}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
