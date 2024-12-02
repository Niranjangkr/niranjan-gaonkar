import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Startup Nalanda',
    description: 'Educational platform with course creation, discovery, course playlists creation, internal search API, and OpenAI integration',
    tech: ['TypeScript', 'Next.js', 'React', 'Zustand', 'OpenAI', 'Supabase'],
    link: 'https://startupnalanda.com/',
    image: 'https://raw.githubusercontent.com/Niranjangkr/PublicImages/refs/heads/main/startupnalanda.png'
  },
  {
    title: 'Favcy Navigator',
    description: 'An AI-powered platform that acts as a co-pilot for entrepreneurs, transforming business ideas into actionable strategies through data-driven insights, predictive analysis, and tailored venture-building expertise.',
    tech: ['JavaScript', 'Next.js', 'Node.js', 'MongoDB', 'athina.ai', 'AWS EC2'],
    link: 'https://app.favcynavigator.com/',
    image: 'https://raw.githubusercontent.com/Niranjangkr/PublicImages/refs/heads/main/favcyNavigatorDashboard.png'
  },
  {
    title: 'GST Manager',
    description: 'Full-stack GST management application',
    tech: ['Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Razorpay'],
    link: 'https://gstmanager.com/',
    image: 'https://raw.githubusercontent.com/Niranjangkr/PublicImages/refs/heads/main/gstManager.png'
  },
  {
    title: 'WishFerry',
    description: 'AI-powered story generation platform for kids',
    tech: ['JavaScript', 'Next.js', 'Node.js', 'OpenAI', 'Firebase'],
    link: 'https://wishferry.vercel.app/',
    image: 'https://raw.githubusercontent.com/Niranjangkr/PublicImages/refs/heads/main/wishferry.png'
  },
  {
    title: 'Favcy Hive',
    description: 'Employee updates management system with timeline and analytics',
    tech: ['TypeScript', 'Supabase', 'OpenAI', 'TanStack Query'],
    link: 'https://favcyhive.vercel.app/',
    image: 'https://raw.githubusercontent.com/Niranjangkr/PublicImages/refs/heads/main/favcyHive.png'
  }
];

const Projects = () => {
  return (
    <section className="py-16 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;