import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      period: '2020 - 2024',
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Rajiv Gandhi University of Knowledge Technologies, AP IIIT Nuzvid',
      grade: 'CGPA: 8.45 | Distinction'
    },
    {
      period: '2018 - 2020',
      degree: 'PUC (Pre-University Course)',
      institution: 'Rajiv Gandhi University of Knowledge Technologies, AP IIIT Nuzvid',
      grade: 'CGPA: 8.9 | Distinction'
    },
    {
      period: '2017 - 2018',
      degree: 'SSC',
      institution: 'SKPGN High School',
      grade: 'CGPA: 10 | Distinction'
    }
  ];

  const certifications = [
    {
      title: 'Participation Certificate in Techzite 2k20, 2K22',
      issuer: 'RGUKT IIIT-NUZVID',
      date: '2020, 2022'
    },
    {
      title: 'Certificate of Participation for Python and Introduction to Machine Learning Workshop',
      issuer: 'StudyComrade',
      date: 'June 19-20, 2022'
    },
    {
      title: 'Introduction to Java',
      issuer: 'Sololearn',
      date: 'June 2, 2023'
    },
    {
      title: 'Machine Learning with Python',
      issuer: 'Coursera',
      date: 'April 12, 2023'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              Education
            </h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {edu.period}
                      </span>
                    </div>
                    <span className="px-4 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium">
                      {edu.grade}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-purple-600" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-600"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {cert.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      {cert.issuer}
                    </p>
                    <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">
                      {cert.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;