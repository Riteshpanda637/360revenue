import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  DollarSign,
  TrendingUp,
  Briefcase,
  PiggyBank,
  Users,
  Quote,
  Shield,
  Star,
  Target,
  BookOpen,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Heart,
  Award
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const generateMetadata = () => ({
  title: "About 360revenue: Financial Education, Wealth Mindset & Online Income Journey",
  description: "Discover the story behind 360revenue, your trusted source for financial education, wealth building, personal finance coaching, and online income strategies. Learn about our mission, values, founder, and commitment to empowering your financial journey.",
  keywords: "about 360revenue, 360revenue story, 360revenue founder, financial education, financial literacy, personal finance journey, financial coaching, online income story, wealth mindset, 360revenue mission, 360revenue values, 360revenue team, 360revenue expertise, 360revenue community, financial empowerment, financial independence, financial freedom, wealth building, 360revenue vision, 360revenue goals, 360revenue roadmap, 360revenue achievements, 360revenue milestones, 360revenue testimonials, 360revenue reviews, 360revenue success stories, 360revenue transformation, 360revenue impact, 360revenue support, 360revenue help, 360revenue contact, 360revenue partners, 360revenue affiliates, 360revenue sponsors, 360revenue press, 360revenue media, 360revenue awards, 360revenue recognition, 360revenue leadership, 360revenue experience, 360revenue background, 360revenue credentials, 360revenue trust, 360revenue credibility, 360revenue transparency, 360revenue commitment, 360revenue dedication, 360revenue innovation, 360revenue solutions, 360revenue strategies, 360revenue resources, 360revenue guides, 360revenue articles, 360revenue blog, 360revenue tips, 360revenue insights, 360revenue analysis, 360revenue research, 360revenue trends, 360revenue best practices, 360revenue case studies, 360revenue examples, 360revenue frameworks, 360revenue models, 360revenue systems, 360revenue processes, 360revenue methods, 360revenue techniques, 360revenue plans, 360revenue workshops, 360revenue webinars, 360revenue events, 360revenue community, 360revenue forums, 360revenue groups, 360revenue clubs, 360revenue networking, 360revenue meetups, 360revenue coaching, 360revenue consulting, 360revenue support, 360revenue help, 360revenue contact, 360revenue about, 360revenue team, 360revenue partners, 360revenue affiliates, 360revenue sponsors, 360revenue press, 360revenue media, 360revenue awards, 360revenue recognition, 360revenue achievements, 360revenue milestones, 360revenue mission, 360revenue vision, 360revenue values, 360revenue goals, 360revenue roadmap, 360revenue updates, 360revenue news, 360revenue announcements, financial education blog, financial literacy resources, personal finance coaching, wealth building tips, online income journey, financial independence story, financial freedom inspiration, 360revenue founder story, 360revenue leadership, 360revenue expertise, 360revenue experience, 360revenue background, 360revenue credentials, 360revenue trust, 360revenue credibility, 360revenue transparency, 360revenue commitment, 360revenue dedication, 360revenue innovation, 360revenue solutions, 360revenue strategies, 360revenue resources, 360revenue guides, 360revenue articles, 360revenue blog, 360revenue tips, 360revenue insights, 360revenue analysis, 360revenue research, 360revenue trends, 360revenue best practices, 360revenue case studies, 360revenue examples, 360revenue frameworks, 360revenue models, 360revenue systems, 360revenue processes, 360revenue methods, 360revenue techniques, 360revenue plans, 360revenue workshops, 360revenue webinars, 360revenue events, 360revenue community, 360revenue forums, 360revenue groups, 360revenue clubs, 360revenue networking, 360revenue meetups, 360revenue coaching, 360revenue consulting, 360revenue support, 360revenue help, 360revenue contact, 360revenue about, 360revenue team, 360revenue partners, 360revenue affiliates, 360revenue sponsors, 360revenue press, 360revenue media, 360revenue awards, 360revenue recognition, 360revenue achievements, 360revenue milestones, 360revenue mission, 360revenue vision, 360revenue values, 360revenue goals, 360revenue roadmap, 360revenue updates, 360revenue news, 360revenue announcements"
});

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': '360revenue',
            'url': 'https://www.360revenue.in/',
            'logo': '/360revenue-og-image.png',
            'description': '360revenue is your trusted guide for earning money online, building side hustles, investing, and achieving financial freedom.'
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
              Your Financial Journey Partner
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              About
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                360revenue
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              360revenue is dedicated to empowering your financial journey with expert financial education, 
              wealth mindset strategies, and actionable online income ideas. Our mission is to provide you 
              with the tools, resources, and community support you need to achieve 
              <span className="font-semibold text-gray-900"> financial independence</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
                <div className="text-gray-600">Readers Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Free Resources</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Founder
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate mind behind 360revenue's mission to democratize financial education
            </p>
          </div>

          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-semibold">
                      Founder & CEO
                    </Badge>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Ritesh Panda</h3>
                  <p className="text-blue-600 font-semibold mb-6">Founder of 360revenue</p>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Hi, I'm Ritesh Panda, and I'm thrilled to welcome you to 360revenue! I started 
                    this platform to share my journey and insights into building multiple income streams 
                    and achieving financial independence. My goal is to provide you with practical, 
                    actionable advice to help you take control of your finances and create the life 
                    you've always wanted.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
                    <div className="flex items-start gap-3">
                      <Quote className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 italic font-medium">
                        "My mission is to empower you with the knowledge and tools to make informed financial 
                        decisions and build a secure future."
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700 font-medium">10+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700 font-medium">Financial Expert</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700 font-medium">Community Leader</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700 font-medium">Passionate Educator</span>
                    </div>
                  </div>
                </div>

                {/* Avatar Side */}
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 lg:p-12 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                      <div className="w-44 h-44 rounded-full bg-white flex items-center justify-center">
                        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                          <svg viewBox="0 0 100 100" className="w-32 h-32">
                            <g>
                              <circle cx="50" cy="30" r="18" fill="#4F46E5" />
                              <path d="M50 50 C30 50 20 65 20 80 L80 80 C80 65 70 50 50 50" fill="#4F46E5" />
                              <path d="M35 25 Q50 15 65 25" fill="none" stroke="#4F46E5" strokeWidth="2" />
                              <circle cx="42" cy="30" r="2" fill="#fff" />
                              <circle cx="58" cy="30" r="2" fill="#fff" />
                              <path d="M45 38 Q50 42 55 38" fill="none" stroke="#4F46E5" strokeWidth="1.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Story
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From financial struggles to helping thousands achieve financial freedom
            </p>
          </div>

          <Card className="border-0 shadow-xl bg-white rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Journey Begins</h3>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I wasn't always financially savvy. In fact, I struggled with debt and living paycheck to 
                paycheck for years. It wasn't until I made a conscious decision to change my financial 
                habits that things started to turn around.
              </p>
              <p>
                Through research, experimentation, and a lot of hard work, I discovered various ways to earn 
                money online and offline, eventually building a diversified income portfolio. This platform 
                is where I share the lessons learned and the strategies that worked for me.
              </p>
              <p>
                Today, I'm proud to have helped thousands of readers take control of their finances and 
                build the life they've always dreamed of. Your success is my success, and I'm committed 
                to being your trusted partner on this journey.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* What You'll Discover Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Discover Here
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive resources to help you master every aspect of personal finance and wealth building
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Side Hustles</h3>
                <p className="text-gray-600 mb-4">
                  Explore diverse and creative side hustle ideas to boost your income and passion projects.
                </p>
                <Badge className="bg-blue-600 text-white">Beginner Friendly</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Investing</h3>
                <p className="text-gray-600 mb-4">
                  Get started with investing fundamentals and strategies to make your money work for you.
                </p>
                <Badge className="bg-purple-600 text-white">Wealth Building</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Independence</h3>
                <p className="text-gray-600 mb-4">
                  Discover proven strategies to achieve financial freedom and explore the path to early retirement.
                </p>
                <Badge className="bg-green-600 text-white">Goal Setting</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Online Business</h3>
                <p className="text-gray-600 mb-4">
                  Learn the essentials of starting and scaling your own successful online business venture.
                </p>
                <Badge className="bg-orange-600 text-white">Entrepreneurship</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <PiggyBank className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Finance</h3>
                <p className="text-gray-600 mb-4">
                  Master budgeting, smart saving techniques, and effective debt management skills.
                </p>
                <Badge className="bg-teal-600 text-white">Essential Skills</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community Support</h3>
                <p className="text-gray-600 mb-4">
                  Join a thriving community of like-minded individuals on their journey to financial freedom.
                </p>
                <Badge className="bg-red-600 text-white">Network</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at 360revenue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trust & Transparency</h3>
              <p className="text-gray-600">
                We believe in complete transparency in all our recommendations and strategies. 
                Your trust is our most valuable asset.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Education</h3>
              <p className="text-gray-600">
                Every piece of content is thoroughly researched and reviewed to ensure 
                you get the highest quality financial education.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community First</h3>
              <p className="text-gray-600">
                We're building more than a platform - we're creating a community of 
                financially empowered individuals supporting each other.
              </p>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}

// Import this to fix missing icons
const Badge = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
    {children}
  </span>
);