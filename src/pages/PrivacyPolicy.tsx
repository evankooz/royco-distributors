import React from 'react';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-container">
      <section className="privacy-header">
        <h1>Privacy Policy</h1>
        <p>Last updated: October 2025</p>
      </section>

      <section className="privacy-content">
        <p>
          At <strong>Royco Distributors</strong>, your privacy is important to us. 
          This Privacy Policy explains how we collect, use, and protect your personal information 
          when you visit our website (<a href="https://roycodistributors.com" target="_blank" rel="noopener noreferrer">https://roycodistributors.com</a>) 
          or contact us through our online form.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following personal information when you fill out our contact form:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name</li>
          <li>Message details</li>
        </ul>

        <p>
          In addition, our website uses embedded Google Maps to display our business location. 
          Google may collect your IP address and other data as described in their Privacy Policy.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>Your information is used solely for the following purposes:</p>
        <ul>
          <li>To respond to your inquiries and messages</li>
          <li>To provide customer service and support</li>
          <li>To improve our website and services</li>
        </ul>
        <p>We do <strong>not</strong> sell, rent, or trade your information to third parties.</p>

        <h2>3. Cookies and Third-Party Services</h2>
        <p>
          Our site uses embedded Google Maps, which may use cookies or similar tracking technologies 
          to provide better service and analytics. You can learn more about how Google handles data here:
        </p>
        <a 
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="privacy-link"
        >
          Google Privacy Policy
        </a>

        <h2>4. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your information from unauthorized access, 
          alteration, disclosure, or destruction. However, please note that no method of transmission 
          over the Internet is completely secure.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          You have the right to request access to, correction of, or deletion of your personal information 
          that we hold. To exercise these rights, please contact us using the information below.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p>
          <strong>Royco Distributors</strong><br />
          211 Colony Rd<br />
          Gardner, MA 01440<br />
          📧 <a href="mailto:info@roycodistributors.com" className="privacy-link">info@roycodistributors.com</a><br />
          ☎️ (978) 632-8151
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
