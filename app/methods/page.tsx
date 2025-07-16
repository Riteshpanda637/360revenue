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
  Users, 
  CheckCircle, 
  Clock,
  ArrowRight,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { investingMethods } from '@/lib/data/artticleData';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Earning Methods - Complete Guide | 360° Revenue',
  description: 'Explore all proven earning methods including investing, online business, freelancing, and more. Find detailed guides, requirements, and step-by-step instructions for each method.',
  keywords: 'earning methods, money making methods, investment methods, online business methods, freelancing methods, side hustle methods, passive income methods, wealth building methods, financial methods, business methods, 360revenue methods, money methods, income methods, profit methods, revenue methods',
  openGraph: {
    title: 'All Earning Methods - Complete Guide | 360° Revenue',
    description: 'Explore all proven earning methods including investing, online business, freelancing, and more.',
    type: 'website',
    url: 'https://www.360revenue.in/methods',
    images: [
      {
        url: '/360revenue-og-image.png',
        width: 1200,
        height: 630,
        alt: 'All Earning Methods',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Earning Methods - Complete Guide | 360° Revenue',
    description: 'Explore all proven earning methods including investing, online business, freelancing, and more.',
    images: ['/360revenue-og-image.png'],
  },
};

export default function MethodsPage() {
  const methods = Object.values(investingMethods);

  // Group methods by category
  const methodsByCategory = methods.reduce((acc, method) => {
    if (!acc[method.category]) {
      acc[method.category] = [];
    }
    acc[method.category].push(method);
    return acc;
  }, {} as Record<string, typeof methods>);

  const categoryIcons = {
    'INVESTING': TrendingUp,
    'SIDE HUSTLE': DollarSign,
    'SAVING': Target,
    'BUDGETING': CheckCircle,
    'DEBT MANAGEMENT': Users,
    'Financial Apps': Clock,
  };

  const categoryColors = {
    'INVESTING': 'from-blue-600 to-purple-600',
    'SIDE HUSTLE': 'from-green-600 to-emerald-600',
    'SAVING': 'from-purple-600 to-pink-600',
    'BUDGETING': 'from-emerald-600 to-teal-600',
    'DEBT MANAGEMENT': 'from-red-600 to-orange-600',
    'Financial Apps': 'from-orange-600 to-yellow-600',
  };

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
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mb-8 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">Methods</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Complete Methods Guide
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              All Earning
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Methods
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Explore our comprehensive collection of proven earning methods. From investing to online business, 
              find detailed guides, requirements, and step-by-step instructions for each method.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{methods.length}</div>
                <div className="text-gray-600">Proven Methods</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{Object.keys(methodsByCategory).length}</div>
                <div className="text-gray-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Free Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methods by Category */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(methodsByCategory).map(([category, categoryMethods]) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || BookOpen;
            const colorClass = categoryColors[category as keyof typeof categoryColors] || 'from-gray-600 to-gray-700';
            
            return (
              <div key={category} className="mb-16">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-3 rounded-full mb-4">
                    <IconComponent className="w-5 h-5 text-gray-600" />
                    <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                  </div>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover proven methods in {category.toLowerCase()} to build your wealth and achieve financial freedom.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryMethods.map((method) => (
                    <Card 
                      key={method.slug} 
                      className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 rounded-xl cursor-pointer"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <Badge className={`bg-gradient-to-r ${colorClass} text-white text-sm px-3 py-1 rounded-full font-semibold`}>
                            {method.category}
                          </Badge>
                                                     <Badge className={`px-3 py-1 rounded-full text-sm font-medium ${
                             method.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                             method.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                             method.difficulty === 'Very Easy' ? 'bg-green-100 text-green-800' :
                             method.difficulty === 'Hard' ? 'bg-red-100 text-red-800' :
                             'bg-orange-100 text-orange-800'
                           }`}>
                             {method.difficulty}
                           </Badge>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {method.title}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {method.description}
                        </p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            <span className="font-medium">{method.potential}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span>Start in {method.timeToStart}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {method.requirements.slice(0, 2).map((req, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {req}
                              </Badge>
                            ))}
                            {method.requirements.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{method.requirements.length - 2} more
                              </Badge>
                            )}
                          </div>
                          <Link href={`/methods/${method.slug}`}>
                            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose a method that fits your skills and goals. Each method includes detailed guides, 
            step-by-step instructions, and expert tips to help you succeed.
          </p>
          <Link href="/blog">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Teen Money Guide
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
} 