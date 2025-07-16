import { investingMethods } from '@/lib/data/artticleData';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function MethodDetailPage({ params }: PageProps) {
  const { slug } = await params;
  // Find the method by slug since the object keys are method titles, not slugs
  const method = Object.values(investingMethods).find(m => m.slug === slug);

  if (!method) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <a 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            ← Back to Blog
          </a>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {method.title}
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg">
          {method.description}
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">{method.content.introduction}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">How It Works</h2>
            <p className="text-gray-700 leading-relaxed">{method.content.howItWorks}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Requirements</h2>
            <p className="text-gray-700 leading-relaxed">
              To get started with {method.title.toLowerCase()}, you'll need several key components. 
              {method.requirements.map((req: string, reqIndex: number) => (
                reqIndex === 0 ? ` First, ${req.toLowerCase()}.` : 
                reqIndex === method.requirements.length - 1 ? ` Finally, ${req.toLowerCase()}.` : 
                ` Additionally, ${req.toLowerCase()}.`
              )).join('')} 
              These requirements ensure you have the proper foundation for success in this earning method.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Getting Started</h2>
            <p className="text-gray-700 leading-relaxed">
              The process of beginning your journey with {method.title.toLowerCase()} involves several important steps. 
              {method.content.gettingStarted.map((step: string, stepIndex: number) => (
                stepIndex === 0 ? ` First, ${step.toLowerCase()}.` : 
                stepIndex === method.content.gettingStarted.length - 1 ? ` Finally, ${step.toLowerCase()}.` : 
                ` Next, ${step.toLowerCase()}.`
              )).join('')} 
              Following these steps systematically will help you establish a strong foundation for your {method.title.toLowerCase()} venture.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Pros</h2>
            <p className="text-gray-700 leading-relaxed">
              {method.title} offers numerous advantages that make it an attractive earning opportunity. 
              {method.content.pros.map((pro: string, proIndex: number) => (
                proIndex === 0 ? ` One of the primary benefits is ${pro.toLowerCase()}.` : 
                proIndex === method.content.pros.length - 1 ? ` Additionally, ${pro.toLowerCase()}.` : 
                ` Furthermore, ${pro.toLowerCase()}.`
              )).join('')} 
              These advantages make {method.title.toLowerCase()} a compelling option for those looking to increase their income and build wealth.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Cons</h2>
            <p className="text-gray-700 leading-relaxed">
              While {method.title} has many benefits, it's important to be aware of the potential drawbacks and challenges. 
              {method.content.cons.map((con: string, conIndex: number) => (
                conIndex === 0 ? ` One significant challenge is ${con.toLowerCase()}.` : 
                conIndex === method.content.cons.length - 1 ? ` Moreover, ${con.toLowerCase()}.` : 
                ` Another consideration is ${con.toLowerCase()}.`
              )).join('')} 
              Understanding these limitations helps you make informed decisions and prepare for potential obstacles.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Success Tips</h2>
            <p className="text-gray-700 leading-relaxed">
              To maximize your success with {method.title.toLowerCase()}, consider these proven strategies and best practices. 
              {method.content.tips.map((tip: string, tipIndex: number) => (
                tipIndex === 0 ? ` First, ${tip.toLowerCase()}.` : 
                tipIndex === method.content.tips.length - 1 ? ` Finally, ${tip.toLowerCase()}.` : 
                ` Also, ${tip.toLowerCase()}.`
              )).join('')} 
              Implementing these tips can significantly improve your chances of success and help you avoid common pitfalls.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Common Mistakes to Avoid</h2>
            <p className="text-gray-700 leading-relaxed">
              Many people encounter challenges when starting with {method.title.toLowerCase()}, often due to common mistakes that can be easily avoided. 
              {method.content.commonMistakes.map((mistake: string, mistakeIndex: number) => (
                mistakeIndex === 0 ? ` One frequent error is ${mistake.toLowerCase()}.` : 
                mistakeIndex === method.content.commonMistakes.length - 1 ? ` Additionally, ${mistake.toLowerCase()}.` : 
                ` Another common pitfall is ${mistake.toLowerCase()}.`
              )).join('')} 
              Being aware of these mistakes and actively working to avoid them will help you navigate the learning curve more effectively.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Resources & Tools</h2>
            <p className="text-gray-700 leading-relaxed">
              Having access to the right resources and tools is crucial for success in {method.title.toLowerCase()}. 
              {method.content.resources.map((resource: string, resourceIndex: number) => (
                resourceIndex === 0 ? ` Essential resources include ${resource.toLowerCase()}.` : 
                resourceIndex === method.content.resources.length - 1 ? ` Furthermore, ${resource.toLowerCase()}.` : 
                ` You should also consider ${resource.toLowerCase()}.`
              )).join('')} 
              These resources provide valuable information, tools, and support to help you succeed in your {method.title.toLowerCase()} journey.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">{method.content.conclusion}</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <a 
            href="/blog" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to All Methods
          </a>
        </div>
      </div>
    </div>
  );
} 