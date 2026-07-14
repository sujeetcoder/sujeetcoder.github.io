import { motion } from "framer-motion";
import { Star, ShieldCheck, Quote } from "lucide-react";
import SectionWrapper, { SectionHeader } from "../components/SectionWrapper";
import { testimonials, trustSignals } from "../database/testimonials";

export default function Testimonials() {
  const hasTestimonials = testimonials.length > 0 && testimonials[0].name !== "TBD";

  return (
    <SectionWrapper id="testimonials" className="bg-surface-50/50 dark:bg-surface-900/30">
      <div className="container-width mx-auto">
        <SectionHeader
          title="Trust & Values"
          subtitle="What I stand for as a builder and the principles that guide my work."
        />

        {hasTestimonials ? (
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-base card-hover"
              >
                <Quote size={24} className="text-primary-200 dark:text-primary-800" />
                <p className="mt-3 text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                  {testimonial.text}
                </p>
                <div className="mt-4 flex items-center gap-3 border-t border-surface-100 pt-4 dark:border-surface-800">
                  <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/50" />
                  <div>
                    <p className="text-sm font-semibold text-surface-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-surface-500 dark:text-surface-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                {testimonial.rating && (
                  <div className="mt-2 flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-base p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white">
                  How I Work
                </h3>
              </div>

              <div className="space-y-4">
                {trustSignals.map((signal, index) => (
                  <motion.div
                    key={signal}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-[11px] font-bold text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                      {signal}
                    </p>
                  </motion.div>
                ))}
              </div>

              <p className="mt-6 text-xs text-surface-400 dark:text-surface-500">
                Testimonials from clients, peers, and mentors will be added here.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
