"use client";

import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Content Writer",
    company: "Amazon And Upwork",
    period: "June 2021-Dec 2022",
    description: "Creating engaging content for various platforms.",
  },
  {
    title: "Web | Software Developer",
    company: "Online",
    period: "Nov 2023 - Present",
    description:
      "Developing and maintaining web applications using modern technologies.",
  },
  {
    title: "Teaching",
    company: "Poster Public School",
    period: "Nov 2024 - Present",
    description:
      "Teaching Math's concepts and English languages to aspiring students.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-[#06b6d4]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-briefcase mr-2"></i>My Experience
        </motion.h2>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-black rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#facc15]">
                {exp.title}
              </h3>
              <p className="text-[#06b6d4] mb-2">{exp.company}</p>
              <p className="text-[#e5e5e5] mb-2">{exp.period}</p>
              <p className="text-gray-400">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
