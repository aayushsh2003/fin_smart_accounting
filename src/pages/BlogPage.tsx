import React from 'react';
import {
  ArrowRight,
  Calendar,
  User,
  ChevronRight,
  Search,
  BookOpen,
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  summary: string;
  image: string;
}

export function BlogPage() {
  const blogPosts: BlogPost[] = [
    {
      id: "gst-compliance-exporters",
      title: "GST Compliance for Exporters",
      author: "Shalaka Joshi",
      date: "January 20, 2025",
      summary: "Overview of GST compliance challenges for exporters and its impact on operational efficiency and profitability.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
    },
    {
      id: "secretarial-compliance-checklist",
      title: "Mandatory Secretarial Compliance Checklist for Indian Companies",
      author: "Dipali Phadke",
      date: "January 15, 2025",
      summary: "Importance of adhering to secretarial compliance for MNCs in India to avoid penalties and enhance stakeholder confidence.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
    },
    {
      id: "csr-requirements",
      title: "Legal Requirements for CSR Activities",
      author: "Shalaka Joshi",
      date: "January 13, 2025",
      summary: "Discussion on the transformation of CSR into a legal requirement under the Companies Act, 2013.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
    },
    // ... remaining blog posts with similar structure
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Stay Ahead of the Curve with Deep Domain Expertise
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Insights and Updates on Accounting, Compliance, and Financial Management
            </p>
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-900">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
            alt="Blog header"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </div>

      {/* Featured Posts */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 hover:text-blue-900 transition">
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.summary}</p>
                  <a 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700"
                  >
                    Read More <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <BookOpen size={40} className="mx-auto mb-6 text-blue-900" />
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights on accounting, compliance, and financial management.
            </p>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition flex items-center">
                Subscribe <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}