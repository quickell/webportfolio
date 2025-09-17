import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(5deg); }
  50% { transform: translateY(-10px) rotate(-5deg); }
  75% { transform: translateY(-15px) rotate(3deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.15; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.1); }
`;


const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
`;

const AnimatedElement = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color}10;
  border-radius: 50%;
  filter: blur(1px);
  animation: ${float} ${props => props.$duration}s ease-in-out infinite;
`;


const PulseElement = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: radial-gradient(circle, ${props => props.color}20, transparent);
  border-radius: 50%;
  filter: blur(1px);
  animation: ${pulse} ${props => props.$duration}s ease-in-out infinite;
`;

const RotatingRing = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 2px solid ${props => props.color}15;
  border-radius: 50%;
  filter: blur(0.5px);
  animation: ${rotate} ${props => props.$duration}s linear infinite;
`;

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 107, 107, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 107, 107, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.1;
  filter: blur(1px);
`;

const GradientOrb = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background: radial-gradient(circle, ${props => props.color1}20, ${props => props.color2}10, transparent);
  filter: blur(3px);
  animation: ${float} ${props => props.$duration}s ease-in-out infinite;
`;

const EmptyCircle = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  border: 1px solid ${props => props.color}15;
  background: transparent;
  filter: blur(0.5px);
  animation: ${float} ${props => props.$duration}s ease-in-out infinite;
`;

const AnimatedBackground = () => {
  const elements = [
    { id: 1, x: 10, y: 20, size: 100, color: '#ff6b6b', duration: 6 },
    { id: 2, x: 80, y: 60, size: 150, color: '#64ffda', duration: 8 },
    { id: 3, x: 20, y: 80, size: 80, color: '#00d4ff', duration: 7 },
    { id: 4, x: 70, y: 30, size: 120, color: '#ff6b6b', duration: 9 },
    { id: 5, x: 40, y: 70, size: 90, color: '#64ffda', duration: 5 },
    { id: 6, x: 15, y: 45, size: 110, color: '#ff6b6b', duration: 7 },
    { id: 7, x: 85, y: 25, size: 95, color: '#64ffda', duration: 6 },
    { id: 8, x: 35, y: 15, size: 85, color: '#00d4ff', duration: 8 },
    { id: 9, x: 65, y: 85, size: 105, color: '#ff6b6b', duration: 9 },
    { id: 10, x: 25, y: 55, size: 75, color: '#64ffda', duration: 5 },
    { id: 11, x: 75, y: 45, size: 130, color: '#00d4ff', duration: 7 },
    { id: 12, x: 45, y: 25, size: 90, color: '#ff6b6b', duration: 6 },
  ];


  const pulseElements = [
    { id: 1, x: 30, y: 40, size: 60, color: '#ff6b6b', duration: 4 },
    { id: 2, x: 60, y: 80, size: 80, color: '#64ffda', duration: 6 },
    { id: 3, x: 80, y: 20, size: 40, color: '#00d4ff', duration: 5 },
    { id: 4, x: 20, y: 30, size: 70, color: '#ff6b6b', duration: 7 },
    { id: 5, x: 90, y: 70, size: 50, color: '#64ffda', duration: 5 },
    { id: 6, x: 50, y: 10, size: 65, color: '#00d4ff', duration: 6 },
    { id: 7, x: 10, y: 60, size: 55, color: '#ff6b6b', duration: 8 },
    { id: 8, x: 70, y: 50, size: 75, color: '#64ffda', duration: 4 },
  ];

  const rotatingRings = [
    { id: 1, x: 25, y: 45, size: 200, color: '#ff6b6b', duration: 20 },
    { id: 2, x: 75, y: 25, size: 150, color: '#64ffda', duration: 25 },
    { id: 3, x: 15, y: 75, size: 180, color: '#00d4ff', duration: 30 },
  ];

  const gradientOrbs = [
    { id: 1, x: 50, y: 30, size: 120, color1: '#ff6b6b', color2: '#64ffda', duration: 10 },
    { id: 2, x: 30, y: 60, size: 100, color1: '#64ffda', color2: '#00d4ff', duration: 12 },
    { id: 3, x: 70, y: 70, size: 140, color1: '#00d4ff', color2: '#ff6b6b', duration: 8 },
    { id: 4, x: 15, y: 40, size: 110, color1: '#ff6b6b', color2: '#00d4ff', duration: 9 },
    { id: 5, x: 85, y: 40, size: 95, color1: '#64ffda', color2: '#ff6b6b', duration: 11 },
    { id: 6, x: 40, y: 80, size: 125, color1: '#00d4ff', color2: '#64ffda', duration: 7 },
  ];

  const emptyCircles = [
    { id: 1, x: 25, y: 35, size: 80, color: '#ff6b6b', duration: 6 },
    { id: 2, x: 60, y: 15, size: 60, color: '#64ffda', duration: 8 },
    { id: 3, x: 90, y: 50, size: 70, color: '#00d4ff', duration: 7 },
    { id: 4, x: 5, y: 70, size: 90, color: '#ff6b6b', duration: 9 },
    { id: 5, x: 55, y: 85, size: 65, color: '#64ffda', duration: 5 },
    { id: 6, x: 35, y: 5, size: 75, color: '#00d4ff', duration: 6 },
    { id: 7, x: 80, y: 80, size: 85, color: '#ff6b6b', duration: 8 },
    { id: 8, x: 15, y: 90, size: 55, color: '#64ffda', duration: 7 },
  ];

  return (
    <BackgroundContainer>
      <GridOverlay />
      
      {/* Animated elements */}
      {elements.map((element) => (
        <AnimatedElement
          key={element.id}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.size,
            height: element.size,
          }}
          color={element.color}
          $duration={element.duration}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}


      {/* Pulsating elements */}
      {pulseElements.map((element) => (
        <PulseElement
          key={element.id}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          size={element.size}
          color={element.color}
          $duration={element.duration}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Rotating rings */}
      {rotatingRings.map((ring) => (
        <RotatingRing
          key={ring.id}
          style={{
            left: `${ring.x}%`,
            top: `${ring.y}%`,
            width: ring.size,
            height: ring.size,
          }}
          color={ring.color}
          $duration={ring.duration}
        />
      ))}

      {/* Gradient orbs */}
      {gradientOrbs.map((orb) => (
        <GradientOrb
          key={orb.id}
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
          }}
          color1={orb.color1}
          color2={orb.color2}
          $duration={orb.duration}
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Empty circles */}
      {emptyCircles.map((circle) => (
        <EmptyCircle
          key={circle.id}
          style={{
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            width: circle.size,
            height: circle.size,
          }}
          color={circle.color}
          $duration={circle.duration}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </BackgroundContainer>
  );
};

export default AnimatedBackground;
