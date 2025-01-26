import React from 'react';
import { Scale, FileText, Shield, AlertCircle, ExternalLink, CheckCircle2 } from 'lucide-react';

export function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-blue-100">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
            alt="Legal document"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </div>

      {/* Key Points */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Scale size={40} />,
                title: "Legal Agreement",
                description: "These terms form a binding legal agreement between you and Finsmart Accounting"
              },
              {
                icon: <Shield size={40} />,
                title: "Protected Content",
                description: "All content is protected by copyright and intellectual property laws"
              },
              {
                icon: <AlertCircle size={40} />,
                title: "Your Responsibility",
                description: "Users must comply with all applicable laws and regulations"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-blue-900 flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  icon: <FileText size={32} />,
                  title: "Website Usage",
                  content: (
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Your access to and use of this site is subject to the following terms and conditions 
                        and all applicable laws. By accessing and using this site, you accept the following 
                        terms and conditions, without limitation or qualification.
                      </p>
                      <p className="text-gray-600">
                        Unless otherwise stated, the contents of this site including, but not limited to, 
                        the text and images contained herein and their arrangement are the property of 
                        Finsmart Accounting Pvt. Ltd. All trademarks used or referred to in this website 
                        are the property of their respective owners.
                      </p>
                    </div>
                  )
                },
                {
                  icon: <Shield size={32} />,
                  title: "Intellectual Property Rights",
                  content: (
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Nothing contained in this site shall be construed as conferring by implication, 
                        estoppels, or otherwise, any license or right to any copyright, patent, trademark 
                        or other proprietary interest of Finsmart Accounting Pvt. Ltd or any third party.
                      </p>
                      <p className="text-gray-600">
                        This site and the content provided in this site may not be copied, reproduced, 
                        republished, uploaded, posted, transmitted, or distributed in any way, without 
                        the prior written consent of Finsmart Accounting Pvt. Ltd.
                      </p>
                    </div>
                  )
                },
                {
                  icon: <ExternalLink size={32} />,
                  title: "External Links & Services",
                  content: (
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Links on this site may lead to services or sites not operated by Finsmart 
                        Accounting Pvt. Ltd. No judgment or warranty is made with respect to such other 
                        services or sites and Finsmart Accounting Pvt. Ltd takes no responsibility for 
                        such other sites or services.
                      </p>
                      <p className="text-gray-600">
                        A link to another site or service is not an endorsement of that site or service. 
                        Any use you make of the information provided on this site, or any site or service 
                        linked to by this site, is at your own risk.
                      </p>
                    </div>
                  )
                },
                {
                  icon: <AlertCircle size={32} />,
                  title: "Disclaimer & Limitations",
                  content: (
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        This site and its contents are provided "as is" and Finsmart Accounting Pvt. Ltd 
                        makes no representation or warranty of any kind with respect to this site or any 
                        site or service accessible through this site.
                      </p>
                      <p className="text-gray-600">
                        Finsmart Accounting Pvt. Ltd expressly disclaims all express and implied warranties 
                        including, but not limited to, the implied warranties of merchantability, fitness 
                        for a particular purpose, title, and non-infringement.
                      </p>
                    </div>
                  )
                }
              ].map((section, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-blue-900">{section.icon}</div>
                    <h3 className="text-2xl font-semibold">{section.title}</h3>
                  </div>
                  {section.content}
                </div>
              ))}

              {/* Additional Terms */}
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">Additional Terms</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="text-blue-900 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Finsmart Accounting Pvt. Ltd maintains this site in Pune, India and you agree that 
                      these terms of use and any legal action or proceeding relating to this site shall 
                      be governed by Indian Laws.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="text-blue-900 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      You are responsible for complying with the laws of the jurisdiction from which you 
                      are accessing this site.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="text-blue-900 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Any information submitted by you through this site shall be deemed non-confidential 
                      and non-proprietary.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}