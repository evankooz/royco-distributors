import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';


/* -------------------------
   Styled components
   ------------------------- */

const Header = styled.header`
  position: sticky;
  top: 0;
  inset: 0 0 auto 0; /* top:0; left:0; right:0 */
  padding: 1rem 4rem;
  z-index: 1500;
  background: #fff;
  box-shadow: 0 1px 0 rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* container that centers nav content */
const Nav = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

/* Logo/link */
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

/* Make sure the image never exceeds header height */
const LogoImg = styled.img`
  height: calc(100px - 30px); /* keep some vertical padding */
  max-height: 130px;
  width: auto;
  display: block;
`;

/* Menu button for mobile - visually simple but accessible */
const MenuButton = styled.button`
  display: none;
  background: none;
  border: 0;
  padding: 0.5rem;
  cursor: pointer;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
  }
`;

/* Animated hamburger lines */
const Burger = styled.span`
  display: inline-block;
  width: 26px;
  height: 18px;
  position: relative;
`;

/* Desktop nav links */
const Links = styled(motion.ul)<{ $isOpen: boolean }>`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

  a { white-space: nowrap; }

  @media (max-width: 768px) {
    /* mobile drop-down that doesn't change header height */
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    flex-direction: column;
    background: #fff;
    padding: 1rem;
    box-shadow: 0 6px 24px rgba(0,0,0,0.08);
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #222;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.25rem 0.25rem;

  &:hover, &:focus {
    color: var(--accent-color, #005FBF);
  }
`;

/* small sr-only style for accessible label if needed */
const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
`;

/* -------------------------
   Component
   ------------------------- */

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header role="banner" aria-label="Main navigation">
      <Nav role="navigation" aria-label="Primary">
        <Logo to="/" aria-label="Royco Distributors home">
          <LogoImg src="/images/logo.png" alt="Royco Distributors logo" />
        </Logo>

        {/* Desktop links / mobile toggled menu */}
        <Links
          $isOpen={isOpen}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
        >
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </Links>

        {/* Mobile menu button */}
        <MenuButton
          onClick={() => setIsOpen((s) => !s)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <SrOnly>{isOpen ? 'Close menu' : 'Open menu'}</SrOnly>

          <motion.div
            style={{ display: 'flex', alignItems: 'center' }}
            initial={false}
            animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: 0.18 }}
          >
            <Burger aria-hidden>
              {/* three lines drawn with pseudo-approach using inline spans for animation */}
              <motion.span
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: 2,
                  borderRadius: 2,
                  background: '#222',
                  top: 0,
                }}
                animate={isOpen ? { y: 8, rotate: 45 } : { y: 0, rotate: 0 }}
                transition={{ duration: 0.18 }}
              />
              <motion.span
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: 2,
                  borderRadius: 2,
                  background: '#222',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.12 }}
              />
              <motion.span
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: 2,
                  borderRadius: 2,
                  background: '#222',
                  bottom: 0,
                }}
                animate={isOpen ? { y: -8, rotate: -45 } : { y: 0, rotate: 0 }}
                transition={{ duration: 0.18 }}
              />
            </Burger>
          </motion.div>
        </MenuButton>
      </Nav>
    </Header>
  );
}

export default Navbar;
