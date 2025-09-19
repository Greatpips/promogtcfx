// src/components/MoveFromRight.js

import React from 'react';
import { useInView } from 'react-intersection-observer';

const MoveFromRight = ({ children, delay = 0, duration = 1000, threshold = 0.2, triggerOnce = false }) => {
  const { ref, inView } = useInView({
    triggerOnce: triggerOnce, // By default, this is 'false', meaning it will re-trigger
    threshold: threshold,
  });

  return (
    <div
      ref={ref}
      className={`
        transition-all ease-out transform
        ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}
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

export default MoveFromRight;