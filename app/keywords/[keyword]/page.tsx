import KeywordClient from './KeywordClient';

const keywordDescriptions: Record<string, string> = {
  'passive income': 'Passive income is money earned with minimal effort or active involvement, such as from investments, rental properties, or royalties. It allows you to build wealth and achieve financial freedom over time.',
  'side hustles': 'Side hustles are additional jobs or projects taken on outside of your main employment to earn extra income. They can range from freelancing to selling products online.',
  'investing': 'Investing is the act of allocating money to assets like stocks, bonds, or real estate with the expectation of generating a return or profit over time.',
  'budgeting': 'Budgeting is the process of creating a plan to manage your income and expenses, helping you control spending, save money, and achieve financial goals.',
  'financial freedom': 'Financial freedom means having enough income, savings, and investments to support your desired lifestyle without being dependent on a paycheck.',
  'wealth building': 'Wealth building involves strategies and habits that help you accumulate assets and grow your net worth over time.',
  'online business': 'An online business operates primarily on the internet, offering products or services to a global audience. Examples include e-commerce stores, digital products, and online consulting.',
  'financial literacy': 'Financial literacy is the knowledge and skills needed to make informed and effective decisions about money management, investing, and personal finance.',
  'debt management': 'Debt management refers to strategies for handling and paying off debts efficiently, including budgeting, consolidation, and negotiation.',
  'saving strategies': 'Saving strategies are methods and habits that help you set aside money for future needs, emergencies, or investments.',
  'affiliate marketing': 'Affiliate marketing is a performance-based marketing strategy where you earn commissions by promoting other companies\' products or services.',
  'digital marketing': 'Digital marketing uses online channels like social media, email, and search engines to promote products or services and reach customers.',
  'entrepreneurship': 'Entrepreneurship is the process of starting and running a new business, often involving innovation, risk-taking, and leadership.',
  'remote work': 'Remote work allows employees or freelancers to work from locations outside of a traditional office, often from home, using digital tools and communication.',
  'personal finance': 'Personal finance covers managing your money, including budgeting, saving, investing, and planning for retirement or major expenses.'
};

export async function generateMetadata({ params }: { params: Promise<{ keyword: string }> }) {
  const { keyword: rawKeyword } = await params;
  const keyword = decodeURIComponent(rawKeyword);
  return {
    title: `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} | 360revenue Financial Glossary`,
    description: keywordDescriptions[keyword] || `Learn the meaning and importance of ${keyword} in personal finance, investing, and wealth building.`,
    keywords: `${keyword}, financial glossary, 360revenue, personal finance, investing, wealth building, financial education, money terms, financial literacy`
  };
}

export default async function KeywordPage({ params }: { params: Promise<{ keyword: string }> }) {
  const { keyword: rawKeyword } = await params;
  const keyword = decodeURIComponent(rawKeyword);
  const description = keywordDescriptions[keyword];
  return <KeywordClient keyword={keyword} description={description} />;
}