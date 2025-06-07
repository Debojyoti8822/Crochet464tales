import React from 'react';
import { Instagram, ExternalLink, Heart } from 'lucide-react';

export const InstagramFeed = () => {
  const instagramPosts = [
    { id: 1, image: '/placeholder.svg?height=300&width=300', likes: 89 },
    { id: 2, image: '/placeholder.svg?height=300&width=300', likes: 124 },
    { id: 3, image: '/placeholder.svg?height=300&width=300', likes: 156 },
    { id: 4, image: '/placeholder.svg?height=300&width=300', likes: 203 },
    { id: 5, image: '/placeholder.svg?height=300&width=300', likes: 91 },
    { id: 6, image: '/placeholder.svg?height=300&width=300', likes: 167 }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Instagram className="w-4 h-4" />
            <span>Follow Our Journey</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            @croc.het464
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Get a behind-the-scenes look at our creative process and see our latest creations on Instagram
          </p>
          
          <a 
            href="https://instagram.com/croc.het464" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            <span>Follow Us</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <div key={post.id} className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img 
                src={post.image} 
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <Heart className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-sm font-medium">{post.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
