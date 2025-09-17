import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" style={{
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
          Projects
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
          Check out my latest works and projects
        </motion.p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              width: '100%',
              height: '200px',
              background: 'linear-gradient(135deg, #DC143C 0%, #FF69B4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 600
            }}>
              Telegram Anime AI Bot
            </div>
            <div style={{ padding: '30px' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '15px',
                color: '#ffffff'
              }}>Telegram AI Bot</h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: '#cccccc',
                marginBottom: '20px'
              }}>
                A smart Telegram bot that guesses anime titles based on text descriptions using AI (Gemini via OpenRouter) and searches across AniList, Jikan (MyAnimeList), and Kitsu.
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '25px'
              }}>
                {["Node.js", "Telegram Bot API", "MongoDB", "OpenRouter API", "Gemini AI", "Express", "ChatGPT"].map((tech, index) => (
                  <span
                    key={tech}
                    style={{
                      background: 'rgba(220, 20, 60, 0.2)',
                      color: '#DC143C',
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      border: '1px solid rgba(220, 20, 60, 0.4)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{
                display: 'flex',
                gap: '15px'
              }}>
                <button
                  onClick={() => window.open('https://github.com/quickell/telegram-anime-ai-bot', '_blank')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#FF0040',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <FaGithub />
                  Code
                </button>
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#00FF41',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <FaExternalLinkAlt />
                  Demo
                </button>
              </div>
            </div>
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              width: '100%',
              height: '200px',
              background: 'linear-gradient(135deg, #A9A9A9 0%, #FFF8DC 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 600
            }}>
              Task Management App
            </div>
            <div style={{ padding: '30px' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '15px',
                color: '#ffffff'
              }}>Task Management App</h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: '#cccccc',
                marginBottom: '20px'
              }}>
                Task management application with drag-and-drop functionality. 
                Real-time updates with Socket.io and beautiful UI.
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '25px'
              }}>
                {["React", "Socket.io", "Express", "PostgreSQL", "DnD"].map((tech, index) => (
                  <span
                    key={tech}
                    style={{
                      background: 'rgba(169, 169, 169, 0.2)',
                      color: '#A9A9A9',
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      border: '1px solid rgba(169, 169, 169, 0.4)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{
                display: 'flex',
                gap: '15px'
              }}>
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#FF0040',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    background: 'none',
                    border: 'none',
                    cursor: 'default',
                    padding: 0
                  }}
                >
                  <FaGithub />
                  In Progress
                </button>
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#00FF41',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <FaExternalLinkAlt />
                  Demo
                </button>
              </div>
            </div>
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              width: '100%',
              height: '200px',
              background: 'linear-gradient(135deg, #FF69B4 0%, #FFF8DC 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 600
            }}>
              Weather Dashboard
            </div>
            <div style={{ padding: '30px' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '15px',
                color: '#ffffff'
              }}>Weather Dashboard</h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: '#cccccc',
                marginBottom: '20px'
              }}>
                Interactive weather dashboard with 7-day forecasts. 
                Uses OpenWeatherMap API and beautiful animations.
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '25px'
              }}>
                {["React", "TypeScript", "API", "CSS3", "Chart.js", "AWS"].map((tech, index) => (
                  <span
                    key={tech}
                    style={{
                      background: 'rgba(255, 105, 180, 0.2)',
                      color: '#FF69B4',
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      border: '1px solid rgba(255, 105, 180, 0.4)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{
                display: 'flex',
                gap: '15px'
              }}>
                <button
                  onClick={() => window.open('https://github.com/quickell/weather-service', '_blank')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#FF0040',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <FaGithub />
                  Code
                </button>
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#00FF41',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <FaExternalLinkAlt />
                  Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <motion.div
          style={{
            textAlign: 'center',
            marginTop: '60px',
            padding: '20px 0'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <p style={{
            fontSize: '1.1rem',
            color: '#888888',
            fontStyle: 'italic',
            letterSpacing: '0.5px'
          }}>
            ...and much more
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
