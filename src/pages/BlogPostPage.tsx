import React from 'react';
import { Calendar, User, ChevronRight, ArrowRight } from 'lucide-react';

interface BlogPostProps {
  postId: string;
}

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  content: React.ReactNode;
  authorImage: string;
  authorRole: string;
  authorBio: string;
  tableOfContents: { id: string; title: string; }[];
}

export function BlogPostPage({ postId }: BlogPostProps) {
  const blogPosts: Record<string, BlogPost> = {
    'gst-compliance-exporters': {
      id: 'gst-compliance-exporters',
      title: 'GST Compliance for Exporters',
      author: 'Shalaka Joshi',
      date: 'January 20, 2025',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      authorRole: 'Founder & Director',
      authorBio: 'Shalaka Joshi, a Chartered Accountant passionate about GST compliance and international trade, brings over 20 years of experience in helping exporters navigate complex tax regulations.',
      tableOfContents: [
        { id: 'overview', title: 'Overview of GST for Exporters' },
        { id: 'compliance', title: 'Compliance Requirements' },
        { id: 'challenges', title: 'Common Challenges' },
        { id: 'solutions', title: 'FinSmart Solutions' }
      ],
      content: (
        <>
          <p className="text-lg text-gray-700 mb-8">
            GST compliance for exporters in India presents unique challenges and opportunities. Understanding these 
            requirements is crucial for maintaining operational efficiency and ensuring smooth international trade operations.
          </p>

          <h2 id="overview" className="text-2xl font-bold text-gray-900 mb-4">Overview of GST for Exporters</h2>
          <p className="text-gray-700 mb-8">
            Exports are considered as zero-rated supplies under GST, which means that no GST is payable on export 
            of goods or services. However, exporters need to comply with specific procedures and documentation 
            requirements to claim the benefits under GST.
          </p>

          <h2 id="compliance" className="text-2xl font-bold text-gray-900 mb-4">Compliance Requirements</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>Registration under GST</li>
            <li>Filing of shipping bills</li>
            <li>Maintenance of proper documentation</li>
            <li>Regular filing of returns</li>
          </ul>

          <h2 id="challenges" className="text-2xl font-bold text-gray-900 mb-4">Common Challenges</h2>
          <p className="text-gray-700 mb-8">
            Exporters face various challenges in GST compliance, including working capital blockage, 
            documentation complexities, and refund-related issues. Understanding these challenges is crucial 
            for developing effective solutions.
          </p>

          <h2 id="solutions" className="text-2xl font-bold text-gray-900 mb-4">FinSmart Solutions</h2>
          <p className="text-gray-700 mb-8">
            Our expert team provides comprehensive solutions for exporters, including GST compliance management, 
            refund processing, and advisory services. We help businesses optimize their export operations while 
            ensuring full compliance with GST regulations.
          </p>
        </>
      )
    },
    'secretarial-compliance-checklist': {
      id: 'secretarial-compliance-checklist',
      title: 'Mandatory Secretarial Compliance Checklist for Indian Companies',
      author: 'Dipali Phadke',
      date: 'January 15, 2025',
      authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      authorRole: 'Chief Executive Officer',
      authorBio: 'Dipali Phadke leads the secretarial compliance division at FinSmart, bringing extensive experience in corporate governance and regulatory compliance.',
      tableOfContents: [
        { id: 'introduction', title: 'Introduction' },
        { id: 'annual-requirements', title: 'Annual Requirements' },
        { id: 'board-meetings', title: 'Board Meetings' },
        { id: 'documentation', title: 'Documentation' }
      ],
      content: (
        <>
          <p className="text-lg text-gray-700 mb-8">
            Secretarial compliance is a critical aspect of corporate governance in India. Companies must adhere to 
            various regulatory requirements to maintain their compliance status and avoid penalties.
          </p>

          <h2 id="introduction" className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-8">
            The Companies Act, 2013 mandates various secretarial compliances for companies registered in India. 
            These requirements ensure transparency, good governance, and protection of stakeholder interests.
          </p>

          <h2 id="annual-requirements" className="text-2xl font-bold text-gray-900 mb-4">Annual Requirements</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>Filing of annual returns</li>
            <li>Conducting annual general meetings</li>
            <li>Maintaining statutory registers</li>
            <li>Appointment of auditors</li>
          </ul>

          {/* Additional content sections */}
        </>
      )
    },
    // Add more blog posts here
  };

  const post = blogPosts[postId];
  
  if (!post) {
    return <div className="text-center py-20">Blog post not found</div>;
  }

  const relatedPosts = [
    { id: 'property-development-accounting', title: 'Property Development Accounting: Everything You Need to Know' },
    { id: 'accounting-software-mncs', title: 'Accounting Software for MNCs: 5 Popular Recommendations' },
    { id: 'year-end-checklist', title: 'Financial Year-End Checklist to Close Books Right in 2024' },
    { id: 'cloud-accounting-software', title: '7 Cloud Accounting Software for Small and Midsize Businesses' },
    { id: 'india-market-entry', title: 'Streamlining Global Expansion: 8 Best India Market Entry Strategies for Businesses' }
  ];

  return (
    <>
      {/* Article Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center space-x-6 text-blue-100">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                {post.author}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <article className="prose max-w-none">
              {post.content}
            </article>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start space-x-4">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg mb-2">{post.author}</h3>
                  <p className="text-gray-600 mb-2">{post.authorRole}</p>
                  <p className="text-sm text-gray-600">{post.authorBio}</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-gray-50 rounded text-sm text-gray-600">
              <p>
                The content in this article is for general information and education purposes only and should not 
                be construed as legal or tax advice. Finsmart Accounting does not warrant or guarantee the accuracy, 
                completeness, adequacy, or currency of the information in the article. You should seek the advice 
                of a competent lawyer or accountant licensed to practise in your jurisdiction for advice on your 
                particular situation.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Table of Contents */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-4">In This Article</h3>
              <ul className="space-y-2">
                {post.tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-blue-900 hover:text-blue-700 flex items-center">
                      <ChevronRight size={16} className="mr-2" />
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Articles */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-4">Trending Articles</h3>
              <ul className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <li key={relatedPost.id}>
                    <a 
                      href={`/blog/${relatedPost.id}`}
                      className="text-gray-700 hover:text-blue-900 flex items-start"
                    >
                      <ChevronRight size={16} className="mr-2 mt-1 flex-shrink-0" />
                      <span>{relatedPost.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Box */}
            <div className="bg-blue-900 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4">Ready to Get Started?</h3>
              <p className="mb-6">
                Transform your accounting and compliance processes with Finsmart's expert solutions.
              </p>
              <button className="w-full bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition flex items-center justify-center">
                <span>Book a Consultation</span>
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}