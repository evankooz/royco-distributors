import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: #005FBF;
  color: #fff;
  padding: 4rem 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px; 
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }
`;

const FooterSection = styled(motion.div)`
  flex: 1;
  min-width: 250px;

  h3 {
    color: #fff;
    margin: 0 0 1rem;
    font-size: 1.4rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #D22030;
    }
  }

  p {
    margin: 0.5rem 0 0;
  }
`;

const QuickLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #D22030;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        {/* Contact Section */}
        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>Contact Us</h3>
          <ContactInfo>
            <a href="tel:+19786328151">978-632-8151</a>
            <a href="mailto:info@roycodistributors.com">
              info@roycodistributors.com
            </a>
            <p>
              211 Colony Road,<br />Gardner, MA 01440
            </p>
          </ContactInfo>
        </FooterSection>

        {/* Quick Links */}
        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3>Quick Links</h3>
          <QuickLinks>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </QuickLinks>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>&copy; {currentYear} Royco Distributors. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
}
