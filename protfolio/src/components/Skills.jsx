import React, { useState } from 'react';
import { skillsData, categories } from '../data/skillsData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
            My Tech Stack
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 flex items-center justify-center bg-slate-700/50 rounded-xl group-hover:bg-slate-700 transition-all">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-white font-semibold text-center">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;