import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { 
  BookOpen, 
  Filter, 
  Search, 
  ArrowRight, 
  TrendingUp, 
  Star, 
  Clock, 
  Eye,
  Heart,
  Share2,
  Globe,
  Sparkles,
  Target,
  DollarSign,
  CreditCard,
  PiggyBank,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { articlesData } from '@/lib/data/artticleData';
import Link from 'next/link';

export const generateMetadata = () => ({
  title: "All Articles | 360revenue - Complete Collection of Financial Guides & Tips",
  description: "Browse our complete collection of articles on earning money online, investing, personal finance, budgeting, saving, debt management, side hustles, and wealth building. Expert guides, actionable tips, and proven strategies for financial success.",
  keywords: "360revenue articles, financial articles, money making articles, investing articles, personal finance articles, budgeting articles, saving articles, debt management articles, side hustle articles, wealth building articles, financial guides, money tips, financial advice, online income articles, passive income articles, financial education, money management articles, financial planning articles, investment guides, financial literacy articles, 360revenue blog, 360revenue resources, 360revenue guides, 360revenue tips, 360revenue strategies, 360revenue insights, 360revenue analysis, 360revenue research, 360revenue trends, 360revenue best practices, 360revenue case studies, 360revenue examples, 360revenue frameworks, 360revenue models, 360revenue systems, 360revenue processes, 360revenue methods, 360revenue techniques, 360revenue plans, 360revenue workshops, 360revenue webinars, 360revenue events, 360revenue community, 360revenue forums, 360revenue groups, 360revenue clubs, 360revenue networking, 360revenue meetups, 360revenue coaching, 360revenue consulting, 360revenue support, 360revenue help, 360revenue contact, 360revenue about, 360revenue team, 360revenue partners, 360revenue affiliates, 360revenue sponsors, 360revenue press, 360revenue media, 360revenue awards, 360revenue recognition, 360revenue achievements, 360revenue milestones, 360revenue mission, 360revenue vision, 360revenue values, 360revenue goals, 360revenue roadmap, 360revenue updates, 360revenue news, 360revenue announcements",
  openGraph: {
    title: "All Articles | 360revenue - Complete Collection of Financial Guides & Tips",
    description: "Browse our complete collection of articles on earning money online, investing, personal finance, budgeting, saving, debt management, side hustles, and wealth building.",
    type: 'website',
    url: 'https://www.360revenue.in/articles',
    images: [
      {
        url: '/360revenue-og-image.png',
        width: 1200,
        height: 630,
        alt: '360revenue Articles Collection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "All Articles | 360revenue - Complete Collection of Financial Guides & Tips",
    description: "Browse our complete collection of articles on earning money online, investing, personal finance, budgeting, saving, debt management, side hustles, and wealth building.",
    images: ['/360revenue-og-image.png'],
  },
  alternates: {
    canonical: 'https://www.360revenue.in/articles',
  },
});

export default function ArticlesPage({ searchParams }: any) {
  const category = searchParams?.category as string | undefined;
  const sort = (searchParams?.sort as string | undefined) || 'latest';
  const page = (searchParams?.page as string | undefined) || '1';
  const currentPage = parseInt(page);
  const articlesPerPage = 12;

  // Structured data for articles collection
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'All Articles | 360revenue',
    'description': 'Complete collection of financial guides and tips for earning money online, investing, personal finance, budgeting, saving, debt management, side hustles, and wealth building.',
    'url': 'https://www.360revenue.in/articles',
    'mainEntity': {
      '@type': 'ItemList',
      'numberOfItems': articlesData.length,
      'itemListElement': articlesData.slice(0, 10).map((article, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'Article',
          'headline': article.title,
          'description': article.summary,
          'author': article.author,
          'datePublished': article.date,
          'url': `https://www.360revenue.in/articles/${article.slug}`
        }
      }))
    }
  };

  // Filter articles by category if specified
  let filteredArticles = articlesData;
  if (category) {
    filteredArticles = articlesData.filter(article => 
      article.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Sort articles
  let sortedArticles = [...filteredArticles];
  switch (sort) {
    case 'popular':
      // You can implement popularity logic here
      break;
    case 'oldest':
      sortedArticles.reverse();
      break;
    default: // 'latest'
      // Already sorted by default
      break;
  }

  // Pagination
  const totalPages = Math.ceil(sortedArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = sortedArticles.slice(startIndex, endIndex);

  // Get unique categories for filter
  const categories = Array.from(new Set(articlesData.map(article => article.category)));
  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = articlesData.filter(article => article.category === cat).length;
    return acc;
  }, {} as Record<string, number>);

  const colorClasses = [
    "from-pink-500 to-rose-600",
    "from-blue-500 to-indigo-600",
    "from-emerald-500 to-teal-600",
    "from-amber-500 to-orange-600",
    "from-purple-500 to-violet-600",
    "from-cyan-500 to-blue-600",
  ];

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
              <span className="text-gray-900 font-medium">Articles</span>
              {category && (
                <>
                  <span>/</span>
                  <span className="text-gray-900 font-medium">{category}</span>
                </>
              )}
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              {category ? `${category} Articles` : 'All Articles'}
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {category ? `${category}` : 'All Articles'}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {category ? 'Collection' : 'Complete Collection'}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              {category 
                ? `Discover expert guides and proven strategies for ${category.toLowerCase()}. Master the art of financial success with our comprehensive collection.`
                : 'Explore our complete collection of expert financial guides, proven strategies, and actionable tips for earning money online and achieving financial freedom.'
              }
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{filteredArticles.length}</div>
                <div className="text-gray-600">Articles Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{categories.length}</div>
                <div className="text-gray-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Free Access</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              <Link href="/categories">
                <Button variant="outline" className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                  <Filter className="w-4 h-4 mr-2" />
                  Browse Categories
                </Button>
              </Link>
              <Link href="/keywords">
                <Button variant="outline" className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                  <Search className="w-4 h-4 mr-2" />
                  Search Keywords
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <Link href="/articles">
                <Badge className={`px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-300 ${
                  !category 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  All ({articlesData.length})
                </Badge>
              </Link>
              {categories.map((cat, index) => (
                <Link key={cat} href={`/articles?category=${encodeURIComponent(cat)}`}>
                  <Badge className={`px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-300 ${
                    category === cat 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    {cat} ({categoryCounts[cat]})
                  </Badge>
                </Link>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <div className="flex gap-2">
                <Link href={`/articles${category ? `?category=${encodeURIComponent(category)}&sort=latest` : '?sort=latest'}`}>
                  <Badge className={`px-3 py-1 text-xs font-medium cursor-pointer transition-all duration-300 ${
                    sort === 'latest' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    Latest
                  </Badge>
                </Link>
                <Link href={`/articles${category ? `?category=${encodeURIComponent(category)}&sort=popular` : '?sort=popular'}`}>
                  <Badge className={`px-3 py-1 text-xs font-medium cursor-pointer transition-all duration-300 ${
                    sort === 'popular' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    Popular
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentArticles.map((article, index) => (
                  <Card key={article.slug} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={`bg-gradient-to-r ${colorClasses[index % colorClasses.length]} text-white border-0 font-medium text-xs`}>
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

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex gap-2">
                    {currentPage > 1 && (
                      <Link href={`/articles${category ? `?category=${encodeURIComponent(category)}&sort=${sort}&page=${currentPage - 1}` : `?sort=${sort}&page=${currentPage - 1}`}`}>
                        <Button variant="outline" className="px-4 py-2 rounded-xl">
                          Previous
                        </Button>
                      </Link>
                    )}
                    
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pageNum = i + 1;
                      return (
                        <Link key={pageNum} href={`/articles${category ? `?category=${encodeURIComponent(category)}&sort=${sort}&page=${pageNum}` : `?sort=${sort}&page=${pageNum}`}`}>
                          <Button 
                            variant={currentPage === pageNum ? "default" : "outline"}
                            className={`px-4 py-2 rounded-xl ${currentPage === pageNum ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : ''}`}
                          >
                            {pageNum}
                          </Button>
                        </Link>
                      );
                    })}
                    
                    {currentPage < totalPages && (
                      <Link href={`/articles${category ? `?category=${encodeURIComponent(category)}&sort=${sort}&page=${currentPage + 1}` : `?sort=${sort}&page=${currentPage + 1}`}`}>
                        <Button variant="outline" className="px-4 py-2 rounded-xl">
                          Next
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your filters or browse all categories.</p>
              <Link href="/articles">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                  View All Articles
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Other Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover more financial topics and earning methods
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(0, 6).map((cat, index) => (
              <Link key={cat} href={`/articles?category=${encodeURIComponent(cat)}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-md bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-4 text-center">
                    <div className={`w-10 h-10 bg-gradient-to-r ${colorClasses[index % colorClasses.length]} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{cat}</h3>
                    <p className="text-xs text-gray-600">{categoryCounts[cat]} articles</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 