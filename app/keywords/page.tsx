import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { 
  Search, 
  TrendingUp, 
  Star, 
  ArrowRight, 
  BookOpen, 
  Globe, 
  Sparkles,
  Target,
  DollarSign,
  CreditCard,
  PiggyBank,
  BarChart3,
  Users,
  Zap,
  Award,
  Heart,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

export const generateMetadata = () => ({
  title: "Keywords & Topics | 360revenue - Search Financial Topics & Earning Methods",
  description: "Explore all financial keywords and topics on 360revenue. Find articles about passive income, side hustles, investing, budgeting, saving, debt management, financial freedom, and more. Search by topics to discover expert guides and proven strategies.",
  keywords: "360revenue keywords, financial keywords, money keywords, investing keywords, budgeting keywords, saving keywords, debt management keywords, side hustle keywords, passive income keywords, financial freedom keywords, wealth building keywords, online income keywords, personal finance keywords, financial topics, money topics, financial search, topic search, financial education keywords, money management keywords, financial planning keywords, investment keywords, financial literacy keywords, 360revenue topics, 360revenue search, 360revenue keywords, 360revenue guides, 360revenue resources, 360revenue articles, 360revenue tips, 360revenue strategies, 360revenue insights, 360revenue analysis, 360revenue research, 360revenue trends, 360revenue best practices, 360revenue case studies, 360revenue examples, 360revenue frameworks, 360revenue models, 360revenue systems, 360revenue processes, 360revenue methods, 360revenue techniques, 360revenue plans, 360revenue workshops, 360revenue webinars, 360revenue events, 360revenue community, 360revenue forums, 360revenue groups, 360revenue clubs, 360revenue networking, 360revenue meetups, 360revenue coaching, 360revenue consulting, 360revenue support, 360revenue help, 360revenue contact, 360revenue about, 360revenue team, 360revenue partners, 360revenue affiliates, 360revenue sponsors, 360revenue press, 360revenue media, 360revenue awards, 360revenue recognition, 360revenue achievements, 360revenue milestones, 360revenue mission, 360revenue vision, 360revenue values, 360revenue goals, 360revenue roadmap, 360revenue updates, 360revenue news, 360revenue announcements",
  openGraph: {
    title: "Keywords & Topics | 360revenue - Search Financial Topics & Earning Methods",
    description: "Explore all financial keywords and topics on 360revenue. Find articles about passive income, side hustles, investing, budgeting, saving, debt management, financial freedom, and more.",
    type: 'website',
    url: 'https://www.360revenue.in/keywords',
    images: [
      {
        url: '/360revenue-og-image.png',
        width: 1200,
        height: 630,
        alt: '360revenue Keywords & Topics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Keywords & Topics | 360revenue - Search Financial Topics & Earning Methods",
    description: "Explore all financial keywords and topics on 360revenue. Find articles about passive income, side hustles, investing, budgeting, saving, debt management, financial freedom, and more.",
    images: ['/360revenue-og-image.png'],
  },
  alternates: {
    canonical: 'https://www.360revenue.in/keywords',
  },
});

export default async function KeywordsPage() {
  // Define popular keywords with categories and descriptions
  const keywordCategories = [
    {
      name: "Income & Earning",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      keywords: [
        { name: 'passive income', description: 'Build streams of income that work for you', articleCount: 8 },
        { name: 'side hustles', description: 'Earn extra money with proven side gigs', articleCount: 12 },
        { name: 'online business', description: 'Start and grow your digital business', articleCount: 10 },
        { name: 'affiliate marketing', description: 'Earn commissions promoting products', articleCount: 6 },
        { name: 'digital marketing', description: 'Master online marketing strategies', articleCount: 7 },
        { name: 'freelancing', description: 'Work independently and build your career', articleCount: 5 }
      ]
    },
    {
      name: "Investing & Wealth",
      icon: TrendingUp,
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      keywords: [
        { name: 'investing', description: 'Grow your wealth through smart investments', articleCount: 15 },
        { name: 'wealth building', description: 'Strategies to build long-term wealth', articleCount: 9 },
        { name: 'stock market', description: 'Navigate the world of stock investing', articleCount: 8 },
        { name: 'cryptocurrency', description: 'Understand digital currency investments', articleCount: 6 },
        { name: 'real estate investing', description: 'Build wealth through property', articleCount: 7 },
        { name: 'retirement planning', description: 'Secure your financial future', articleCount: 5 }
      ]
    },
    {
      name: "Personal Finance",
      icon: CreditCard,
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
      keywords: [
        { name: 'personal finance', description: 'Master your money management', articleCount: 18 },
        { name: 'budgeting', description: 'Take control of your spending', articleCount: 10 },
        { name: 'saving strategies', description: 'Smart ways to save more money', articleCount: 8 },
        { name: 'debt management', description: 'Eliminate debt and regain freedom', articleCount: 6 },
        { name: 'financial freedom', description: 'Achieve true financial independence', articleCount: 12 },
        { name: 'financial literacy', description: 'Build your money knowledge', articleCount: 9 }
      ]
    },
    {
      name: "Lifestyle & Mindset",
      icon: Target,
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      keywords: [
        { name: 'entrepreneurship', description: 'Build and grow your own business', articleCount: 11 },
        { name: 'remote work', description: 'Work from anywhere in the world', articleCount: 7 },
        { name: 'financial goals', description: 'Set and achieve your money goals', articleCount: 8 },
        { name: 'money mindset', description: 'Develop a healthy relationship with money', articleCount: 6 },
        { name: 'productivity tips', description: 'Maximize your earning potential', articleCount: 5 },
        { name: 'work-life balance', description: 'Balance success with personal life', articleCount: 4 }
      ]
    }
  ];

  // Get trending keywords (most mentioned in articles)
  const trendingKeywords = [
    'passive income',
    'side hustles',
    'investing',
    'budgeting',
    'financial freedom',
    'wealth building',
    'online business',
    'financial literacy',
    'debt management',
    'saving strategies',
    'affiliate marketing',
    'digital marketing',
    'entrepreneurship',
    'remote work',
    'personal finance',
  ];

  // Get featured articles for the page
  const dir = path.join(process.cwd(), 'lib/data/articles');
  const files = await fs.readdir(dir);
  const articlesData = await Promise.all(files.map(async file => {
    const content = await fs.readFile(path.join(dir, file), 'utf-8');
    return JSON.parse(content);
  }));

  // Structured data for keywords page
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Keywords & Topics | 360revenue',
    'description': 'Explore all financial keywords and topics on 360revenue. Find articles about passive income, side hustles, investing, budgeting, saving, debt management, financial freedom, and more.',
    'url': 'https://www.360revenue.in/keywords',
    'mainEntity': {
      '@type': 'ItemList',
      'numberOfItems': keywordCategories.reduce((acc, cat) => acc + cat.keywords.length, 0),
      'itemListElement': keywordCategories.flatMap((category, catIndex) => 
        category.keywords.map((keyword, keyIndex) => ({
          '@type': 'ListItem',
          'position': catIndex * category.keywords.length + keyIndex + 1,
          'item': {
            '@type': 'Thing',
            'name': keyword.name,
            'description': keyword.description,
            'url': `https://www.360revenue.in/keywords/${encodeURIComponent(keyword.name)}`
          }
        }))
      )
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
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
              <span className="text-gray-900 font-medium">Keywords</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Search className="w-4 h-4" />
              Topic Explorer
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Explore Financial
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Topics & Keywords
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover expert guides and proven strategies by searching through our comprehensive collection of financial topics. 
              Find exactly what you need to achieve <span className="font-semibold text-gray-900">financial success</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{keywordCategories.reduce((acc, cat) => acc + cat.keywords.length, 0)}</div>
                <div className="text-gray-600">Topics Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">{keywordCategories.length}</div>
                <div className="text-gray-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{articlesData.length}+</div>
                <div className="text-gray-600">Related Articles</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              <Link href="/articles">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Browse All Articles
                </Button>
              </Link>
              <Link href="/categories">
                <Button variant="outline" className="border-2 border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                  <Globe className="w-4 h-4 mr-2" />
                  View Categories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Keywords */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Trending Now
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trending Topics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most popular financial topics our readers are searching for
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {trendingKeywords.map((keyword, index) => (
              <Link
                key={keyword}
                href={`/keywords/${encodeURIComponent(keyword)}`}
                className="group inline-block px-4 py-3 rounded-xl bg-gradient-to-r from-orange-100 to-red-100 hover:from-orange-200 hover:to-red-200 text-orange-900 font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-orange-200 text-center"
              >
                <span className="group-hover:text-orange-800 transition-colors duration-300">
                  {keyword}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Keyword Categories */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore topics organized by financial categories
            </p>
          </div>

          <div className="space-y-12">
            {keywordCategories.map((category, categoryIndex) => (
              <div key={category.name}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                    <p className="text-gray-600">{category.keywords.length} topics available</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.keywords.map((keyword, keywordIndex) => (
                    <Link key={keyword.name} href={`/keywords/${encodeURIComponent(keyword.name)}`}>
                      <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <Search className="w-5 h-5 text-white" />
                            </div>
                            <Badge className={`bg-gradient-to-r ${category.bgColor} text-gray-700 border font-medium text-xs`}>
                              {keyword.articleCount} articles
                            </Badge>
                          </div>
                          
                          <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                            {keyword.name}
                          </h4>
                          
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {keyword.description}
                          </p>
                          
                          <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors duration-300">
                            Explore Topic
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Featured Content
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your journey with our most popular financial guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesData.slice(0, 6).map((article, index) => (
              <Card key={article.slug} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200 font-medium text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Eye className="w-3 h-3" />
                      <span>{(Math.random() * 5 + 1).toFixed(1)}k</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                      <Link href={`/articles/${article.slug}`}>
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Heart className="w-3 h-3" />
                      <span>{(Math.random() * 200 + 50).toFixed(0)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/articles">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <BookOpen className="w-4 h-4 mr-2" />
                Browse All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Navigation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find exactly what you're looking for with our quick navigation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/articles">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">All Articles</h3>
                  <p className="text-gray-600 text-sm">Browse our complete collection</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/categories">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Categories</h3>
                  <p className="text-gray-600 text-sm">Explore by category</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/blog">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 rounded-2xl overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Blog</h3>
                  <p className="text-gray-600 text-sm">Latest insights and updates</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/about">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">About Us</h3>
                  <p className="text-gray-600 text-sm">Learn about 360revenue</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 