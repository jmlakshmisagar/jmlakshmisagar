'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import './arrows.css';

import TopSection from '../sections/top';
import RightSection from '../sections/right';
import BottomSection from '../sections/bottom';
import LeftSection from '../sections/left';

export default function Arrows() {
  const [activeArrows, setActiveArrows] = useState<string[]>([]);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const arrows = [
    { 
      direction: 'right', 
      rotation: 0, 
      titleRotation: -90,
      tooltip: "Explore my technical skills & expertise"
    },
    { 
      direction: 'left', 
      rotation: 180, 
      titleRotation: 90,
      tooltip: "Browse my featured projects"
    },
    { 
      direction: 'bottom', 
      rotation: 90, 
      titleRotation: 0,
      tooltip: "View my professional experience"
    },
    { 
      direction: 'top', 
      rotation: 270, 
      titleRotation: 0,
      tooltip: "Check my educational background"
    }
  ];

  useEffect(() => {
    // Delay arrows until after main title (3.5s), subtitle (4s), and icons (4.5s + stagger)
    const startDelay = 7000; // Start after all other animations

    setTimeout(() => {
      const directions = arrows.map(arrow => arrow.direction);
      directions.forEach((direction, index) => {
        setTimeout(() => {
          setActiveArrows(prev => [...prev, direction]);
        }, index * 500); // Increased delay between arrows for better visibility
      });
    }, startDelay);
  }, []);

  const handleArrowClick = (direction: string) => {
    setSelectedSection(direction);
  };

  const handleClose = () => {
    setSelectedSection(null);
  };

  return (
    <>
      <div className="arrows-container">
        {arrows.map(({ direction, rotation, tooltip }) => (
          activeArrows.includes(direction) && (
            <motion.div
              key={direction}
              className={`arrow-wrapper arrow-${direction} tooltip-wrapper`}
              data-tooltip={tooltip}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut"
              }}
              onClick={() => handleArrowClick(direction)}
            >
              <motion.div 
                className="arrow-container"
                animate={{ 
                  x: direction === 'left' || direction === 'right' ? [0, 10, 0] : 0,
                  y: direction === 'top' || direction === 'bottom' ? [0, 10, 0] : 0 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/images/right-arrow.svg"
                  alt={direction}
                  width={50}
                  height={50}
                  className="arrow-svg"
                  style={{ transform: `rotate(${rotation}deg)` }}
                />
              </motion.div>
            </motion.div>
          )
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedSection === 'right' && <RightSection onClose={handleClose} />}
        {selectedSection === 'left' && <LeftSection onClose={handleClose} />}
        {selectedSection === 'bottom' && <BottomSection onClose={handleClose} />}
        {selectedSection === 'top' && <TopSection onClose={handleClose} />}
      </AnimatePresence>
    </>
  );
}