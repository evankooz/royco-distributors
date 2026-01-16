import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: minmax(0, 1fr);
    padding: 0 1rem;
    gap: 1rem;
  }
`;

const ProductCard = styled(motion.div)`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
`;

const ProductInfo = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.h3`
  margin: 0.5rem 0 0.75rem;
  font-size: 1.2rem;
  color: #005FBF;
  font-weight: 600;
`;

const ProductDescription = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  flex: 1;
`;

const ProductCategory = styled.span`
  display: inline-block;
  padding: 0.4rem 0.8rem;
  background: #E94444;
  color: white;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  width: fit-content;
`;

const base = import.meta.env.BASE_URL;

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
}

interface ProductGridProps {
  featured?: boolean;
  selectedCategory?: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCardComponent: React.FC<ProductCardProps> = ({ product, index }) => (
  <ProductCard
    key={product.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <ProductImage
      src={product.imageUrl}
      alt={product.name}
      loading="lazy"
    />
    <ProductInfo>
      <ProductCategory>{product.category}</ProductCategory>
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
    </ProductInfo>
  </ProductCard>
);

const MemoizedProductCard = React.memo(ProductCardComponent);

export const productCategories = [
  {
    id: 'lubricants',
    name: 'Lubricants',
    description: 'High-quality industrial and automotive lubricants'
  },
  {
    id: 'chemicals',
    name: 'Chemicals',
    description: 'Industrial-grade chemical solutions'
  },
  {
    id: 'coolants',
    name: 'Coolants',
    description: 'Engine coolants and antifreeze solutions'
  },
  {
    id: 'absorbents',
    name: 'Absorbents',
    description: 'Industrial spill control and absorption products'
  },
  {
    id: 'racing-fuels',
    name: 'Racing Fuels & Treatments',
    description: 'High-performance racing fuels and fuel treatments'
  },
  {
    id: 'auto-accessories',
    name: 'Auto Accessories',
    description: 'Automotive parts and accessories'
  }
];

const allProducts: Product[] = [
  // Lubricants
  {
    id: 1,
    name: 'Premium Motor Oil',
    description: 'High-performance synthetic motor oil for superior engine protection.',
    category: 'Lubricants',
    imageUrl: `${base}images/havoline.png`
  },
  {
    id: 2,
    name: 'Industrial Grease',
    description: 'Heavy-duty grease for industrial machinery and equipment.',
    category: 'Lubricants',
    imageUrl: `${base}images/excavator.png`
  },
  // Chemicals
  {
    id: 3,
    name: 'Industrial Solvents',
    description: 'Professional-grade solvents for industrial cleaning.',
    category: 'Chemicals',
    imageUrl: `${base}images/logo-oildri-o.png`
  },
  {
    id: 4,
    name: 'Cleaning Solutions',
    description: 'Industrial cleaning solutions for all surfaces.',
    category: 'Chemicals',
    imageUrl: `${base}images/purusoil.png`
  },
  // Coolants
  {
    id: 5,
    name: 'Extended Life Antifreeze',
    description: 'Long-lasting antifreeze and coolant solution.',
    category: 'Coolants',
    imageUrl: `${base}images/product5.webp`
  },
  {
    id: 6,
    name: 'Heavy-Duty Coolant',
    description: 'Premium coolant for heavy-duty diesel engines.',
    category: 'Coolants',
    imageUrl: `${base}images/servicepro.png`
  },
  // Absorbents
  {
    id: 7,
    name: 'Universal Absorbent Pads',
    description: 'Quick-absorbing pads for spill containment.',
    category: 'Absorbents',
    imageUrl: `${base}images/product7.webp`
  },
  {
    id: 8,
    name: 'Oil-Only Socks',
    description: 'Specialized absorbents for oil-based spills.',
    category: 'Absorbents',
    imageUrl: `${base}images/product8.webp`
  },
  // Racing Fuels
  {
    id: 9,
    name: 'Race Fuel Additive',
    description: 'Performance-enhancing fuel treatment for racing applications.',
    category: 'Racing Fuels & Treatments',
    imageUrl: `${base}images/car.png`
  },
  {
    id: 10,
    name: 'Octane Booster',
    description: 'Professional-grade octane enhancement solution.',
    category: 'Racing Fuels & Treatments',
    imageUrl: `${base}images/product10.webp`
  },
  // Auto Accessories
  {
    id: 11,
    name: 'Filter Kit',
    description: 'Complete filter maintenance kit for vehicles.',
    category: 'Auto Accessories',
    imageUrl: `${base}images/product11.webp`
  },
  {
    id: 12,
    name: 'Battery Charger',
    description: 'Professional-grade battery charging system.',
    category: 'Auto Accessories',
    imageUrl: `${base}images/purusbattery.png`
  }
];

export default function ProductGrid({ featured = false, selectedCategory }: ProductGridProps) {
  const filteredProducts = allProducts.filter(product => 
    featured ? true : !selectedCategory || product.category === selectedCategory
  );
  const products = featured ? filteredProducts.slice(0, 3) : filteredProducts;

  if (products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 2rem', color: '#666' }}>
        <p style={{ fontSize: '1.1rem' }}>No products found in this category.</p>
      </div>
    );
  }
  
  return (
    <Grid>
      {products.map((product, index) => (
        <MemoizedProductCard key={product.id} product={product} index={index} />
      ))}
    </Grid>
  );
}
