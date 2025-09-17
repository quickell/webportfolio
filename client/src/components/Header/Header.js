import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { scrollToSection } from '../../utils/scrollUtils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId);
    closeMenu();
  };

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'mypc', label: 'My PC' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('hero');
            }}
            style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #ffffff 0%, #DC143C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            qckll
          </a>
        </motion.div>

        <nav style={{
          display: isMobile ? 'none' : 'flex'
        }}>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '30px'
          }}>
            {menuItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(item.id);
                  }}
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.button
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={toggleMenu}
          style={{
            display: isMobile ? 'flex' : 'none',
            background: 'none',
            border: 'none',
            color: '#DC143C',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '5px',
            transition: 'all 0.3s ease'
          }}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden'
          }}
        >
        <ul style={{
          listStyle: 'none',
          margin: 0,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          {menuItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(item.id);
                }}
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  display: 'block',
                  padding: '10px 0',
                  transition: 'all 0.3s ease'
                }}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
