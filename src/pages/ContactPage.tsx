import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  Send,
  Briefcase,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';

export function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100">
              Let's discuss how we can help streamline your accounting and financial operations
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Global business"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </div>

      {/* Office Locations */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pune Office */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48">
                <img 
                  src="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?auto=format&fit=crop&q=80"
                  alt="Pune office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-blue-900 mb-4">
                  <Building size={24} />
                  <h3 className="text-xl font-semibold">HQ - Pune, India</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Finsmart Financial Center, Plot No. 5, Sahajanand Society, 
                  Kothrud, Pune 411038 INDIA
                </p>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Clock size={18} />
                    <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mumbai Office */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48">
                <img 
                  src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80"
                  alt="Mumbai office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-blue-900 mb-4">
                  <Building size={24} />
                  <h3 className="text-xl font-semibold">Mumbai, India</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  B 50, Dev Nagar, Off Sai Baba Nagar Road, 
                  Borivali (W), Mumbai 400092 INDIA
                </p>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Clock size={18} />
                    <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information & Form */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 text-white p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-gray-600">India: +91 922 600 7373</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 text-white p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600">sales@finsmartaccounting.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 text-white p-3 rounded-lg">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Careers</h3>
                    <a href="/careers" className="text-blue-900 hover:text-blue-700">
                      View Open Positions
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Our Global Presence</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    "India", "UK", "USA", "Singapore", "Europe", "Australia"
                  ].map((country) => (
                    <div key={country} className="flex items-center space-x-2">
                      <MapPin size={16} className="text-blue-900" />
                      <span>{country}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition flex items-center justify-center"
                >
                  <span>Send Message</span>
                  <Send size={20} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact CTA */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Need Immediate Assistance?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a 
                href="tel:+919226007373"
                className="flex items-center justify-center space-x-3 bg-white/10 p-6 rounded-lg hover:bg-white/20 transition"
              >
                <Phone size={24} />
                <span className="text-lg">+91-922 600 7373</span>
              </a>
              <a 
                href="#"
                className="flex items-center justify-center space-x-3 bg-white/10 p-6 rounded-lg hover:bg-white/20 transition"
              >
                <MessageSquare size={24} />
                <span className="text-lg">Start Live Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}