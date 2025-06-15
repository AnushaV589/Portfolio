import React from 'react';
import { User, MapPin, Calendar, Languages, Download } from 'lucide-react';

const About: React.FC = () => {
  const personalInfo = [
    { icon: User, label: 'Name', value: 'Vanapalli Anusha' },
    { icon: Calendar, label: 'Date of Birth', value: '12-09-2002' },
    { icon: MapPin, label: 'Current Location', value: 'Hyderabad, India' },
    { icon: Languages, label: 'Languages', value: 'English, Telugu' }
  ];

  const hobbies = ['Meditation', 'Drawing', 'Typing', 'Music'];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="text-center lg:text-left pl-8">
            <div className="inline-block">
              <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500">
                <img
                  src="profile.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>



          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Computer Science Engineer
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I am a Computer Science graduate from Rajiv Gandhi University of Knowledge Technologies 
                with a strong foundation in programming and web technologies. I'm passionate about solving 
                complex problems and creating efficient, user-friendly applications.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My objective is to secure a challenging role in a dynamic organization where I can leverage 
                my technical skills in Java, Spring Boot, and web technologies to contribute meaningfully 
                while continuing to learn and grow professionally.
              </p>
            </div>

            {/* Personal Information */}
            <div className="grid sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <info.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{info.label}:</p>
                    <p className="text-gray-900 dark:text-white font-semibold">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hobbies */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Hobbies</h4>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

            {/* Download Resume Button */}
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Vanapalli_Anusha_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5" />
                Download Resume
            </button>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;