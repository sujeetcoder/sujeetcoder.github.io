import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Download, MapPin } from "lucide-react";
import { personalInfo } from "../database/personal";
import { socialLinks } from "../database/socialLinks";
import { stats } from "../database/stats";

const iconMap = {
  github: "GH",
  linkedin: "LI",
  twitter: "X",
  "message-circle": "DC",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-surface-50 to-white dark:from-surface-950 dark:to-surface-950"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-500/5 blur-3xl dark:bg-primary-500/10" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary-500/5 blur-3xl dark:bg-primary-500/10" />
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-padding relative z-10 w-full">
        <div className="container-width mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-5xl"
          >
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-10">
              <motion.div
                variants={itemVariants}
                className="order-2 flex-1 lg:order-1"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800/60 dark:bg-primary-950/50 dark:text-primary-300">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    Available for opportunities
                  </div>
                </div>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="text-surface-900 dark:text-white">
                    {personalInfo.name.split(" ")[0]}{" "}
                  </span>
                  <span className="text-gradient">
                    {personalInfo.name.split(" ").slice(1).join(" ")}
                  </span>
                </h1>

                <p className="mt-4 text-xl font-semibold text-surface-700 dark:text-surface-300 sm:text-2xl">
                  {personalInfo.title}
                </p>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-surface-500 dark:text-surface-400">
                  {personalInfo.shortIntro}
                </p>

                <div className="mt-2 flex items-center gap-2 text-sm text-surface-400 dark:text-surface-500">
                  <MapPin size={14} />
                  <span>{personalInfo.location}</span>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    onClick={scrollToProjects}
                    className="btn-primary"
                  >
                    <ExternalLink size={16} />
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="btn-secondary"
                  >
                    Get In Touch
                  </a>
                  {personalInfo.resumeLink && (
                    <a
                      href={personalInfo.resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <Download size={16} />
                      Resume
                    </a>
                  )}
                </div>

                <div className="mt-8 flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-surface-200 text-surface-500 transition-all hover:border-primary-300 hover:text-primary-600 dark:border-surface-700 dark:text-surface-400 dark:hover:border-primary-700 dark:hover:text-primary-400"
                      aria-label={link.name}
                    >
                      <span className="text-xs font-bold">{iconMap[link.icon] || link.name[0]}</span>
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="order-1 flex-shrink-0 lg:order-2"
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-400/20 to-primary-600/20 blur-2xl" />
                  <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-xl dark:border-surface-800 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-green-500 text-white shadow-md dark:border-surface-800">
                    <span className="text-lg">✓</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
            >
              {stats.slice(0, 6).map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-surface-200/60 bg-white/60 p-4 text-center backdrop-blur-sm dark:border-surface-800/60 dark:bg-surface-900/60"
                >
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium text-surface-500 dark:text-surface-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-16 flex justify-center"
            >
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("about");
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="flex flex-col items-center gap-2 text-surface-400 transition-colors hover:text-primary-500 dark:text-surface-500 dark:hover:text-primary-400"
              >
                <span className="text-xs font-medium uppercase tracking-wider">Learn more</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown size={16} />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
