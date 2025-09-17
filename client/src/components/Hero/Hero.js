import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { scrollToSection } from '../../utils/scrollUtils';

const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 5,
      padding: '100px 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontWeight: 700,
            marginBottom: '20px',
            color: '#ffffff',
            lineHeight: 1.2
          }}>
            Hello, I'm <span style={{ color: '#DC143C' }}>Daniel</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 600,
            marginBottom: '30px',
            color: '#FFF8DC',
            lineHeight: 1.3
          }}>
            Developer
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
            color: '#cccccc',
            marginBottom: '40px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6
          }}>
            I build effective and modern digital solutions powered by advanced technologies. 
            <p>
               
            </p>
            I love turning ideas into reality through code.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '50px',
            flexWrap: 'wrap'
          }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 30px',
              background: 'linear-gradient(135deg, #DC143C, #FF69B4)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '30px',
              fontSize: '1.1rem',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 20px rgba(220, 20, 60, 0.4)',
              cursor: 'pointer'
            }}
          >
            View Projects
          </a>
          
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 30px',
              background: 'transparent',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '30px',
              fontSize: '1.1rem',
              fontWeight: 600,
              border: '2px solid #A9A9A9',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
          >
            Contact Me
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '100px'
          }}
        >
                     <a
             href="https://github.com/quickell"
             target="_blank"
             rel="noopener noreferrer"
             style={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               width: '50px',
               height: '50px',
               background: 'rgba(220, 20, 60, 0.2)',
               color: '#DC143C',
               borderRadius: '50%',
               textDecoration: 'none',
               transition: 'all 0.3s ease',
               border: '1px solid rgba(220, 20, 60, 0.4)'
             }}
           >
             <FaGithub style={{ fontSize: '1.3rem' }} />
           </a>
          
                     <a
             href="https://www.linkedin.com/in/quickellww/"
             target="_blank"
             rel="noopener noreferrer"
             style={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               width: '50px',
               height: '50px',
               background: 'rgba(169, 169, 169, 0.2)',
               color: '#A9A9A9',
               borderRadius: '50%',
               textDecoration: 'none',
               transition: 'all 0.3s ease',
               border: '1px solid rgba(169, 169, 169, 0.4)'
             }}
           >
             <FaLinkedin style={{ fontSize: '1.3rem' }} />
           </a>
          
                     <a
             href="#contact"
             onClick={(e) => {
               e.preventDefault();
               scrollToSection('contact');
             }}
             style={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               width: '50px',
               height: '50px',
               background: 'rgba(255, 105, 180, 0.2)',
               color: '#FF69B4',
               borderRadius: '50%',
               textDecoration: 'none',
               transition: 'all 0.3s ease',
               border: '1px solid rgba(255, 105, 180, 0.4)',
               cursor: 'pointer'
             }}
           >
             <FaEnvelope style={{ fontSize: '1.3rem' }} />
           </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
          >
            <span style={{ marginBottom: '10px' }}>Learn More</span>
            <FaArrowDown style={{ fontSize: '1.2rem', animation: 'bounce 2s infinite' }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
