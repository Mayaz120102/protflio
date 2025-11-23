import React from 'react';
import { ChevronDown } from 'lucide-react';
import Footer from './Footer';

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-linear-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent animate-slide-up">
          Abrar Mayaz
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 animate-slide-up delay-200">
          Computer Science Student & Software Engineer
        </p>
        <button
          onClick={() => scrollToSection('about')}
          className="bg-cyan-400 text-slate-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-cyan-300 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/50 animate-slide-up delay-300"
        >
          View My Protfolio
        </button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown size={32} className="text-cyan-400" />
      </button>

      {/* Footer Component */}
      {/* <div className="absolute bottom-0 w-full">
        <Footer />
      </div> */}

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;