import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const buttonStyle = {
    display: isVisible ? 'block' : 'none',
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '1000',
    background: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    textAlign: 'center',
    fontSize: '24px',
    cursor: 'pointer',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'opacity 0.4s, visibility 0.4s',
    opacity: isVisible ? '1' : '0',
    visibility: isVisible ? 'visible' : 'hidden',
  };

  return (
    <div className="scroll-to-top" style={buttonStyle} onClick={scrollToTop}>
      &uarr;
    </div>
  );
};

export default ScrollToTopButton;
