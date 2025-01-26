import React from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  Users,
  Globe,
  Shield,
  Laptop,
  Clock,
  FileText,
  DollarSign,
  BarChart,
  ChevronRight,
} from 'lucide-react';

export function AccountingPayrollServicesIndia() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Accounting and Payroll Services for Indian SMBs
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Helping 150+ SMBs make smarter financial decisions every day with AI-powered solutions and expert teams
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Is Accounting and Payroll Draining Your Resources?",
                "Base Your Business Strategy on Insights, Not Intuitions",
                "Make Your Payroll Process Prompt and Reliable",
                "Get Timely Financial Reports for Business Growth"
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-blue-300 flex-shrink-0" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition flex items-center space-x-2">
              <span>Book a Free Consultation</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
            alt="Professional accounting services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </div>

      {/* Experience Stats */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Clock size={40} />, value: "17+", label: "Years of Experience" },
              { icon: <Users size={40} />, value: "150+", label: "Active Clients" },
              { icon: <Globe size={40} />, value: "7+", label: "Countries Served" },
              { icon: <Building2 size={40} />, value: "100+", label: "Team Members" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-blue-900 flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Services */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Comprehensive Services</h2>
            <p className="text-gray-600">
              Combining AI-powered technology with expert human judgment to streamline your accounting and payroll operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <FileText size={32} />,
                title: "Accounting and Compliance",
                features: [
                  "Bookkeeping and Accounting Entries",
                  "Monthly Financial Closing",
                  "GST and TDS Compliance",
                  "Bank Reconciliations",
                  "Management Reports"
                ]
              },
              {
                icon: <DollarSign size={32} />,
                title: "Payroll Management",
                features: [
                  "Monthly Payroll Processing",
                  "Statutory Compliance (PF, ESIC)",
                  "Employee Pay-slips Generation",
                  "Form-16 Issuance",
                  "Investment Declaration Management"
                ]
              },
              {
                icon: <BarChart size={32} />,
                title: "Accounts Review and MIS",
                features: [
                  "Monthly P&L Reviews",
                  "Financial Data Analysis",
                  "Custom MIS Reports",
                  "Business Intelligence Insights",
                  "Monthly Review Calls"
                ]
              },
              {
                icon: <Building2 size={32} />,
                title: "CFO and Controller Services",
                features: [
                  "Financial Statement Analysis",
                  "Cash Flow Management",
                  "Business Metrics Dashboard",
                  "Strategic Financial Planning",
                  "Board Pack Reports"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="text-blue-900 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-3">
                      <CheckCircle2 size={18} className="text-blue-900 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-6 inline-flex items-center text-blue-900 font-medium hover:text-blue-700">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose FinSmart?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={40} />,
                title: "AI-powered FinOps",
                description: "Blend of technology and human expertise for high accuracy and streamlined processes"
              },
              {
                icon: <Laptop size={40} />,
                title: "Flexi-tech Model",
                description: "Expertise across leading accounting software with seamless data transition"
              },
              {
                icon: <Users size={40} />,
                title: "Secure-link Solution",
                description: "Enhanced privacy protection with need-based access control"
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

      {/* How It Works */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Initial Consultation", description: "We understand your needs and challenges" },
                { step: "02", title: "Custom Solution Design", description: "We create a tailored service package" },
                { step: "03", title: "Seamless Onboarding", description: "Quick and smooth transition process" }
              ].map((phase, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="text-5xl font-bold text-blue-900 mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight size={24} className="text-blue-900" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Financial Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 150+ successful businesses that trust FinSmart for their accounting and payroll needs
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </>
  );
}