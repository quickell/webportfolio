import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 5,
      padding: '100px 0',
      background: 'rgba(0, 0, 0, 0.9)'
    }}>
      <div style={{
        maxWidth: '800px',
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
          <div style={{
            fontSize: '8rem',
            fontWeight: 700,
            color: '#ff6b6b',
            marginBottom: '20px',
            textShadow: '0 0 30px rgba(255, 107, 107, 0.5)'
          }}>
            404
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FaExclamationTriangle style={{
            fontSize: '4rem',
            color: '#64ffda',
            marginBottom: '30px'
          }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            marginBottom: '20px',
            color: '#ffffff',
            lineHeight: 1.2
          }}>
            Oops! Page Not Found
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 30px',
              background: 'linear-gradient(135deg, #ff6b6b, #64ffda)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '30px',
              fontSize: '1.1rem',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 20px rgba(255, 107, 107, 0.3)'
            }}
          >
            <FaHome style={{ fontSize: '1.2rem' }} />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            marginTop: '60px',
            padding: '20px',
            background: 'rgba(255, 107, 107, 0.1)',
            borderRadius: '15px',
            border: '1px solid rgba(255, 107, 107, 0.3)'
          }}
        >
          <p style={{
            fontSize: '0.9rem',
            color: '#cccccc',
            margin: 0
          }}>
            Error Code: 404 | Status: Not Found
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
