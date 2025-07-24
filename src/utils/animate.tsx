
import React, { useEffect } from 'react';

export const useAnimateOnScroll = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animated-element');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
};

export const AnimationWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  return (
    <div 
      className={`animated-element ${className}`} 
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};
