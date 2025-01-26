import React from 'react';
import {
  Building2,
  Users,
  Clock,
  Shield,
  Heart,
  ChevronRight,
} from 'lucide-react';

export function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">About FinSmart</h1>
            <p className="text-xl text-blue-100">Your Trusted FinOps Partner Since 2007</p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Office team meeting"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              FinSmart Accounting is your one-stop solution for accounting, taxation, accounts receivable and payable, and payroll needs. 
              Founded in 2007 by Shalaka Joshi, a Chartered Accountant with a vision to revolutionize accounting services, 
              we've grown to become a trusted partner for over 300 clients across 7 countries.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With headquarters in Pune and offices in Mumbai and New York, our team of 100+ professionals includes 
              full-time offshore accountants, chartered accountants, financial advisors, and company secretaries, 
              all dedicated to delivering excellence in financial services.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChevronRight size={40} />,
                title: "Walk an Extra Mile",
                description: "Going above and beyond for our clients and employees' success"
              },
              {
                icon: <Clock size={40} />,
                title: "TAT is Everything",
                description: "Committed to quick turnaround time and timely delivery"
              },
              {
                icon: <Shield size={40} />,
                title: "Integrity & Transparency",
                description: "Upholding honesty and ethical principles in all our dealings"
              }
            ].map((value, index) => (
              <div key={index} className="p-8 bg-white rounded-lg shadow-sm text-center">
                <div className="text-blue-900 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Shalaka Joshi",
                role: "Founder and Director",
                description: "Leading global accounting business growth and innovation"
              },
              {
                name: "Maanoj Shah",
                role: "Director of Growth Strategy & Alliance",
                description: "Driving strategic partnerships and business expansion"
              },
              {
                name: "Dipali Phadke",
                role: "Chief Executive Officer",
                description: "Spearheading Indian accounting operations and excellence"
              }
            ].map((leader, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src={`https://images.unsplash.com/photo-${index + 1}?auto=format&fit=crop&q=80`}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                <p className="text-blue-900 mb-3">{leader.role}</p>
                <p className="text-gray-600">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Presence */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Global Presence</h2>
              <p className="text-lg text-gray-700 mb-6">
                From our offices in Pune, Mumbai, and New York, we serve clients across 7 countries, 
                providing comprehensive financial services tailored to diverse business needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Building2 className="text-blue-900" />
                  <span>Headquarters in Pune, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-blue-900" />
                  <span>100+ Professional Team Members</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="text-blue-900" />
                  <span>300+ Satisfied Clients Worldwide</span>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                alt="Global business"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}