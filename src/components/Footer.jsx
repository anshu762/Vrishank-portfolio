import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-14">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h4 className="text-white font-bold text-xl mb-2 font-primary">Vrishank Jha</h4>
            <p className="text-sm leading-relaxed">
              Class 11 PCM Student | Future Aerospace &amp; Computer Engineer | Football Captain
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} smooth duration={500} offset={-80} className="hover:text-white cursor-pointer transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/vrishank-jha-13571835a" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href="mailto:vrishankjha@gmail.com" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaEnvelope size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-sm">
          <p className="mb-2">&copy; {new Date().getFullYear()} Vrishank Jha. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Designed & Developed with <FaHeart className="text-red-500 animate-pulse" size={12} />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;