import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-[#e5e5e5] py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-[#06b6d4]">
              Meer Talal's Portfolio
            </h3>
            <p className="mt-2">
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
            </p>
            <p className="mt-2">
              Keep Rising 🚀. Connect with me over live chat!
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-[#06b6d4]">
              Quick Links
            </h4>
            <nav className="flex flex-wrap justify-center space-x-4">
              <Link
                href="#home"
                className="hover:text-[#facc15] transition duration-300"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="hover:text-[#facc15] transition duration-300"
              >
                About
              </Link>
              <Link
                href="#education"
                className="hover:text-[#facc15] transition duration-300"
              >
                Education
              </Link>
              <Link
                href="#experience"
                className="hover:text-[#facc15] transition duration-300"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="hover:text-[#facc15] transition duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h4 className="text-lg font-semibold mb-2 text-[#06b6d4]">
              Contact Info
            </h4>
            <p>
              <i className="fas fa-phone mr-2"></i>+92 321 344 9642
            </p>
            <p>
              <i className="fas fa-envelope mr-2"></i>balochshab248@gmail.com
            </p>
            <p>
              <i className="fas fa-map-marked-alt mr-2"></i>Karachi,
              Pakistan-75660
            </p>
            <div className="flex justify-center md:justify-end space-x-4 mt-4">
              <a
                href="#"
                className="text-[#06b6d4] hover:text-[#facc15] transition duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                className="text-[#06b6d4] hover:text-[#facc15] transition duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="#"
                className="text-[#06b6d4] hover:text-[#facc15] transition duration-300"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="#"
                className="text-[#06b6d4] hover:text-[#facc15] transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-[#06b6d4] hover:text-[#facc15] transition duration-300"
              >
                <i className="fab fa-telegram-plane"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>
            Designed with <i className="fa fa-heart text-[#facc15]"></i> by{" "}
            <a href="#" className="text-[#06b6d4] hover:underline">
              Meer Talal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
