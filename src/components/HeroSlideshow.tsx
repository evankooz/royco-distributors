import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import slide1 from '../assets/slides/royco-building.png';
import slide2 from '../assets/slides/royco-fleet.png';
import slide3 from '../assets/slides/royco-storage.png';

/* -----------------------------
   Styled Components
------------------------------ */

const SlideshowContainer = styled.section`
  position: relative;
  width: 100%;
  height: calc(35vh - var(--navbar-height));
  overflow: hidden;
  background-color: #1a1a1a;
`;

const Slide = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.5) 40%,
      rgba(0, 0, 0, 0.7)
    );
    z-index: 1;
  }
`;

const SlideContent = styled.div`
  position: relative;
  color: #fff;
  text-align: center;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  max-width: 1200px;
  padding: 0 2rem;
  transform: translateY(1rem);
`;

const SlideTitle = styled.h1`
  font-size: 4rem;
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const SlideControls = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  gap: 0.5rem;
  z-index: 3;
`;

const DotButton = styled.button<{ $isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #fff;
  background: ${({ $isActive }) => ($isActive ? '#fff' : 'transparent')};
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;

  &:hover {
    transform: scale(1.2);
  }
`;

/* -----------------------------
   Component
------------------------------ */

export default function HeroSlideshow() {
  const slides = [
    { image: slide1, text: 'Your Trusted Distribution Partner' },
    { image: slide2, text: 'Quality. Service. Value.' },
    { image: slide3, text: 'Industrial Equipment & Supplies' },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <SlideshowContainer>
      <AnimatePresence mode="wait">
        <Slide
          key={index}
          style={{ backgroundImage: `url(${slides[index].image})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <SlideContent>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <SlideTitle>{slides[index].text}</SlideTitle>
            </motion.div>
          </SlideContent>
        </Slide>
      </AnimatePresence>

      <SlideControls>
        {slides.map((_, i) => (
          <DotButton
            key={i}
            $isActive={i === index}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </SlideControls>
    </SlideshowContainer>
  );
}
