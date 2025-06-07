
import React from 'react';
import { Heart, Star, Users } from 'lucide-react';

export const AboutPreview = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/placeholder.svg?height=500&width=500" 
                alt="Crafter at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Made with Love</div>
                  <div className="text-sm text-gray-600">Every single stitch</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Our Story</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Crafting Dreams, One Stitch at a Time
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Welcome to Croc.het464, where creativity meets craftsmanship. What started as a 
              personal passion for crochet has blossomed into a journey of bringing joy and 
              comfort to homes around the world.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every piece is carefully handcrafted with premium materials and attention to detail. 
              From cuddly toys that become lifelong companions to stylish accessories that add 
              warmth to your wardrobe, each creation carries a piece of our heart.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">3+</div>
                <div className="text-sm text-gray-600">Years of Crafting</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">1000+</div>
                <div className="text-sm text-gray-600">Items Created</div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
