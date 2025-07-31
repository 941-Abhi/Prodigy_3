import React from 'react';
import { Users, Award, Heart, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About Local Store
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted neighborhood shop for quality products, exceptional service, and community connection.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Founded in 2010, Local Store began as a small family-owned grocery store with a simple mission: 
              to provide our community with the freshest, highest-quality products while creating a welcoming 
              environment where neighbors could connect.
            </p>
            <p>
              What started as a modest corner store has grown into a beloved community hub, serving thousands 
              of families with care and dedication. We've maintained our commitment to quality while expanding 
              our offerings to meet the diverse needs of our growing community.
            </p>
            <p>
              Today, we're proud to offer a wide selection of organic produce, artisanal breads, premium dairy 
              products, and pantry staples, all carefully selected to ensure the best value and quality for our customers.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Heart className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Community First</h4>
                <p className="text-gray-600">We believe in supporting our local community and building lasting relationships.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Award className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Quality Guaranteed</h4>
                <p className="text-gray-600">Every product we carry meets our high standards for freshness and quality.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Exceptional Service</h4>
                <p className="text-gray-600">Our friendly staff is always ready to help you find exactly what you need.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary-600 text-white rounded-lg p-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">1</div>
            <div className="text-primary-100">Year of Service</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">2,000+</div>
            <div className="text-primary-100">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">16</div>
            <div className="text-primary-100">Products Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-primary-100">Online Support</div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Abhishek</h3>
            <p className="text-gray-600">Store Manager</p>
            <p className="text-sm text-gray-500 mt-2">
              Passionate about community service and quality products.
            </p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aditya</h3>
            <p className="text-gray-600">Head of Operations</p>
            <p className="text-sm text-gray-500 mt-2">
              Ensures smooth operations and exceptional customer experience.
            </p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pardeep</h3>
            <p className="text-gray-600">Customer Service Lead</p>
            <p className="text-sm text-gray-500 mt-2">
              Dedicated to making every customer feel valued and heard.
            </p>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-gray-50 rounded-lg p-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <MapPin className="w-6 h-6 text-primary-600" />
          <h2 className="text-2xl font-bold text-gray-900">Visit Our Store</h2>
        </div>
        <div className="text-center text-gray-600">
          <p className="text-lg mb-2">123 Main Street, Downtown</p>
          <p className="mb-4">Open Monday-Saturday: 7:00 AM - 9:00 PM</p>
          <p className="text-sm">Sunday: 8:00 AM - 8:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default About; 