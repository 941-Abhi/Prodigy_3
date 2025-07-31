import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid.tsx';
import { products } from '../data/products.ts';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
        </h1>
        <p className="text-gray-600">
          {searchQuery 
            ? `Found ${filteredProducts.length} products matching your search`
            : 'Browse our complete collection of quality products'
          }
        </p>
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default Products; 