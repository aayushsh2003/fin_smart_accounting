import React from 'react';
import { Briefcase, GraduationCap, Users, Star, ArrowRight, PlayCircle, Building2, CheckCircle2, Clock, GraduationCap as GraduationCap2 } from 'lucide-react';

interface JobPosition {
  title: string;
  location: string;
  experience: string;
  description: string;
  qualification?: string;
  shift?: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  title: string;
  videoId: string;
}

export function CareersPage() {
  const openPositions: JobPosition[] = [
    {
      title: "SR. US Accounting Manager",
      location: "Ahmedabad, Pune",
      experience: "Required",
      description: "Lead and manage US accounting operations with expertise in taxation and compliance",
      qualification: "B.Com",
      shift: "Full Time - 1:30 PM to 10:00 PM"
    },
    {
      title: "Senior Accountant - US Taxation",
      location: "Pune",
      experience: "3-5 years",
      description: "Looking for experienced professionals in US taxation and accounting"
    },
    {
      title: "Accounts Executive",
      location: "Mumbai",
      experience: "1-3 years",
      description: "Seeking detail-oriented accountants for bookkeeping and reconciliation"
    },
    {
      title: "Payroll Specialist",
      location: "Pune",
      experience: "2-4 years",
      description: "Expert in Indian payroll processing and compliance"
    },
    {
      title: "Financial Analyst",
      location: "Mumbai",
      experience: "2-5 years",
      description: "MIS reporting and financial analysis specialist"
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: "seemantini",
      name: "Seemantini Karmarker",
      role: "US Accounting Taxation Manager",
      title: "From Local Expertise to Global Exposure",
      videoId: "vNlIeTASiOY"
    },
    {
      id: "sweeti",
      name: "Sweeti Mane",
      role: "Senior Accountant",
      title: "Empowering Growth and Valuing Employees",
      videoId: "Ry8aKqcGHHY"
    },
    {
      id: "amruta",
      name: "Amruta Patil",
      role: "Team Lead",
      title: "Growth, Values, and Career Opportunities",
      videoId: "kR8SeANvnxg"
    },
    {
      id: "vijaylakshmi",
      name: "Vijaylakshmi R",
      role: "AR Process Executive",
      title: "Developing Talent and Professional Growth",
      videoId: "QZdaUGn6YaY"
    },
    {
      id: "shweta",
      name: "Shweta Sharma",
      role: "Process Manager",
      title: "Transforming Careers at Finsmart",
      videoId: "pWxC8uX_oXo"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Build Your Career at Finsmart
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Join a dynamic team of accounting professionals and grow your career with global exposure
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Building2 size={24} />, text: "17+ Years of Excellence" },
                { icon: <Users size={24} />, text: "100+ Team Members" },
                { icon: <Star size={24} />, text: "Global Opportunities" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
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

      {/* Why Join Us */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Finsmart?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap size={40} />,
                title: "Continuous Learning",
                description: "Regular training programs and skill development opportunities"
              },
              {
                icon: <Users size={40} />,
                title: "Collaborative Culture",
                description: "Work with diverse teams and learn from experienced professionals"
              },
              {
                icon: <Star size={40} />,
                title: "Career Growth",
                description: "Clear career progression path and global exposure"
              }
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center">
                <div className="text-blue-900 flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                    <div className="text-gray-600 space-y-1">
                      <div className="flex items-center space-x-2">
                        <Building2 size={16} />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase size={16} />
                        <span>{position.experience}</span>
                      </div>
                      {position.qualification && (
                        <div className="flex items-center space-x-2">
                          <GraduationCap size={16} />
                          <span>{position.qualification}</span>
                        </div>
                      )}
                      {position.shift && (
                        <div className="flex items-center space-x-2">
                          <Clock size={16} />
                          <span>{position.shift}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-800 transition flex items-center">
                    Apply Now
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
                <p className="text-gray-600">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Employee Stories */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Life at Finsmart</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                    title={testimonial.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{testimonial.title}</h3>
                  <p className="text-gray-600 mb-4">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Employee Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Competitive salary package",
              "Health insurance coverage",
              "Professional development programs",
              "Work-life balance",
              "Performance bonuses",
              "Global exposure opportunities",
              "Regular team activities",
              "Career advancement paths"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-blue-900 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our team of professionals and build a rewarding career in accounting
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition flex items-center mx-auto">
            <span>View All Positions</span>
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </>
  );
}