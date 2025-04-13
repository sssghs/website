
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      // Basic animation on scroll
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const position = (element as HTMLElement).getBoundingClientRect();
        
        // Check if element is in viewport
        if (position.top < window.innerHeight - 100) {
          element.classList.add('visible');
        }
      });

      // For staggered animations
      const staggeredContainers = document.querySelectorAll('.staggered-container');
      
      staggeredContainers.forEach((container) => {
        const position = (container as HTMLElement).getBoundingClientRect();
        
        if (position.top < window.innerHeight - 80) {
          const items = container.querySelectorAll('.staggered-item');
          
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('visible');
            }, 100 * index);
          });
        }
      });
      
      // Handle directional slide animations
      ['slide-in-left', 'slide-in-right', 'scale-in', 'rotate-in', 'fade-in-fast', 'elastic-in', 'blur-in'].forEach(className => {
        const slidingElements = document.querySelectorAll(`.${className}`);
        
        slidingElements.forEach((element) => {
          const position = (element as HTMLElement).getBoundingClientRect();
          
          if (position.top < window.innerHeight - 60) {
            element.classList.add('visible');
          }
        });
      });
      
      // Enhanced scroll reveal animations
      const revealElements = document.querySelectorAll('.scroll-reveal');
      
      revealElements.forEach((element) => {
        const position = (element as HTMLElement).getBoundingClientRect();
        const isVisible = position.top < window.innerHeight - 50;
        
        if (isVisible) {
          element.classList.add('reveal-visible');
        }
      });
      
      // Parallax scroll effect
      const parallaxElements = document.querySelectorAll('.parallax-scroll');
      
      parallaxElements.forEach((element) => {
        const position = (element as HTMLElement).getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const speed = element.getAttribute('data-speed') || '0.2';
        
        if (position.top < window.innerHeight && position.bottom > 0) {
          const translateY = scrollPosition * parseFloat(speed);
          (element as HTMLElement).style.transform = `translateY(${translateY}px)`;
        }
      });
    };
    
    // Run once on load
    setTimeout(handleScroll, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initialize tilt effect for 3D cards
    const tiltCards = document.querySelectorAll('.tilt-card');
    
    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const cardRect = (card as HTMLElement).getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        const angleY = (mouseEvent.clientX - cardCenterX) / 10;
        const angleX = (cardCenterY - mouseEvent.clientY) / 10;
        
        (card as HTMLElement).style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      });
      
      card.addEventListener('mouseleave', () => {
        (card as HTMLElement).style.transform = 'rotateX(0) rotateY(0)';
      });
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
