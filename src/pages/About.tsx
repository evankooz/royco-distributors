// src/pages/About.tsx
import '../styles/About.css';

const base = import.meta.env.BASE_URL; // fixes image paths on GH Pages

const About: React.FC = () => {
  const stats = [
    { number: "30+", label: "Years of Excellence", description: "Delivering top-quality industrial solutions since 1993." },
    { number: "30+", label: "Bulk Products", description: "Comprehensive range of lubricants, chemicals, and supplies." },
    { number: "80+", label: "Years Combined Experience", description: "Our team brings decades of industry expertise." },
    { number: "6", label: "States Served", description: "Serving MA, RI, CT, NH, VT, and ME with reliable distribution." },
  ];

  const features = [
    { title: "Authorized Distributor", description: "Chevron Lubricants Repackaging Distributor with hundreds of packaged solutions." },
    { title: "Expert Service", description: "Specialized in waste oil systems, installations, and service." },
    { title: "Complete Solutions", description: "From antifreeze to diesel pumps and lube equipment." },
    { title: "Trusted Partner", description: "Fast shipping and reliable service across New England." },
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Who We Are</h1>
        <p className="hero-text">
          For over 25 years, Royco Distributors has been New England's trusted partner for
          high-quality lubricants and industrial solutions. We’re committed to delivering
          excellence, reliability, and service that keeps your business running smoothly.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Royco Distributors, our mission is to provide dependable, high-quality products
          that help businesses operate efficiently. We believe in long-term partnerships,
          offering personalized solutions backed by expert knowledge and responsive service.
          Our team works tirelessly to ensure you receive the right product, at the right time,
          every time.
        </p>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <div className="stat-header">
                <h2>{stat.number}</h2>
                <h3>{stat.label}</h3>
              </div>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          {features.map((feature, i) => (
            <div key={i} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Logos */}
      <section className="partners-section">
        <h2>Our Trusted Partners</h2>
        <div className="partners-logos">
          <img src={`${base}images/havoline_logo.png`} alt="Havoline" />
          <img src={`${base}images/servicepro_logo.png`} alt="ServicePro" />
          <img src={`${base}images/purus_logo.png`} alt="Purus Oil" />
          <img src={`${base}images/oildri_logo.png`} alt="Oil Dri" />
          <img src={`${base}images/chevron_logo.png`} alt="Chevron" />
        </div>
      </section>
    </div>
  );
};

export default About;
