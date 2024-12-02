import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer (SE)',
    company: 'xAGI',
    period: 'September 2023 - Present',
    description: [
      'Managed programming for web applications using ReactJS, NextJs, NodeJs, ExpressJs, MongoDB, WebSockets',
      'Developed AI chatbots, PDF chatbots, and other AI applications',
      'Developed automation features reducing task completion time from 2-3 hours to 15 minutes'
    ]
  },
  {
    title: 'Freelance Software Developer',
    company: 'CubicTech',
    period: 'Contract Basis',
    description: [
      'Delivered full-stack web application: GST Manager',
      'Designed and developed website, web app, and admin panel UI',
      'Implemented payment integrations and API services'
    ]
  },
  {
    title: 'Full-stack Developer (Internship)',
    company: 'WeframeTech',
    period: 'July 2023 - August 2023',
    description: [
      'Built and implemented sleek UI components',
      'Integrated Zustand for state management',
      'Implemented Chart.js for admin dashboard visualizations'
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-16 bg-white" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Briefcase className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;