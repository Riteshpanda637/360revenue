import { notFound } from 'next/navigation';
import { investingMethods } from '@/lib/data/artticleData';
import SubcategoryClient from './SubcategoryClient';

type Props = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const method = Object.values(investingMethods).find(m => m.slug === decodedSlug);

  if (!method) {
    return {
      title: 'Method Not Found | 360° Revenue',
      description: 'The requested method could not be found. Explore our comprehensive guides on earning money online, investing, and financial strategies.',
    };
  }

  return {
    title: `${method.title} - Complete Guide | 360° Revenue`,
    description: `${method.description} Learn proven strategies, step-by-step methods, and expert tips for ${method.title.toLowerCase()}. Discover how to implement this method effectively and achieve financial success.`,
    keywords: `${method.title.toLowerCase()}, ${method.title.toLowerCase()} guide, ${method.title.toLowerCase()} strategies, ${method.title.toLowerCase()} tips, ${method.title.toLowerCase()} methods, earn money online, financial strategies, wealth building, passive income, side hustles, investing, 360revenue, financial freedom, online income, money making methods, financial planning, investment strategies, business strategies, trading strategies, saving strategies, budgeting strategies, debt management strategies, personal finance strategies`,
    openGraph: {
      title: `${method.title} - Complete Guide | 360° Revenue`,
      description: `${method.description} Learn proven strategies, step-by-step methods, and expert tips for ${method.title.toLowerCase()}.`,
      type: 'article',
      url: `https://www.360revenue.in/subcategories/${slug}`,
      images: [
        {
          url: '/360revenue-og-image.png',
          width: 1200,
          height: 630,
          alt: `${method.title} Guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${method.title} - Complete Guide | 360° Revenue`,
      description: `${method.description} Learn proven strategies, step-by-step methods, and expert tips for ${method.title.toLowerCase()}.`,
      images: ['/360revenue-og-image.png'],
    },
  };
};

export default async function SubcategoryPage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const method = Object.values(investingMethods).find(m => m.slug === decodedSlug);

  if (!method) notFound();

  // Structured data for subcategory page
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': method.title,
    'description': method.description,
    'author': '360revenue',
    'datePublished': '2024-01-01',
    'image': method.image || '/360revenue-og-image.png',
    'mainEntityOfPage': `https://www.360revenue.in/subcategories/${slug}`,
    'articleBody': method.content.introduction + ' ' + method.content.howItWorks,
    'keywords': method.seoKeywords?.join(', ') || method.title
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <SubcategoryClient method={method} />
    </>
  );
} 