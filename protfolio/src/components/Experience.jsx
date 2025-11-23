import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  // Edit this array to add/update your experience
  const experiences = [
    {
      id: 1,
      title: 'Teaching',
      company: 'Coaching',
      location: 'GEC',
      period: '2022 - Present',
      description:
        'Teaching Student and Learning a Lot for myself',
      achievements: [
        'Increased application performance by 40%',
        // 'Led a team of 5 developers',
        // 'Implemented CI/CD pipelines',
      ],
    },
    // {
    //   id: 2,
    //   title: 'Full Stack Developer',
    //   company: 'StartUp Inc',
    //   location: 'Remote',
    //   period: '2020 - 2022',
    //   description:
    //     'Developed and maintained full-stack web applications for various clients.',
    //   achievements: [
    //     'Built 10+ production applications',
    //     'Reduced load time by 60%',
    //   ],
    // },
    // {
    //   id: 3,
    //   title: 'Junior Developer',
    //   company: 'Digital Agency',
    //   location: 'New York, NY',
    //   period: '2019 - 2020',
    //   description:
    //     'Worked on front-end development and learned modern web technologies.',
    //   achievements: [
    //     'Completed 20+ projects',
    //     'Learned React, Node.js, and MongoDB',
    //   ],
    // },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">My professional journey</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-0 w-5 h-5 bg-cyan-400 rounded-full border-4 border-slate-900"></div>

                {/* Content Card */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:scale-102">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-400 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    </div>
                    <span className="px-4 py-2 bg-blue-600/20 text-blue-400 text-sm rounded-full font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, index) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;