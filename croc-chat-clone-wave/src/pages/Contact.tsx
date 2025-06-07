import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, Instagram, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Contact = () => {
  return <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>💌</span>
              <span>Let's Connect!</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We'd Love to Hear from You!
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you have a question, a custom idea, or just want to say hello, 
              reach out and we'll get back to you as soon as we can. Every message 
              brings us closer to creating something beautiful together! 🧶
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24-48 hours!
                </p>
              </div>
              
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Direct Contact */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch Directly</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-pink-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email Us</h4>
                      <p className="text-gray-600">crochet464tales@gmail.com</p>
                      <p className="text-sm text-gray-500 mt-1">Perfect for detailed inquiries and custom orders</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-sm text-gray-500 mt-1">Quick responses for urgent queries</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Instagram className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Instagram</h4>
                      <p className="text-gray-600">@croc.het464</p>
                      <p className="text-sm text-gray-500 mt-1">DM us for quick custom orders or product queries!</p>
                      <a href="https://instagram.com/croc.het464" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 text-sm font-medium mt-2 inline-block">
                        Follow us →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time & Location */}
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Response Time</h4>
                      <p className="text-gray-700">We usually reply within 24 hours</p>
                      <p className="text-sm text-gray-600 mt-1">
                        For urgent orders or time-sensitive inquiries, please reach out via Instagram DM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-700">Based in Assam, India</p>
                      <p className="text-sm text-gray-600 mt-1">Local pickup available on request</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
                
                <div className="space-y-4">
                  <Link to="/shop">
                    <Button className="w-full justify-between bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                      View Our Products
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  
                  <Button variant="outline" className="w-full justify-between border-purple-200 text-purple-700 hover:bg-purple-50" onClick={() => {
                  const form = document.getElementById('contact-form');
                  if (form) {
                    form.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }
                }}>
                    Place a Custom Order
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  
                  <a href="https://instagram.com/croc.het464" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-between border-pink-200 text-pink-700 hover:bg-pink-50">
                      Follow Us on Instagram
                      <Instagram className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;