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
        <div className="categories-wrapper">
          <h2>Shop by Category</h2>
          <p className="categories-subtitle">Select a category to filter products</p>
          <div className="category-grid">
            {productCategories.map((category) => (
              <div
                key={category.id}
                className={`category-card ${selectedCategory === category.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.name ? undefined : category.name
                )}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedCategory(
                      selectedCategory === category.name ? undefined : category.name
                    );
                  }
                }}
              >
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <div className="category-badge">
                  {selectedCategory === category.name ? 'Selected' : 'View'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="products-list">
        <div className="products-list-header">
          <h2>{selectedCategory ? `${selectedCategory} Products` : 'All Products'}</h2>
          {selectedCategory && (
            <button 
              className="clear-filter-btn"
              onClick={() => setSelectedCategory(undefined)}
            >
              Clear Filter
            </button>
          )}
        </div>
        <ProductGrid selectedCategory={selectedCategory} />
      </section>
    </div>
  );
};

export default Products;