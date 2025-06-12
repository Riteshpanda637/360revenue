// app/terms/page.tsx
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollText, AlertTriangle, BookOpen, DollarSign, Link2, Scale, Shield, FileText } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const metadata = {
  title: 'Terms and Conditions | 360revenue - Terms of Service',
  description: 'Read the terms and conditions for using 360revenue. Understand our educational content disclaimers, intellectual property rights, and user responsibilities.',
  keywords: 'terms and conditions, terms of service, legal terms, user agreement, 360revenue terms, website terms'
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollText className="w-16 h-16 mx-auto mb-4 text-white/90" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-lg md:text-xl text-purple-100">
            Please read these terms carefully before using our website
          </p>
          <p className="text-sm mt-4 text-purple-200">Last Updated: January 2025</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        
        {/* Important Notice */}
        <Alert className="mb-12 border-2 border-red-500 bg-red-50">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-base">
            <strong className="text-red-700">IMPORTANT:</strong> All content on 360revenue is for 
            educational purposes only and is NOT financial advice. Always consult qualified 
            professionals before making financial decisions.
          </AlertDescription>
        </Alert>

        {/* Section 1: Agreement to Terms */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
                <FileText className="w-8 h-8 mr-3 text-blue-600" />
                1. Agreement to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using the website www.360revenue.com ("Site," "we," "us," or "our"), 
                you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with 
                any part of these terms, you do not have permission to access the Site.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Section 2: Description of Service */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <BookOpen className="w-8 h-8 mr-3 text-green-600" />
            2. Description of Service
          </h2>
          
          <div className="space-y-4">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">360revenue is a free educational website providing:</h3>
                <ul className="space-y-2">
                  {[
                    "Information about making money online",
                    "Educational content on passive income strategies",
                    "Guides on side hustles and entrepreneurship",
                    "General information about investing and personal finance",
                    "Resources for financial literacy and wealth building"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <p className="text-blue-800 font-semibold">
                  <strong>No User Accounts:</strong> This is an information-only website. 
                  We do not offer user accounts, memberships, or require any registration.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3: Educational Purpose & Disclaimers */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <AlertTriangle className="w-8 h-8 mr-3 text-red-600" />
            3. Educational Purpose Only
          </h2>
          
          <Card className="border-2 border-red-400 bg-red-50">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4 text-red-800">Not Financial Advice</h3>
              <div className="space-y-4">
                <p className="text-gray-700 font-semibold">
                  All content on 360revenue is for educational and informational purposes only. It is NOT:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Professional financial advice",
                    "Investment recommendations",
                    "Legal or tax advice",
                    "A guarantee of financial results"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center bg-white p-3 rounded-lg">
                      <span className="text-red-500 mr-2">✗</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Alert className="bg-yellow-50 border-yellow-400">
                  <AlertDescription>
                    Always consult with qualified professionals before making financial decisions.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">No Guarantees</h3>
              <p className="text-gray-700 mb-4">We make no guarantees about:</p>
              <ul className="space-y-2">
                {[
                  "Your ability to earn money using our information",
                  "The accuracy of third-party information we reference",
                  "The success of any strategies discussed",
                  "Your individual results from applying our content"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">⚠</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Section 4: Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <Shield className="w-8 h-8 mr-3 text-purple-600" />
            4. Intellectual Property Rights
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-green-700">✓ You MAY:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• View and read content for personal use</li>
                  <li>• Share links to our content</li>
                  <li>• Print copies for personal reference</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-red-700">✗ You may NOT:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Copy and republish our content</li>
                  <li>• Sell or monetize our content</li>
                  <li>• Remove copyright notices</li>
                  <li>• Use content for commercial purposes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 5: Affiliate Disclosure */}
        <section className="mb-12">
          <Card className="border-2 border-orange-400 bg-orange-50">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
                <DollarSign className="w-8 h-8 mr-3 text-orange-600" />
                5. Affiliate Disclosure
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 font-semibold">
                  360revenue participates in various affiliate programs, including:
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Amazon Associates", "ClickBank", "ShareASale", "Other affiliate networks"].map((network, index) => (
                    <span key={index} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-orange-300">
                      {network}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">
                  We earn commissions when you click our links and make purchases. This does not 
                  affect the price you pay, and we only recommend products/services we believe provide value.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 6: Third-Party Links */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <Link2 className="w-8 h-8 mr-3 text-blue-600" />
            6. Third-Party Links
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                Our Site contains links to third-party websites. We provide these links for 
                convenience, but we do not:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Endorse all linked websites",
                  "Control their content or practices",
                  "Accept responsibility for their policies",
                  "Guarantee their accuracy or safety"
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 7: Limitation of Liability */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <Scale className="w-8 h-8 mr-3 text-gray-600" />
            7. Disclaimers and Limitation of Liability
          </h2>
          
          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">"As Is" Basis</h3>
              <p className="text-gray-700 mb-4">
                The Site and all content are provided "AS IS" without warranties of any kind, 
                including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Accuracy or completeness of information</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Availability or uninterrupted access</li>
              </ul>
            </CardContent>
          </Card>

          <Alert className="mt-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Risk Acknowledgment:</strong> Making money online involves financial risk. 
              Success depends on many factors outside our control. You are responsible for your 
              own financial decisions.
            </AlertDescription>
          </Alert>
        </section>

        {/* Additional Sections Grid */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">User Conduct</h3>
              <p className="text-gray-600 text-sm">
                You agree to use the Site only for lawful purposes, not attempt to hack or 
                disrupt the Site, and respect all applicable laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Modifications</h3>
              <p className="text-gray-600 text-sm">
                We may revise these Terms at any time. Changes are effective immediately upon 
                posting. Continued use constitutes acceptance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Governing Law</h3>
              <p className="text-gray-600 text-sm">
                These Terms are governed by the laws of [Your Jurisdiction]. Any disputes shall 
                be resolved in the courts of [Your Jurisdiction].
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <p className="text-gray-600 text-sm">
                <strong>360revenue</strong><br />
                Website: www.360revenue.com
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final Agreement Box */}
        <Card className="border-2 border-purple-500 bg-purple-50">
          <CardContent className="p-6 text-center">
            <p className="text-purple-800 font-semibold">
              By using 360revenue, you acknowledge that you have read, understood, and agree 
              to be bound by these Terms and Conditions.
            </p>
            <p className="text-sm text-purple-600 mt-2">
              Last Updated: January 2025
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}