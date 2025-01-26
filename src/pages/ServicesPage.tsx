import React from 'react';
import {
  Building2,
  Users,
  Globe,
  Shield,
  Laptop,
  Clock,
  CheckCircle2,
  ArrowRight,
  Building,
  FileText,
  DollarSign,
  Briefcase,
} from 'lucide-react';

export function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              The Most Trusted Accountants to Support Your Startups
            </h1>
            <div className="space-y-4 mb-8">
              <p className="text-xl text-blue-100">
                You Focus on Growing Your Business and Take Advantage of Our Strength to Focus on Accounting and Payroll Management
              </p>
            </div>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition flex items-center space-x-2">
              <span>Schedule a Consultation</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            alt="Business accounting"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Finsmart at a Glance</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Clock size={40} className="mx-auto mb-4 text-blue-900" />
              <div className="text-4xl font-bold text-blue-900 mb-2">9+</div>
              <div className="text-gray-600">Years of Average Client Retention</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Users size={40} className="mx-auto mb-4 text-blue-900" />
              <div className="text-4xl font-bold text-blue-900 mb-2">300+</div>
              <div className="text-gray-600">Client Engagements</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Building2 size={40} className="mx-auto mb-4 text-blue-900" />
              <div className="text-4xl font-bold text-blue-900 mb-2">75+</div>
              <div className="text-gray-600">People Team</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Globe size={40} className="mx-auto mb-4 text-blue-900" />
              <div className="text-4xl font-bold text-blue-900 mb-2">7+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FileText size={40} />,
                title: "Accounting and Compliance",
                description: "Comprehensive accounting solutions with strict compliance adherence",
                link: "/services/accounting-compliance"
              },
              {
                icon: <DollarSign size={40} />,
                title: "Payroll Services",
                description: "End-to-end payroll management and statutory compliance"
              },
              {
                icon: <Briefcase size={40} />,
                title: "Financial Controller Services",
                description: "Expert financial control and management solutions"
              },
              {
                icon: <Building size={40} />,
                title: "Indian Entry Services",
                description: "Complete support for global MNCs entering Indian market"
              }
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="text-blue-900 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href={service.link || "#"} className="text-blue-900 font-medium flex items-center hover:text-blue-700">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Expertise */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Tech Stack</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Accounting Platforms</h3>
              <div className="grid grid-cols-2 gap-6">
                {["Zoho", "SAP", "Oracle", "Tally"].map((platform) => (
                  <div key={platform} className="flex items-center space-x-3">
                    <Laptop className="text-blue-900" />
                    <span>{platform}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-8">Cloud Tools</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "ClickUp",
                  "Bill.com",
                  "Dext",
                  "Slack",
                  "Monday.com",
                  "Keka",
                  "Microsoft Teams",
                  "Asana"
                ].map((tool) => (
                  <div key={tool} className="flex items-center space-x-3">
                    <Laptop className="text-blue-900" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* City Services */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services Across India</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: "Mumbai",
                services: [
                  "Accounting & Bookkeeping",
                  "Payroll Management",
                  "Tax Compliance",
                  "Financial Advisory"
                ]
              },
              {
                city: "Pune",
                services: [
                  "Full-cycle Accounting",
                  "Statutory Compliance",
                  "Business Setup Services",
                  "Financial Reporting"
                ]
              },
              {
                city: "Delhi",
                services: [
                  "Corporate Accounting",
                  "GST Services",
                  "Payroll Processing",
                  "MNC Entry Support"
                ]
              },
              {
                city: "Bangalore",
                services: [
                  "Tech Startup Accounting",
                  "International Taxation",
                  "CFO Services",
                  "Compliance Management"
                ]
              },
              {
                city: "Hyderabad",
                services: [
                  "IT Company Accounting",
                  "Regulatory Compliance",
                  "Business Advisory",
                  "Tax Planning"
                ]
              },
              {
                city: "Chennai",
                services: [
                  "Manufacturing Accounting",
                  "Export-Import Compliance",
                  "Financial Analysis",
                  "Business Consulting"
                ]
              }
            ].map((cityService, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-4">{cityService.city}</h3>
                <ul className="space-y-3">
                  {cityService.services.map((service, sIndex) => (
                    <li key={sIndex} className="flex items-center space-x-2">
                      <CheckCircle2 size={16} className="text-blue-900" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={40} />,
                title: "Domain Expertise",
                description: "Qualified offshore accountants adhering to GAAP with continuous knowledge updates"
              },
              {
                icon: <Laptop size={40} />,
                title: "Flexi-Tech Model",
                description: "Expertise across leading accounting software with seamless data transition"
              },
              {
                icon: <Users size={40} />,
                title: "Flexi-Scale Model",
                description: "Scalable remote accounting teams tailored to your specific needs"
              }
            ].map((feature, index) => (
              <div key={index} className="p-8 bg-white rounded-lg shadow-sm text-center">
                <div className="text-blue-900 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}