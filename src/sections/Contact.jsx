import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";
import BrandIcon from "../components/BrandIcon";
import SectionWrapper, { SectionHeader } from "../components/SectionWrapper";
import { personalInfo } from "../database/personal";
import { socialLinks } from "../database/socialLinks";

const iconMap = {
  github: "github",
  linkedin: "linkedin",
  twitter: "twitter",
  "message-circle": "message-circle",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact">
      <div className="container-width mx-auto">
        <SectionHeader
          title="Get In Touch"
          subtitle="Open to full-time roles, freelance projects, collaborations, and startup discussions."
        />

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-base p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-surface-400 dark:text-surface-500">
                      Email
                    </p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-medium text-surface-700 hover:text-primary-600 dark:text-surface-300 dark:hover:text-primary-400"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="card-base p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-surface-400 dark:text-surface-500">
                      Location
                    </p>
                    <p className="text-sm font-medium text-surface-700 dark:text-surface-300">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-3"
              >
                {socialLinks
                  .filter((l) => l.url)
                  .map((link) => {
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-base card-hover flex items-center justify-between p-4"
                      >
                        <div className="flex items-center gap-3">
                          <BrandIcon icon={iconMap[link.icon]} size={16} className="text-surface-500 dark:text-surface-400" />
                          <div>
                            <p className="text-sm font-medium text-surface-700 dark:text-surface-300">
                              {link.name}
                            </p>
                            <p className="text-xs text-surface-400 dark:text-surface-500">
                              {link.username}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight size={14} className="text-surface-400" />
                      </a>
                    );
                  })}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="card-base p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-surface-900 dark:text-white">
                Send a Message
              </h3>
              <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                Fill out the form below and I&apos;ll get back to you.
              </p>

              <div className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-medium text-surface-600 dark:text-surface-400"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-surface-200 bg-white px-4 py-2.5 text-sm text-surface-900 outline-none transition-colors placeholder:text-surface-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-surface-700 dark:bg-surface-800 dark:text-white dark:placeholder:text-surface-500 dark:focus:border-primary-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium text-surface-600 dark:text-surface-400"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-surface-200 bg-white px-4 py-2.5 text-sm text-surface-900 outline-none transition-colors placeholder:text-surface-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-surface-700 dark:bg-surface-800 dark:text-white dark:placeholder:text-surface-500 dark:focus:border-primary-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-xs font-medium text-surface-600 dark:text-surface-400"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-surface-200 bg-white px-4 py-2.5 text-sm text-surface-900 outline-none transition-colors placeholder:text-surface-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-surface-700 dark:bg-surface-800 dark:text-white dark:placeholder:text-surface-500 dark:focus:border-primary-400"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium text-surface-600 dark:text-surface-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-surface-200 bg-white px-4 py-2.5 text-sm text-surface-900 outline-none transition-colors placeholder:text-surface-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-surface-700 dark:bg-surface-800 dark:text-white dark:placeholder:text-surface-500 dark:focus:border-primary-400"
                    placeholder="Tell me about your project, role, or idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "idle" && (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                  {status === "sending" && "Sending..."}
                  {status === "sent" && "Message Sent!"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
