// app/articles/[slug]/page.tsx

import { notFound } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { articlesData } from '../../../lib/data/artticleData';
import { ArrowLeft, ArrowRight } from 'lucide-react'
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


// Simulated DB (you'll replace this with real DB/API call)


export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return {
    title: `How to Earn Money Online: ${slug.replace(/-/g, ' ')} | 360revenue Article, Passive Income, Side Hustles, Investing, Financial Freedom`,
    description: `Explore in-depth strategies, actionable tips, and expert insights on how to earn money online with this comprehensive guide on ${slug.replace(/-/g, ' ')}. Learn about passive income, side hustles, investing, financial independence, and more from 360revenue, your trusted source for wealth building and online income methods.`,
    keywords: `earn money online, ${slug.replace(/-/g, ' ')}, make money, side hustles, investing, 360revenue, passive income, remote work, digital marketing, affiliate marketing, online business, financial independence, entrepreneurship, work from home, online jobs, side hustle, make money from home, internet income, gig economy, online side hustle, extra income, financial freedom, online earning tips, wealth building, financial literacy, 360revenue article, 360revenue guide, 360revenue tips, 360revenue strategies, 360revenue resources, 360revenue blog, 360revenue insights, 360revenue analysis, 360revenue research, 360revenue trends, 360revenue best practices, 360revenue case studies, 360revenue examples, 360revenue frameworks, 360revenue models, 360revenue systems, 360revenue processes, 360revenue methods, 360revenue techniques, 360revenue plans, 360revenue workshops, 360revenue webinars, 360revenue events, 360revenue community, 360revenue forums, 360revenue groups, 360revenue clubs, 360revenue networking, 360revenue meetups, 360revenue coaching, 360revenue consulting, 360revenue support, 360revenue help, 360revenue contact, 360revenue about, 360revenue team, 360revenue partners, 360revenue affiliates, 360revenue sponsors, 360revenue press, 360revenue media, 360revenue awards, 360revenue recognition, 360revenue achievements, 360revenue milestones, 360revenue mission, 360revenue vision, 360revenue values, 360revenue goals, 360revenue roadmap, 360revenue updates, 360revenue news, 360revenue announcements`
  };
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  // Fetch the article by slug
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) notFound();

  return (
    <div className="min-h-screen bg-gray-50 px-2 sm:px-0">
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
            'mainEntityOfPage': `https://www.360revenue.com/articles/${article.slug}`
          })
        }}
      />
      <div className="max-w-6xl mx-auto px-2 sm:px-4 py-8">
        <div className="mb-8">
          {/* <Link href="/">
            <Button variant="ghost" className="mb-4 hover:bg-gray-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Button>
          </Link> */}
          
          <div className="mb-6">
            <Badge variant="secondary" className="mb-2 bg-blue-100 text-blue-800">
              {article.category}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              How to Earn Money Online: <span className="text-blue-500">{article.title}</span>
            </h1>
            <p className="text-gray-600 mb-4">
              {article.summary} Discover proven strategies, expert tips, and actionable methods for earning money online, building passive income, and achieving financial freedom. Explore 360revenue's comprehensive guides and join our community of wealth builders and online entrepreneurs.
            </p>
          </div>
        </div>
        
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {article.earningMethods.map((method, index) => (
            <Link 
              key={index} 
              href={`/articles/${article.id}/methods/${encodeURIComponent(method)}`}
            >
              <Card className="hover:shadow-md transition-all duration-200 hover:scale-105 cursor-pointer group bg-white border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm group-hover:text-blue-600 transition-colors text-gray-900">
                      {method}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div> */}

        {/* Remove the old earning methods grid using DynamicArticleCard */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {article?.earningMethods.map((e, index) => {
                  const colorClass = colorClasses[index % colorClasses.length];
                  return(
      <DynamicArticleCard earningMethods={e} key={index} className={`rounded-lg p-4 font-medium shadow-sm ${colorClass}`}/>

                  )
})}
            </div>
      </div>
      <Footer />
    </div>
  );
}