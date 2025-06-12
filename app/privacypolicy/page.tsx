// app/privacy-policy/page.tsx
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Cookie, Link, Eye, Users, Lock, Globe, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | 360revenue - Your Data Protection Rights',
  description: 'Learn how 360revenue protects your privacy. We do not collect personal information. Read our privacy policy for details on cookies, analytics, and third-party services.',
  keywords: 'privacy policy, data protection, cookies, GDPR, user privacy, 360revenue privacy, no data collection'
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 text-white/90" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg md:text-xl text-blue-100">
            Your privacy matters. We don't collect personal data.
          </p>
          <p className="text-sm mt-4 text-blue-200">Last Updated: January 2025</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        
        {/* Quick Overview Card */}
        <Card className="mb-12 border-2 border-green-500 bg-green-50">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start space-x-4">
              <AlertCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-2 text-green-800">
                  We Don't Collect Personal Information
                </h2>
                <p className="text-green-700">
                  360revenue is an information-only website. We don't require registration, 
                  don't collect emails, and don't store any personal data about you.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 1: Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <Globe className="w-8 h-8 mr-3 text-blue-600" />
            Introduction
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Welcome to 360revenue ("we," "our," or "us"). We respect your privacy and are 
              committed to protecting it through our compliance with this policy. This Privacy 
              Policy explains our practices regarding the collection, use, and disclosure of 
              information when you visit our website www.360revenue.com (the "Site").
            </p>
          </div>
        </section>

        {/* Section 2: What We Don't Collect */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <Lock className="w-8 h-8 mr-3 text-green-600" />
            Information We Do NOT Collect
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "No Personal Information", desc: "We don't collect names, emails, phone numbers, or addresses" },
              { title: "No Account Information", desc: "No registration or login required" },
              { title: "No Financial Information", desc: "We don't process payments or collect financial data" },
              { title: "No Contact Forms", desc: "We don't have forms that collect user information" },
              { title: "No Newsletter Subscriptions", desc: "We don't collect emails for newsletters" },
              { title: "No User Tracking", desc: "We don't track individual users across sessions" }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-50 border-gray-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-green-700 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 3: Analytics & Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <Cookie className="w-8 h-8 mr-3 text-orange-600" />
            Information Automatically Collected
          </h2>
          
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Analytics Information</h3>
              <p className="text-gray-700 mb-4">
                We use Google Analytics to understand how visitors use our Site. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Pages viewed and time spent on pages</li>
                <li>Browser type and operating system</li>
                <li>General geographic location (country/city level)</li>
                <li>Device type (desktop, mobile, tablet)</li>
                <li>Referring website</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> This data is anonymous and cannot be used to identify you personally.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Cookies We Use</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-800">Essential Cookies:</strong>
                    <span className="text-gray-600 ml-2">Required for the Site to function properly</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-800">Analytics Cookies:</strong>
                    <span className="text-gray-600 ml-2">Help us understand Site usage (Google Analytics)</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-800">Advertising Cookies:</strong>
                    <span className="text-gray-600 ml-2">Used by Google AdSense to display relevant ads</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 4: How We Use Information */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <Eye className="w-8 h-8 mr-3 text-purple-600" />
            How We Use Information
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                The anonymous information we collect is used to:
              </p>
              <div className="space-y-3">
                {[
                  "Improve Site performance and user experience",
                  "Understand which content is most valuable to visitors",
                  "Analyze traffic patterns and trends",
                  "Display relevant advertisements through Google AdSense",
                  "Fix technical issues and improve Site functionality"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 5: Third-Party Services */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <Link className="w-8 h-8 mr-3 text-blue-600" />
            Third-Party Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Google AdSense</h3>
                <p className="text-gray-600 mb-4">
                  Our Site uses Google AdSense to display advertisements. Google AdSense uses 
                  cookies to serve ads based on your prior visits to our Site or other websites.
                </p>
                <a 
                  href="https://www.google.com/settings/ads" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Opt out of personalized advertising →
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Affiliate Links</h3>
                <p className="text-gray-600 mb-4">
                  Our Site contains affiliate links. When you click these links and make a 
                  purchase, we may earn a commission. These sites have their own privacy policies.
                </p>
                <p className="text-sm text-gray-500">
                  Networks: Amazon Associates, ClickBank, ShareASale
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 6: Your Choices */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <Users className="w-8 h-8 mr-3 text-indigo-600" />
            Your Choices
          </h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Cookie Management</h3>
                <p className="text-gray-700 mb-3">You can control cookies through your browser:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Delete all cookies on your computer</li>
                  <li>Set your browser to prevent cookies</li>
                  <li>Use browser extensions to block tracking</li>
                </ul>
                <p className="text-sm text-orange-600 mt-3">
                  Note: Disabling cookies may affect Site functionality
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Advertising Choices</h3>
                <p className="text-gray-700 mb-4">Opt out of personalized advertising:</p>
                <div className="space-y-2">
                  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" 
                     className="block text-blue-600 hover:underline">
                    → Google Ads Settings
                  </a>
                  <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" 
                     className="block text-blue-600 hover:underline">
                    → Network Advertising Initiative
                  </a>
                  <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" 
                     className="block text-blue-600 hover:underline">
                    → Digital Advertising Alliance
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Sections */}
        <section className="mb-12">
          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Children's Privacy</h2>
              <p className="text-gray-700">
                Our Site is not intended for children under 13 years of age. We do not knowingly 
                collect any information from children under 13. The Site contains general educational 
                content about making money online that is intended for adult audiences.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <Card className="border-2 border-blue-500">
            <CardContent className="p-6 text-center">
              <h2 className="text-xl font-semibold mb-4">Questions About This Policy?</h2>
              <p className="text-gray-700 mb-4">
                Since we don't collect personal information, we don't provide email contact 
                for privacy matters. All information about our practices is contained in this policy.
              </p>
              <p className="text-gray-600">
                <strong>360revenue</strong><br />
                Website: www.360revenue.com
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Last Updated */}
        <div className="text-center text-sm text-gray-500">
          <p>By using our Site, you consent to our Privacy Policy and agree to its terms.</p>
          <p className="mt-2">Last Updated: January 2025</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}