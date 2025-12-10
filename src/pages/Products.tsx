import { useState } from 'react';
import ProductGrid, { productCategories } from '../components/ProductGrid';
import '../styles/Products.css';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  return (
    <div className="products-container">
      <section className="products-header">
        <h1>Our Products</h1>
        <p>Browse our extensive catalog of industrial solutions and lubricants</p>
      </section>

      <section className="products-categories">
        <h2>Select A Category</h2>
        <div className="category-grid">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className={`category-card ${selectedCategory === category.name ? 'active' : ''}`}
              onClick={() => setSelectedCategory(
                selectedCategory === category.name ? undefined : category.name
              )}
            >
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="products-list">
        <h2>{selectedCategory || 'All Products'}</h2>
        <ProductGrid selectedCategory={selectedCategory} />
      </section>
    </div>
  );
};

export default Products;