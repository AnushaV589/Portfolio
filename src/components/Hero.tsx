import React from 'react';
import { ArrowDown, Mail, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2 mt-10 pl-4 md:pl-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
              Vanapalli Anusha
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-6 mx-auto md:mx-0"></div>

            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Seeking a challenging role in a dynamic and innovative organization where I can apply my 
              engineering and programming skills to contribute to organizational growth while enhancing 
              my knowledge by exploring new technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <button
                onClick={() => scrollToSection('#contact')}
                className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 text-sm"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </button>
              <button
                onClick={() => scrollToSection('#projects')}
                className="group px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 flex items-center justify-center gap-2 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                View Projects
              </button>
            </div>

            <button
              onClick={() => scrollToSection('#about')}
              className="animate-bounce"
              aria-label="Scroll down"
            >
              <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400 mx-auto md:mx-0" />
            </button>
          </div>

          {/* Profile Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/profile.jpeg" // update this to match your actual file
              alt="Profile"
              className="w-80 h-80 object-cover rounded-full border-4 border-blue-500 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
