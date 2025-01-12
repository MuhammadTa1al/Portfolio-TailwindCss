"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-black scroll-smooth">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-[#06b6d4]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-envelope mr-2"></i>Get in Touch
        </motion.h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#facc15]">
                Contact Information
              </h3>
              <p className="text-[#e5e5e5] mb-4">
                Feel free to reach out to me for any inquiries or collaboration
                opportunities.
              </p>
              <ul className="text-[#e5e5e5] space-y-2">
                <li>
                  <i className="fas fa-map-marker-alt mr-2 text-[#06b6d4]"></i>
                  Lyari, Karachi, Pakistan
                </li>
                <li>
                  <i className="fas fa-phone mr-2 text-[#06b6d4]"></i>+92 321
                  344 9642
                </li>
                <li>
                  <i className="fas fa-envelope mr-2 text-[#06b6d4]"></i>
                  balochshab248@email.com
                </li>
              </ul>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <motion.form
              onSubmit={handleSubmit}
              className="bg-gray-900 rounded-lg p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-[#facc15] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-[#e5e5e5] bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#06b6d4]"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-[#facc15] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-[#e5e5e5] bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#06b6d4]"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-[#facc15] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 text-[#e5e5e5] bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#06b6d4]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#06b6d4] text-black font-bold py-2 px-4 rounded-md hover:bg-[#facc15] transition duration-300"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
