"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaInstagram,
  FaGithubSquare,
  FaFacebookF,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="bg-black text-[#06b6d4] font-sans">
      <section
        id="home"
        className="min-h-screen flex items-center justify-center p-8"
      >
        <main className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-[#e5e5e5] mb-4 slideInLeft">
              Welcome to my portfolio website!
            </p>
            <h1 className="text-4xl font-bold leading-tight mb-2">
              Hey I&apos;m <span className="text-[#facc15]">Meer Talal</span>
            </h1>
            <h2 className="text-3xl font-bold leading-tight mb-4">
              I&apos;m into{" "}
              <TypeAnimation
                sequence={[
                  "Web Development",
                  2000,
                  "UI/UX Design",
                  2000,
                  "Problem Solving",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-[#facc15]"
              />
            </h2>
            <p className="text-[#e5e5e5] leading-relaxed mb-6">
              Building a successful product is a challenge. I am highly
              energetic in user experience design, interfaces, and web
              development.
              <br />
              Imagination is more important than Knowledge.
            </p>
            <div className="flex gap-4">
              <SocialIcon
                key="linkedin"
                href="https://www.linkedin.com/in/meer-talal-7834132b5/"
                icon={<FaLinkedin />}
              />
              <SocialIcon
                key="instagram"
                href="https://www.instagram.com/s.a.r.d.a.r_s.h.a.b/"
                icon={<FaInstagram />}
              />
              <SocialIcon
                key="github"
                href="https://github.com/MuhammadTa1al"
                icon={<FaGithubSquare />}
              />
              <SocialIcon
                key="facebook"
                href="https://www.facebook.com/TalalBa10ch"
                icon={<FaFacebookF />}
              />
            </div>
          </div>
          <div className="max-w-md w-full slideInRight">
            <Image
              src="/profile.png"
              alt="MEER TALAL"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </main>
      </section>

      <About />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
}

const SocialIcon = ({
  href,
  icon,
  key,
}: {
  href: string;
  icon: React.ReactNode;
  key: string;
}) => (
  <Link
    href={href}
    key={key}
    className="text-2xl text-[#06b6d4] hover:text-[#facc15] transform hover:scale-110 transition-all duration-300"
  >
    {icon}
  </Link>
);
