import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from './FeaturedProducts';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Image */}
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3">
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          
          {product.customizable && (
            <div className="absolute top-3 right-3">
              <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2 py-1 rounded-full">
                Customizable
              </span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
              <Heart className="w-4 h-4 text-gray-600" />
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 p-2 rounded-full shadow-lg transition-colors">
              <ShoppingCart className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-purple-600">
            ${product.price}
          </div>
          <Link to={`/product/${product.id}`}>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};