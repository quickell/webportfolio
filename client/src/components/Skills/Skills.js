import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" style={{
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
          Skills
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
          Technologies and tools I work with
        </motion.p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '30px',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <FaCode style={{ fontSize: '2rem', color: '#DC143C', marginRight: '15px' }} />
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#ffffff',
                margin: 0
              }}>Frontend</h3>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
              gap: '10px'
            }}>
                             {["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Next.js"].map((skill, index) => (
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
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '30px',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <FaServer style={{ fontSize: '2rem', color: '#A9A9A9', marginRight: '15px' }} />
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#ffffff',
                margin: 0
              }}>Backend</h3>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
              gap: '10px'
            }}>
                             {["Node.js", "Express.js", "Python", "PostgreSQL", "MongoDB", "REST API", "GraphQL"].map((skill, index) => (
                <div
                  key={skill}
                  style={{
                    background: 'rgba(169, 169, 169, 0.2)',
                    color: '#A9A9A9',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    textAlign: 'center',
                    border: '1px solid rgba(169, 169, 169, 0.4)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '30px',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
                             <FaServer style={{ fontSize: '2rem', color: '#FF69B4', marginRight: '15px' }} />
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#ffffff',
                margin: 0
                             }}>Tools</h3>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
              gap: '10px'
            }}>
                             {["Git", "Docker", "VS Code", "Postman"].map((skill, index) => (
                <div
                  key={skill}
                  style={{
                    background: 'rgba(255, 105, 180, 0.2)',
                    color: '#FF69B4',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    textAlign: 'center',
                    border: '1px solid rgba(255, 105, 180, 0.4)',
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
        
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 600,
            marginBottom: '20px',
            color: '#ffffff'
                     }}>Proficiency Level</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            marginTop: '30px'
          }}>
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px'
              }}>
                <span style={{ color: '#cccccc', fontSize: '1rem' }}>Frontend</span>
                <span style={{ color: '#DC143C', fontSize: '1rem', fontWeight: 600 }}>20%</span>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '20%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #DC143C, #FF69B4)',
                  borderRadius: '4px',
                  transition: 'width 1s ease'
                }}></div>
              </div>
            </div>
            
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px'
              }}>
                <span style={{ color: '#cccccc', fontSize: '1rem' }}>Backend</span>
                <span style={{ color: '#A9A9A9', fontSize: '1rem', fontWeight: 600 }}>25%</span>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '25%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #A9A9A9, #FFF8DC)',
                  borderRadius: '4px',
                  transition: 'width 1s ease'
                }}></div>
              </div>
            </div>
            
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px'
              }}>
                <span style={{ color: '#cccccc', fontSize: '1rem' }}>DevOps</span>
                <span style={{ color: '#FF69B4', fontSize: '1rem', fontWeight: 600 }}>15%</span>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '15%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #FF69B4, #FFF8DC)',
                  borderRadius: '4px',
                  transition: 'width 1s ease'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
