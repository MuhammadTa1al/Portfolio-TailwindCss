"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gray-900 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <i className="fab fa-node-js mr-2"></i>
            Harsh
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#home" mobile>
              Home
            </NavLink>
            <NavLink href="#about" mobile>
              About
            </NavLink>
            <NavLink href="#skills" mobile>
              Skills
            </NavLink>
            <NavLink href="#education" mobile>
              Education
            </NavLink>
            <NavLink href="#work" mobile>
              Work
            </NavLink>
            <NavLink href="#experience" mobile>
              Experience
            </NavLink>
            <NavLink href="#contact" mobile>
              Contact
            </NavLink>
          </div>
        </motion.div>
      )}
    </header>
  );
};

const NavLink = ({
  href,
  children,
  mobile = false,
}: {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}) => (
  <Link
    href={href}
    className={`${
      mobile ? "block" : ""
    } text-gray-300 hover:text-white transition duration-300`}
  >
    {children}
  </Link>
);

export default Header;
