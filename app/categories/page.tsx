import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { 
  BarChart3, 
  Calendar, 
  ChevronRight, 
  CreditCard, 
  DollarSign, 
  MessageCircle, 
  PiggyBank, 
  Share2, 
  ThumbsUp, 
  TrendingUp,
  ArrowRight,
  Star,
  Target,
  BookOpen,
  Users,
  CheckCircle,
  Sparkles,
  ArrowUpRight,
  Search,
  Filter,
  Globe,
  TrendingDown,
  Zap,
  Award,
  Heart,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { articlesData, colorMapping } from '@/lib/data/artticleData';
import Link from 'next/link';

export const generateMetadata = () => ({
  title: "Categories & Financial Topics | 360revenue: Personal Finance, Investing, Earning Online, Wealth Building",
  description: "Explore all 360revenue categories: personal finance, investing, budgeting, saving, debt management, passive income, side hustles, online business, financial literacy, wealth building, and more. Find expert guides, actionable tips, and the latest trends to master your money and achieve financial freedom.",
  keywords: "360revenue categories, personal finance categories, best finance blogs, earn money online, investing tips, budgeting advice, saving strategies, debt management, financial planning, passive income, side hustles, online income ideas, financial literacy, wealth building, money management, financial freedom, how to make money, financial education, smart money tips, financial wellness, top finance articles, financial independence, wealth creation, online business, entrepreneurship, digital marketing, affiliate marketing, stock investing, real estate investing, retirement planning, frugal living, money saving hacks, credit score improvement, financial goals, 360revenue investing, 360revenue budgeting, 360revenue saving, 360revenue debt, 360revenue income, 360revenue insurance, 360revenue resources, 360revenue guides, 360revenue articles, 360revenue blog, 360revenue tips, 360revenue insights, 360revenue analysis, 360revenue research, 360revenue trends, 360revenue best practices, 360revenue case studies, 360revenue examples, 360revenue frameworks, 360revenue models, 360revenue systems, 360revenue processes, 360revenue methods, 360revenue techniques, 360revenue plans, 360revenue workshops, 360revenue webinars, 360revenue events, 360revenue community, 360revenue forums, 360revenue groups, 360revenue clubs, 360revenue networking, 360revenue meetups, 360revenue coaching, 360revenue consulting, 360revenue support, 360revenue help, 360revenue contact, 360revenue about, 360revenue team, 360revenue partners, 360revenue affiliates, 360revenue sponsors, 360revenue press, 360revenue media, 360revenue awards, 360revenue recognition, 360revenue achievements, 360revenue milestones, 360revenue mission, 360revenue vision, 360revenue values, 360revenue goals, 360revenue roadmap, 360revenue updates, 360revenue news, 360revenue announcements, financial education blog, financial literacy resources, personal finance coaching, wealth building tips, online income journey, financial independence story, financial freedom inspiration, 360revenue founder story, 360revenue leadership, 360revenue expertise, 360revenue experience, 360revenue background, 360revenue credentials, 360revenue trust, 360revenue credibility, 360revenue transparency, 360revenue commitment, 360revenue dedication, 360revenue innovation, 360revenue solutions, 360revenue strategies, 360revenue resources, 360revenue guides, 360revenue articles, 360revenue blog, 360revenue tips, 360revenue insights, 360revenue analysis, 360revenue research, 360revenue trends, 360revenue best practices, 360revenue case studies, 360revenue examples, 360revenue frameworks, 360revenue models, 360revenue systems, 360revenue processes, 360revenue methods, 360revenue techniques, 360revenue plans, 360revenue workshops, 360revenue webinars, 360revenue events, 360revenue community, 360revenue forums, 360revenue groups, 360revenue clubs, 360revenue networking, 360revenue meetups, 360revenue coaching, 360revenue consulting, 360revenue support, 360revenue help, 360revenue contact, 360revenue about, 360revenue team, 360revenue partners, 360revenue affiliates, 360revenue sponsors, 360revenue press, 360revenue media, 360revenue awards, 360revenue recognition, 360revenue achievements, 360revenue milestones, 360revenue mission, 360revenue vision, 360revenue values, 360revenue goals, 360revenue roadmap, 360revenue updates, 360revenue news, 360revenue announcements",
  openGraph: {
    title: "Categories & Financial Topics | 360revenue: Personal Finance, Investing, Earning Online, Wealth Building",
    description: "Explore all 360revenue categories: personal finance, investing, budgeting, saving, debt management, passive income, side hustles, online business, financial literacy, wealth building, and more.",
    type: 'website',
    url: 'https://www.360revenue.in/categories',
    images: [
      {
        url: '/360revenue-og-image.png',
        width: 1200,
        height: 630,
        alt: '360revenue Categories',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Categories & Financial Topics | 360revenue: Personal Finance, Investing, Earning Online, Wealth Building",
    description: "Explore all 360revenue categories: personal finance, investing, budgeting, saving, debt management, passive income, side hustles, online business, financial literacy, wealth building, and more.",
    images: ['/360revenue-og-image.png'],
  },
  alternates: {
    canonical: 'https://www.360revenue.in/categories',
  },
});

export default function CategoriesPage() {
  // Get unique categories from articles data
  const uniqueCategories = Array.from(new Set(articlesData.map(article => article.category)));
  
  // Count articles per category
  const categoryCounts = uniqueCategories.reduce((acc, category) => {
    acc[category] = articlesData.filter(article => article.category === category).length;
    return acc;
  }, {} as Record<string, number>);

  const categories = [
    {
      name: "Investing",
      icon: TrendingUp,
      description: "Build wealth through smart investment strategies",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      articleCount: categoryCounts["Investing"] || 0,
      slug: "investing"
    },
    {
      name: "Side Hustles",
      icon: DollarSign,
      description: "Earn extra income with proven side hustle ideas",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      articleCount: categoryCounts["Side Hustles"] || 0,
      slug: "side-hustles"
    },
    {
      name: "Personal Finance",
      icon: CreditCard,
      description: "Master your money with expert financial advice",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      articleCount: categoryCounts["Personal Finance"] || 0,
      slug: "personal-finance"
    },
    {
      name: "Budgeting",
      icon: PiggyBank,
      description: "Take control of your money with effective budgeting",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
      articleCount: categoryCounts["Budgeting"] || 0,
      slug: "budgeting"
    },
    {
      name: "Saving",
      icon: Target,
      description: "Smart strategies to grow your savings faster",
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-50 to-teal-100",
      articleCount: categoryCounts["Saving"] || 0,
      slug: "saving"
    },
    {
      name: "Debt Management",
      icon: BarChart3,
      description: "Eliminate debt and regain financial freedom",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      articleCount: categoryCounts["Debt Management"] || 0,
      slug: "debt-management"
    }
  ];

  const popularKeywords = [
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

  // Get featured articles (most recent or popular)
  const featuredArticles = articlesData.slice(0, 6);
  
  // Get trending articles (you can customize this logic)
  const trendingArticles = articlesData.slice(0, 4);

  // Structured data for categories page
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Categories & Financial Topics | 360revenue',
    'description': 'Explore all 360revenue categories: personal finance, investing, budgeting, saving, debt management, passive income, side hustles, online business, financial literacy, wealth building, and more.',
    'url': 'https://www.360revenue.in/categories',
    'mainEntity': {
      '@type': 'ItemList',
      'numberOfItems': categories.length,
      'itemListElement': categories.map((category, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'Thing',
          'name': category.name,
          'description': category.description,
          'url': `https://www.360revenue.in/articles?category=${encodeURIComponent(category.name)}`
        }
      }))
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
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30px_30px,rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[length:60px_60px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Explore All Financial Topics
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Master Your
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Financial Knowledge
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover comprehensive guides on personal finance, investing, side hustles, and wealth building. 
              Expert insights to help you achieve <span className="font-semibold text-gray-900">financial freedom</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{categories.length}</div>
                <div className="text-gray-600">Expert Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{articlesData.length}+</div>
                <div className="text-gray-600">Articles Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Free Resources</div>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              <Link href="/articles">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Browse All Articles
                </Button>
              </Link>
              <Link href="/keywords">
                <Button variant="outline" className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                  <Search className="w-4 h-4 mr-2" />
                  Explore Keywords
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our expert-curated categories to find the financial guidance you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={category.name} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.name}</h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>

                    {/* Article Count */}
                    <div className="mb-6">
                      <Badge className={`bg-gradient-to-r ${category.bgColor} text-gray-700 border font-medium`}>
                        {category.articleCount} Articles
                      </Badge>
                    </div>

                    {/* CTA Button */}
                    <Button asChild className={`w-full bg-gradient-to-r ${category.color} hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                      <Link href={`/articles?category=${encodeURIComponent(category.name)}`}>
                        Explore {category.name}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Articles Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Trending Now
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trending Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most popular articles our readers are loving right now
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingArticles.map((article, index) => (
              <Card key={article.slug} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-orange-100 text-orange-800 border-orange-200 font-medium text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-orange-600">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs font-medium">Trending</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm">
                    {article.summary}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Link href={`/articles/${article.slug}`} className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-300">
                      Read More →
                    </Link>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Eye className="w-3 h-3" />
                      <span>2.5k views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/articles">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                View All Trending Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Keywords Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Search className="w-4 h-4" />
              Popular Topics
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Topics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover trending financial topics and earning methods
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {popularKeywords.map((keyword) => (
              <Link
                key={keyword}
                href={`/keywords/${encodeURIComponent(keyword)}`}
                className="group inline-block px-4 py-3 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-purple-900 font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-purple-200 text-center"
              >
                <span className="group-hover:text-purple-800 transition-colors duration-300">
                  {keyword}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/keywords">
              <Button variant="outline" className="border-2 border-purple-300 hover:border-purple-600 text-purple-700 hover:text-purple-800 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                <Search className="w-4 h-4 mr-2" />
                Explore All Keywords
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Featured Content
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your financial journey with our most popular guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={article.slug} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200 font-medium text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-blue-600">
                      <Star className="w-4 h-4" />
                      <span className="text-xs font-medium">Featured</span>
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
                      <span>1.2k likes</span>
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

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
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

            <Link href="/keywords">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Keywords</h3>
                  <p className="text-gray-600 text-sm">Search by topics</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/about">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 rounded-2xl overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">About Us</h3>
                  <p className="text-gray-600 text-sm">Learn about 360revenue</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/keywords">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Keywords</h3>
                  <p className="text-gray-600 text-sm">Search by topics</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose 360revenue?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Trusted by thousands of readers worldwide for expert financial guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert-Reviewed Content</h3>
              <p className="text-blue-100">All articles are reviewed by financial experts for accuracy and reliability</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Strategies</h3>
              <p className="text-blue-100">Tested methods that have helped thousands achieve financial success</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Resources</h3>
              <p className="text-blue-100">Access to premium financial education without any cost</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 