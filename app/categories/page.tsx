import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BarChart3, Calendar, ChevronRight, CreditCard, DollarSign, MessageCircle, PiggyBank, Share2, ThumbsUp, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { articlesData, colorMapping } from '@/lib/data/artticleData';
import Link from 'next/link';

export const generateMetadata = () => ({
  title: "Categories & Financial Topics | 360revenue: Personal Finance, Investing, Earning Online, Wealth Building",
  description: "Explore all 360revenue categories: personal finance, investing, budgeting, saving, debt management, passive income, side hustles, online business, financial literacy, wealth building, and more. Find expert guides, actionable tips, and the latest trends to master your money and achieve financial freedom.",
  keywords: "360revenue categories, personal finance categories, best finance blogs, earn money online, investing tips, budgeting advice, saving strategies, debt management, financial planning, passive income, side hustles, online income ideas, financial literacy, wealth building, money management, financial freedom, how to make money, financial education, smart money tips, financial wellness, top finance articles, financial independence, wealth creation, online business, entrepreneurship, digital marketing, affiliate marketing, stock investing, real estate investing, retirement planning, frugal living, money saving hacks, credit score improvement, financial goals, 360revenue investing, 360revenue budgeting, 360revenue saving, 360revenue debt, 360revenue income, 360revenue insurance, 360revenue resources, 360revenue guides, 360revenue articles, 360revenue blog, 360revenue tips, 360revenue insights, 360revenue analysis, 360revenue research, 360revenue trends, 360revenue best practices, 360revenue case studies, 360revenue examples, 360revenue frameworks, 360revenue models, 360revenue systems, 360revenue processes, 360revenue methods, 360revenue techniques, 360revenue plans, 360revenue workshops, 360revenue webinars, 360revenue events, 360revenue community, 360revenue forums, 360revenue groups, 360revenue clubs, 360revenue networking, 360revenue meetups, 360revenue coaching, 360revenue consulting, 360revenue support, 360revenue help, 360revenue contact, 360revenue about, 360revenue team, 360revenue partners, 360revenue affiliates, 360revenue sponsors, 360revenue press, 360revenue media, 360revenue awards, 360revenue recognition, 360revenue achievements, 360revenue milestones, 360revenue mission, 360revenue vision, 360revenue values, 360revenue goals, 360revenue roadmap, 360revenue updates, 360revenue news, 360revenue announcements, financial education blog, financial literacy resources, personal finance coaching, wealth building tips, online income journey, financial independence story, financial freedom inspiration, 360revenue founder story, 360revenue leadership, 360revenue expertise, 360revenue experience, 360revenue background, 360revenue credentials, 360revenue trust, 360revenue credibility, 360revenue transparency, 360revenue commitment, 360revenue dedication, 360revenue innovation, 360revenue solutions, 360revenue strategies, 360revenue resources, 360revenue guides, 360revenue articles, 360revenue blog, 360revenue tips, 360revenue insights, 360revenue analysis, 360revenue research, 360revenue trends, 360revenue best practices, 360revenue case studies, 360revenue examples, 360revenue frameworks, 360revenue models, 360revenue systems, 360revenue processes, 360revenue methods, 360revenue techniques, 360revenue plans, 360revenue workshops, 360revenue webinars, 360revenue events, 360revenue community, 360revenue forums, 360revenue groups, 360revenue clubs, 360revenue networking, 360revenue meetups, 360revenue coaching, 360revenue consulting, 360revenue support, 360revenue help, 360revenue contact, 360revenue about, 360revenue team, 360revenue partners, 360revenue affiliates, 360revenue sponsors, 360revenue press, 360revenue media, 360revenue awards, 360revenue recognition, 360revenue achievements, 360revenue milestones, 360revenue mission, 360revenue vision, 360revenue values, 360revenue goals, 360revenue roadmap, 360revenue updates, 360revenue news, 360revenue announcements"
});

