import React, { useState } from "react";
import { GraduationCap, Award, ExternalLink, Eye } from "lucide-react";

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
      // gpa: '3.8/4.0',
      description:
        "Focused on software engineering, algorithms, and data structures.",
      // achievements: [
      //   "Dean's List all semesters",
      //   'Computer Science Club President',
      //   'Best Final Year Project Award',
      // ],
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate",
      institution: "Govt City College Chittagong",
      location: "Ice Factory Road, Chittagong",
      period: "2018-2020",
      gpa: "5.00",
      // description:
      //   'Specialized in distributed systems and cloud computing.',
      // achievements: [
      //   'Graduate Research Assistant',
      //   'Published 2 research papers',
      // ],
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
  // Add your certificate thumbnail images and Google Drive links
  const certifications = [
    {
      id: 1,
      name: "Python-Django",
      issuer: "EDGE,Bangladesh Computer Council,ICT division",
      date: "2024",
      credential: "",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      driveLink:
        "https://drive.google.com/file/d/1-3F41jvWYs6MtzVe4Z3CG89WPwFcZd9G/view?usp=sharing", // Replace with your Google Drive link
    },
    {
      id: 2,
      name: "Inter University Hackathon 2025",
      issuer: "Programming Hero",
      date: "2025",
      // credential: 'XYZ789012',
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
      // credential: "DEF345678",
      thumbnail:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop",
      driveLink:
        "https://drive.google.com/file/d/1WeF73TY_IJuIYH5QVpV-cIuRKIjvEMb9/view?usp=sharing",
    },
    // {
    //   id: 4,
    //   name: 'MongoDB Certified Developer',
    //   issuer: 'MongoDB University',
    //   date: '2022',
    //   credential: 'GHI901234',
    //   thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
    //   driveLink: 'https://drive.google.com/file/d/YOUR_FILE_ID/view',
    // },
    // {
    //   id: 5,
    //   name: 'Certified Kubernetes Administrator',
    //   issuer: 'Cloud Native Computing Foundation',
    //   date: '2023',
    //   credential: 'JKL567890',
    //   thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop',
    //   driveLink: 'https://drive.google.com/file/d/YOUR_FILE_ID/view',
    // },
    // {
    //   id: 6,
    //   name: 'Certified Scrum Master',
    //   issuer: 'Scrum Alliance',
    //   date: '2021',
    //   credential: 'MNO234567',
    //   thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    //   driveLink: 'https://drive.google.com/file/d/YOUR_FILE_ID/view',
    // },
  ];

  const handleViewCertificate = (driveLink) => {
    window.open(driveLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="education" className="min-h-screen py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
            Education
          </h2>
          <p className="text-gray-400 text-lg">
            My academic background and certifications
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="text-cyan-400" size={32} />
            Academic Qualifications
          </h3>

          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:scale-102"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-cyan-400 font-semibold text-lg">
                      {edu.institution}
                    </p>
                    <p className="text-gray-400 text-sm">{edu.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="px-4 py-2 bg-blue-600/20 text-blue-400 text-sm rounded-full font-medium inline-block mb-2">
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <p className="text-gray-400 text-sm">GPA: {edu.gpa}</p>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{edu.description}</p>

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="text-white font-semibold">Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="text-gray-400 text-sm flex items-start gap-2"
                        >
                          <span className="text-cyan-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Award className="text-cyan-400" size={32} />
            Certifications
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:scale-105 overflow-hidden"
                onMouseEnter={() => setHoveredCert(cert.id)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                {/* Certificate Thumbnail with Blur Effect */}
                <div className="relative h-48 overflow-hidden bg-slate-700">
                  <img
                    src={cert.thumbnail}
                    alt={cert.name}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      hoveredCert === cert.id ? "blur-sm scale-110" : "blur-md"
                    }`}
                  />

                  {/* Overlay with View Button */}
                  <div
                    className={`absolute inset-0 bg-slate-900/60 flex items-center justify-center transition-all duration-300 ${
                      hoveredCert === cert.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button
                      onClick={() => handleViewCertificate(cert.driveLink)}
                      className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-all flex items-center gap-2 transform hover:scale-110"
                    >
                      <Eye size={20} />
                      View Certificate
                    </button>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 right-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Award className="text-white" size={24} />
                    </div>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-white mb-2 line-clamp-2">
                    {cert.name}
                  </h4>
                  <p className="text-cyan-400 text-sm font-semibold mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-400 text-xs mb-3">
                    Issued: {cert.date}
                  </p>
                  {cert.credential && (
                    <p className="text-gray-500 text-xs mb-4">
                      ID: {cert.credential}
                    </p>
                  )}

                  {/* View Link Button */}
                  <button
                    onClick={() => handleViewCertificate(cert.driveLink)}
                    className="w-full bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-600 transition-all flex items-center justify-center gap-2 group-hover:bg-cyan-400 group-hover:text-slate-900"
                  >
                    <ExternalLink size={16} />
                    View in Drive
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
