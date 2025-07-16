"use client";

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Clock,
  CheckCircle,
  Star,
  X,
  AlertCircle,
  BookOpen,
  ArrowLeft,
  Users,
  Globe,
  Shield,
  Briefcase,
  Monitor,
  CreditCard,
  BarChart3,
  Home,
  Smartphone,
  Calculator,
  Car,
  Mail,
  Search,
  Calendar,
  Play,
  Palette,
  FileText,
  Eye,
  MessageCircle,
  Mic
} from 'lucide-react';
import Link from 'next/link';
import { MethodDetail2 } from '@/utils/types/Article';

interface MethodDetailPageProps {
  method: MethodDetail2;
}

export default function MethodDetailPage({ method }: MethodDetailPageProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'INVESTING':
        return TrendingUp;
      case 'SIDE_HUSTLE':
        return Briefcase;
      case 'SAVING':
        return Target;
      case 'BUDGETING':
        return BarChart3;
      case 'DEBT_MANAGEMENT':
        return CreditCard;
      case 'PERSONAL_FINANCE':
        return DollarSign;
      default:
        return DollarSign;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'INVESTING':
        return 'from-blue-600 to-indigo-600';
      case 'SIDE_HUSTLE':
        return 'from-purple-600 to-pink-600';
      case 'SAVING':
        return 'from-green-600 to-emerald-600';
      case 'BUDGETING':
        return 'from-orange-600 to-red-600';
      case 'DEBT_MANAGEMENT':
        return 'from-red-600 to-pink-600';
      case 'PERSONAL_FINANCE':
        return 'from-teal-600 to-cyan-600';
      default:
        return 'from-blue-600 to-purple-600';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'VERY_EASY':
        return 'bg-green-100 text-green-800';
      case 'EASY':
        return 'bg-blue-100 text-blue-800';
      case 'MEDIUM':
        return 'bg-yellow-100 text-yellow-800';
      case 'HARD':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const CategoryIcon = getCategoryIcon(method.category);
  const categoryColor = getCategoryColor(method.category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30px_30px,rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[length:60px_60px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Back Button */}
            <div className="flex justify-start mb-8">
              <Link href="/blog">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Methods
                </Button>
              </Link>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CategoryIcon className="w-4 h-4" />
              {method.category.replace('_', ' ')}
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className={`bg-gradient-to-r ${categoryColor} bg-clip-text text-transparent`}>
                {method.title}
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              {method.description}
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{method.potential}</div>
                <div className="text-gray-600">Potential Returns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{method.timeToStart}</div>
                <div className="text-gray-600">Time to Start</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{method.requirements.length}</div>
                <div className="text-gray-600">Requirements</div>
              </div>
              <div className="text-center">
                <Badge className={`text-lg px-4 py-2 ${getDifficultyColor(method.difficulty)}`}>
                  {method.difficulty.replace('_', ' ')}
                </Badge>
                <div className="text-gray-600 mt-2">Difficulty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">What is {method.title}?</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  {method.content.introduction}
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  {method.content.howItWorks}
                </p>
              </div>

              {/* Requirements */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Requirements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {method.requirements.map((req, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-xl">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <span className="text-lg font-semibold text-gray-900">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Getting Started */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">How to Get Started</h2>
                <div className="space-y-6">
                  {method.content.gettingStarted.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                      <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros and Cons */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    Advantages
                  </h3>
                  <ul className="space-y-3">
                    {method.content.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                    <X className="w-6 h-6 text-red-600" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-3">
                    {method.content.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Success Tips */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Success Tips</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {method.content.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                      <Star className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Mistakes */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Common Mistakes to Avoid</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {method.content.commonMistakes.map((mistake, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{mistake}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Recommended Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {method.content.resources.map((resource, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                      <BookOpen className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{resource}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Conclusion</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  {method.content.conclusion}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Method Summary */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Method Summary</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm text-gray-500">Category:</span>
                      <p className="font-semibold text-gray-900">{method.category.replace('_', ' ')}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Potential Returns:</span>
                      <p className="font-semibold text-green-600">{method.potential}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Time to Start:</span>
                      <p className="font-semibold text-gray-900">{method.timeToStart}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Difficulty:</span>
                      <Badge className={`mt-1 ${getDifficultyColor(method.difficulty)}`}>
                        {method.difficulty.replace('_', ' ')}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Methods */}
              {method.relatedMethods && method.relatedMethods.length > 0 && (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Related Methods</h3>
                    <div className="space-y-2">
                      {method.relatedMethods.map((related, index) => (
                        <Link 
                          key={index} 
                          href={`/methods/${related.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span className="text-blue-600 hover:text-blue-800 font-medium">
                            {related}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Quick Actions */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Get Started Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      Download Guide
                    </Button>
                    <Button variant="outline" className="w-full">
                      Share Method
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start with {method.title}?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards financial freedom. Start implementing this method today and begin your journey to building wealth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Now
            </Button>
            <Link href="/blog">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300">
                Explore More Methods
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 