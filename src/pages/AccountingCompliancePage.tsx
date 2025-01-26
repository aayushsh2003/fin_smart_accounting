import React from 'react';
import {
  CheckCircle2,
  ArrowRight,
  FileText,
  BarChart,
  Calculator,
  ClipboardCheck,
  BookOpen,
} from 'lucide-react';

export function AccountingCompliancePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Accounting and Compliance Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Streamline your accounting processes and ensure complete compliance with ever-changing tax laws
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition flex items-center space-x-2">
              <span>Get Started Today</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
            alt="Accounting services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Accounting and compliance processes can often be a huge drain on an organization's man-hours. 
              This is because of the effort required to understand and keep up with the ever-changing tax laws. 
              Constantly hiring, re-hiring, and training accounting resources on internal processes and industry 
              nuances can be detrimental to overall productivity and cost efficiency.
            </p>

            <div className="bg-blue-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Why Choose Finsmart?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-blue-900 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Deep domain expertise with teams based in Pune and Mumbai</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-blue-900 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Continuous training on changes in laws and regulations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-blue-900 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Seamless compliance management with minimal effort from your end</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-blue-900 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">End-to-end payroll and accounting outsourcing services for Indian SMBs</p>
                </div>
              </div>
            </div>

            {/* Services Scope */}
            <h2 className="text-3xl font-bold text-center mb-12">Scope of Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <BookOpen size={32} />,
                  title: "Bookkeeping and Accounting Entries",
                  description: "Comprehensive bookkeeping services and accurate accounting entries"
                },
                {
                  icon: <ClipboardCheck size={32} />,
                  title: "Reconciliations",
                  description: "Thorough reconciliation of all accounts and statements"
                },
                {
                  icon: <Calculator size={32} />,
                  title: "Monthly Closing",
                  description: "Timely closing of financial data and reporting"
                },
                {
                  icon: <FileText size={32} />,
                  title: "GST and TDS Compliance",
                  description: "Complete management of GST and TDS requirements"
                },
                {
                  icon: <BarChart size={32} />,
                  title: "Management Reports",
                  description: "Detailed management reports for informed decision-making"
                }
              ].map((service, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
                  <div className="text-blue-900 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="aspect-video mb-4">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/vNlIeTASiOY" 
                  title="Accounting and Payroll Outsourcing Services Makes Sense: Truckx Reviews Finsmart, India" 
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="font-semibold">Shashikant Choudhary</div>
              <div className="text-sm text-gray-500">Director, Truckx Technologies</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="aspect-video mb-4">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/your-video-id" 
                  title="Haartz Automotive Reviews Finsmart's Accounting Services" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="font-semibold">Shripad Vaze</div>
              <div className="text-sm text-gray-500">Finance Head, Haartz Automotive</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="aspect-video mb-4">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/your-video-id" 
                  title="CADEM Softwares Reviews Finsmart Accounting Services" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="font-semibold">Sanjeev Wagle</div>
              <div className="text-sm text-gray-500">CEO, CADEM Softwares</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="aspect-video mb-4">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/your-video-id" 
                  title="Marg Tantra Seva Reviews Finsmart Accounting Services" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="font-semibold">Mukul Govande</div>
              <div className="text-sm text-gray-500">Owner, Marg Tantra Seva</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Accounting Process?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us handle your accounting and compliance needs while you focus on growing your business
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </>
  );
}