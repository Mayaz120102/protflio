import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink, Eye } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const Education = () => {
  const [hoveredCert, setHoveredCert] = useState(null);

  // Edit this array to add/update your education
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "International Islamic University Chittagong",
      location: "Kumira, Shitakunda",
      period: "2022-Continue",
      description:
        "Focused on software engineering, algorithms, and data structures.",
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate",
      institution: "Govt City College Chittagong",
      location: "Ice Factory Road, Chittagong",
      period: "2018-2020",
      gpa: "5.00",
    },
    {
      id: 3,
      degree: "Secondary School Certificate",
      institution: "Nasirabad Govt boys High School",
      location: "Nasirabad Chittagong",
      period: "2012-2018",
      gpa: "5.00",
    },
  ];

  // Edit this array to add/update your certifications
  const certifications = [
    {
      id: 1,
      name: "Python-Django",
      issuer: "EDGE, Bangladesh Computer Council, ICT division",
      date: "2024",
      credential: "",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      driveLink:
        "https://drive.google.com/file/d/1-3F41jvWYs6MtzVe4Z3CG89WPwFcZd9G/view?usp=sharing",
    },
    {
      id: 2,
      name: "Inter University Hackathon 2025",
      issuer: "Programming Hero",
      date: "2025",
      thumbnail:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      driveLink:
        "https://drive.google.com/file/d/1O8aLeOJY8dM1mAfGX-fAAo-S8__ONP5n/view?usp=sharing",
    },
    {
      id: 3,
      name: "Robotics",
      issuer: "IEEE Robotics Society",
      date: "2024",
      thumbnail:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop",
      driveLink:
        "https://drive.google.com/file/d/1WeF73TY_IJuIYH5QVpV-cIuRKIjvEMb9/view?usp=sharing",
    },
  ];

  const handleViewCertificate = (driveLink) => {
    window.open(driveLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="education" className="relative py-24 px-4 overflow-hidden bg-surface/30">
      {/* Ambient glow, consistent with Hero/About */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-mint tracking-wide mb-3">
            {"// education"}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Education
          </h2>
        </motion.div>

        {/* Academic Qualifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <GraduationCap className="text-mint" size={30} />
            Academic Qualifications
          </motion.h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="bg-linear-to-br from-surface-2 to-surface p-6 rounded-2xl border border-white/10 hover:border-mint/50 transition-colors hover:shadow-xl hover:shadow-mint/10"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h4 className="font-display text-xl font-bold text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-mint font-semibold">{edu.institution}</p>
                    <p className="text-muted text-sm">{edu.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="px-4 py-2 bg-violet/10 text-violet text-sm rounded-full font-medium font-mono inline-block mb-2">
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <p className="text-muted text-sm">GPA: {edu.gpa}</p>
                    )}
                  </div>
                </div>
                {edu.description && (
                  <p className="text-mist/80">{edu.description}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <Award className="text-mint" size={30} />
            Certifications
          </motion.h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group bg-linear-to-br from-surface-2 to-surface rounded-2xl border border-white/10 hover:border-mint/50 transition-colors hover:shadow-xl hover:shadow-mint/10 overflow-hidden"
                onMouseEnter={() => setHoveredCert(cert.id)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-surface-2">
                  <img
                    src={cert.thumbnail}
                    alt={cert.name}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      hoveredCert === cert.id ? "blur-sm scale-110" : "blur-md"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-ink/60 flex items-center justify-center transition-all duration-300 ${
                      hoveredCert === cert.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button
                      onClick={() => handleViewCertificate(cert.driveLink)}
                      className="bg-mint text-ink px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-mint/40 transition-all flex items-center gap-2"
                    >
                      <Eye size={20} />
                      View Certificate
                    </button>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="w-11 h-11 bg-violet rounded-full flex items-center justify-center shadow-lg">
                      <Award className="text-ink" size={22} />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h4 className="font-display text-lg font-bold text-white mb-2 line-clamp-2">
                    {cert.name}
                  </h4>
                  <p className="text-mint text-sm font-semibold mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-muted text-xs mb-4">
                    Issued: {cert.date}
                  </p>

                  <button
                    onClick={() => handleViewCertificate(cert.driveLink)}
                    className="w-full bg-surface-2 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 group-hover:bg-mint group-hover:text-ink"
                  >
                    <ExternalLink size={16} />
                    View in Drive
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;