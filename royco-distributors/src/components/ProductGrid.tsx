import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductName = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  color: #005FBF;
`;

const ProductDescription = styled.p`
  margin: 0;
  color: #666;
`;

const ProductCategory = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: #D22030;
  color: white;
  border-radius: 4px;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

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
    imageUrl: '/images/havoline.png'
  },
  {
    id: 2,
    name: 'Industrial Grease',
    description: 'Heavy-duty grease for industrial machinery and equipment.',
    category: 'Lubricants',
    imageUrl: '/images/excavator.png'
  },
  // Chemicals
  {
    id: 3,
    name: 'Industrial Solvents',
    description: 'Professional-grade solvents for industrial cleaning.',
    category: 'Chemicals',
    imageUrl: '/images/logo-oildri-o.png'
  },
  {
    id: 4,
    name: 'Cleaning Solutions',
    description: 'Industrial cleaning solutions for all surfaces.',
    category: 'Chemicals',
    imageUrl: '/images/purusoil.png'
  },
  // Coolants
  {
    id: 5,
    name: 'Extended Life Antifreeze',
    description: 'Long-lasting antifreeze and coolant solution.',
    category: 'Coolants',
    imageUrl: '/images/product5.webp'
  },
  {
    id: 6,
    name: 'Heavy-Duty Coolant',
    description: 'Premium coolant for heavy-duty diesel engines.',
    category: 'Coolants',
    imageUrl: '/images/servicepro.png'
  },
  // Absorbents
  {
    id: 7,
    name: 'Universal Absorbent Pads',
    description: 'Quick-absorbing pads for spill containment.',
    category: 'Absorbents',
    imageUrl: '/images/product7.webp'
  },
  {
    id: 8,
    name: 'Oil-Only Socks',
    description: 'Specialized absorbents for oil-based spills.',
    category: 'Absorbents',
    imageUrl: '/images/product8.webp'
  },
  // Racing Fuels
  {
    id: 9,
    name: 'Race Fuel Additive',
    description: 'Performance-enhancing fuel treatment for racing applications.',
    category: 'Racing Fuels & Treatments',
    imageUrl: '/images/car.png'
  },
  {
    id: 10,
    name: 'Octane Booster',
    description: 'Professional-grade octane enhancement solution.',
    category: 'Racing Fuels & Treatments',
    imageUrl: '/images/product10.webp'
  },
  // Auto Accessories
  {
    id: 11,
    name: 'Filter Kit',
    description: 'Complete filter maintenance kit for vehicles.',
    category: 'Auto Accessories',
    imageUrl: '/images/product11.webp'
  },
  {
    id: 12,
    name: 'Battery Charger',
    description: 'Professional-grade battery charging system.',
    category: 'Auto Accessories',
    imageUrl: '/images/purusbattery.png'
  }
];

export default function ProductGrid({ featured = false, selectedCategory }: ProductGridProps) {
  const filteredProducts = allProducts.filter(product => 
    featured ? true : !selectedCategory || product.category === selectedCategory
  );
  const products = featured ? filteredProducts.slice(0, 3) : filteredProducts;
  
  return (
    <Grid>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}  // Changed from whileInView
          transition={{ duration: 0.5, delay: index * 0.1 }}  // Added stagger delay
        >
          <ProductImage
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
          />
          <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductCategory>{product.category}</ProductCategory>
          </ProductInfo>
        </ProductCard>
      ))}
    </Grid>
  );
}