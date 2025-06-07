
import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Handmade
            </span>
            <br />
            <span className="text-gray-800">with Love</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Discover unique crochet creations crafted with passion. From adorable toys to 
            cozy wearables, each piece tells a story of creativity and care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Shop Now
            </button>
            <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300">
              Custom Orders
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div>
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600">100+</div>
              <div className="text-gray-600">Unique Designs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">5★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-pink-200 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute top-40 right-32 w-16 h-16 bg-purple-200 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-32 w-12 h-12 bg-blue-200 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};
