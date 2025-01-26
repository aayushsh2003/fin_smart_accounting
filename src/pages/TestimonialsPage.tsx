import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
}

interface VideoTestimonial {
  id: string;
  title: string;
  description: string;
  videoId: string;
  person: {
    name: string;
    role: string;
    company: string;
  };
}

export function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Vikram Mhaske",
      role: "Director Human Resources",
      company: "KSPG Automotive India Pvt. Ltd.",
      quote: "We developed a collaborative partnership with the Finsmart Accounting team. Their dedication, commitment, and high standard of service in \"complete payroll management services\", aligned seamlessly to our multiple business units. We appreciate the team for all their efforts.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      name: "Samit Sadavarte",
      role: "Director",
      company: "GM Haartz Automotive India Pvt. Ltd.",
      quote: "Finsmart Accounting has been our partner since the inception of our business. It's been about 4 years now since we have been collaborating and they have always been super responsive and dedicated. I truly appreciate their excellence and quality of work.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      name: "Suyog Patki",
      role: "Director",
      company: "Codezeven Software Pvt. Ltd",
      quote: "The Finsmart Accounting team has been doing an amazing job, which allows us the luxury to focus on our primary business and not get stuck in the operations. For startups who want to grow in the right direction, I strongly recommend Finsmart Accounting.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
    }
  ];

  const videoTestimonials: VideoTestimonial[] = [
    {
      id: "driya-creatives",
      title: "Mayura Dolas, Co-Founder of Driya Creatives, recommends Finsmart for Accounting Outsourcing Solutions",
      description: "Mayura Dolas, co-founder and director of Driya Creatives, shares her positive experience of working with Finsmart Accounting Outsourcing Company. She highly recommends Finsmart's expert team of accountants and their customer-centric approach.",
      videoId: "vNlIeTASiOY",
      person: {
        name: "Mayura Dolas",
        role: "Co-Founder",
        company: "Driya Creatives"
      }
    },
    {
      id: "relatient",
      title: "Pradeep Unkule, Finance Manager at Relatient, Shares His Success Story",
      description: "Pradeep Unkule shares how Finsmart's efficient and reliable financial services helped Relatient streamline their financial operations and achieve greater success.",
      videoId: "your-video-id",
      person: {
        name: "Pradeep Unkule",
        role: "Finance Manager",
        company: "Relatient"
      }
    },
    {
      id: "idox-india",
      title: "Kailash Maisekar Recommends Finsmart for Streamlined Financial Operations",
      description: "Kailash Maisekar talks about how Finsmart's expert team of accountants helped streamline their accounting operations and achieve greater financial success.",
      videoId: "your-video-id",
      person: {
        name: "Kailash Maisekar",
        role: "Managing Director",
        company: "Idox India Pvt. Ltd."
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-blue-100">
              Discover why businesses trust Finsmart for their accounting and financial needs
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Office meeting"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-xl shadow-xl p-8 md:p-12">
              <Quote size={48} className="text-blue-900/10 absolute top-8 left-8" />
              
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-700 italic mb-6">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-blue-900 font-medium">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>

                <div className="flex justify-center space-x-4">
                  <button 
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-blue-900 text-white hover:bg-blue-800 transition"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-blue-900 text-white hover:bg-blue-800 transition"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Testimonials */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Hear From Our Clients
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {video.description}
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-semibold text-gray-900">{video.person.name}</p>
                    <p className="text-sm text-gray-600">{video.person.role}</p>
                    <p className="text-sm text-blue-900">{video.person.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Finsmart for their accounting and financial needs
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </>
  );
}