// Utility for smooth scrolling to sections
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80; // Fixed header height
    const elementPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};
