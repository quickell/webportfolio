import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const About = () => {
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  return (
    <section id="about" style={{
      padding: '100px 0',
      background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
      minHeight: '100vh',
      position: 'relative',
      zIndex: 5
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
      }}>
        <motion.h2
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '20px',
            color: '#ffffff'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h2>
        
        <motion.p
          style={{
            fontSize: '1.2rem',
            color: '#cccccc',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Meet the developer who creates innovative web solutions
        </motion.p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 600,
              marginBottom: '20px',
              color: '#ffffff'
            }}>Hi! 👋</h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#cccccc',
              marginBottom: '20px'
            }}>
              My name is <span style={{ color: '#ff6b6b', fontWeight: 900 }}>Danylo Rechkin</span> but you can call me <span style={{ color: '#ff6b6b', fontWeight: 700 }}>Daniel</span>. I’m a developer passionate about building modern web applications and constantly improving my skills.
              What started as curiosity about how websites and apps work has grown into a strong drive to create useful and engaging digital products.

            I work with <span style={{ color: '#ff6b6b', fontWeight: 900 }}>React</span>, <span style={{ color: '#ff6b6b', fontWeight: 900 }}>Node.js</span> and other modern web technologies, and I enjoy turning ideas into real, user-friendly projects.
            </p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#cccccc',
              marginBottom: '20px'
            }}>
            </p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#cccccc',
              marginBottom: '20px'
            }}>
              When I'm not coding, you can find me learning new technologies, 
              reading technical articles, or participating in open-source projects..
            </p>
            
            <div style={{ marginTop: '40px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
                color: '#cccccc',
                transition: 'all 0.3s ease'
              }}>
                <FaUser style={{ width: '20px', marginRight: '15px', color: '#ff6b6b' }} />
                <span style={{ fontSize: '1rem', color: '#cccccc' }}>Danylo Rechkin</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
                color: '#cccccc',
                transition: 'all 0.3s ease'
              }}>
                <FaMapMarkerAlt style={{ width: '20px', marginRight: '15px', color: '#ff6b6b' }} />
                <span style={{ fontSize: '1rem', color: '#cccccc' }}>Warsaw, Poland</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
                color: '#cccccc',
                transition: 'all 0.3s ease'
              }}>
                <FaEnvelope style={{ width: '20px', marginRight: '15px', color: '#ff6b6b' }} />
                <span style={{ fontSize: '1rem', color: '#cccccc' }}>dan.dn0799@gmail.com</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
                color: '#cccccc',
                transition: 'all 0.3s ease'
              }}>
                <FaPhone style={{ width: '20px', marginRight: '15px', color: '#ff6b6b' }} />
                <span style={{ fontSize: '1rem', color: '#cccccc' }}>+48664758412</span>
              </div>
            </div>
            
            <div style={{ marginTop: '30px' }}>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                marginBottom: '15px',
                color: '#ffffff'
              }}>Key Skills:</h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '10px'
              }}>
                {["JavaScript", "React", "Node.js", "TypeScript", "MongoDB", "Express.js"].map((skill, index) => (
                  <div
                    key={skill}
                    style={{
                      background: 'rgba(220, 20, 60, 0.2)',
                      color: '#DC143C',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      textAlign: 'center',
                      border: '1px solid rgba(220, 20, 60, 0.4)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <motion.div 
              style={{
                width: '100%',
                maxWidth: '400px',
                height: '400px',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                margin: '0 auto',
                border: isAvatarHovered ? '2px solid rgba(220, 20, 60, 0.6)' : '2px solid rgba(220, 20, 60, 0.4)',
                boxShadow: isAvatarHovered ? '0 0 40px rgba(220, 20, 60, 0.4)' : '0 0 30px rgba(220, 20, 60, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={() => setIsAvatarHovered(true)}
              onMouseLeave={() => setIsAvatarHovered(false)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.img 
                src="/images/profile-photo.jpg" 
                alt="Danylo Rechkin" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                animate={{
                  scale: isAvatarHovered ? 1.1 : 1,
                  filter: isAvatarHovered ? 'brightness(1.1) contrast(1.1)' : 'brightness(1) contrast(1)'
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #333, #555)',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '1.2rem',
                fontWeight: 600,
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 2,
                flexDirection: 'column'
              }}>
                <span style={{ fontSize: '3rem', marginBottom: '15px' }}>📸</span>
                <span>Add your photo</span>
                <span style={{ fontSize: '0.9rem', marginTop: '10px', opacity: 0.7 }}>profile-photo.jpg</span>
              </div>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'linear-gradient(135deg, #DC143C, #FF69B4)',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '25px',
                fontWeight: 600,
                zIndex: 3,
                boxShadow: '0 0 15px rgba(220, 20, 60, 0.5)'
              }}>
                Available
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
