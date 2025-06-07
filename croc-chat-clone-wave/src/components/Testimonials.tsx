
import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'The teddy bear I ordered for my daughter is absolutely perfect! The quality is amazing and the attention to detail is incredible.',
      avatar: '/placeholder.svg?height=60&width=60'
    },
    {
      id: 2,
      name: 'Mike Chen',
      rating: 5,
      comment: 'I was amazed by the custom scarf. The colors were exactly what I wanted and it arrived so quickly. Highly recommended!',
      avatar: '/placeholder.svg?height=60&width=60'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      rating: 5,
      comment: 'The baby gift set was a huge hit at the shower. The new mom was in tears (happy ones!) when she saw it. Beautiful work!',
      avatar: '/placeholder.svg?height=60&width=60'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers who've experienced the magic of handmade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-purple-400 mr-2" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">Verified Customer</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
