import React from 'react';
import { Code, Brain, Palette } from 'lucide-react';

const About = ({ scrollToSection }) => {
  const interests = [
    {
      icon: <Code size={32} className="text-blue-400" />,
      title: 'Web Development',
      description:
        'Crafting beautiful and performant websites with modern frameworks like React and Next.js.',
    },
    {
      icon: <Brain size={32} className="text-blue-400" />,
      title: 'Machine Learning',
      description:
        'Exploring neural networks and data science to uncover insights and build intelligent systems.',
    },
    {
      icon: <Palette size={32} className="text-blue-400" />,
      title: 'UI/UX Design',
      description:
        'Passionate about creating intuitive, user-friendly interfaces that are both aesthetically pleasing and accessible.',
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white ">
            About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Avatar */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              {/* Replace the placeholder with an actual image */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border-8 border-slate-700 shadow-2xl transition-transform group-hover:scale-105 overflow-hidden">
                {/* To add your image, replace the span with: */}
                {/* <img src="/avatar.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                <span className="text-3xl text-gray-500 font-semibold">
                  Avatar
                </span>
              </div>
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl -z-10 group-hover:bg-cyan-400/30 transition-all"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I am a passionate and driven Computer Science and Engineering
              student with a knack for creating dynamic and intuitive web
              applications. My journey in technology is fueled by a relentless
              curiosity and a desire to solve real-world problems. From crafting
              elegant code to designing user-centric interfaces, I am dedicated
              to building experiences that are both functional and delightful.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/50"
              >
                My Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-gray-600 px-6 py-3 rounded-lg font-semibold text-white hover:border-cyan-400 hover:text-cyan-400 transition-all hover:scale-105"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Passions & Interests */}
        <div className="mt-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
            My Passions & Interests
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20 ${
                  index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-all group-hover:scale-110">
                    {interest.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-center mb-4 text-white">
                  {interest.title}
                </h4>
                <p className="text-gray-400 text-center text-sm leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 John Doe. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <button className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </button>
            <button className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default About;