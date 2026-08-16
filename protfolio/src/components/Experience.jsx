import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  // Edit this array to add/update your experience
  const experiences = [
    {
      id: 1,
      title: "Teaching",
      company: "Coaching",
      location: "GEC",
      period: "2022 - Present",
      description: "Teaching Student and Learning a Lot for myself",
      achievements: ["Increased application performance by 40%"],
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-4 overflow-hidden">
      {/* Ambient glow, consistent with Hero/About */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-mint/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-mint tracking-wide mb-3">
            {"// experience"}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Where I've Worked
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line that draws in as you scroll */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ originY: 0 }}
            className="absolute left-8 top-0 bottom-0 w-px bg-linear-to-b from-mint via-white/20 to-transparent"
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <span className="absolute left-6 top-1 w-5 h-5 flex items-center justify-center">
                  <span className="absolute w-5 h-5 bg-mint/30 rounded-full animate-ping" />
                  <span className="relative w-3 h-3 bg-mint rounded-full border-2 border-ink" />
                </span>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="bg-linear-to-br from-surface-2 to-surface p-6 rounded-2xl border border-white/10 hover:border-mint/50 transition-colors hover:shadow-xl hover:shadow-mint/10"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-mint font-semibold">{exp.company}</p>
                      <p className="text-muted text-sm">{exp.location}</p>
                    </div>
                    <span className="px-4 py-2 bg-violet/10 text-violet text-sm rounded-full font-medium font-mono">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-mist/80 mb-4">{exp.description}</p>

                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-muted text-sm flex items-start gap-2"
                          >
                            <span className="text-mint mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;