import React, { useState } from 'react';
import { Phone, Mail, Facebook, Linkedin, Youtube, ChevronDown, Menu, X, Home,Instagram } from 'lucide-react';

interface DropdownProps {
  isOpen: boolean;
  items: { label: string; href: string }[];
}

function Dropdown({ isOpen, items }: DropdownProps) {
  if (!isOpen) return null;
  
  return (
    <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const companyItems = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Services For Pune', href: '/services/pune' },
    { label: 'Our Services For Mumbai', href: '/services/mumbai' },
    { label: 'Our Services For Bangalore', href: '/services/bangalore' },
    { label: 'Our Services For NCR', href: '/services/ncr' },
    { label: 'Our Services For Hyderabad', href: '/services/hyderabad' },
    { label: 'Our Services For Chennai', href: '/services/chennai' },
    { label: 'Our Services For Kolkata', href: '/services/kolkata' },
  ];

  const servicesItems = [
    { label: 'Accounting and Compliance', href: '/services/accounting-compliance' },
    { label: 'Accounting and Payroll Services', href: '/services/accounting-payroll-services-india' },
    { label: 'Doing Business In India For Global Companies', href: '/services/business-in-india' },
  ];

  const resourcesItems = [
    { label: 'Blogs', href: '/blog' },
    { label: 'Case Studies', href: 'case-studies' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <>
      {/* Top Bar - Hidden on mobile except for icons */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:+919226007373" className="flex items-center space-x-2 hover:text-blue-200">
                <Phone size={16} />
                <span>+91-9662830041</span>
              </a>
              <a href="mailto:sales@finsmartaccounting.com" className="flex items-center space-x-2 hover:text-blue-200">
                <Mail size={16} />
                <span>sales@finsmartaccounting.com</span>
              </a>
            </div>
            {/* Show only icons on mobile */}
            <div className="md:hidden flex space-x-4">
              <a href="tel:+919226007373" className="hover:text-blue-200">
                <Phone size={18} />
              </a>
              <a href="mailto:sales@finsmartaccounting.com" className="hover:text-blue-200">
                <Mail size={18} />
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/ca_anuj_pradhan?igsh=eTNnaTc5czBwNnQ4" className="hover:text-blue-200"><Instagram size={18} /></a>
              <a href="https://www.linkedin.com/in/anuj-pradhan-74b3a2118?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-blue-200"><Linkedin size={18} /></a>
              <a href="https://youtube.com/@caanujpradhan951?si=a5u1IXjs5ZgV0LBy" className="hover:text-blue-200"><Youtube size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="text-2xl font-bold text-blue-900">FinSmart</a>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-700 hover:text-blue-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {/* Home Link */}
              <a href="/" className="flex items-center space-x-1 text-gray-700 hover:text-blue-900">
                <Home size={16} />
                <span>Home</span>
              </a>
              <a href="/about" className="flex items-center space-x-1 text-gray-700 hover:text-blue-900">
                <span>About Us</span>
              </a>

              {/* Company Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setOpenDropdown('company')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-900 py-2">
                  <span>Company</span>
                  <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white shadow-lg rounded-lg py-2">
                    {companyItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setOpenDropdown('services')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-900 py-2">
                  <span>Services</span>
                  <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white shadow-lg rounded-lg py-2">
                    {servicesItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resources Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setOpenDropdown('resources')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-900 py-2">
                  <span>Resources</span>
                  <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white shadow-lg rounded-lg py-2">
                    {resourcesItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Regular Links */}
              <a href="/pricing" className="text-gray-700 hover:text-blue-900">Pricing</a>
              <a href="/careers" className="text-gray-700 hover:text-blue-900">Careers</a>
              <a href="/testimonials" className="text-gray-700 hover:text-blue-900">Testimonials</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-900">Contact Us</a>
            </div>

            <button className="hidden md:flex bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
              Book a Meeting
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100">
              <div className="py-4 space-y-2">
                {/* Home Link for Mobile */}
                <div className="px-4">
                  <a href="/" className="flex items-center space-x-2 py-2 text-gray-700 hover:text-blue-900">
                    <Home size={16} />
                    <span>Home</span>
                  </a>
                </div>
                <div className="px-4">
                  <a href="/about" className="flex items-center space-x-2 py-2 text-gray-700 hover:text-blue-900">
                    <span>About Us</span>
                  </a>
                </div>

                {/* Company Section */}
                <div className="px-4">
                  <button 
                    className="flex items-center justify-between w-full py-2 text-gray-700"
                    onClick={() => setOpenDropdown(openDropdown === 'company' ? null : 'company')}
                  >
                    <span>Company</span>
                    <ChevronDown size={16} className={`transform transition-transform ${openDropdown === 'company' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'company' && (
                    <div className="pl-4 space-y-2 mt-2">
                      {companyItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block py-2 text-gray-600 hover:text-blue-900"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Services Section */}
                <div className="px-4">
                  <button 
                    className="flex items-center justify-between w-full py-2 text-gray-700"
                    onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                  >
                    <span>Services</span>
                    <ChevronDown size={16} className={`transform transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'services' && (
                    <div className="pl-4 space-y-2 mt-2">
                      {servicesItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block py-2 text-gray-600 hover:text-blue-900"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Resources Section */}
                <div className="px-4">
                  <button 
                    className="flex items-center justify-between w-full py-2 text-gray-700"
                    onClick={() => setOpenDropdown(openDropdown === 'resources' ? null : 'resources')}
                  >
                    <span>Resources</span>
                    <ChevronDown size={16} className={`transform transition-transform ${openDropdown === 'resources' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'resources' && (
                    <div className="pl-4 space-y-2 mt-2">
                      {resourcesItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block py-2 text-gray-600 hover:text-blue-900"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Regular Links */}
                <div className="px-4 space-y-2">
                  <a href="/pricing" className="block py-2 text-gray-700 hover:text-blue-900">Pricing</a>
                  <a href="/careers" className="block py-2 text-gray-700 hover:text-blue-900">Careers</a>
                  <a href="/testimonials" className="block py-2 text-gray-700 hover:text-blue-900">Testimonials</a>
                  <a href="/contact" className="block py-2 text-gray-700 hover:text-blue-900">Contact Us</a>
                </div>

                {/* Mobile Book a Meeting Button */}
                <div className="px-4 pt-4">
                  <button className="w-full bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
                    Book a Meeting
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}