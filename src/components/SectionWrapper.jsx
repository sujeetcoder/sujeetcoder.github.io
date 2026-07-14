import { motion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function SectionWrapper({
  id,
  children,
  className = "",
  variants = defaultVariants,
  once = true,
}) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-80px" }}
        variants={variants}
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="section-title text-surface-900 dark:text-white">{title}</h2>
      {subtitle && <p className="section-subtitle mx-auto max-w-2xl">{subtitle}</p>}
    </div>
  );
}
