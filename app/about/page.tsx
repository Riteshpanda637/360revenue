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
  Mail,
  Facebook,
  Twitter,
  Instagram,
  ArrowLeft,
  Quote
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
    <div className="min-h-screen bg-white">

      <Header/>

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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center px-2 sm:px-4">
          <h1 className="text-5xl font-bold mb-6">
            About 360revenue
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            360revenue is dedicated to empowering your financial journey with expert financial education, wealth mindset strategies, and actionable online income ideas. Our mission is to provide you with the tools, resources, and community support you need to achieve financial independence, build multiple income streams, and master personal finance. Discover our founder's story, our commitment to transparency and trust, and how we help you unlock your full earning potential through proven methods, coaching, and a thriving community of like-minded achievers.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl px-2 sm:px-4">
          <Card className="border-0 shadow-lg rounded-xl py-5">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="w-24 h-24">
                        <g>
                          <circle cx="50" cy="30" r="18" fill="#333" />
                          <path d="M50 50 C30 50 20 65 20 80 L80 80 C80 65 70 50 50 50" fill="#333" />
                          <path d="M35 25 Q50 15 65 25" fill="none" stroke="#333" strokeWidth="2" />
                          <circle cx="42" cy="30" r="2" fill="#fff" />
                          <circle cx="58" cy="30" r="2" fill="#fff" />
                          <path d="M45 38 Q50 42 55 38" fill="none" stroke="#333" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-1">Ritesh Panda</h2>
                  <p className="text-blue-500 mb-4">Founder of 360revenue</p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Hi, I'm Ritesh Panda, and I'm thrilled to welcome you to 360revenue! I started 
                    this blog to share my journey and insights into building multiple income streams 
                    and achieving financial independence. My goal is to provide you with practical, 
                    actionable advice to help you take control of your finances and create the life 
                    you've always wanted.
                  </p>
                  <div className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
                    "My mission is to empower you with the knowledge and tools to make informed financial 
                    decisions and build a secure future."
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-2 sm:px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold">My Story</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            I wasn't always financially savvy. In fact, I struggled with debt and living paycheck to 
            paycheck for years. It wasn't until I made a conscious decision to change my financial 
            habits that things started to turn around. Through research, experimentation, and a lot of 
            hard work, I discovered various ways to earn money online and offline, eventually building 
            a diversified income portfolio. This blog is where I share the lessons learned and the 
            strategies that worked for me.
          </p>
        </div>
      </section>

      {/* What You'll Discover Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl px-2 sm:px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold">What You'll Discover Here</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-6">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Side Hustles</h3>
                  <p className="text-gray-600 text-sm">
                    Explore diverse and creative side hustle ideas to boost your income and passion projects.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Investing</h3>
                  <p className="text-gray-600 text-sm">
                    Get started with investing fundamentals and strategies to make your money work for you.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Financial Independence</h3>
                  <p className="text-gray-600 text-sm">
                    Discover proven strategies to achieve financial freedom and explore the path to early retirement.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Online Business</h3>
                  <p className="text-gray-600 text-sm">
                    Learn the essentials of starting and scaling your own successful online business venture.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PiggyBank className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personal Finance</h3>
                  <p className="text-gray-600 text-sm">
                    Master budgeting, smart saving techniques, and effective debt management skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
     

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Import this to fix missing icons
const BookOpen = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const Target = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <circle cx="12" cy="12" r="6" strokeWidth={2} />
    <circle cx="12" cy="12" r="2" strokeWidth={2} />
  </svg>
);