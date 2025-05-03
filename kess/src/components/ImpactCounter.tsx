'use client';

import React, { useState, useEffect } from 'react';

interface ImpactCounterProps {
  value: number;
  prefix: string;
  suffix: string;
  duration?: number;
}

const ImpactCounter: React.FC<ImpactCounterProps> = ({ 
  value, 
  prefix = '', 
  suffix = '', 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      }, 
      { threshold: 0.1 }
    );
    
    const currentRef = document.getElementById(`counter-${value}`);
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [value]);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const increment = Math.ceil(value / 50);
    const step = timestamp => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const currentCount = Math.floor(progress * value);
      
      setCount(progress < 1 ? Math.min(currentCount, value) : value);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [value, duration, isVisible]);
  
  const formattedCount = count.toLocaleString();
  
  return (
    <span id={`counter-${value}`}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
};

export default ImpactCounter;