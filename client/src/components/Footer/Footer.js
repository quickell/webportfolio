import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { scrollToSection } from '../../utils/scrollUtils';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
      padding: '60px 0 30px',
      position: 'relative',
      zIndex: 5,
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '20px',
              color: '#ffffff'
            }}>Danylo Rechkin</h3>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: '#cccccc',
              marginBottom: '20px'
            }}>
              Novice developer, creating modern digital solutions 
              using modern technologies.
            </p>
            <div style={{
              display: 'flex',
              gap: '15px'
            }}>
              <a
                href="https://github.com/quickell"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(220, 20, 60, 0.2)',
                  color: '#DC143C',
                  borderRadius: '50%',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(220, 20, 60, 0.4)'
                }}
              >
                <FaGithub style={{ fontSize: '1.1rem' }} />
              </a>
              <a
                href="https://www.linkedin.com/in/quickellww/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(169, 169, 169, 0.2)',
                  color: '#A9A9A9',
                  borderRadius: '50%',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(169, 169, 169, 0.4)'
                }}
              >
                <FaLinkedin style={{ fontSize: '1.1rem' }} />
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('dan.dn0799@gmail.com').then(() => {
                    alert('Email copied to clipboard!');
                  }).catch(() => {
                    alert('Failed to copy email');
                  });
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 105, 180, 0.2)',
                  color: '#FF69B4',
                  borderRadius: '50%',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 105, 180, 0.4)',
                  cursor: 'pointer'
                }}
              >
                <FaEnvelope style={{ fontSize: '1.1rem' }} />
              </button>
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
                  width: '40px',
                  height: '40px',
                  background: 'rgba(220, 20, 60, 0.2)',
                  color: '#DC143C',
                  borderRadius: '50%',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(220, 20, 60, 0.4)'
                }}
              >
                <FaEnvelope style={{ fontSize: '1.1rem' }} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              marginBottom: '20px',
              color: '#ffffff'
                         }}>Navigation</h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
                                           {[
                { name: 'Home', href: '#hero' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'My PC', href: '#mypc' },
                { name: 'Contact', href: '#contact' }
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>
                  <a
                    href={item.href}
                    style={{
                      color: '#cccccc',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              marginBottom: '20px',
              color: '#ffffff'
                         }}>Technologies</h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                'React & React Native',
                'Node.js & Express',
                'TypeScript & JavaScript',
                'MongoDB & PostgreSQL',
                'AWS & Docker',
                'Git & CI/CD'
              ].map((tech, index) => (
                <li key={index} style={{ 
                  marginBottom: '10px',
                  color: '#cccccc',
                  fontSize: '1rem'
                }}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              marginBottom: '20px',
              color: '#ffffff'
                         }}>Contact</h4>
            <div style={{
              color: '#cccccc',
              fontSize: '1rem',
              lineHeight: 1.6
            }}>
                             <p style={{ marginBottom: '10px' }}>
                 📧 dan.dn0799@gmail.com
               </p>
               <p style={{ marginBottom: '10px' }}>
                 📱 +48664758412
               </p>
               <p style={{ marginBottom: '10px' }}>
                 📍 Warsaw, Poland
               </p>
               <p>
                 🕒 Available for projects
               </p>
            </div>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '30px',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#999999',
            fontSize: '0.9rem',
            marginBottom: '10px'
          }}>
                         © 2025 Danylo Rechkin. All rights reserved.
          </p>
          <p style={{
            color: '#999999',
            fontSize: '0.8rem'
          }}>
                         Created with ❤️ using React and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
