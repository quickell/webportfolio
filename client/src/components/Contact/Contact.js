import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message')
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset(); // Clear form
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusMessage = () => {
    if (submitStatus === 'success') {
      return 'Thank you! Your message has been sent. I will contact you shortly.';
    } else if (submitStatus === 'error') {
      return 'An error occurred while sending the message. Please try again later.';
    }
    return null;
  };

  return (
    <section id="contact" style={{
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
          Contact Me
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
          Ready for new projects and interesting opportunities
        </motion.p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '60px'
        }}>
          <div>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 600,
              marginBottom: '30px',
              color: '#ffffff'
            }}>Let's discuss your project</h3>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: '#cccccc',
              marginBottom: '40px'
            }}>
              I'm always open to new opportunities and interesting projects. 
              If you have an idea or project that needs to be implemented, 
              let's discuss it!
            </p>
            
            <div style={{ marginBottom: '40px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                color: '#cccccc'
              }}>
                <FaEnvelope style={{ width: '20px', marginRight: '15px', color: '#D2691E' }} />
                <span style={{ fontSize: '1rem' }}>dan.dn0799@gmail.com</span>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                color: '#cccccc'
              }}>
                <FaPhone style={{ width: '20px', marginRight: '15px', color: '#D2691E' }} />
                <span style={{ fontSize: '1rem' }}>+48664758412</span>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                color: '#cccccc'
              }}>
                <FaMapMarkerAlt style={{ width: '20px', marginRight: '15px', color: '#D2691E' }} />
                                 <span style={{ fontSize: '1rem' }}>Warsaw, Poland</span>
              </div>
            </div>
            
            <div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                marginBottom: '20px',
                color: '#ffffff'
                             }}>Social Networks</h4>
              
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
                    width: '50px',
                    height: '50px',
                    background: 'rgba(210, 105, 30, 0.2)',
                    color: '#D2691E',
                    borderRadius: '50%',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(210, 105, 30, 0.4)'
                  }}
                >
                  <FaGithub style={{ fontSize: '1.2rem' }} />
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
                  <FaLinkedin style={{ fontSize: '1.2rem' }} />
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
                  <FaEnvelope style={{ fontSize: '1.2rem' }} />
                </button>
              </div>
            </div>
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '40px',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 600,
              marginBottom: '30px',
              color: '#ffffff'
                         }}>Send Message</h3>
            
            {/* Status message */}
            {submitStatus && (
              <motion.div
                style={{
                  padding: '15px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  background: submitStatus === 'success' 
                    ? 'rgba(143, 188, 143, 0.2)' 
                    : 'rgba(210, 105, 30, 0.2)',
                  border: `1px solid ${submitStatus === 'success' ? '#8FBC8F' : '#D2691E'}`,
                  color: submitStatus === 'success' ? '#8FBC8F' : '#D2691E'
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {getStatusMessage()}
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '30px' }}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="5"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'all 0.3s ease',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '15px',
                  background: isSubmitting 
                    ? 'rgba(255, 255, 255, 0.3)' 
                    : 'linear-gradient(135deg, #DC143C, #FF69B4)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
