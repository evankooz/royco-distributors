import React from 'react';
import HeroSlideshow from '../components/HeroSlideshow';
import ProductGrid from '../components/ProductGrid';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Full-width Hero Slideshow */}
      <HeroSlideshow />

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h1>Welcome to Royco Distributors</h1>
          <p className="subtitle">New England's Premier Industrial Solutions Provider</p>
          <p className="intro-text">
            Since our beginning, we've been delivering top-quality industrial solutions 
            and lubricants to businesses across New England. Our commitment to excellence 
            and customer satisfaction has made us a trusted partner in the industry.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Explore our most popular industrial solutions</p>
        </div>
        <ProductGrid featured={true} />
        <div className="view-all">
          <Link to="/products" className="btn-primary">View All Products</Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Find Your Solution?</h2>
          <p>Browse our catalog or contact us for personalized service</p>
          <div className="cta-buttons">
            <Link to="/products" className="btn-primary">View Products</Link>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;