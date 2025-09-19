// src/components/FadeIn.js

import React from 'react';
import { useInView } from 'react-intersection-observer';

const FadeIn = ({ children, delay = 0, duration = 1000, threshold = 0.2 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Changed to false to re-trigger every time it enters the viewport
    threshold: threshold,
  });

  return (
    <div
      ref={ref}
      className={`
        transition-all ease-out transform
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;