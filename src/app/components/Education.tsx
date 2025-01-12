"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor in Computer Science",
    institution: "Govt degree science & commerce college",
    year: "2024",
    status: "Present",
  },
  {
    degree: "Student of Cloud computing & AI stack",
    institution: "Governor House Karachi",
    year: "2023",
    status: "Present",
  },
  {
    degree: "Secondary Education",
    institution: "Rose Educational Society",
    year: "2022-2024",
    status: "Completed",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-black scroll-smooth">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-[#06b6d4]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-graduation-cap mr-2"></i>My Education
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#facc15]">
                {edu.degree}
              </h3>
              <p className="text-[#e5e5e5] mb-2">{edu.institution}</p>
              <p className="text-[#06b6d4]">
                {edu.year} | {edu.status}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
