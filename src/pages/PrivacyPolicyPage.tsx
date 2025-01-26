import React from 'react';
import { Shield, Lock, Eye, FileText, Server, UserCheck } from 'lucide-react';

export function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-100">
              Our commitment to protecting your privacy and maintaining the security of your personal information
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
            alt="Privacy and security"
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
                icon: <Shield size={40} />,
                title: "Data Protection",
                description: "We implement robust security measures to protect your information"
              },
              {
                icon: <Lock size={40} />,
                title: "Privacy First",
                description: "Your privacy is our top priority in all operations"
              },
              {
                icon: <Eye size={40} />,
                title: "Transparency",
                description: "Clear communication about how we handle your data"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-blue-900 flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Privacy Commitment</h2>
              <p className="text-gray-600 mb-4">
                This website is administered by Finsmart Accounting Pvt. Ltd. The primary purpose of 
                finsmartaccounting.com is to be a dynamic resource and business tool to help you create 
                your future. We want you to feel secure when visiting our site and are committed to 
                maintaining your privacy when doing so.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  icon: <FileText size={32} />,
                  title: "Information We Collect",
                  content: (
                    <>
                      <p className="text-gray-600">
                        Information on finsmartaccounting.com is gathered in two ways:
                      </p>
                      <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>Indirectly (through our site's technology)</li>
                        <li>Directly (when you provide information)</li>
                      </ul>
                      <p className="text-gray-600 mt-4">
                        One example of information we collect indirectly is through our Internet access logs. 
                        When you access finsmartaccounting.com, your Internet address is automatically collected 
                        and placed in our Internet access logs.
                      </p>
                    </>
                  )
                },
                {
                  icon: <Server size={32} />,
                  title: "Use of Cookies",
                  content: (
                    <p className="text-gray-600">
                      We collect information through cookies, which are small files of information that save 
                      and retrieve information about your visit to finsmartaccounting.com. The cookies we use 
                      identify you merely as a number. If you're uncomfortable regarding cookies use, you can 
                      disable cookies on your computer by changing the settings in preferences or options menu 
                      in your browser.
                    </p>
                  )
                },
                {
                  icon: <UserCheck size={32} />,
                  title: "How We Use Your Information",
                  content: (
                    <p className="text-gray-600">
                      We analyze collected information to determine what's most effective about our site, to 
                      help us identify ways to improve it, and to determine how we can tailor 
                      finsmartaccounting.com to make it more effective. We may also use data to help you 
                      understand more about Finsmart Accounting service and product offerings.
                    </p>
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

              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">Additional Privacy Information</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    <strong>Data Security:</strong> We take appropriate steps to maintain the security of your 
                    data on finsmartaccounting.com. You should understand that the open nature of the Internet 
                    is such that data may flow over networks without security measures and may be accessed and 
                    used by people other than those for whom the data is intended.
                  </p>
                  <p className="text-gray-600">
                    <strong>Access to Information:</strong> You are entitled to know whether we hold information 
                    about you and, if we do, to have access to that information and require it to be corrected 
                    if it is inaccurate.
                  </p>
                  <p className="text-gray-600">
                    <strong>Contact Us:</strong> If you have any questions about our privacy policy or concerns 
                    about your data, please contact us at sales@finsmartaccounting.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}