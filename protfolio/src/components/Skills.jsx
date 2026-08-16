import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData, categories } from "../data/skillsData";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 px-4 overflow-hidden">
      {/* Ambient glow, consistent with Hero/About */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-mint/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-mint tracking-wide mb-3">
            {"// skills"}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            My Tech Stack
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="relative px-5 py-2 rounded-full font-medium text-sm transition-colors"
            >
              <span
                className={
                  activeCategory === category
                    ? "relative z-10 text-ink"
                    : "relative z-10 text-mist hover:text-mint"
                }
              >
                {category}
              </span>
              {activeCategory === category && (
                <motion.div
                  layoutId="skills-pill"
                  className="absolute inset-0 bg-mint rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="group bg-linear-to-br from-surface-2 to-surface p-6 rounded-2xl border border-white/10 hover:border-mint/50 transition-colors hover:shadow-xl hover:shadow-mint/10"
              >
                <div className="flex flex-col items-center space-y-4">
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 flex items-center justify-center bg-ink/40 rounded-xl group-hover:bg-ink/60 transition-colors"
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-9 h-9 object-contain"
                    />
                  </motion.div>
                  <h3 className="text-white font-semibold text-center text-sm">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;