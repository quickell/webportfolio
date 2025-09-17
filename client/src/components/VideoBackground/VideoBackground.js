import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(5deg); }
  50% { transform: translateY(-10px) rotate(-5deg); }
  75% { transform: translateY(-15px) rotate(3deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
`;

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => props.$isLoaded ? props.opacity : 0};
  transition: opacity 1s ease-in-out;
  filter: ${props => props.filter};
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 107, 107, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(100, 255, 218, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(0, 212, 255, 0.15) 0%, transparent 50%);
  z-index: 0;
`;

const FallbackBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  z-index: 0;
`;

const FallbackAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 10%;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255, 107, 107, 0.1), transparent);
    border-radius: 50%;
    animation: ${float} 8s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 30%;
    right: 15%;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(100, 255, 218, 0.1), transparent);
    border-radius: 50%;
    animation: ${pulse} 6s ease-in-out infinite;
  }
`;

const LoadingIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #64ffda;
  font-size: 1.2rem;
  z-index: 2;
  opacity: ${props => props.$show ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const DebugInfo = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.8);
  color: #64ffda;
  padding: 10px;
  border-radius: 5px;
  font-size: 12px;
  z-index: 9999;
  max-width: 300px;
`;

const VideoBackground = ({ 
  opacity = 0.3, 
  filter = 'blur(0px)',
  enableOverlay = true,
  showLoading = true,
  debug = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [debugInfo, setDebugInfo] = useState({});
  const videoRef = useRef(null);

  const updateDebugInfo = (info) => {
    setDebugInfo(prev => ({ ...prev, ...info }));
  };

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    updateDebugInfo({ status: 'loaded', timestamp: new Date().toLocaleTimeString() });
    setIsLoaded(true);
    setIsLoading(false);
  };

  const handleVideoError = (error) => {
    console.error('Video loading error:', error);
    updateDebugInfo({ 
      status: 'error', 
      error: error.target?.error?.message || 'Unknown error',
      timestamp: new Date().toLocaleTimeString()
    });
    setHasError(true);
    setIsLoading(false);
  };

  const handleVideoLoadStart = () => {
    console.log('Video loading started');
    updateDebugInfo({ status: 'loading', timestamp: new Date().toLocaleTimeString() });
    setIsLoading(true);
  };

  const handleVideoCanPlay = () => {
    console.log('Video can play');
    updateDebugInfo({ status: 'can play', timestamp: new Date().toLocaleTimeString() });
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Error playing video:', error);
        updateDebugInfo({ playError: error.message });
      });
    }
  };

  useEffect(() => {
    // Check video support
    const video = document.createElement('video');
    const canPlayMP4 = video.canPlayType('video/mp4');
    const canPlayWebM = video.canPlayType('video/webm');
    
    console.log('Video support - MP4:', canPlayMP4, 'WebM:', canPlayWebM);
    updateDebugInfo({ 
      mp4Support: canPlayMP4, 
      webmSupport: canPlayWebM,
      videoPath: '/background.mp4'
    });
    
    if (!canPlayMP4 && !canPlayWebM) {
      console.log('No video support detected');
      updateDebugInfo({ status: 'no support' });
      setHasError(true);
      setIsLoading(false);
    }
  }, []);

  if (hasError) {
    console.log('Showing fallback background');
    return (
      <VideoContainer>
        <FallbackBackground />
        <FallbackAnimation />
        {enableOverlay && <VideoOverlay />}
        {debug && (
          <DebugInfo>
            <div>Status: Fallback (Error)</div>
            <div>MP4 Support: {debugInfo.mp4Support || 'Unknown'}</div>
            <div>WebM Support: {debugInfo.webmSupport || 'Unknown'}</div>
            <div>Error: {debugInfo.error || 'Unknown'}</div>
            <div>Time: {debugInfo.timestamp || 'Unknown'}</div>
          </DebugInfo>
        )}
      </VideoContainer>
    );
  }

  return (
    <VideoContainer>
      <LoadingIndicator $show={showLoading && isLoading}>
        Loading video background...
      </LoadingIndicator>
      
      <Video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline
        $isLoaded={isLoaded}
        opacity={opacity}
        filter={filter}
        onLoadStart={handleVideoLoadStart}
        onLoadedData={handleVideoLoad}
        onCanPlay={handleVideoCanPlay}
        onError={handleVideoError}
      >
        <source src="/background.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <FallbackBackground />
        <FallbackAnimation />
      </Video>
      
      {enableOverlay && <VideoOverlay />}
      
      {debug && (
        <DebugInfo>
          <div>Status: {debugInfo.status || 'initializing'}</div>
          <div>MP4 Support: {debugInfo.mp4Support || 'Unknown'}</div>
          <div>WebM Support: {debugInfo.webmSupport || 'Unknown'}</div>
          <div>Video Path: {debugInfo.videoPath || 'Unknown'}</div>
          <div>Loaded: {isLoaded ? 'Yes' : 'No'}</div>
          <div>Loading: {isLoading ? 'Yes' : 'No'}</div>
          <div>Time: {debugInfo.timestamp || 'Unknown'}</div>
          <div>File Size: 91MB</div>
        </DebugInfo>
      )}
    </VideoContainer>
  );
};

export default VideoBackground;
