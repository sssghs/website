import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[], observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // remove after reveal
          }
        });
      },
      {
        threshold: 0.1, // adjust based on when you want the animation to trigger
      }
    );

    const elements = document.querySelectorAll<HTMLElement>(
      '.animate-on-scroll, .staggered-item'
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation;
