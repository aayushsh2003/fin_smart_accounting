import React from 'react';
import {
  CheckCircle2,
  Building2,
  Users,
  Globe,
  ChevronRight,
  ArrowRight,
  Star,
  Shield,
  Laptop,
  Clock,
  BriefcaseIcon,
  GraduationCap,
  Heart,
  Coffee,
  BookOpen,
  MessageSquare,
  Lock,
  FileText,
  DollarSign,
  Building,
} from 'lucide-react';
import { Counter } from '../components/Counter';

export function HomePage() {
  const techStack = {
    accounting: [
      { name: "QuickBooks", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/QuickBooks_Logo.png" },
      { name: "Xero", logo: "https://upload.wikimedia.org/wikipedia/en/5/55/Xero_software_logo.svg" },
      { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
      { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" }
    ],
    cloud: [
      { name: "ClickUp", logo: "https://clickup.com/landing/images/clickup-logo.svg" },
      { name: "Monday.com", logo: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png" },
      { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" },
      { name: "Microsoft Teams", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg" }
    ]
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Expert Accounting & Payroll Outsourcing Solutions
            </h1>
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={20} className="text-blue-300" />
                <p>Focus on your core business activities</p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={20} className="text-blue-300" />
                <p>Improve financial visibility and control</p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={20} className="text-blue-300" />
                <p>Enhance operational efficiency</p>
              </div>
            </div>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition flex items-center space-x-2">
              <span>Transform Your Business Today</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
            alt="Business professionals"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </div>

      {/* About Company Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Finsmart Accounting</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2007 by Shalaka Joshi, a visionary Chartered Accountant, Finsmart Accounting has grown 
                to become a trusted partner for over 300 clients across 7 countries. Our journey began with a simple 
                mission: to revolutionize accounting services through innovation and expertise.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                With headquarters in Pune and offices in Mumbai and New York, our team of 100+ professionals includes 
                full-time offshore accountants, chartered accountants, financial advisors, and company secretaries, 
                all dedicated to delivering excellence in financial services.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Building2 size={24} />, text: "17+ Years of Excellence" },
                  { icon: <Users size={24} />, text: "100+ Expert Team" },
                  { icon: <Globe size={24} />, text: "7+ Countries Served" },
                  { icon: <Star size={24} />, text: "300+ Happy Clients" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-700">
                    <div className="text-blue-900">{item.icon}</div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Finsmart team meeting"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-900 text-white p-6 rounded-lg">
                <p className="text-xl font-semibold">Trusted by 300+ clients worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Accounting and Compliance */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
                alt="Accounting and Compliance"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/40 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-3">Accounting and Compliance</h3>
                <p className="text-blue-100 mb-4">
                  Comprehensive accounting solutions with strict compliance adherence
                </p>
                <a 
                  href="/services/accounting-compliance"
                  className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
                >
                  Learn More <ChevronRight size={20} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Accounting and Payroll Services */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80"
                alt="Accounting and Payroll Services"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/40 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-3">Accounting and Payroll Services</h3>
                <p className="text-blue-100 mb-4">
                  End-to-end payroll management and accounting solutions
                </p>
                <a 
                  href="/services/accounting-payroll-services-india"
                  className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
                >
                  Learn More <ChevronRight size={20} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Doing Business In India */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                alt="Doing Business In India"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/40 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-3">Doing Business In India</h3>
                <p className="text-blue-100 mb-4">
                  Complete support for global companies entering the Indian market
                </p>
                <a 
                  href="/services/business-in-india"
                  className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
                >
                  Learn More <ChevronRight size={20} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section with Animated Counters */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <Counter end={17} suffix="+" title="Years of Experience" icon={<Building2 size={40} />} />
            <Counter end={500} suffix="+" title="Happy Clients" icon={<Users size={40} />} />
            <Counter end={20} suffix="+" title="Countries Served" icon={<Globe size={40} />} />
            <Counter end={100} suffix="+" title="Team Members" icon={<Users size={40} />} />
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Tech Stack</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-8 text-blue-900">Accounting Platforms</h3>
              <div className="grid grid-cols-2 gap-8">
                {techStack.accounting.map((platform) => (
                  <div key={platform.name} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                    <img 
                      src={platform.logo} 
                      alt={platform.name}
                      className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-8 text-blue-900">Cloud Tools</h3>
              <div className="grid grid-cols-2 gap-8">
                {techStack.cloud.map((tool) => (
                  <div key={tool.name} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                    <img 
                      src={tool.logo} 
                      alt={tool.name}
                      className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence, coupled with industry expertise and innovative solutions, 
              makes us the preferred choice for businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen size={40} />,
                title: "Domain Expertise",
                description: "Our expert offshore accountants are not only qualified and GAAP-compliant, but continuously update their knowledge with modern accounting standards.",
                features: [
                  "Qualified professionals",
                  "GAAP compliance",
                  "Continuous learning",
                  "Modern standards"
                ]
              },
              {
                icon: <Laptop size={40} />,
                title: "Flexi-Tech Model",
                description: "Expertise across leading accounting software and cloud-based tools, ensuring seamless data transition between systems.",
                features: [
                  "Multiple software expertise",
                  "Cloud integration",
                  "Seamless transitions",
                  "Modern tools"
                ]
              },
              {
                icon: <Users size={40} />,
                title: "Flexi-Scale Model",
                description: "Scalable remote accounting teams tailored to your needs, whether you're in Mumbai, New York, or anywhere globally.",
                features: [
                  "Scalable teams",
                  "Global coverage",
                  "Custom solutions",
                  "Remote capabilities"
                ]
              },
              {
                icon: <Lock size={40} />,
                title: "Secure-Link Solution",
                description: "Enhanced privacy protection with need-based access control, making offshore accounting super safe and trusted globally.",
                features: [
                  "Need-based access",
                  "Data privacy",
                  "Secure systems",
                  "Global trust"
                ]
              },
              {
                icon: <MessageSquare size={40} />,
                title: "Client Connect",
                description: "Constant communication to understand your business objectives and deliver the results you desire.",
                features: [
                  "Regular updates",
                  "Clear communication",
                  "Business alignment",
                  "Result-focused"
                ]
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-blue-900 mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-600">
                      <CheckCircle2 size={16} className="text-blue-900 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition flex items-center mx-auto">
              <span>Learn More About Our Approach</span>
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Client Testimonials with YouTube Videos */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                videoId: "vNlIeTASiOY",
                name: "Shashikant Choudhary",
                role: "Director, TruckX Technologies",
                quote: "FinSmart has transformed our financial operations with their expertise and dedication."
              },
              {
                videoId: "your-video-id-2",
                name: "Riya Chandan",
                role: "Finance Director",
                quote: "Their attention to detail and proactive approach has made them an invaluable partner."
              },
              {
                videoId: "your-video-id-3",
                name: "Sanjeev Wagle",
                role: "Business Owner",
                quote: "Excellent service and professional team. Highly recommended for accounting needs."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                    title={`${testimonial.name} Testimonial`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <h3 className="font-semibold text-lg mb-2">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Our Team */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-blue-900 rounded-2xl text-white p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Growing Team</h2>
              <p className="text-xl text-blue-100 mb-8">
                Be part of a dynamic team that's shaping the future of accounting services
              </p>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: <GraduationCap size={24} />, text: "Continuous Learning" },
                  { icon: <Heart size={24} />, text: "Great Culture" },
                  { icon: <Coffee size={24} />, text: "Work-Life Balance" },
                  { icon: <BriefcaseIcon size={24} />, text: "Career Growth" }
                ].map((benefit, index) => (
                  <div key={index} className="flex flex-col items-center transform hover:scale-105 transition-all duration-300">
                    <div className="mb-2">{benefit.icon}</div>
                    <span className="text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
              <a 
                href="/careers"
                className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                <span>View Open Positions</span>
                <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}