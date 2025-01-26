import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
} from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  transactions: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pricingTiers: PricingTier[] = [
    {
      name: "Basic",
      price: "15000",
      transactions: "upto 25 transactions/month",
      features: [
        "Monthly Bookkeeping",
        "GST / TDS / TCS",
        "GST calculation",
        "GST payments via our tax account",
        "GST monthly return / 2A reconciliation and intimation to client on open items",
        "TDS calculations",
        "TDS payments via our tax account",
        "TDS quarterly returns",
        "Sharing Books of Accounts with Auditors"
      ]
    },
    {
      name: "Basic Plus",
      price: "30000",
      transactions: "upto 100 transactions/month",
      features: [
        "Monthly Bookkeeping",
        "GST / TDS / TCS",
        "GST calculation",
        "GST payments via our tax account",
        "GST monthly return / 2A reconciliation and intimation to client on open items",
        "TDS calculations",
        "TDS payments via our tax account",
        "TDS quarterly returns",
        "Form 16A on annual basis",
        "Month closing with accruals and prepaid",
        "Profit & Loss Account, Balance Sheet",
        "Sharing Books of Accounts with Auditors",
        "Preparation of audit file as per auditors list",
        "Data Access",
        "Monthly Review Call"
      ]
    },
    {
      name: "Premium",
      price: "35000",
      transactions: "upto 100 transactions/month",
      features: [
        "Monthly Bookkeeping and Reconciliations",
        "GST / TDS / TCS",
        "GST calculation",
        "GST payments via our tax account",
        "GST monthly return / 2A reconciliation and intimation to client on open items",
        "TDS calculations",
        "TDS payments via our tax account",
        "TDS quarterly returns",
        "Management Reports",
        "Discussing annual revenue projections with client",
        "Sharing advance tax calculation with auditor for verification",
        "Preparation of audit file as per auditors list",
        "Data Access",
        "Monthly Review Call"
      ]
    }
  ];

  const faqs: FAQ[] = [
    {
      question: "Will I get a dedicated account manager with all outsourced accounting packages?",
      answer: "Yes, all our packages come with a dedicated account manager who will be your primary point of contact and ensure smooth delivery of services."
    },
    {
      question: "What's the major difference between the Basic Plus and Premium package?",
      answer: "While both packages handle up to 100 transactions per month, the Premium package includes additional services like management reports, annual revenue projections, and advance tax calculations with auditor verification."
    },
    {
      question: "What if I require more than 100 transactions per month in my outsourced accounting package?",
      answer: "We offer customized enterprise solutions for businesses with higher transaction volumes. Please contact our team to discuss your specific requirements."
    },
    {
      question: "How does the payments work? Do we sign a yearly contract or pay monthly for outsourced bookkeeping services?",
      answer: "We offer flexible payment terms with both monthly and annual payment options. Annual contracts come with additional benefits and cost savings."
    },
    {
      question: "What is the refund policy for your outsourced accounting packages?",
      answer: "We have a satisfaction guarantee policy. If you're not satisfied with our services, we'll work to resolve any issues or provide a refund as per our service agreement terms."
    },
    {
      question: "What are the modes of payment available with Finsmart Accounting?",
      answer: "We accept various payment methods including bank transfers, credit cards, and digital payments. Detailed payment information will be provided with your service agreement."
    },
    {
      question: "Do you have enterprise accounting and bookkeeping pricing and packages as well?",
      answer: "Yes, we offer customized enterprise solutions for larger organizations with complex requirements. Contact us to discuss your enterprise needs."
    },
    {
      question: "What are the other services I can benefit from?",
      answer: "Besides accounting and bookkeeping, we offer payroll management, financial controller services, and Indian entry services for global MNCs."
    },
    {
      question: "Where can I contact to discuss my concerns regarding outsourced accounting packages and costs?",
      answer: "You can reach us at +91-922 600 7373 or email us at sales@finsmartaccounting.com. Our team will be happy to address your concerns."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Outsourced Accounting Pricing in India
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Transparent pricing for comprehensive accounting and bookkeeping services tailored to your business needs
            </p>
            <div className="text-blue-100">
              <p className="mb-4">
                In the past 2 decades, thousands of Indian accounting businesses have partnered with us for outsourced 
                accounting and bookkeeping support. We deliver unmatched services at competitive prices.
              </p>
              <p>
                * All prices are indicative and exclusive of tax
              </p>
            </div>
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

      {/* Pricing Tiers */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900">
                    ₹{tier.price}
                    <span className="text-lg font-normal text-gray-500">*</span>
                  </div>
                  <div className="text-gray-500">per month</div>
                </div>
                <div className="text-sm text-gray-600 mb-6">{tier.transactions}</div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-3">
                      <CheckCircle2 size={20} className="text-blue-900 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition flex items-center justify-center">
                  <span>Get Started</span>
                  <ArrowRight size={20} className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Requirements Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-gray-600 mb-8">
              If your growing organization has unique outsourced accounting and bookkeeping requirements, 
              we're here to help. Contact our team of expert bookkeepers to discuss your specific needs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="tel:+919226007373" className="flex items-center justify-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <Phone size={24} className="text-blue-900" />
                <span className="text-gray-700">+91-922 600 7373</span>
              </a>
              <a href="mailto:sales@finsmartaccounting.com" className="flex items-center justify-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <Mail size={24} className="text-blue-900" />
                <span className="text-gray-700">sales@finsmartaccounting.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm">
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle size={20} className="text-blue-900 flex-shrink-0" />
                      <span className="font-semibold">{faq.question}</span>
                    </div>
                    {openFaq === index ? (
                      <ChevronUp size={20} className="text-blue-900" />
                    ) : (
                      <ChevronDown size={20} className="text-blue-900" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Accounting Process?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses that trust FinSmart for their accounting needs
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition flex items-center mx-auto">
            <span>Schedule a Consultation</span>
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </>
  );
}