import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We'd love to hear from you! Get in touch with us for any questions, feedback, or support.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500">Monday-Saturday: 7:00 AM - 9:00 PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">info@localstore.com</p>
                <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">123 Main Street</p>
                <p className="text-gray-600">Downtown, City, State 12345</p>
                <p className="text-sm text-gray-500">Free parking available</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Store Hours</h3>
                <p className="text-gray-600">Monday-Saturday: 7:00 AM - 9:00 PM</p>
                <p className="text-gray-600">Sunday: 8:00 AM - 8:00 PM</p>
                <p className="text-sm text-gray-500">Online orders available 24/7</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="input-field"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="order">Order Support</option>
                <option value="product">Product Information</option>
                <option value="feedback">Feedback</option>
                <option value="complaint">Complaint</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="input-field"
                placeholder="Enter your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Do you offer delivery?</h3>
            <p className="text-gray-600">
              Yes! We offer same-day delivery for orders placed before 2 PM. Delivery is free for orders over $50.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Can I return products?</h3>
            <p className="text-gray-600">
              We accept returns within 7 days of purchase with a receipt. Perishable items must be returned within 24 hours.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Do you have a loyalty program?</h3>
            <p className="text-gray-600">
              Yes! Join our Local Rewards program to earn points on every purchase and receive exclusive offers.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Are your products organic?</h3>
            <p className="text-gray-600">
              We carry a wide selection of organic products. Look for the "Organic" label on our products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 