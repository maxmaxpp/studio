'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Star = ({ x, duration, delay }: { x: string; duration: number; delay: number }) => (
  <motion.div
    className="absolute top-0"
    style={{
      left: x,
    }}
    initial={{ y: '-20vh', opacity: 0 }}
    animate={{ y: '120vh', opacity: [0, 1, 1, 0] }}
    transition={{
      duration,
      delay,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
    }}
  >
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-2 h-auto text-primary"
    >
      <path
        d="M5 0L6.12257 3.87743L10 5L6.12257 6.12257L5 10L3.87743 6.12257L0 5L3.87743 3.87743L5 0Z"
        fill="currentColor"
        fillOpacity="0.8"
      />
    </svg>
  </motion.div>
);

const FallingStars = ({ numberOfStars = 30 }: { numberOfStars?: number }) => {
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: numberOfStars }).map((_, i) => {
        const x = `${Math.random() * 100}vw`;
        const duration = 5 + Math.random() * 5; // 5 to 10 seconds
        const delay = Math.random() * 10; // 0 to 10 seconds
        return <Star key={i} x={x} duration={duration} delay={delay} />;
      });
      setStars(newStars);
    };

    generateStars();
  }, [numberOfStars]);

  return <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">{stars}</div>;
};

export default FallingStars;
