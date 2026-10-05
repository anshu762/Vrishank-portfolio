import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Education', to: 'education' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Projects', to: 'projects' },
  { name: 'Activities', to: 'activities' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      document.body.style.overflow = !prev ? 'hidden' : 'auto';
      return !prev;
    });
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav
      className={`fixed top-0 w-full z-fixed transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="section-container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="home" smooth duration={500} offset={-80} className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-soft group-hover:scale-105 transition-transform">
              VJ
            </div>
            <span className="hidden sm:block font-bold font-primary text-gray-900 tracking-wide">
              Vrishank<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 cursor-pointer z-fixed"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} className="text-gray-900" /> : <FaBars size={24} className="text-gray-900" />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-7 items-center">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  spy
                  activeClass="text-primary"
                  className="font-medium cursor-pointer text-gray-700 hover:text-primary transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
            {/* <Link
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className="btn-primary !px-5 !py-2 text-sm"
            >
              Hire-Ready
            </Link> */}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden flex flex-col gap-1 px-4 pb-6 bg-white/95 backdrop-blur-md overflow-hidden"
          >
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-70}
                  spy
                  activeClass="text-primary bg-primary/5"
                  className="block font-medium cursor-pointer text-gray-800 hover:text-primary px-3 py-3 rounded-lg transition-colors"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;