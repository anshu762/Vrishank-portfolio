import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsHoveringLink(!!target.closest('a, button'));
    };
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: mousePosition.x - (isHoveringLink ? 20 : 15),
        y: mousePosition.y - (isHoveringLink ? 20 : 15),
        scale: isHoveringLink ? 1.4 : 1,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className={`hidden lg:block fixed w-8 h-8 border-2 rounded-full pointer-events-none z-modal transition-colors ${
        isHoveringLink ? 'border-secondary bg-secondary/10' : 'border-primary'
      } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    />
  );
};

export default CursorFollower;