'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { investingMethods } from '@/lib/data/artticleData';
import { MethodDetail2 } from '@/utils/types/Article';

interface SubcategoryClientProps {
  method: MethodDetail2;
}

export default function SubcategoryClient({ method }: SubcategoryClientProps) {
  // Function to get category-specific keywords
  const getCategoryKeywords = (category: string) => {
    switch (category) {
      case 'INVESTING':
        return [
          'compound interest',
          'inflation protection', 
          'emergency fund',
          'portfolio diversification',
          'capital preservation',
          'equity investment',
          'retirement planning',
          'market volatility',
          'financial planning',
          'wealth building'
        ];
      case 'SIDE_HUSTLE':
        return [
          'skill development',
          'client acquisition',
          'time management',
          'project management',
          'income diversification',
          'professional networking',
          'business growth',
          'market research',
          'digital marketing',
          'entrepreneurship'
        ];
      case 'BUSINESS':
        return [
          'business strategy',
          'market analysis',
          'customer acquisition',
          'revenue optimization',
          'scaling business',
          'competitive advantage',
          'business development',
          'operational efficiency',
          'brand building',
          'business growth'
        ];
      case 'TRADING':
        return [
          'technical analysis',
          'risk management',
          'market timing',
          'portfolio strategy',
          'trading psychology',
          'market research',
          'position sizing',
          'stop losses',
          'profit taking',
          'trading discipline'
        ];
      case 'SAVING':
        return [
          'emergency fund',
          'goal setting',
          'automatic savings',
          'budget planning',
          'expense tracking',
          'financial discipline',
          'savings strategies',
          'wealth accumulation',
          'financial security',
          'money management'
        ];
      case 'BUDGETING':
        return [
          'expense tracking',
          'income management',
          'financial planning',
          'spending control',
          'budget categories',
          'savings goals',
          'debt reduction',
          'cash flow management',
          'financial discipline',
          'money allocation'
        ];
      case 'DEBT_MANAGEMENT':
        return [
          'debt consolidation',
          'credit management',
          'payment strategies',
          'interest reduction',
          'financial freedom',
          'credit score improvement',
          'debt payoff methods',
          'budget planning',
          'expense reduction',
          'financial discipline'
        ];
      case 'PERSONAL_FINANCE':
        return [
          'financial planning',
          'money management',
          'wealth building',
          'investment strategies',
          'savings goals',
          'budget planning',
          'financial literacy',
          'retirement planning',
          'tax optimization',
          'financial security'
        ];
      case 'TEEN_INCOME':
        return [
          'teen income opportunities',
          'part-time jobs for teens',
          'teen money making',
          'teen entrepreneurship',
          'teen business ideas',
          'teen side hustles',
          'teen financial independence',
          'teen work experience',
          'teen skill development',
          'teen career preparation'
        ];
      default:
        return [
          'financial planning',
          'income generation',
          'skill development',
          'market research',
          'risk management',
          'professional growth',
          'business strategy',
          'wealth building',
          'investment planning',
          'career development'
        ];
    }
  };

  const categoryValue = method.category as string;
  const categoryKeywords = getCategoryKeywords(categoryValue);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto p-8">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {method.title}
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg">
          {method.description}
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              {method.content.introduction} Understanding the fundamentals of{' '}
              <a href={`/keywords/${encodeURIComponent(categoryKeywords[0])}`} className="text-blue-600 hover:text-blue-800 underline font-medium hover:bg-blue-50 px-1 rounded transition-colors">
                {categoryKeywords[0]}
              </a>{' '}
              is crucial for success in this field.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-700 leading-relaxed">
              {method.content.howItWorks} The process involves understanding{' '}
              <a href={`/keywords/${encodeURIComponent(categoryKeywords[1])}`} className="text-blue-600 hover:text-blue-800 underline font-medium hover:bg-blue-50 px-1 rounded transition-colors">
                {categoryKeywords[1]}
              </a>{' '}and its impact on success.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Requirements</h2>
            <p className="text-gray-700 leading-relaxed">
              To get started with {method.title.toLowerCase()}, you'll need several key components.{' '}
              {method.requirements.map((req: string, reqIndex: number) => (
                reqIndex === 0 ? `First, ${req.toLowerCase()}.` : 
                reqIndex === method.requirements.length - 1 ? `Finally, ${req.toLowerCase()}.` : 
                `Additionally, ${req.toLowerCase()}.`
              )).join(' ')} These requirements ensure you have the proper foundation for success in this earning method. You'll also need to understand{' '}
              <a href={`/keywords/${encodeURIComponent(categoryKeywords[2])}`} className="text-blue-600 hover:text-blue-800 underline font-medium hover:bg-blue-50 px-1 rounded transition-colors">
                {categoryKeywords[2]}
              </a>{' '}for financial security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Getting Started</h2>
            <p className="text-gray-700 leading-relaxed">
              The process of beginning your journey with {method.title.toLowerCase()} involves several important steps.{' '}
              {method.content.gettingStarted.map((step: string, stepIndex: number) => (
                stepIndex === 0 ? `First, ${step.toLowerCase()}.` : 
                stepIndex === method.content.gettingStarted.length - 1 ? `Finally, ${step.toLowerCase()}.` : 
                `Next, ${step.toLowerCase()}.`
              )).join(' ')} Following these steps systematically will help you establish a strong foundation for your {method.title.toLowerCase()} venture. Consider{' '}
              <a href={`/keywords/${encodeURIComponent(categoryKeywords[3])}`} className="text-blue-600 hover:text-blue-800 underline font-medium hover:bg-blue-50 px-1 rounded transition-colors">
                {categoryKeywords[3]}
              </a>{' '}for better risk management.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Pros</h2>
            <p className="text-gray-700 leading-relaxed">
              {method.title} offers numerous advantages that make it an attractive earning opportunity.{' '}
              {method.content.pros.map((pro: string, proIndex: number) => (
                proIndex === 0 ? `One of the primary benefits is ${pro.toLowerCase()}.` : 
                proIndex === method.content.pros.length - 1 ? `Additionally, ${pro.toLowerCase()}.` : 
                `Furthermore, ${pro.toLowerCase()}.`
              )).join(' ')} The potential for{' '}
              <a href={`/keywords/${encodeURIComponent(categoryKeywords[4])}`} className="text-blue-600 hover:text-blue-800 underline font-medium hover:bg-blue-50 px-1 rounded transition-colors">
                {categoryKeywords[4]}
              </a>{' '}is significant.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Cons</h2>
            <p className="text-gray-700 leading-relaxed">
              While {method.title} has many benefits, it's important to be aware of the potential drawbacks and challenges.{' '}
              {method.content.cons.map((con: string, conIndex: number) => (
                conIndex === 0 ? `One significant challenge is ${con.toLowerCase()}.` : 
                conIndex === method.content.cons.length - 1 ? `Moreover, ${con.toLowerCase()}.` : 
                `Another consideration is ${con.toLowerCase()}.`
              )).join(' ')} Consider{' '}
              <a href={`/keywords/${encodeURIComponent(categoryKeywords[5])}`} className="text-blue-600 hover:text-blue-800 underline font-medium hover:bg-blue-50 px-1 rounded transition-colors">
                {categoryKeywords[5]}
              </a>{' '}for higher growth potential.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Success Tips</h2>
            <p className="text-gray-700 leading-relaxed">
              To maximize your success with {method.title.toLowerCase()}, consider these proven strategies and best practices.{' '}
              {method.content.tips.map((tip: string, tipIndex: number) => (
                tipIndex === 0 ? `First, ${tip.toLowerCase()}.` : 
                tipIndex === method.content.tips.length - 1 ? `Finally, ${tip.toLowerCase()}.` : 
                `Also, ${tip.toLowerCase()}.`
              )).join(' ')} Explore{' '}
              <a href={`/keywords/${encodeURIComponent(categoryKeywords[6])}`} className="text-blue-600 hover:text-blue-800 underline font-medium hover:bg-blue-50 px-1 rounded transition-colors">
                {categoryKeywords[6]}
              </a>{' '}strategies for long-term security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
            <p className="text-gray-700 leading-relaxed">
              Many people encounter challenges when starting with {method.title.toLowerCase()}, often due to common mistakes that can be easily avoided.{' '}
              {method.content.commonMistakes.map((mistake: string, mistakeIndex: number) => (
                mistakeIndex === 0 ? `One frequent error is ${mistake.toLowerCase()}.` : 
                mistakeIndex === method.content.commonMistakes.length - 1 ? `Additionally, ${mistake.toLowerCase()}.` : 
                `Another common pitfall is ${mistake.toLowerCase()}.`
              )).join(' ')} Monitor{' '}
              <a href={`/keywords/${encodeURIComponent(categoryKeywords[7])}`} className="text-blue-600 hover:text-blue-800 underline font-medium hover:bg-blue-50 px-1 rounded transition-colors">
                {categoryKeywords[7]}
              </a>{' '}for optimal timing decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Resources & Tools</h2>
            <p className="text-gray-700 leading-relaxed">
              Having access to the right resources and tools is crucial for success in {method.title.toLowerCase()}.{' '}
              {method.content.resources.map((resource: string, resourceIndex: number) => (
                resourceIndex === 0 ? `Essential resources include ${resource.toLowerCase()}.` : 
                resourceIndex === method.content.resources.length - 1 ? `Furthermore, ${resource.toLowerCase()}.` : 
                `You should also consider ${resource.toLowerCase()}.`
              )).join(' ')} Compare{' '}
              <a href={`/keywords/${encodeURIComponent(categoryKeywords[8])}`} className="text-blue-600 hover:text-blue-800 underline font-medium hover:bg-blue-50 px-1 rounded transition-colors">
                {categoryKeywords[8]}
              </a>{' '}strategies across different platforms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              {method.content.conclusion} Remember that understanding{' '}
              <a href={`/keywords/${encodeURIComponent(categoryKeywords[9])}`} className="text-blue-600 hover:text-blue-800 underline font-medium hover:bg-blue-50 px-1 rounded transition-colors">
                {categoryKeywords[9]}
              </a>{' '}principles is key to long-term success.
            </p>
          </div>

          {/* Related Topics Section */}
          {method.seoKeywords && method.seoKeywords.length > 0 && (
            <div className="bg-white border border-gray-100 rounded-xl p-6 mt-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Related Topics</h2>
              <div className="flex flex-wrap gap-3">
                {method.seoKeywords.slice(0, 8).map((keyword, index) => (
                  <a
                    key={index}
                    href={`/keywords/${encodeURIComponent(keyword)}`}
                    className="inline-block px-3 py-2 text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-all duration-200 text-sm font-medium hover:bg-blue-50 rounded-md"
                  >
                    {keyword}
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>


      </div>

      <Footer />
    </div>
  );
} 