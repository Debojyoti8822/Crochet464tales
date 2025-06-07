
import React from 'react';
import { ProductCard } from './ProductCard';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  customizable: boolean;
  description: string;
}

export const FeaturedProducts = () => {
  const featuredProducts: Product[] = [
    {
      id: '1',
      name: 'Adorable Teddy Bear',
      price: 25,
      image: '/placeholder.svg?height=300&width=300',
      category: 'Toys',
      customizable: true,
      description: 'Soft and cuddly teddy bear, perfect for all ages'
    },
    {
      id: '2',
      name: 'Cozy Winter Scarf',
      price: 35,
      image: '/placeholder.svg?height=300&width=300',
      category: 'Wearables',
      customizable: true,
      description: 'Warm and stylish scarf for cold days'
    },
    {
      id: '3',
      name: 'Decorative Plant Holder',
      price: 20,
      image: '/placeholder.svg?height=300&width=300',
      category: 'Home Decor',
      customizable: false,
      description: 'Beautiful holder for your favorite plants'
    },
    {
      id: '4',
      name: 'Baby Gift Set',
      price: 45,
      image: '/placeholder.svg?height=300&width=300',
      category: 'Gift Sets',
      customizable: true,
      description: 'Complete set for new arrivals'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Creations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular handmade pieces, each crafted with love and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};
