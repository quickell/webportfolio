import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMouse, FaKeyboard, FaHeadphones, FaMicrophone, FaTv, FaMicrochip, FaMemory, FaImage } from 'react-icons/fa';

const MyPC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [secondImageError, setSecondImageError] = useState(false);
  const [hoveredSpec, setHoveredSpec] = useState(null);


  const specs = [
    { icon: FaMouse, label: 'Mouse', value: 'HATOR Pulsar 2' },
    { icon: FaKeyboard, label: 'Keyboard', value: 'HyperX Alloy Origins' },
    { icon: FaHeadphones, label: 'Headphones', value: 'LOGITECH Gaming G Pro X' },
    { icon: FaMicrophone, label: 'Microphone', value: 'HyperX QuadCast S' },
    { icon: FaTv, label: 'Monitor 1', value: 'Asus Tuf Gaming 180 Hz' },
    { icon: FaTv, label: 'Monitor 2', value: 'SAMSUNG 60 Hz' },
    { icon: FaMemory, label: 'Video Card', value: 'Asus GeForce GTX 1660 SUPER' },
    { icon: FaMicrochip, label: 'CPU', value: 'Intel(R) Core(TM) i5-8400 CPU 2.80GHz' }
  ];

  return (
    <section id="mypc" style={{
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
          My PC Setup
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
          My gaming setup and hardware specifications
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 2, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                             height: '600px'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Image */}
            {!imageError ? (
              <img
                src="/images/pc/pc-photo.jpg"
                alt="My PC Setup"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                onError={() => setImageError(true)}
              />
            ) : (
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #333, #555)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '1.2rem',
                fontWeight: 600
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '15px',
                  textAlign: 'center'
                }}>
                  <FaImage style={{ fontSize: '4rem', color: '#D2691E' }} />
                  <span>Add your PC photo</span>
                  <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                    Place pc-photo.jpg in client/public/images/pc/
                  </span>
                </div>
              </div>
            )}
            
            {/* Hover overlay for second image */}
                         <motion.div
               style={{
                 position: 'absolute',
                 top: 0,
                 left: 0,
                 width: '100%',
                 height: '100%'
               }}
               initial={{ opacity: 0 }}
               animate={{ opacity: isHovered ? 1 : 0 }}
               transition={{ duration: 0.3 }}
             >
               {!secondImageError ? (
                 <img
                   src="/images/pc/pc-photo-2.jpg"
                   alt="My PC Setup - Second View"
                   style={{
                     width: '100%',
                     height: '100%',
                     objectFit: 'cover',
                     objectPosition: 'center'
                   }}
                   onError={() => setSecondImageError(true)}
                 />
               ) : (
                 <div style={{
                   width: '100%',
                   height: '100%',
                   background: 'linear-gradient(135deg, #444, #666)',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   color: '#ffffff',
                   fontSize: '1.2rem',
                   fontWeight: 600
                 }}>
                   <div style={{
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     gap: '15px',
                     textAlign: 'center'
                   }}>
                     <FaImage style={{ fontSize: '4rem', color: '#A9A9A9' }} />
                     <span>Second PC photo</span>
                     <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                       Place pc-photo-2.jpg in client/public/images/pc/
                     </span>
                   </div>
                 </div>
               )}
             </motion.div>
          </motion.div>

          {/* Specifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              Hardware Specifications
            </h3>
            
            <div style={{
              display: 'grid',
              gap: '20px'
            }}>
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  style={{
                    background: hoveredSpec === index ? 'rgba(210, 105, 30, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    padding: '20px',
                    borderRadius: '15px',
                    border: hoveredSpec === index ? '1px solid rgba(210, 105, 30, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={() => setHoveredSpec(index)}
                  onMouseLeave={() => setHoveredSpec(null)}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}>
                    <spec.icon style={{
                      fontSize: '1.5rem',
                      color: '#D2691E',
                      minWidth: '24px'
                    }} />
                    <div>
                      <div style={{
                        fontSize: '0.9rem',
                        color: '#cccccc',
                        marginBottom: '5px'
                      }}>
                        {spec.label}
                      </div>
                      <div style={{
                        fontSize: '1.1rem',
                        color: '#ffffff',
                        fontWeight: 500
                      }}>
                        {spec.value}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MyPC;
