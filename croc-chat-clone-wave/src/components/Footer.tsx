
import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">C</span>
              </div>
              <span className="text-2xl font-bold">Croc.het464</span>
            </div>
            <p className="text-purple-200 mb-4 max-w-md">
              Handmade with love. Every stitch tells a story, every creation brings joy. 
              Discover unique crochet pieces crafted with passion and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/croc.het464"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@crochet464.com"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+1234567890"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-purple-200">
              <li><a href="/shop" className="hover:text-white transition-colors">Shop All</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/faqs" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2 text-purple-200">
              <li><a href="/shop?category=toys" className="hover:text-white transition-colors">Toys</a></li>
              <li><a href="/shop?category=wearables" className="hover:text-white transition-colors">Wearables</a></li>
              <li><a href="/shop?category=home-decor" className="hover:text-white transition-colors">Home Decor</a></li>
              <li><a href="/shop?category=gifts" className="hover:text-white transition-colors">Gift Sets</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-200">
          <p>&copy; 2024 Croc.het464. All rights reserved. Made with ❤️ and yarn.</p>
        </div>
      </div>
    </footer>
  );
};
