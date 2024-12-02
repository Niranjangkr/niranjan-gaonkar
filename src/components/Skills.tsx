import React from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['JavaScript', 'React.js', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express']
  },
  {
    title: 'Database',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'Supabase']
  },
  {
    title: 'Cloud & Tools',
    skills: ['AWS', 'Git', 'VS Code', 'Figma', 'OpenAI', 'Replicate', 'Portkey.ai', 'Athina.ai']
  }
];

const Skills = () => {
  return (
    <section className="py-16 bg-gray-50" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
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