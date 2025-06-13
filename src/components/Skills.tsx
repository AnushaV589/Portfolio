import React from 'react';
import { Code, Database, Settings, Layers } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: { name: string; percentage: number }[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Core Java', percentage: 95 },
        { name: 'Python', percentage: 90 }
      ]
    },
    {
      title: 'Web Technologies',
      icon: Layers,
      skills: [
        { name: 'HTML', percentage: 100 },
        { name: 'CSS', percentage: 95 },
        { name: 'JavaScript', percentage: 90 },
        { name: 'ReactJs', percentage: 95 }
      ]
    },
    {
      title: 'Frameworks & Tools',
      icon: Settings,
      skills: [
        { name: 'Spring Boot', percentage: 89 },
        { name: 'Hibernate', percentage: 85 },
        { name: 'Maven', percentage: 90 },
        { name: 'Git', percentage: 80 }
      ]
    },
    {
      title: 'Databases & Concepts',
      icon: Database,
      skills: [
        { name: 'MySQL', percentage: 96 },
        { name: 'Oracle', percentage: 95 },
        { name: 'SQL', percentage: 96 },
        { name: 'OOPS', percentage: 90 },
        { name: 'DBMS', percentage: 90 },
        { name: 'Data Structures', percentage: 85 }
      ]
    }
  ];

  const SkillBar: React.FC<{ name: string; percentage: number }> = ({ name, percentage }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-blue-600 dark:text-blue-400 font-semibold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;