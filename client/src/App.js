import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import MyPC from './components/MyPC/MyPC';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import VideoBackground from './components/VideoBackground/VideoBackground';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  position: relative;
`;

const MainContent = styled.main`
  padding-top: 80px; // Account for fixed header
  position: relative;
  z-index: 10;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <VideoBackground 
          opacity={0.6}
          filter="blur(0.5px) brightness(0.9)"
          enableOverlay={true}
          showLoading={true}
          debug={false}
        />
        <AnimatedBackground />
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <MyPC />
                <Contact />
              </>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
