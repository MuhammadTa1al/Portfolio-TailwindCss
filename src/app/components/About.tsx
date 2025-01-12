"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 scroll-smooth">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-[#06b6d4]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-user-alt mr-2"></i>About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="w-full md:w-1/3 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/profile.jpeg"
              alt="Meer Talal"
              width={300}
              height={300}
              className="rounded-full shadow-lg mx-auto"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-2/3 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#facc15]">
              I'm Meer Talal
            </h3>
            <p className="text-xl text-[#06b6d4] mb-4">
              Software Developer | Web Developer
            </p>
            <p className="text-[#e5e5e5] mb-4">
              Hey there! I'm a tech-loving student from Karachi 🇵🇰 who's really
              diving deep into the world of Cloud Computing and AI. I'm
              basically a digital builder at heart! 💻 My sweet spot? I'm all
              about that web development life, especially crushing it with
              JavaScript and TypeScript 🚀. What's really cool is how I'm not
              just learning for the sake of it – I'm actually building stuff
              that matters! Think of me as a tech artist 🎨 – I'm taking all
              these modern tools and turning them into websites and apps that
              actually solve real problems. I'm like a sponge 🧽, always soaking
              up new knowledge and pushing myself to level up my skills. What
              really stands out is my self-motivation 💪. I'm not waiting for
              someone to tell me what to learn next – I'm out there working on
              projects, getting my hands dirty, and figuring things out on my
              own. The best part? I'm not just about the code – I'm about
              creating impact 🌟. I'm mixing up my creative side with my tech
              skills to build solutions that could really make a difference. I'm
              basically what we call a "full package" in the tech world –
              someone who's got the skills, the drive, and most importantly, the
              right mindset to keep growing and innovating! 🚀✨
            </p>
            <div className="mb-4">
              <p>
                <span className="font-bold text-[#facc15]">Email:</span>{" "}
                <span className="text-[#e5e5e5]">balochshab248@gmail.com</span>
              </p>
              <p>
                <span className="font-bold text-[#facc15]">Place:</span>{" "}
                <span className="text-[#e5e5e5]">
                  Karachi, Pakistan - 75660
                </span>
              </p>
            </div>
            <Link
              href="https://drive.google.com/file/d/1GH5l1pSA1tQJ0s4myVqD-QVrxsqbw4Yq/view"
              target="_blank"
              className="bg-[#06b6d4] text-black px-6 py-3 rounded-full font-bold text-lg hover:bg-[#facc15] transition duration-300 inline-block"
            >
              Resume <i className="fas fa-chevron-right ml-2"></i>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
