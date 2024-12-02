import React from 'react';
import { Code2, Server, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Full Stack Developer
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Specialized in building modern web applications with expertise in frontend, backend, and AI integration
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <div className="flex flex-col items-center">
              <Code2 className="w-8 h-8 text-blue-500" />
              <span className="mt-2 text-sm font-medium">Frontend</span>
            </div>
            <div className="flex flex-col items-center">
              <Server className="w-8 h-8 text-green-500" />
              <span className="mt-2 text-sm font-medium">Backend</span>
            </div>
            <div className="flex flex-col items-center">
              <Database className="w-8 h-8 text-purple-500" />
              <span className="mt-2 text-sm font-medium">Database</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;