import React from 'react';
import { ArrowRight, Building2, CheckCircle2, BarChart, FileText, TrendingUp, Users } from 'lucide-react';

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  location: string;
  employeeCount: string;
  challenge: string;
  solution: string[];
  results: string[];
  image: string;
}

export function CaseStudiesPage() {
  const caseStudies: CaseStudy[] = [
    {
      id: "mediamagic",
      company: "MediaMagic Technologies",
      industry: "Product Engineering",
      location: "Pune, India",
      employeeCount: "100+",
      challenge: "Managing complex financial operations across multiple projects while ensuring compliance with Indian accounting standards and maintaining accurate project-wise cost tracking.",
      solution: [
        "Implemented project-wise accounting system",
        "Streamlined payroll processing with statutory compliance",
        "Set up automated expense tracking and reconciliation",
        "Established monthly financial reporting framework"
      ],
      results: [
        "50% reduction in accounting processing time",
        "100% compliance with statutory requirements",
        "Improved project profitability tracking",
        "Enhanced financial decision-making capabilities"
      ],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
    },
    {
      id: "truckx",
      company: "TruckX Technologies",
      industry: "Logistics Technology",
      location: "Mumbai, India",
      employeeCount: "50+",
      challenge: "Scaling financial operations while maintaining accuracy and compliance during rapid business growth, with complex revenue recognition requirements.",
      solution: [
        "Custom revenue recognition framework",
        "Automated accounts receivable process",
        "Integrated tax compliance management",
        "Real-time financial dashboard implementation"
      ],
      results: [
        "90% faster month-end closing",
        "Improved cash flow management",
        "Real-time financial visibility",
        "Scalable accounting infrastructure"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
    },
    {
      id: "cadem",
      company: "CADEM Technologies",
      industry: "Manufacturing Software",
      location: "Bangalore, India",
      employeeCount: "75+",
      challenge: "Handling multi-currency transactions and international tax compliance while maintaining accurate financial records for global operations.",
      solution: [
        "Multi-currency accounting system setup",
        "International tax compliance framework",
        "Automated forex gain/loss tracking",
        "Consolidated financial reporting system"
      ],
      results: [
        "Accurate multi-currency reporting",
        "40% reduction in compliance costs",
        "Streamlined global operations",
        "Enhanced stakeholder reporting"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Discover how we've helped businesses transform their financial operations through our outsourced accounting solutions
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-blue-300" />
                <span>20+ Years of Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-blue-300" />
                <span>300+ Satisfied Clients</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-blue-300" />
                <span>7+ Countries Served</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            alt="Business success"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-full">
                    <img 
                      src={study.image}
                      alt={study.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90 flex items-center justify-center p-8">
                      <div className="text-white">
                        <h3 className="text-2xl font-bold mb-4">{study.company}</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Building2 size={20} />
                            <span>{study.industry}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText size={20} />
                            <span>{study.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users size={20} />
                            <span>{study.employeeCount} Employees</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-900 mb-3">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-blue-900 mb-3">Solution</h4>
                        <ul className="space-y-2">
                          {study.solution.map((item, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <CheckCircle2 size={20} className="text-blue-900 flex-shrink-0 mt-1" />
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-blue-900 mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((item, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <TrendingUp size={20} className="text-green-600 flex-shrink-0 mt-1" />
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Financial Operations?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our growing list of successful clients and experience the difference of professional accounting services
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition flex items-center mx-auto">
              <span>Schedule a Consultation</span>
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}