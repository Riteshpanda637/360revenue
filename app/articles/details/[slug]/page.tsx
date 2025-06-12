// app/articles/details/[slug]/page.tsx
import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { investingMethods } from '../../../../lib/data/artticleData'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
  DollarSign,
  Clock,
  TrendingUp,
  Users,
  Video,
  Target,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  BookOpen,
  FileText,
  Music,
} from 'lucide-react'
import BackButton from '@/components/home/Readmore/backbutton'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { articlesData } from '@/lib/data/artticleData'

type Props = { params: Promise<{ slug: string }> }

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return {
    title: `How to Earn Money Online: ${slug.replace(/-/g, ' ')} | 360revenue Method, Passive Income, Side Hustles, Investing, Financial Freedom`,
    description: `Unlock the secrets to earning money online with this in-depth guide on ${slug.replace(/-/g, ' ')}. Discover expert strategies, actionable tips, and proven methods for building passive income, side hustles, investing, and achieving financial independence. 360revenue provides trusted resources for wealth building and online income success.`,
    keywords: `earn money online, ${slug.replace(/-/g, ' ')}, make money, side hustles, investing, 360revenue, passive income, remote work, digital marketing, affiliate marketing, online business, financial independence, entrepreneurship, work from home, online jobs, side hustle, make money from home, internet income, gig economy, online side hustle, extra income, financial freedom, online earning tips, wealth building, financial literacy, 360revenue article, 360revenue guide, 360revenue tips, 360revenue strategies, 360revenue resources, 360revenue blog, 360revenue insights, 360revenue analysis, 360revenue research, 360revenue trends, 360revenue best practices, 360revenue case studies, 360revenue examples, 360revenue frameworks, 360revenue models, 360revenue systems, 360revenue processes, 360revenue methods, 360revenue techniques, 360revenue plans, 360revenue workshops, 360revenue webinars, 360revenue events, 360revenue community, 360revenue forums, 360revenue groups, 360revenue clubs, 360revenue networking, 360revenue meetups, 360revenue coaching, 360revenue consulting, 360revenue support, 360revenue help, 360revenue contact, 360revenue about, 360revenue team, 360revenue partners, 360revenue affiliates, 360revenue sponsors, 360revenue press, 360revenue media, 360revenue awards, 360revenue recognition, 360revenue achievements, 360revenue milestones, 360revenue mission, 360revenue vision, 360revenue values, 360revenue goals, 360revenue roadmap, 360revenue updates, 360revenue news, 360revenue announcements`
  };
};

