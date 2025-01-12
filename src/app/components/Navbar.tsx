"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaInfoCircle,
  FaTools,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black fixed top-0 left-0 w-full z-50 shadow-md p-4 lg:p-8 text-[#e5e5e5] font-sans font-medium text-lg">
      <div className="flex justify-between items-center">
        <button
          onClick={toggleMenu}
          className="text-[#e5e5e5] lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <IoMdMenu size={24} />
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row items-center justify-center mt-4 lg:mt-0`}
      >
        <NavItem key="home" href="#home" icon={<IoHome />} text="Home" />
        <NavItem
          key="about"
          href="#about"
          icon={<FaInfoCircle />}
          text="About"
        />
        <NavItem
          key="education"
          href="#education"
          icon={<FaGraduationCap />}
          text="Education"
        />
        <NavItem
          key="experience"
          href="#experience"
          icon={<FaBriefcase />}
          text="Experience"
        />
        <NavItem
          key="contact"
          href="#contact"
          icon={<FaTools />}
          text="Contact"
        />
      </div>
    </nav>
  );
};

const NavItem = ({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) => (
  <Link
    href={href}
    className="flex items-center mt-4 lg:mt-0 lg:mr-10 transition-colors duration-300 ease-in-out hover:text-[#06b6d4] group"
  >
    <span className="mr-2 transform group-hover:scale-110 transition-transform duration-300 ease-in-out">
      {icon}
    </span>
    <span className="animate-fadeIn">{text}</span>
  </Link>
);

export default Navbar;
