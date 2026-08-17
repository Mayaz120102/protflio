import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projectsData } from "../data/projectsData";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [spot, setSpot] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: -(py - 0.5) * 10, y: (px - 0.5) * 10 });
    setSpot({ x: px * 100, y: py * 100, opacity: 1 });
  };

  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
    setSpot((s) => ({ ...s, opacity: 0 }));
  };

  const isGithub = project.link && project.link.includes("github.com");

  return (
    <motion.div variants={fadeUp} style={{ perspective: 1000 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className="group relative bg-linear-to-br from-surface-2 to-surface rounded-2xl overflow-hidden border border-white/10 hover:border-mint/50 transition-colors hover:shadow-2xl hover:shadow-mint/10"
      >
        {/* Cursor-tracking spotlight */}
        <div
          className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
          style={{
            opacity: spot.opacity,
            background: `radial-gradient(420px circle at ${spot.x}% ${spot.y}%, rgba(94,234,212,0.16), transparent 45%)`,
          }}
        />

        {/* Project Image */}
        <div className="relative h-56 overflow-hidden bg-surface-2">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-transparent opacity-60" />
        </div>

        {/* Project Content */}
        <div className="relative p-6 space-y-4">
          <h3 className="font-display text-2xl font-bold text-white">
            {project.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Technologies — cascade in on hover */}
          {project.technologies && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  style={{ transitionDelay: `${i * 60}ms` }}
                  className="px-3 py-1 bg-violet/10 text-violet text-xs rounded-full font-mono opacity-80 translate-y-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* View Details Button */}
          <button
            onClick={() => window.open(project.link, "_blank")}
            className="w-full bg-surface-2 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group-hover:bg-mint group-hover:text-ink"
          >
            {isGithub ? <Github size={18} /> : <ExternalLink size={18} />}
            View Details
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4 overflow-hidden bg-surface/30">
      {/* Ambient glow, consistent with Hero/About */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-mint/10 rounded-full blur-3xl" />
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
            {"// projects"}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;