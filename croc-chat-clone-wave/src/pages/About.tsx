
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Heart, Star, Scissors, Palette, Gift, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Handmade with Love",
      description: "Every stitch is crafted with care, passion, and attention to detail that machines simply can't replicate."
    },
    {
      icon: <Scissors className="w-8 h-8 text-purple-500" />,
      title: "Quality Craftsmanship",
      description: "We use only the finest materials and time-tested techniques to ensure each piece lasts for years to come."
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-500" />,
      title: "Personal Touch",
      description: "Customization and personalization are at the heart of what we do - making each piece uniquely yours."
    }
  ];

  const productCategories = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Toys & Amigurumi",
      description: "Adorable stuffed animals and characters that bring smiles to faces of all ages"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Cozy Wearables",
      description: "Scarves, tops, hats, and accessories to keep you warm and stylish"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Home Decor",
      description: "Plant holders, coasters, wall hangings to add warmth to your space"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Special Event Gifts",
      description: "Perfect for birthdays, weddings, baby showers, and memorable occasions"
    }
  ];

  const testimonials = [
    {
      text: "The attention to detail is incredible! My daughter's custom teddy bear has become her best friend.",
      author: "Sarah M.",
      rating: 5
    },
    {
      text: "I've never received so many compliments on a scarf. The quality is outstanding!",
      author: "Michael T.",
      rating: 5
    }
  ];

  const galleryImages = [
    { src: "/placeholder.svg?height=300&width=300", alt: "Crafting process with colorful yarns" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Organized yarn collection" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Finished crochet items display" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Workspace with tools and sketches" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Header />
      
      <main>
        {/* Hero Banner Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-100 to-purple-100">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Every Stitch Tells a Story
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Welcome to Croc.het464, where handmade magic meets heartfelt creativity. 
              Discover the passion and love woven into every single piece.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <img 
                src="/placeholder.svg?height=400&width=600" 
                alt="Creator crocheting with colorful yarns"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              The Story Behind Croc.het464
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Croc.het464 was born from a simple ball of yarn and a big dream—to bring joy and comfort through handmade magic. What started as a personal hobby during cozy afternoons turned into a journey of creativity, warmth, and connection.
              </p>
              <p className="mb-6">
                I discovered crochet during a quiet winter evening, drawn to the meditative rhythm of the hook and yarn. What began as a way to unwind quickly became an obsession—I found myself creating everything from tiny amigurumi characters to cozy blankets that wrapped my family in love.
              </p>
              <p className="mb-6">
                The name "Croc.het464" reflects both the art form I'm passionate about and a personal touch that makes this brand uniquely mine. The numbers hold special meaning—they represent the date when I decided to turn my passion into something that could bring joy to others beyond my own home.
              </p>
              <p>
                Every piece I create is intentional, made with the belief that handmade isn't just a style—it's a statement. In a world of mass production, each item from Croc.het464 carries the irreplaceable touch of human hands, heart, and soul.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Maker Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/placeholder.svg?height=500&width=400" 
                  alt="Meet the maker - friendly photo"
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Meet the Maker</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Hi there! I'm the heart and hands behind Croc.het464. When I'm not creating with yarn, 
                  you'll find me sketching new designs, exploring nature for color inspiration, or 
                  curled up with a cup of tea planning my next project.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  My favorite pieces to create are amigurumi animals—there's something magical about 
                  bringing a character to life with just a hook and yarn. My proudest project? 
                  A custom family of bears that helped a little girl through a difficult time.
                </p>
                <p className="text-lg text-gray-700">
                  Crochet means more to me than just crafting—it's meditation, creativity, and 
                  connection all wrapped into one. Every piece I make carries a piece of my heart, 
                  and I hope that love reaches you too.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Our Mission & Values
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              At Croc.het464, we believe handmade isn't just a style—it's a statement. 
              Every piece is crafted with patience, passion, and a personal touch that machines can't replicate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              What We Create
            </h2>
            <p className="text-lg text-center text-gray-700 mb-12 max-w-2xl mx-auto">
              From cuddly companions to cozy accessories, explore our range of handcrafted treasures
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productCategories.map((category, index) => (
                <div key={index} className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Happy Customers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-lg">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Behind-the-Scenes Gallery */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
              Behind the Scenes
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              A peek into the process - from yarn to your home
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Bring Magic Home?</h2>
            <p className="text-xl mb-8">
              Explore our cozy creations or let's work together to bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button size="lg" variant="secondary" className="text-purple-600 hover:text-purple-700">
                  Explore Our Creations
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  Place a Custom Order
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-purple-200">
              Follow our story on Instagram 
              <a href="https://instagram.com/croc.het464" className="text-white hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                @croc.het464
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
