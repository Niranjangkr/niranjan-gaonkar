import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-16 bg-gray-50" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <GraduationCap className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">BSc in Computer Science</h3>
              <p className="text-gray-600">Govt College Quepem-Goa</p>
              <p className="text-sm text-gray-500">2020 - 2023</p>
              <p className="mt-2 text-gray-600">CGPA: 8.3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;