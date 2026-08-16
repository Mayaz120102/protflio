import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Code, Brain, Palette } from "lucide-react";
import image from "../assets/abrarmayazpp.png";
import MagneticButton from "./MagneticButton";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const About = ({ scrollToSection }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const photoRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Real cursor-tracking tilt: rotation direction/amount depends on where
  // on the photo your pointer actually is, not a fixed hover animation.
  const handlePhotoMove = (e) => {
    const el = photoRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0 -> 1, left to right
    const py = (e.clientY - rect.top) / rect.height; // 0 -> 1, top to bottom
    const rotateY = (px - 0.5) * 24; // tilts right when cursor is right, left when left
    const rotateX = -(py - 0.5) * 24; // tilts up when cursor is top, down when bottom
    setTilt({ x: rotateX, y: rotateY });
  };

  const resetPhotoTilt = () => setTilt({ x: 0, y: 0 });

  const interests = [
    {
      icon: <Code size={28} className="text-mint" />,
      title: "Web Development",
      description:
        "Crafting beautiful and performant websites with modern frameworks like React and Next.js.",
    },
    {
      icon: <Brain size={28} className="text-mint" />,
      title: "Machine Learning",
      description:
        "Exploring neural networks and data science to uncover insights and build intelligent systems.",
    },
    {
      icon: <Palette size={28} className="text-mint" />,
      title: "UI/UX Design",
      description:
        "Passionate about creating intuitive, user-friendly interfaces that are both aesthetically pleasing and accessible.",
    },
  ];

  // "Football formation": the hovered card steps forward and center-stage,
  // while the others lean away and rotate outward proportionally to how
  // far they sit from the hovered card.
  const getFormation = (index) => {
    if (hoveredIndex === null) {
      return { x: 0, y: 0, rotate: 0, scale: 1, zIndex: 10 };
    }
    if (hoveredIndex === index) {
      return { x: 0, y: -18, rotate: 0, scale: 1.07, zIndex: 30 };
    }
    const diff = index - hoveredIndex;
    return {
      x: diff * 24,
      y: 20,
      rotate: diff * 10,
      scale: 0.91,
      zIndex: 10 - Math.abs(diff),
    };
  };

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Ambient glow, consistent with Hero */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-violet/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-mint tracking-wide mb-3">
            {"// about"}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Who I Am
          </h2>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
        >
          {/* Avatar */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center md:justify-end"
          >
            <div style={{ perspective: 1000 }}>
              <motion.div
                ref={photoRef}
                onMouseMove={handlePhotoMove}
                onMouseLeave={resetPhotoTilt}
                className="relative group"
                animate={{
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                  scale: tilt.x || tilt.y ? 1.03 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 16 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="w-64 h-80 sm:w-80 sm:h-96 rounded-3xl bg-linear-to-br from-surface-2 to-surface flex items-center justify-center border border-white/10 shadow-2xl overflow-hidden">
                  <img
                    src={image}
                    alt="Profile"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -inset-2 rounded-3xl bg-mint/20 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-2 border-mint rounded-2xl -z-10" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div variants={fadeUp} className="space-y-6">
            <p className="text-mist/80 text-base sm:text-lg leading-relaxed">
              I am a passionate and driven Computer Science and Engineering
              student with a knack for creating dynamic and intuitive web
              applications. My journey in technology is fueled by a relentless
              curiosity and a desire to solve real-world problems. From crafting
              elegant code to designing user-centric interfaces, I am dedicated
              to building experiences that are both functional and delightful.
            </p>
            <div className="flex flex-wrap gap-4">
              <MagneticButton
                onClick={() => scrollToSection("projects")}
                className="bg-mint text-ink px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-mint/40 transition-shadow"
              >
                My Projects
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollToSection("contact")}
                className="border-2 border-white/20 px-6 py-3 rounded-lg font-semibold text-white hover:border-mint hover:text-mint transition-colors"
              >
                Contact Me
              </MagneticButton>
            </div>
          </motion.div>
        </motion.div>

        {/* Passions & Interests */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl font-bold text-center mb-12 text-white"
          >
            My Passions &amp; Interests
          </motion.h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {interests.map((interest, index) => (
              <motion.div key={index} variants={fadeUp}>
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={getFormation(index)}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  style={{ transformOrigin: "bottom center" }}
                  className="group relative bg-linear-to-br from-surface-2 to-surface p-8 rounded-2xl border border-white/10 hover:border-mint/50 transition-colors hover:shadow-xl hover:shadow-mint/10"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 bg-mint/10 rounded-xl flex items-center justify-center group-hover:bg-mint/20 group-hover:scale-110 transition-all">
                      {interest.icon}
                    </div>
                  </div>
                  <h4 className="font-display text-xl font-bold text-center mb-3 text-white">
                    {interest.title}
                  </h4>
                  <p className="text-muted text-center text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
