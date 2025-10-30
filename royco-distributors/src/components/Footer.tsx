import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: #005FBF;
  color: #fff;
  padding: 4rem 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled(motion.div)`
  h3 {
    color: #fff;
    margin: 0 0 1rem;
    font-size: 1.25rem;
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

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>Contact Us</h3>
          <ContactInfo>
            <a href="tel:+9786328151">978-632-8151</a>
            <a href="mailto:info@roycodistributors.com">
              info@roycodistributors.com
            </a>
            <p>211 Colony Road,<br />Gardner, MA 01440</p>
          </ContactInfo>
        </FooterSection>

        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3>Quick Links</h3>
          <QuickLinks>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </QuickLinks>
        </FooterSection>

        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3>Connect With Us</h3>
          <p>Follow us on social media for the latest updates and news.</p>
          <SocialLinks>
            <a href="https://facebook.com" aria-label="Facebook">📱</a>
            <a href="https://twitter.com" aria-label="Twitter">📱</a>
            <a href="https://linkedin.com" aria-label="LinkedIn">📱</a>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>&copy; {currentYear} Royco Distributors. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
}