export default function CategoriesPage() {
    const relatedArticles = [
        {
          title: "The Ultimate Guide to Budgeting",
          date: "January 10, 2024",
          icon: BarChart3,
          color: "bg-blue-500"
        },
        {
          title: "Saving Strategies for Young Adults",
          date: "January 5, 2024",
          icon: PiggyBank,
          color: "bg-green-500"
        },
        {
          title: "Understanding Credit Scores",
          date: "December 28, 2023",
          icon: CreditCard,
          color: "bg-teal-500"
        }
      ];

    
      const popularPosts = [
        {
          title: "Top 5 Investment Apps",
          date: "December 15, 2023",
          icon: TrendingUp,
          color: "bg-emerald-500"
        },
        {
          title: "How to Negotiate Your Salary",
          date: "November 20, 2023",
          icon: DollarSign,
          color: "bg-blue-600"
        },
        {
          title: "The Benefits of Compound Interest",
          date: "November 8, 2023",
          icon: BarChart3,
          color: "bg-slate-700"
        }
      ];
    
      const categories = [
        "Investing", "Budgeting", "Saving", "Debt Management", "Income", "Insurance"
      ];
    
  const colorClasses = [
    "bg-gradient-to-r from-pink-200 to-pink-400",
    "bg-gradient-to-r from-blue-200 to-blue-400",
    "bg-gradient-to-r from-green-200 to-teal-300",
    "bg-gradient-to-r from-yellow-200 to-amber-300",
    "bg-gradient-to-r from-purple-200 to-indigo-300",
    "bg-gradient-to-r from-orange-200 to-orange-400",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 min-w-0">
            {/* Breadcrumb */}
            {/* <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
              <a href="#" className="hover:text-blue-600">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span>Blog</span>
            </div> */}

            {/* Article Header */}
            <article className="bg-white rounded-lg shadow-sm p-8">
              <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Explore Financial Categories: <span className="text-blue-500">Personal Finance, Investing, Earning Online & More</span>
              </h1>
              <p className="text-base sm:text-sm md:text-lg text-gray-600 mb-6 text-center">
                Discover 360revenue's comprehensive categories covering personal finance, investing, budgeting, saving, debt management, passive income, side hustles, online business, financial literacy, wealth building, and more. Dive into expert guides, actionable tips, and the latest trends to master your money, build wealth, and achieve financial freedom. Whether you're a beginner or a seasoned investor, 360revenue has the resources and community to support your financial journey.
              </p>

              {/* Popular Keywords Section */}
              <div className="my-8">
                <h2 className="text-xl sm:text-lg md:text-2xl font-bold mb-4 text-gray-900 text-center">Popular earning method</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 justify-center">
                  {[
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
                  ].map((keyword) => (
                    <Link
                      key={keyword}
                      href={`/keywords/${encodeURIComponent(keyword)}`}
                      className="inline-block px-2 py-1 rounded-full bg-gradient-to-r from-blue-100 to-green-200 text-blue-900 font-semibold shadow text-xs sm:text-sm hover:scale-105 transition-all border border-blue-200 text-center"
                    >
                      {keyword}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-8">
                <div className="flex items-center space-x-2">
                  <span>by</span>
                  <span className="font-medium text-blue-600">Ritesh Panda</span>
                </div>
                <span>|</span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Published on January 15, 2025</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8">
                <div className="w-full h-40 md:h-64 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                  <div className="w-full h-full relative">
                    {/* Local Video */}
                    <video className="w-full h-full object-cover rounded-lg" controls>
                      <source src="/video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  In today's economy, finding ways to supplement your income can be crucial for financial stability and achieving your goals. Whether you're looking to pay off debt, save for a down payment, or simply increase your disposable income, there are numerous avenues to explore. This article delves into ten proven strategies to boost your earnings, ranging from side hustles to investment opportunities.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Freelancing</h2>
                <p className="text-gray-700 mb-6">
                  Freelancing offers flexibility and the potential to earn based on your skills and expertise. Platforms like Upwork and Freelancer connect freelancers with clients seeking services in writing, design, programming, and more. Many people use freelancing as a <Link href="/keywords/side%20hustles" className="text-blue-600 underline hover:text-blue-800 transition">side hustle</Link> to supplement their main income.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Online Surveys and Tasks</h2>
                <p className="text-gray-700 mb-6">
                  While not a replacement for a full-time job, participating in online surveys and completing small tasks on platforms like Swagbucks and Amazon Mechanical Turk can provide a modest income stream. These activities require minimal time commitment and can be done from anywhere, making them a popular choice for those seeking <Link href="/keywords/passive%20income" className="text-blue-600 underline hover:text-blue-800 transition">passive income</Link> opportunities.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Affiliate Marketing</h2>
                <p className="text-gray-700 mb-6">
                  <Link href="/keywords/affiliate%20marketing" className="text-blue-600 underline hover:text-blue-800 transition">Affiliate marketing</Link> involves promoting products or services and earning a commission for each sale made through your unique referral link. This can be done through a blog, social media, or email marketing. Choose products relevant to your audience and create compelling content to drive conversions.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Investing in Stocks</h2>
                <p className="text-gray-700 mb-6">
                  Investing in the stock market can generate <Link href="/keywords/wealth%20building" className="text-blue-600 underline hover:text-blue-800 transition">wealth building</Link> through dividends and capital appreciation. However, it's essential to conduct thorough research, diversify your portfolio, and understand the risks involved. Consider consulting a financial advisor before making investment decisions.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Real Estate</h2>
                <p className="text-gray-700 mb-6">
                  Real estate investing can take various forms, from buying rental properties to flipping houses. While it requires significant capital and management, it can provide substantial returns and long-term <Link href="/keywords/financial%20freedom" className="text-blue-600 underline hover:text-blue-800 transition">financial freedom</Link>. Explore different real estate strategies to find one that aligns with your goals and resources.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Creating and Selling Online Courses</h2>
                <p className="text-gray-700 mb-6">
                  If you possess specialized knowledge or skills, creating and selling online courses can be a lucrative venture. Platforms like Teachable and Udemy allow you to share your expertise with a global audience and earn <Link href="/keywords/online%20business" className="text-blue-600 underline hover:text-blue-800 transition">online business</Link> income from course sales. Identify a niche market and develop high-quality content to attract students.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Renting Out Assets</h2>
                <p className="text-gray-700 mb-6">
                  Consider renting out assets you own but don't use frequently, such as a spare room, car, or equipment. Platforms like Airbnb and Turo facilitate these transactions, allowing you to generate income from underutilized resources. This is a great way to boost your <Link href="/keywords/saving%20strategies" className="text-blue-600 underline hover:text-blue-800 transition">saving strategies</Link> and make the most of your assets.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Starting a Blog or YouTube Channel</h2>
                <p className="text-gray-700 mb-6">
                  Creating a blog or YouTube channel around a topic you're passionate about can lead to income generation through advertising, sponsorships, and affiliate marketing. Building an audience takes time and consistent effort, but it can become a significant revenue stream and a path to <Link href="/keywords/entrepreneurship" className="text-blue-600 underline hover:text-blue-800 transition">entrepreneurship</Link>.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Selling Handmade Crafts</h2>
                <p className="text-gray-700 mb-6">
                  If you're skilled in crafting, consider selling your creations on platforms like Etsy. This allows you to showcase your unique products to a wide audience and earn income from your creative talents. Many successful crafters use <Link href="/keywords/digital%20marketing" className="text-blue-600 underline hover:text-blue-800 transition">digital marketing</Link> to reach more customers online.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Offering Consulting Services</h2>
                <p className="text-gray-700 mb-6">
                  Leverage your professional experience by offering consulting services in your field. This can involve providing advice, guidance, or solutions to businesses or individuals. Consulting is a valuable <Link href="/keywords/personal%20finance" className="text-blue-600 underline hover:text-blue-800 transition">personal finance</Link> skill that can help others while boosting your own income.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                  <p className="text-gray-700">
                    <strong>Boosting your income requires a proactive approach and a willingness to explore different opportunities.</strong> By implementing these strategies, you can take control of your financial future and achieve your financial aspirations.
                  </p>
                </div>
              </div>

                 {/* Related Earning Methods Grid */}
            <div className="bg-white text-gray-900 py-16 mt-12">
              <div className="container mx-auto px-2 sm:px-4 max-w-6xl">
                <h2 className="text-3xl font-bold mb-8 text-center">Related Earning Methods</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {articlesData
                    .slice(0, 4)
                    .map((related, idx) => (
                      <Card
                        key={related.slug}
                        className={`bg-gradient-to-br ${colorClasses[idx % colorClasses.length]} hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 rounded-2xl overflow-hidden  rounded-xl py-5`}
                      >
                        <CardContent className="p-6 flex flex-col h-full">
                          <span className="inline-block px-3 py-1 mb-3 rounded-full text-xs font-semibold bg-white/80 text-gray-700">
                            {related.category}
                          </span>
                          <div className="font-bold text-lg mb-2 text-gray-900">{related.title}</div>
                          <div className="text-gray-700 text-xs mb-4 flex-1">{related.summary}</div>
                          <Link
                            href={`/articles/${related.slug}`}
                            className="mt-auto inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full font-semibold transition"
                          >
                            Read more
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            </div>

              {/* Share buttons */}
              <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this post</h3>
                <div className="flex space-x-3">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm" variant="outline">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Tweet
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Comments</h3>
                
                <div className="space-y-6">
                  <div className="flex space-x-4">
                    <Avatar>
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold text-gray-900">Sophia Carter</span>
                          <span className="text-sm text-gray-500">3 days ago</span>
                        </div>
                        <p className="text-gray-700">
                          Great article! I've been looking for ways to increase my income, and these tips are very helpful. I'm especially interested in exploring freelancing and online courses.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Avatar>
                      <AvatarFallback>MW</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold text-gray-900">Mike Wilson</span>
                          <span className="text-sm text-gray-500">2 days ago</span>
                        </div>
                        <p className="text-gray-700">
                          Thanks for sharing these ideas. I've tried a few of them: the online surveys, but I'm excited to explore affiliate marketing and investing in stocks. Any advice for beginners in these areas?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <textarea 
                    placeholder="Write your comment..." 
                    className="w-full p-4 border rounded-lg resize-none h-24 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button className="mt-3 bg-blue-600 hover:bg-blue-700">
                    Post Comment
                  </Button>
                </div>
              </div>
            </article>

         
          </div>

          {/* Sidebar */}
          <div className="w-full lg:max-w-xs space-y-8">
            {/* Related Articles */}
            <Card className="rounded-xl py-5">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Related Articles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 flex flex-col overflow-x-auto">
                {articlesData.map((related, idx) => (
                  <Link href={`/articles/${related.slug}`} key={related.slug}>
                    <div
                      className={`
                        flex items-center gap-7 space-x-3 p-4 rounded-lg cursor-pointer transition-colors font-semibold
                        text-gray-900 hover:scale-105 shadow
                        ${colorClasses[idx % colorClasses.length]}
                      `}
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-base leading-tight mb-1">{related.title}</h4>
                        <p className="text-xs text-gray-700">{related.slug}</p>
                      </div>
                      <div
                        className={`w-3 h-3 rounded-full ${colorMapping[related.category as keyof typeof colorMapping]}`}
                      ></div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card className=' rounded-xl py-5'>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Popular Posts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {popularPosts.map((post, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                    <div className={`w-10 h-10 ${post.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <post.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm leading-tight mb-1">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className=' rounded-xl py-5'>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="block text-gray-700 hover:text-blue-600 py-1 text-sm transition-colors"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Advertisement */}
            <Card className=' rounded-xl py-5'>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Advertisement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-green-100 to-blue-100 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Your Ad Here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
} 