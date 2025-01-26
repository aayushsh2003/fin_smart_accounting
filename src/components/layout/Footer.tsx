import React from 'react';
import { Phone, Mail, Facebook, Linkedin, Youtube, MapPin, Globe, Clock, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">FinSmart</h3>
              <p className="text-blue-200 mb-6">
                Transforming accounting and payroll services with expertise and innovation since 2007.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-blue-300" />
                  <span className="text-blue-200">Pune | Mumbai | New York</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe size={18} className="text-blue-300" />
                  <span className="text-blue-200">Serving 7+ Countries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={18} className="text-blue-300" />
                  <span className="text-blue-200">Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="/services/accounting-compliance" className="text-blue-200 hover:text-white transition">Accounting & Compliance</a></li>
                <li><a href="/services/accounting-payroll-services-india" className="text-blue-200 hover:text-white transition">Payroll Services</a></li>
                <li><a href="/services/business-in-india" className="text-blue-200 hover:text-white transition">Business in India</a></li>
                <li><a href="/services/pune" className="text-blue-200 hover:text-white transition">Services in Pune</a></li>
                <li><a href="/services/mumbai" className="text-blue-200 hover:text-white transition">Services in Mumbai</a></li>
                <li><a href="/services/bangalore" className="text-blue-200 hover:text-white transition">Services in Bangalore</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="/about" className="text-blue-200 hover:text-white transition">About Us</a></li>
                <li><a href="/case-studies" className="text-blue-200 hover:text-white transition">Case Studies</a></li>
                <li><a href="/testimonials" className="text-blue-200 hover:text-white transition">Testimonials</a></li>
                <li><a href="/careers" className="text-blue-200 hover:text-white transition">Careers</a></li>
                <li><a href="/blog" className="text-blue-200 hover:text-white transition">Blog</a></li>
                <li><a href="/contact" className="text-blue-200 hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <a href="tel:+919226007373" className="flex items-center space-x-3 text-blue-200 hover:text-white transition">
                  <Phone size={18} />
                  <span>+91-922 600 7373</span>
                </a>
                <a href="mailto:sales@finsmartaccounting.com" className="flex items-center space-x-3 text-blue-200 hover:text-white transition">
                  <Mail size={18} />
                  <span>sales@finsmartaccounting.com</span>
                </a>
                <div className="flex space-x-4 mt-6">
                  <a href="https://www.instagram.com/ca_anuj_pradhan?igsh=eTNnaTc5czBwNnQ4" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
                    <Instagram size={20} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
                    <Facebook size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/anuj-pradhan-74b3a2118?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://youtube.com/@caanujpradhan951?si=a5u1IXjs5ZgV0LBy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
            <div className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} FinSmart Accounting. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition">Terms of Service</a>
              <a href="/sitemap.xml" className="hover:text-white transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}