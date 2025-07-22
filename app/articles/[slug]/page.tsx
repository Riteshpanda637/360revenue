// app/articles/[slug]/page.tsx

import { notFound } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import fs from 'fs/promises';
import path from 'path';
import { ArrowLeft, ArrowRight, Sparkles, BookOpen, Clock, User, TrendingUp, DollarSign, Target, Star, Zap, ExternalLink } from 'lucide-react'
import { DynamicArticleCard } from '@/components/home/Readmore/dynamicArticlecard';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

type Props = {
  params: Promise<{ slug: string }>;
};

const colorClasses = [
  'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900',
  'bg-gradient-to-r from-green-100 to-teal-200 text-green-900',
  'bg-gradient-to-r from-pink-100 to-rose-200 text-pink-900',
  'bg-gradient-to-r from-yellow-100 to-amber-200 text-yellow-900',
  'bg-gradient-to-r from-purple-100 to-indigo-200 text-purple-900',
  'bg-gradient-to-r from-sky-100 to-cyan-200 text-sky-900',
  'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-900',
  'bg-gradient-to-r from-rose-100 to-pink-200 text-rose-900',
  'bg-gradient-to-r from-emerald-100 to-lime-200 text-emerald-900',
  'bg-gradient-to-r from-gray-100 to-slate-200 text-gray-900',
  'bg-gradient-to-r from-indigo-100 to-violet-200 text-indigo-900',
  'bg-gradient-to-r from-cyan-100 to-sky-200 text-cyan-900'
];

const iconClasses = [
  'from-blue-600 to-blue-700',
  'from-green-600 to-emerald-600',
  'from-pink-600 to-rose-600',
  'from-yellow-600 to-amber-600',
  'from-purple-600 to-indigo-600',
  'from-sky-600 to-cyan-600',
  'from-orange-600 to-red-600',
  'from-rose-600 to-pink-600',
  'from-emerald-600 to-green-600',
  'from-gray-600 to-slate-600',
  'from-indigo-600 to-purple-600',
  'from-cyan-600 to-blue-600'
];

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'lib/data/articles', `${slug}.json`);
  let article = null;

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    article = JSON.parse(fileContent);
  } catch (e) {
    return {
      title: 'Article Not Found | 360° Revenue',
      description: 'The requested article could not be found. Explore our comprehensive guides on earning money online, investing, and financial strategies.',
    };
  }

  const title = `How to Earn Money Online: ${article.title} | 360revenue Article, Passive Income, Side Hustles, Investing, Financial Freedom`;
  const description = `Explore in-depth strategies, actionable tips, and expert insights on how to earn money online with this comprehensive guide on ${article.title}. Learn about passive income, side hustles, investing, financial independence, and more from 360revenue, your trusted source for wealth building and online income methods.`;
  const keywords = `earn money online, ${article.title.toLowerCase()}, make money, side hustles, investing, 360revenue, passive income, remote work, digital marketing, affiliate marketing, online business, financial independence, entrepreneurship, work from home, online jobs, side hustle, make money from home, internet income, gig economy, online side hustle, extra income, financial freedom, online earning tips, wealth building, financial literacy, 360revenue article, 360revenue guide, 360revenue tips, 360revenue strategies, 360revenue resources, 360revenue blog, 360revenue insights, 360revenue analysis, 360revenue research, 360revenue trends, 360revenue best practices, 360revenue case studies, 360revenue examples, 360revenue frameworks, 360revenue models, 360revenue systems, 360revenue processes, 360revenue methods, 360revenue techniques, 360revenue plans, 360revenue workshops, 360revenue webinars, 360revenue events, 360revenue community, 360revenue forums, 360revenue groups, 360revenue clubs, 360revenue networking, 360revenue meetups, 360revenue coaching, 360revenue consulting, 360revenue support, 360revenue help, 360revenue contact, 360revenue about, 360revenue team, 360revenue partners, 360revenue affiliates, 360revenue sponsors, 360revenue press, 360revenue media, 360revenue awards, 360revenue recognition, 360revenue achievements, 360revenue milestones, 360revenue mission, 360revenue vision, 360revenue values, 360revenue goals, 360revenue roadmap, 360revenue updates, 360revenue news, 360revenue announcements`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://www.360revenue.in/articles/${slug}`,
      images: [
        {
          url: '/360revenue-og-image.png',
          width: 1200,
          height: 630,
          alt: `${article.title} Guide`,
        },
      ],
      authors: [article.author],
      publishedTime: article.date,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/360revenue-og-image.png'],
    },
    alternates: {
      canonical: `https://www.360revenue.in/articles/${slug}`,
    },
  };
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  // Dynamically load the article JSON file
  let article = null;
  try {
    const filePath = path.join(process.cwd(), 'lib/data/articles', `${slug}.json`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    article = JSON.parse(fileContent);
  } catch (e) {
    return notFound();
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Header/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              'headline': article.title,
              'description': article.summary,
              'author': article.author,
              'datePublished': article.date,
              'image': '/360revenue-og-image.png',
              'mainEntityOfPage': `https://www.360revenue.in/articles/${article.slug}`
            })
          }}
        />

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
                Comprehensive Guide
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                How to Earn Money Online:
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {article.title}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                {article.summary} Discover proven strategies, expert tips, and actionable methods for earning money online, building passive income, and achieving financial freedom. Explore 360revenue's comprehensive guides and join our community of wealth builders and online entrepreneurs.
              </p>

              {/* Article Meta Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{article.category}</h3>
                    <p className="text-gray-600 text-sm">Category</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{article.author}</h3>
                    <p className="text-gray-600 text-sm">Author</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{article.date}</h3>
                    <p className="text-gray-600 text-sm">Published</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Earning Methods Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Proven Earning Methods
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Click on any method below to learn detailed strategies and step-by-step guides
              </p>
            </div>

            {/* Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {article?.earningMethods.map((method: string, index: number) => {
                const colorClass = colorClasses[index % colorClasses.length];
                const iconClass = iconClasses[index % iconClasses.length];
                
                return(
                  <Link 
                    key={index} 
                    href={`/articles/details/${encodeURIComponent(method)}`}
                    className="block group"
                  >
                    <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden cursor-pointer h-full">
                      <CardContent className="p-8 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className={`w-12 h-12 bg-gradient-to-r ${iconClass} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <TrendingUp className="w-6 h-6 text-white" />
                          </div>
                          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                            {String(index + 1).padStart(2, '0')}
                          </Badge>
                        </div>
                        
                        {/* Method Content */}
                        <div className={`rounded-xl p-6 font-medium text-lg text-center mb-6 flex-1 flex items-center justify-center ${colorClass} group-hover:shadow-lg transition-all duration-300`}>
                          <span className="leading-relaxed">{method}</span>
                        </div>
                        
                        {/* Footer */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span>Proven Method</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                            <span>Learn More</span>
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
                <CardContent>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Start Your Journey?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Choose a method that fits your skills and start building your online income today. 
                    Each method has been carefully researched and proven to work.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                      <Link href="/categories">
                        Explore Categories
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                      <Link href="/blog">
                        View All Articles
                        <BookOpen className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}