export default async function MethodPage({ params }: Props) {
  const { slug } = await params;
  const key = decodeURIComponent(slug);
  const method = investingMethods[key]
  if (!method) notFound()

  // 2) Destructure your method object
  const {
    title,
    description,
    potential,
    timeToStart,
    requirements,
    content: {
      introduction,
      gettingStarted,
      pros,
      cons,
      tips,
      commonMistakes,
      resources,
      conclusion,
    },
  } = method

  // 3) Map requirement names → icons
  const requirementIcons: Record<string, React.ComponentType<any>> = {
    'Content Creation Skills': FileText,
    'Video Equipment': Video,
    Consistency: Target,
    'Audience Building': Users,
  }

  const colorClasses = [
    "from-pink-100 to-pink-200",
    "from-blue-100 to-blue-200",
    "from-green-100 to-teal-200",
    "from-yellow-100 to-amber-200",
    "from-purple-100 to-indigo-200",
    "from-orange-100 to-orange-200",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-purple-800 text-white">
      <Header/>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            'headline': title,
            'description': description,
            'author': '360revenue',
            'datePublished': '2024-01-01',
            'image': '/360revenue-og-image.png',
            'mainEntityOfPage': `https://www.360revenue.in/articles/details/${slug}`
          })
        }}
      />
      {/* Hero */}
      <div className="container mx-auto px-2 sm:px-4 py-16">
        {/* <Link href="/articles">
           <BackButton/>
          </Link> */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">How to Earn Money Online: {title}</h1>
          <p className="text-xl mb-8 text-purple-100">{description} Discover proven strategies, expert tips, and actionable methods for earning money online, building passive income, and achieving financial freedom. Explore 360revenue's comprehensive guides and join our community of wealth builders and online entrepreneurs.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-purple-700 text-white px-4 py-2">
              <DollarSign className="w-4 h-4 mr-1" />
              {potential}
            </Badge>
            <Badge className="bg-purple-700 text-white px-4 py-2">
              <Clock className="w-4 h-4 mr-1" />
              {timeToStart}
            </Badge>
            <Badge className="bg-purple-700 text-white px-4 py-2">
              <TrendingUp className="w-4 h-4 mr-1" />
              {requirements.length} Items
            </Badge>
          </div>
        </div>
      </div>

      {/* Key Requirements */}
      <div className="bg-white text-gray-900 py-16">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Requirements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {requirements.map((req, i) => {
              const Icon = requirementIcons[req] || CheckCircle2
              return (
                <Card key={i} className="text-center rounded-xl py-5">
                  <CardHeader>
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <CardTitle>{req}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-gray-600">
                      {/* fallback to showing the name */}
                      {req}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-gray-50 text-gray-900 py-16">
        <div className="container mx-auto px-2 sm:px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Introduction</h2>
          <p className="text-lg leading-relaxed mb-6">{introduction}</p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Getting Started */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                Getting Started: Building Your Foundation
              </h3>
              <div className="space-y-4">
                {gettingStarted.map((step, i) => {
                  const [head, ...rest] = step.split(':')
                  const desc = rest.join(':').trim()
                  return (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        {rest.length ? (
                          <>
                            <p className="font-semibold">{head}:</p>
                            <p className="text-gray-600">{desc}</p>
                          </>
                        ) : (
                          <p className="text-gray-600">{step}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Advantages & Challenges */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                Advantages
              </h3>
              <div className="space-y-4">
                {pros.map((pro, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{pro}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-6 mt-12 flex items-center">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                Challenges
              </h3>
              <div className="space-y-4">
                {cons.map((con, i) => (
                  <div key={i} className="flex items-start">
                    <XCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{con}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pro Tips */}
      <div className="bg-purple-50 text-gray-900 py-16">
        <div className="container mx-auto px-2 sm:px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Pro Tips for Success
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="bg-white text-gray-900 py-16">
        <div className="container mx-auto px-2 sm:px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            Common Mistakes to Avoid
          </h2>
          <div className="space-y-4">
            {commonMistakes.map((m, i) => (
              <Alert key={i} className="border-red-200 bg-red-50">
                <XCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-gray-700">
                  {m}
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Resources */}
      <div className="bg-gray-50 text-gray-900 py-16">
        <div className="container mx-auto px-2 sm:px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Recommended Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((r, i) => {
              const [resTitle, ...resDescArr] = r.split(' - ')
              const resDesc = resDescArr.join(' - ')
              return (
                <Card key={i} className="rounded-xl py-5">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-teal-600" />
                      {resTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{resDesc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Related Earning Methods Grid */}
      <div className="bg-white text-gray-900 py-16">
        <div className="container mx-auto px-2 sm:px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Earning Methods</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {articlesData
              .filter(a => a.slug !== slug)
              .slice(0, 4)
              .map((related, idx) => (
                <Card
                  key={related.slug}
                  className={`bg-gradient-to-br ${colorClasses[idx % colorClasses.length]} hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 rounded-2xl overflow-hidden`}
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

      {/* Conclusion */}
      <div className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-2 sm:px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Conclusion</h2>
          <p className="text-lg leading-relaxed mb-6">{conclusion}</p>

        </div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto px-2 sm:px-4 pb-8">
        <div className="text-xs text-gray-400 mt-8">
          <strong>Keywords:</strong> passive income, remote work, digital marketing, affiliate marketing, online business, financial independence, entrepreneurship, work from home, online jobs, side hustle, make money from home, internet income, gig economy, online side hustle, extra income, financial freedom, online earning tips
        </div>
      </div>
      <Footer/>
    </div>
  )
}