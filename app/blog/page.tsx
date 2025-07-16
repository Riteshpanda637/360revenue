'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';
import { 
  Heart, 
  MessageCircle, 
  Share, 
  ArrowRight,
  Star,
  TrendingUp,
  DollarSign,
  Target,
  Users,
  CheckCircle,
  Sparkles,
  Clock,
  Eye
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import Image from 'next/image';
import { Footer } from '@/components/layout/Footer';
import { blogData } from '@/lib/data/artticleData';

export default function TeenMoneyPage() {
  const [selectedMethod, setSelectedMethod] = React.useState<number | null>(null);
  const detailedSectionRef = React.useRef<HTMLDivElement>(null);

  const handleMethodClick = (methodId: number) => {
    setSelectedMethod(methodId);
    // Scroll to the specific method card
    setTimeout(() => {
      const methodElement = document.getElementById(`method-${methodId}`);
      if (methodElement) {
        methodElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 100);
  };

  const handleAdditionalMethodClick = (slug: string) => {
    // Navigate to the individual method page
    window.open(`/methods/${slug}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30px_30px,rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[length:60px_60px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Teen Money Guide
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                18
              </span>
              <span className="block">Ways to Make Money</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                as a Teenager
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Start generating business ideas and building your financial future early. 
              Discover proven strategies to earn money while learning valuable life skills.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">18</div>
                <div className="text-gray-600">Proven Methods</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">$100+</div>
                <div className="text-gray-600">Monthly Potential</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Teen-Friendly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start Your Money-Making Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              When you start making money early, you get to try different things and figure out what 
              you like and are good at. This can help you choose what job you might want in the future.
            </p>
          </div>

          {/* Phone Mockup and Social Post Section */}
          <div className="flex justify-center items-center mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 transform scale-110"></div>
              <Image 
                src={'/home.png'} 
                alt='Teen Money Making Guide' 
                width={1000} 
                height={1000}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Start Early?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discover Your Passions</h3>
              <p className="text-gray-600 leading-relaxed">
                When you start making money early, you get to try different things and figure out what 
                you like and are good at. This can help you choose what job you might want in the future.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build Life Skills</h3>
              <p className="text-gray-600 leading-relaxed">
                Making money teaches you how to be responsible and how dealing with customers 
                can make you better at talking to people. You'll learn about money management and independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.1)_2px,transparent_2px)] bg-[length:60px_60px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Looking for new ways <br />
            to make money?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Use the My Business Launch tool to start a business and find mentors to guide you on your journey
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Business Ideas
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Ways to Make Money Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              18 Ways to Make Money as a Teenager
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In this comprehensive guide, we'll go through 18 proven ways teens can actually start making money. 
              We'll consider what each method offers, why it's good for this age group, and how to make the most out of it.
            </p>
          </div>

          {/* Money Making Ways Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {blogData.map((method, index) => (
              <Card 
                key={method.id} 
                className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 rounded-xl cursor-pointer ${
                  selectedMethod === method.id ? 'ring-2 ring-blue-500 shadow-2xl' : ''
                }`}
                onClick={() => handleMethodClick(method.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-3 py-1 rounded-full font-semibold">
                      {String(method.id).padStart(2, '0')}
                    </Badge>
                    <span className="text-gray-800 font-semibold text-lg group-hover:text-blue-600 transition-colors duration-300">
                      {method.title.split(':')[0]}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Methods Section */}
      <section ref={detailedSectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Detailed Money-Making Methods
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each method includes requirements, typical income, and step-by-step guidance to get you started
            </p>
            <Button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-4 bg-gray-600 text-white hover:bg-gray-700 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
            >
              ↑ Back to Top
            </Button>
          </div>

          {blogData.map((el, index) => (
            <Card 
              key={el.id} 
              className={`mb-12 border-0 shadow-xl bg-white rounded-2xl overflow-hidden transition-all duration-500 ${
                selectedMethod === el.id 
                  ? 'ring-4 ring-blue-500 shadow-2xl transform scale-[1.02] bg-gradient-to-br from-blue-50 to-white' 
                  : ''
              }`}
              id={`method-${el.id}`}
            >
              <CardContent className="p-8 lg:p-12">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-4 py-2 rounded-full font-bold">
                    {String(el.id).padStart(2, '0')}
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200 font-medium">
                    {el.category}
                  </Badge>
                  <Badge className={`px-3 py-1 rounded-full text-sm font-medium ${
                    el.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                    el.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {el.difficulty.charAt(0).toUpperCase() + el.difficulty.slice(1)}
                  </Badge>
                  {selectedMethod === el.id && (
                    <Badge className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                      Selected
                    </Badge>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {el.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {el.description}
                </p>

                {/* Detailed Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Requirements */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {el.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Income Info */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      Income Breakdown:
                    </h4>
                    <div className="space-y-3">
                      {el.incomeDetails.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step-by-Step Guide */}
                {el.detailedSteps && (
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-indigo-600" />
                      Step-by-Step Guide:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {el.detailedSteps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </div>
                          <span className="text-gray-700 text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* How to Get Started Section */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    How to Get Started:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Step 1: Preparation</h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Research local demand and competition</li>
                        <li>• Gather necessary tools and equipment</li>
                        <li>• Create a simple business plan</li>
                        <li>• Set up basic marketing materials</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Step 2: Launch</h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Start with friends and family</li>
                        <li>• Use social media to promote services</li>
                        <li>• Ask for referrals from satisfied customers</li>
                        <li>• Build a portfolio of your work</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Success Tips */}
                {el.successTips && (
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-600" />
                      Success Tips:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {el.successTips.map((tip, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700 text-sm">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Common Mistakes */}
                {el.commonMistakes && (
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-red-600" />
                      Common Mistakes to Avoid:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {el.commonMistakes.map((mistake, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700 text-sm">{mistake}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Earning Methods Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore More Earning Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover additional proven methods to earn money and build your financial future. 
              Click on any method to learn detailed strategies, requirements, and step-by-step guidance.
            </p>
          </div>

          {/* Investment Methods */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              Investment & Wealth Building
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                             {[
                 { title: "Stock Market Investment", slug: "stock-market-investment", category: "Investing" },
                 { title: "Mutual Fund Investment", slug: "mutual-fund-investment", category: "Investing" },
                 { title: "SIP Investment", slug: "sip-investment", category: "Investing" },
                 { title: "Fixed Deposits Investment", slug: "fixed-deposits-investment", category: "Investing" },
                 { title: "Government Bonds Investment", slug: "government-bonds-investment", category: "Investing" },
                 { title: "Corporate Bonds Investment", slug: "corporate-bonds-investment", category: "Investing" },
                 { title: "Gold Investment", slug: "gold-investment", category: "Investing" },
                 { title: "Real Estate Investment", slug: "real-estate-investment", category: "Investing" },
                 { title: "PPF Investment", slug: "ppf-investment", category: "Investing" },
                 { title: "ELSS Investment", slug: "elss-investment", category: "Investing" },
                 { title: "Index Funds Investment", slug: "index-funds-investment", category: "Investing" },
                 { title: "Dividend Stocks Investment", slug: "dividend-stocks-investment", category: "Investing" }
               ].map((method, index) => (
                 <Card 
                   key={index} 
                   className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white rounded-xl cursor-pointer"
                   onClick={() => handleAdditionalMethodClick(method.slug)}
                 >
                   <CardContent className="p-4">
                     <div className="flex items-center justify-between">
                       <div>
                         <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-sm">
                           {method.title}
                         </h4>
                         <p className="text-xs text-gray-500 mt-1">{method.category}</p>
                       </div>
                       <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                     </div>
                   </CardContent>
                 </Card>
               ))}
            </div>
          </div>

          {/* Online Business Methods */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-green-600" />
              Online Business & Digital Income
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                             {[
                 { title: "Freelancing Services", slug: "freelancing-services", category: "Online Business" },
                 { title: "Online Business", slug: "online-business", category: "Online Business" },
                 { title: "Business Consulting", slug: "business-consulting", category: "Online Business" },
                 { title: "Digital Products", slug: "digital-products", category: "Online Business" },
                 { title: "Affiliate Marketing", slug: "affiliate-marketing", category: "Online Business" },
                 { title: "YouTube Monetization", slug: "youtube-monetization", category: "Online Business" },
                 { title: "Blog Monetization", slug: "blog-monetization", category: "Online Business" },
                 { title: "Social Media Management", slug: "social-media-management", category: "Online Business" },
                 { title: "Virtual Assistant Services", slug: "virtual-assistant-services", category: "Online Business" },
                 { title: "Online Tutoring", slug: "online-tutoring", category: "Online Business" },
                 { title: "Graphic Design Services", slug: "graphic-design-services", category: "Online Business" },
                 { title: "Content Writing", slug: "content-writing", category: "Online Business" }
               ].map((method, index) => (
                 <Card 
                   key={index} 
                   className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white rounded-xl cursor-pointer"
                   onClick={() => handleAdditionalMethodClick(method.slug)}
                 >
                   <CardContent className="p-4">
                     <div className="flex items-center justify-between">
                       <div>
                         <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300 text-sm">
                           {method.title}
                         </h4>
                         <p className="text-xs text-gray-500 mt-1">{method.category}</p>
                       </div>
                       <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors duration-300" />
                     </div>
                   </CardContent>
                 </Card>
               ))}
            </div>
          </div>

          {/* Savings & Financial Management */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-purple-600" />
              Savings & Financial Management
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                             {[
                 { title: "High-Yield Savings Account", slug: "high-yield-savings-account", category: "Savings" },
                 { title: "Money Market Account", slug: "money-market-account", category: "Savings" },
                 { title: "Certificate of Deposits", slug: "certificate-deposits", category: "Savings" },
                 { title: "Treasury Bills Investment", slug: "treasury-bills-investment", category: "Savings" },
                 { title: "Liquid Funds", slug: "liquid-funds", category: "Savings" },
                 { title: "Short-term Bonds", slug: "short-term-bonds", category: "Savings" },
                 { title: "Savings Bank Account", slug: "savings-bank-account", category: "Savings" },
                 { title: "Recurring Deposits", slug: "recurring-deposits", category: "Savings" },
                 { title: "Emergency Fund Planning", slug: "emergency-fund-planning", category: "Savings" },
                 { title: "Auto Save Features", slug: "auto-save-features", category: "Savings" },
                 { title: "Round-up Savings", slug: "round-up-savings", category: "Savings" },
                 { title: "Goal-based Savings", slug: "goal-based-savings", category: "Savings" }
               ].map((method, index) => (
                 <Card 
                   key={index} 
                   className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white rounded-xl cursor-pointer"
                   onClick={() => handleAdditionalMethodClick(method.slug)}
                 >
                   <CardContent className="p-4">
                     <div className="flex items-center justify-between">
                       <div>
                         <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 text-sm">
                           {method.title}
                         </h4>
                         <p className="text-xs text-gray-500 mt-1">{method.category}</p>
                       </div>
                       <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors duration-300" />
                     </div>
                   </CardContent>
                 </Card>
               ))}
            </div>
          </div>

          {/* Budgeting & Financial Planning */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              Budgeting & Financial Planning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                             {[
                 { title: "50/30/20 Budgeting Rule", slug: "50-30-20-budgeting-rule", category: "Budgeting" },
                 { title: "Zero-Based Budgeting", slug: "zero-based-budgeting", category: "Budgeting" },
                 { title: "Envelope Method", slug: "envelope-method", category: "Budgeting" },
                 { title: "Pay Yourself First", slug: "pay-yourself-first", category: "Budgeting" },
                 { title: "Automated Savings", slug: "automated-savings", category: "Budgeting" },
                 { title: "Budget Spreadsheets", slug: "budget-spreadsheets", category: "Budgeting" },
                 { title: "Cash Flow Management", slug: "cash-flow-management", category: "Budgeting" },
                 { title: "Debt Snowball Method", slug: "debt-snowball-method", category: "Budgeting" },
                 { title: "Emergency Fund Building", slug: "emergency-fund-building", category: "Budgeting" },
                 { title: "Investment Allocation", slug: "investment-allocation", category: "Budgeting" },
                 { title: "Financial Goal Setting", slug: "financial-goal-setting", category: "Budgeting" },
                 { title: "Side Income for Debt Payment", slug: "side-income-for-debt-payment", category: "Budgeting" }
               ].map((method, index) => (
                 <Card 
                   key={index} 
                   className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white rounded-xl cursor-pointer"
                   onClick={() => handleAdditionalMethodClick(method.slug)}
                 >
                   <CardContent className="p-4">
                     <div className="flex items-center justify-between">
                       <div>
                         <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 text-sm">
                           {method.title}
                         </h4>
                         <p className="text-xs text-gray-500 mt-1">{method.category}</p>
                       </div>
                       <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors duration-300" />
                     </div>
                   </CardContent>
                 </Card>
               ))}
            </div>
          </div>

          {/* Debt Management */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-red-600" />
              Debt Management & Financial Freedom
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                             {[
                 { title: "Debt Consolidation", slug: "debt-consolidation", category: "Debt Management" },
                 { title: "Balance Transfer Cards", slug: "balance-transfer-cards", category: "Debt Management" },
                 { title: "Debt Avalanche Method", slug: "debt-avalanche-method", category: "Debt Management" },
                 { title: "Personal Loans", slug: "personal-loans", category: "Debt Management" },
                 { title: "Credit Counseling", slug: "credit-counseling", category: "Debt Management" },
                 { title: "Expense Reduction", slug: "expense-reduction", category: "Debt Management" },
                 { title: "Negotiating with Creditors", slug: "negotiating-with-creditors", category: "Debt Management" },
                 { title: "Refinancing Options", slug: "refinancing-options", category: "Debt Management" },
                 { title: "Extra Payment Strategy", slug: "extra-payment-strategy", category: "Debt Management" },
                 { title: "Financial Therapy", slug: "financial-therapy", category: "Debt Management" }
               ].map((method, index) => (
                 <Card 
                   key={index} 
                   className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white rounded-xl cursor-pointer"
                   onClick={() => handleAdditionalMethodClick(method.slug)}
                 >
                   <CardContent className="p-4">
                     <div className="flex items-center justify-between">
                       <div>
                         <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300 text-sm">
                           {method.title}
                         </h4>
                         <p className="text-xs text-gray-500 mt-1">{method.category}</p>
                       </div>
                       <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors duration-300" />
                     </div>
                   </CardContent>
                 </Card>
               ))}
            </div>
          </div>

          {/* Financial Apps & Tools */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-6 h-6 text-orange-600" />
              Financial Apps & Digital Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                             {[
                 { title: "Expense Tracking Apps", slug: "expense-tracking-apps", category: "Financial Apps" },
                 { title: "Investment Apps", slug: "investment-apps", category: "Financial Apps" },
                 { title: "Budgeting Tools", slug: "budgeting-tools", category: "Financial Apps" },
                 { title: "Cashback Apps", slug: "cashback-apps", category: "Financial Apps" },
                 { title: "Coupon Apps", slug: "coupon-apps", category: "Financial Apps" },
                 { title: "Bill Reminder Apps", slug: "bill-reminder-apps", category: "Financial Apps" },
                 { title: "Savings Challenge Apps", slug: "savings-challenge-apps", category: "Financial Apps" },
                 { title: "Credit Score Monitoring", slug: "credit-score-monitoring", category: "Financial Apps" },
                 { title: "Receipt Scanning Apps", slug: "receipt-scanning-apps", category: "Financial Apps" },
                 { title: "Price Comparison Apps", slug: "price-comparison-apps", category: "Financial Apps" },
                 { title: "Subscription Management", slug: "subscription-management", category: "Financial Apps" },
                 { title: "Financial Planning Tools", slug: "financial-planning-tools", category: "Financial Apps" }
               ].map((method, index) => (
                 <Card 
                   key={index} 
                   className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white rounded-xl cursor-pointer"
                   onClick={() => handleAdditionalMethodClick(method.slug)}
                 >
                   <CardContent className="p-4">
                     <div className="flex items-center justify-between">
                       <div>
                         <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 text-sm">
                           {method.title}
                         </h4>
                         <p className="text-xs text-gray-500 mt-1">{method.category}</p>
                       </div>
                       <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-colors duration-300" />
                     </div>
                   </CardContent>
                 </Card>
               ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Explore More?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Each method above includes detailed guides, step-by-step instructions, 
                and expert tips to help you succeed. Click on any method to get started!
              </p>
              <Button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Back to Top Methods
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Make your business idea as strong as the money you choose. Use the My Business 
            Launch tool to start a business and find mentors to guide you on your journey.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Launch Your Business
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

