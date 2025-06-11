// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark, ThumbsUp } from 'lucide-react';

// interface Article {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   readTime: string;
//   image: string;
//   author: string;
//   date: string;
//   content: string;
//   authorBio: string;
//   authorAvatar: string;
//   likes: number;
//   shares: number;
//   tags: string[];
// }

// export default 360revenueHomepage = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string>('All');
//   const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

//   const categories = [
//     'All',
//     'Investing',
//     'Side Hustles', 
//     'Personal Finance',
//     'Budgeting',
//     'Saving',
//     'Debt Management'
//   ];

//   const articles: Article[] = [
//     {
//       id: 1,
//       title: "The Ultimate Guide to Investing for Beginners",
//       description: "Learn the basics of investing, different investment options, and how to get started on your journey to financial freedom.",
//       category: "Investing",
//       readTime: "8 min read",
//       image: "investing",
//       author: "Sarah Johnson",
//       authorBio: "Financial advisor with 10+ years of experience helping individuals build wealth through smart investing strategies.",
//       authorAvatar: "SJ",
//       date: "Dec 15, 2024",
//       likes: 234,
//       shares: 67,
//       tags: ["beginner", "stocks", "portfolio", "wealth building"],
//       content: `
//         <h2>Getting Started with Investing</h2>
//         <p>Investing can seem overwhelming for beginners, but it doesn't have to be. The key is to start with the basics and build your knowledge gradually. In this comprehensive guide, we'll walk you through everything you need to know to begin your investing journey.</p>
        
//         <h3>Why Should You Invest?</h3>
//         <p>Investing is one of the most effective ways to build wealth over time. While keeping your money in a savings account is safe, it won't help you beat inflation or achieve long-term financial goals like retirement or buying a home.</p>
        
//         <h3>Types of Investments</h3>
//         <h4>1. Stocks</h4>
//         <p>Stocks represent ownership in a company. When you buy shares, you become a partial owner and can benefit from the company's growth through stock price appreciation and dividends.</p>
        
//         <h4>2. Bonds</h4>
//         <p>Bonds are essentially loans you give to companies or governments. In return, you receive regular interest payments and your principal back when the bond matures.</p>
        
//         <h4>3. Mutual Funds and ETFs</h4>
//         <p>These investment vehicles pool money from many investors to buy a diversified portfolio of stocks, bonds, or other securities. They're perfect for beginners who want instant diversification.</p>
        
//         <h3>How to Start Investing</h3>
//         <ol>
//           <li><strong>Set Clear Goals:</strong> Determine what you're investing for and your timeline.</li>
//           <li><strong>Choose a Brokerage:</strong> Research and select a reputable investment platform.</li>
//           <li><strong>Start Small:</strong> Begin with an amount you're comfortable with.</li>
//           <li><strong>Diversify:</strong> Don't put all your eggs in one basket.</li>
//           <li><strong>Stay Consistent:</strong> Regular investing often beats trying to time the market.</li>
//         </ol>
        
//         <h3>Common Investing Mistakes to Avoid</h3>
//         <p>Many new investors make costly mistakes that can be easily avoided with proper knowledge and discipline:</p>
//         <ul>
//           <li>Trying to time the market</li>
//           <li>Not diversifying enough</li>
//           <li>Letting emotions drive decisions</li>
//           <li>Not having a long-term strategy</li>
//         </ul>
        
//         <h3>Conclusion</h3>
//         <p>Remember, investing is a marathon, not a sprint. Start with solid fundamentals, stay consistent, and keep learning. The earlier you start, the more time your money has to grow through the power of compound interest.</p>
//       `
//     },
//     {
//       id: 2,
//       title: "Top 10 Side Hustles to Boost Your Income",
//       description: "Explore a variety of side hustle ideas that can help you earn extra money in your spare time, from freelancing to online businesses.",
//       category: "Side Hustles",
//       readTime: "6 min read",
//       image: "side-hustle",
//       author: "Mike Chen",
//       authorBio: "Entrepreneur and side hustle expert who has built multiple income streams and helps others do the same.",
//       authorAvatar: "MC",
//       date: "Dec 12, 2024",
//       likes: 189,
//       shares: 45,
//       tags: ["freelancing", "online business", "passive income", "entrepreneur"],
//       content: `
//         <h2>Building Multiple Income Streams</h2>
//         <p>In today's economy, having multiple income streams isn't just smart—it's essential. Side hustles can provide financial security, help you pay off debt faster, or fund your dreams and goals.</p>
        
//         <h3>1. Freelance Writing</h3>
//         <p>If you have strong writing skills, freelance writing can be a lucrative side hustle. Many businesses need content for their websites, blogs, and marketing materials.</p>
//         <p><strong>Potential earnings:</strong> $25-$100+ per hour</p>
        
//         <h3>2. Virtual Assistant</h3>
//         <p>Virtual assistants help businesses with administrative tasks remotely. This can include email management, scheduling, social media management, and more.</p>
//         <p><strong>Potential earnings:</strong> $15-$50 per hour</p>
        
//         <h3>3. Online Tutoring</h3>
//         <p>Share your expertise by tutoring students online. Platforms like Tutor.com and Wyzant make it easy to connect with students.</p>
//         <p><strong>Potential earnings:</strong> $20-$80 per hour</p>
        
//         <h3>4. Graphic Design</h3>
//         <p>If you have design skills, you can create logos, websites, marketing materials, and more for businesses and individuals.</p>
//         <p><strong>Potential earnings:</strong> $30-$150 per hour</p>
        
//         <h3>5. Dropshipping</h3>
//         <p>Start an e-commerce business without holding inventory. You sell products online and the supplier ships directly to customers.</p>
//         <p><strong>Potential earnings:</strong> $500-$5,000+ per month</p>
        
//         <h3>6. Affiliate Marketing</h3>
//         <p>Promote other companies' products and earn commissions on sales. This works especially well if you have a blog or social media following.</p>
//         <p><strong>Potential earnings:</strong> $100-$10,000+ per month</p>
        
//         <h3>7. Online Course Creation</h3>
//         <p>Package your knowledge into online courses and sell them on platforms like Udemy or create your own course website.</p>
//         <p><strong>Potential earnings:</strong> $1,000-$50,000+ per course</p>
        
//         <h3>8. Social Media Management</h3>
//         <p>Many small businesses need help managing their social media presence. This includes creating content, scheduling posts, and engaging with followers.</p>
//         <p><strong>Potential earnings:</strong> $300-$2,000 per client per month</p>
        
//         <h3>9. Photography</h3>
//         <p>Whether it's stock photography, event photography, or portrait sessions, photography can be a rewarding side hustle.</p>
//         <p><strong>Potential earnings:</strong> $50-$500 per session</p>
        
//         <h3>10. Consulting</h3>
//         <p>Use your professional expertise to consult for other businesses. This works especially well if you have specialized knowledge in your field.</p>
//         <p><strong>Potential earnings:</strong> $50-$300+ per hour</p>
        
//         <h3>Tips for Side Hustle Success</h3>
//         <ul>
//           <li>Start with your existing skills and interests</li>
//           <li>Set realistic time commitments</li>
//           <li>Track your income and expenses for taxes</li>
//           <li>Focus on building long-term relationships with clients</li>
//           <li>Don't neglect your main job while building your side hustle</li>
//         </ul>
//       `
//     },
//     {
//       id: 3,
//       title: "Stock Market Strategies for 2025",
//       description: "Discover advanced investment strategies and market trends to maximize your portfolio returns in the coming year.",
//       category: "Investing",
//       readTime: "10 min read",
//       image: "investing",
//       author: "David Rodriguez",
//       authorBio: "Senior portfolio manager with 15 years of experience in equity research and investment strategy.",
//       authorAvatar: "DR",
//       date: "Dec 10, 2024",
//       likes: 312,
//       shares: 89,
//       tags: ["stocks", "strategy", "2025", "portfolio management"],
//       content: `
//         <h2>Market Outlook for 2025</h2>
//         <p>As we look ahead to 2025, several key trends and factors will shape investment opportunities. Understanding these dynamics can help you position your portfolio for success.</p>
        
//         <h3>Key Market Trends to Watch</h3>
//         <h4>1. Technology and AI Revolution</h4>
//         <p>Artificial intelligence continues to transform industries. Companies that successfully integrate AI into their operations are likely to see significant growth.</p>
        
//         <h4>2. Green Energy Transition</h4>
//         <p>The shift towards renewable energy presents both opportunities and challenges for investors. Clean energy stocks and ESG investing are gaining momentum.</p>
        
//         <h4>3. Interest Rate Environment</h4>
//         <p>Central bank policies will continue to influence market dynamics. Understanding how rate changes affect different sectors is crucial.</p>
        
//         <h3>Investment Strategies for 2025</h3>
//         <h4>Dollar-Cost Averaging</h4>
//         <p>Consistently investing a fixed amount regardless of market conditions helps reduce the impact of volatility and builds wealth over time.</p>
        
//         <h4>Sector Rotation</h4>
//         <p>As economic conditions change, different sectors outperform. Being aware of these cycles can help optimize returns.</p>
        
//         <h4>International Diversification</h4>
//         <p>Don't limit yourself to domestic markets. International exposure can provide growth opportunities and risk reduction.</p>
        
//         <h3>Risk Management</h3>
//         <p>Successful investing isn't just about picking winners—it's about managing risk effectively:</p>
//         <ul>
//           <li>Maintain appropriate asset allocation based on your risk tolerance</li>
//           <li>Use stop-loss orders to limit downside risk</li>
//           <li>Regular portfolio rebalancing</li>
//           <li>Keep some cash for opportunities</li>
//         </ul>
//       `
//     },
//     {
//       id: 4,
//       title: "Emergency Fund: How Much Should You Save?",
//       description: "Learn how to build and maintain an emergency fund that protects you from unexpected financial setbacks.",
//       category: "Saving",
//       readTime: "5 min read",
//       image: "saving",
//       author: "Emily Watson",
//       authorBio: "Certified Financial Planner specializing in personal finance and emergency preparedness strategies.",
//       authorAvatar: "EW",
//       date: "Dec 8, 2024",
//       likes: 156,
//       shares: 34,
//       tags: ["emergency fund", "savings", "financial planning", "security"],
//       content: `
//         <h2>Why You Need an Emergency Fund</h2>
//         <p>Life is unpredictable. Whether it's a medical emergency, job loss, or major car repair, unexpected expenses can derail your financial plans. An emergency fund acts as your financial safety net.</p>
        
//         <h3>How Much Should You Save?</h3>
//         <p>The general rule is to save 3-6 months of living expenses, but the right amount depends on your situation:</p>
        
//         <h4>3 Months of Expenses If:</h4>
//         <ul>
//           <li>You have stable employment</li>
//           <li>You're in a dual-income household</li>
//           <li>You have good job security</li>
//           <li>You have other safety nets (family support, etc.)</li>
//         </ul>
        
//         <h4>6+ Months of Expenses If:</h4>
//         <ul>
//           <li>You're self-employed or have variable income</li>
//           <li>You're the sole breadwinner</li>
//           <li>You work in a volatile industry</li>
//           <li>You have dependents</li>
//         </ul>
        
//         <h3>Where to Keep Your Emergency Fund</h3>
//         <h4>High-Yield Savings Account</h4>
//         <p>The best option for most people. Your money earns interest while remaining easily accessible.</p>
        
//         <h4>Money Market Account</h4>
//         <p>Similar to savings accounts but may offer slightly higher interest rates and check-writing privileges.</p>
        
//         <h4>Short-term CDs</h4>
//         <p>For part of your emergency fund, consider short-term certificates of deposit for slightly higher returns.</p>
        
//         <h3>Building Your Emergency Fund</h3>
//         <ol>
//           <li><strong>Start Small:</strong> Even $500 can cover many small emergencies</li>
//           <li><strong>Automate Savings:</strong> Set up automatic transfers to build your fund consistently</li>
//           <li><strong>Use Windfalls:</strong> Tax refunds, bonuses, and gifts can boost your fund quickly</li>
//           <li><strong>Cut Expenses Temporarily:</strong> Reduce discretionary spending until your fund is complete</li>
//         </ol>
        
//         <h3>When to Use Your Emergency Fund</h3>
//         <p>Only use your emergency fund for true emergencies:</p>
//         <ul>
//           <li>Job loss or significant income reduction</li>
//           <li>Medical emergencies not covered by insurance</li>
//           <li>Major home or car repairs necessary for safety</li>
//           <li>Unexpected travel for family emergencies</li>
//         </ul>
        
//         <p><strong>Not emergencies:</strong> Vacations, holiday gifts, or planned purchases.</p>
//       `
//     },
//     {
//       id: 5,
//       title: "Creating a Budget That Actually Works",
//       description: "Master the art of budgeting with practical tips and tools that help you stick to your financial plan.",
//       category: "Budgeting",
//       readTime: "7 min read",
//       image: "budgeting",
//       author: "Alex Thompson",
//       authorBio: "Personal finance coach who has helped thousands of people take control of their money through effective budgeting.",
//       authorAvatar: "AT",
//       date: "Dec 5, 2024",
//       likes: 203,
//       shares: 56,
//       tags: ["budgeting", "financial planning", "money management", "expenses"],
//       content: `
//         <h2>Why Most Budgets Fail</h2>
//         <p>Many people start budgeting with good intentions but give up within a few months. The problem isn't with budgeting itself—it's with unrealistic expectations and inflexible approaches.</p>
        
//         <h3>The 50/30/20 Rule</h3>
//         <p>This simple framework divides your after-tax income into three categories:</p>
//         <ul>
//           <li><strong>50% for Needs:</strong> Housing, utilities, groceries, transportation, minimum debt payments</li>
//           <li><strong>30% for Wants:</strong> Entertainment, dining out, hobbies, non-essential shopping</li>
//           <li><strong>20% for Savings and Debt:</strong> Emergency fund, retirement, extra debt payments</li>
//         </ul>
        
//         <h3>Steps to Create Your Budget</h3>
//         <h4>1. Track Your Current Spending</h4>
//         <p>Before creating a budget, understand where your money currently goes. Track every expense for at least a month.</p>
        
//         <h4>2. List Your Income and Fixed Expenses</h4>
//         <p>Start with your regular income and non-negotiable expenses like rent, insurance, and minimum debt payments.</p>
        
//         <h4>3. Categorize Variable Expenses</h4>
//         <p>Group your remaining expenses into categories like groceries, entertainment, and personal care.</p>
        
//         <h4>4. Set Realistic Limits</h4>
//         <p>Based on your tracking, set spending limits for each category. Be realistic—drastic cuts often lead to budget failure.</p>
        
//         <h3>Budgeting Methods</h3>
//         <h4>Zero-Based Budgeting</h4>
//         <p>Every dollar gets assigned a purpose. Income minus expenses should equal zero.</p>
        
//         <h4>Envelope Method</h4>
//         <p>Allocate cash for each spending category in separate envelopes. When the envelope is empty, you're done spending in that category.</p>
        
//         <h4>Pay Yourself First</h4>
//         <p>Prioritize savings by "paying yourself" before other expenses.</p>
        
//         <h3>Tools and Apps</h3>
//         <ul>
//           <li><strong>Mint:</strong> Free comprehensive budgeting and tracking</li>
//           <li><strong>YNAB (You Need A Budget):</strong> Zero-based budgeting approach</li>
//           <li><strong>PocketGuard:</strong> Simple spending tracking</li>
//           <li><strong>Spreadsheets:</strong> DIY approach with full control</li>
//         </ul>
        
//         <h3>Making Your Budget Stick</h3>
//         <ol>
//           <li><strong>Start Simple:</strong> Don't overcomplicate your first budget</li>
//           <li><strong>Review Weekly:</strong> Check in regularly to stay on track</li>
//           <li><strong>Adjust as Needed:</strong> Budgets should evolve with your life</li>
//           <li><strong>Include Fun Money:</strong> Budget for entertainment to avoid feeling deprived</li>
//           <li><strong>Plan for Irregular Expenses:</strong> Set aside money for annual bills and unexpected costs</li>
//         </ol>
//       `
//     },
//     {
//       id: 6,
//       title: "Paying Off Credit Card Debt Fast",
//       description: "Effective strategies to eliminate credit card debt and regain control of your financial future.",
//       category: "Debt Management",
//       readTime: "9 min read",
//       image: "debt",
//       author: "Lisa Park",
//       authorBio: "Debt counselor and financial educator who has helped clients pay off over $2 million in consumer debt.",
//       authorAvatar: "LP",
//       date: "Dec 3, 2024",
//       likes: 278,
//       shares: 72,
//       tags: ["debt management", "credit cards", "debt payoff", "financial freedom"],
//       content: `
//         <h2>The Real Cost of Credit Card Debt</h2>
//         <p>Credit card debt is one of the most expensive forms of debt, with average interest rates exceeding 20%. Understanding the true cost motivates faster payoff.</p>
        
//         <h3>Debt Payoff Strategies</h3>
//         <h4>1. Debt Avalanche Method</h4>
//         <p>Pay minimums on all cards, then put extra money toward the highest interest rate debt first. This method saves the most money in interest.</p>
        
//         <h4>2. Debt Snowball Method</h4>
//         <p>Pay minimums on all cards, then focus extra payments on the smallest balance first. This method provides psychological wins to maintain motivation.</p>
        
//         <h4>3. Debt Consolidation</h4>
//         <p>Combine multiple debts into a single payment, ideally at a lower interest rate through:</p>
//         <ul>
//           <li>Balance transfer cards (0% intro APR)</li>
//           <li>Personal loans</li>
//           <li>Home equity loans (if you own a home)</li>
//         </ul>
        
//         <h3>Creating a Debt Payoff Plan</h3>
//         <ol>
//           <li><strong>List All Debts:</strong> Include balances, minimum payments, and interest rates</li>
//           <li><strong>Choose Your Strategy:</strong> Avalanche for math, snowball for motivation</li>
//           <li><strong>Find Extra Money:</strong> Cut expenses or increase income</li>
//           <li><strong>Stop Using Credit Cards:</strong> Switch to cash or debit only</li>
//           <li><strong>Track Progress:</strong> Celebrate milestones to stay motivated</li>
//         </ol>
        
//         <h3>Finding Extra Money for Debt Payments</h3>
//         <h4>Reduce Expenses:</h4>
//         <ul>
//           <li>Cancel unused subscriptions</li>
//           <li>Cook more meals at home</li>
//           <li>Find cheaper insurance rates</li>
//           <li>Reduce entertainment spending temporarily</li>
//         </ul>
        
//         <h4>Increase Income:</h4>
//         <ul>
//           <li>Take on freelance work</li>
//           <li>Sell items you no longer need</li>
//           <li>Ask for overtime at work</li>
//           <li>Start a side hustle</li>
//         </ul>
        
//         <h3>Avoiding Future Debt</h3>
//         <p>Once you're debt-free, prevent future debt by:</p>
//         <ul>
//           <li>Building an emergency fund</li>
//           <li>Using credit cards responsibly (pay full balance monthly)</li>
//           <li>Living below your means</li>
//           <li>Having a solid budget in place</li>
//         </ul>
        
//         <h3>When to Seek Help</h3>
//         <p>Consider professional help if:</p>
//         <ul>
//           <li>You can only make minimum payments</li>
//           <li>Your debt is growing despite payments</li>
//           <li>You're considering bankruptcy</li>
//           <li>You're using cash advances to pay bills</li>
//         </ul>
        
//         <p>Non-profit credit counseling agencies can provide free advice and help negotiate with creditors.</p>
//       `
//     },
//     {
//       id: 7,
//       title: "Personal Finance Apps That Save Money",
//       description: "The best mobile apps to track expenses, save money, and manage your personal finances effectively.",
//       category: "Personal Finance",
//       readTime: "4 min read",
//       image: "personal-finance",
//       author: "James Wilson",
//       authorBio: "Tech-savvy financial advisor who reviews and recommends the latest fintech tools for personal money management.",
//       authorAvatar: "JW",
//       date: "Dec 1, 2024",
//       likes: 145,
//       shares: 38,
//       tags: ["apps", "technology", "money management", "fintech"],
//       content: `
//         <h2>Why Use Personal Finance Apps?</h2>
//         <p>Personal finance apps make money management easier by automating tracking, providing insights, and helping you make better financial decisions on the go.</p>
        
//         <h3>Best Budgeting Apps</h3>
//         <h4>1. Mint (Free)</h4>
//         <p>Comprehensive budgeting with automatic transaction categorization, bill reminders, and credit score monitoring.</p>
//         <p><strong>Best for:</strong> Complete financial overview</p>
        
//         <h4>2. YNAB - You Need A Budget ($14.99/month)</h4>
//         <p>Zero-based budgeting system that helps you give every dollar a job before you spend it.</p>
//         <p><strong>Best for:</strong> Serious budgeters who want to break the paycheck-to-paycheck cycle</p>
        
//         <h4>3. PocketGuard (Free/Premium)</h4>
//         <p>Simple interface that shows how much you have available to spend after bills and savings.</p>
//         <p><strong>Best for:</strong> Beginners who want simplicity</p>
        
//         <h3>Saving and Investment Apps</h3>
//         <h4>1. Acorns ($3-12/month)</h4>
//         <p>Rounds up purchases to the nearest dollar and invests the spare change in diversified portfolios.</p>
//         <p><strong>Best for:</strong> Automated micro-investing</p>
        
//         <h4>2. Qapital (Free/Premium)</h4>
//         <p>Multiple saving rules including round-ups, percentage-based savings, and goal-based saving.</p>
//         <p><strong>Best for:</strong> Automated saving with various triggers</p>
        
//         <h4>3. Stash ($3-9/month)</h4>
//         <p>Combines micro-investing with financial education, allowing you to invest in fractional shares.</p>
//         <p><strong>Best for:</strong> Learning while investing small amounts</p>
        
//         <h3>Expense Tracking Apps</h3>
//         <h4>1. Expensify (Free/Premium)</h4>
//         <p>Excellent for tracking business expenses with receipt scanning and mileage tracking.</p>
//         <p><strong>Best for:</strong> Freelancers and business travelers</p>
        
//         <h4>2. Splitwise (Free/Premium)</h4>
//         <p>Perfect for tracking shared expenses with roommates, friends, or partners.</p>
//         <p><strong>Best for:</strong> Shared living situations</p>
        
//         <h3>Bill Management Apps</h3>
//         <h4>1. Prism (Free)</h4>
//         <p>View and pay all your bills in one place with bill reminders and due date tracking.</p>
        
//         <h4>2. Mint Bills (Free)</h4>
//         <p>Bill tracking and payment with automatic categorization and spending insights.</p>
        
//         <h3>Debt Payoff Apps</h3>
//         <h4>1. Debt Payoff Planner (Free/Premium)</h4>
//         <p>Visual debt payoff tracking with snowball and avalanche method support.</p>
        
//         <h4>2. ChangEd ($2.50/month)</h4>
//         <p>Rounds up purchases and applies the spare change to student loan payments.</p>
        
//         <h3>Security Tips</h3>
//         <p>When using financial apps:</p>
//         <ul>
//           <li>Use apps from reputable companies</li>
//           <li>Enable two-factor authentication</li>
//           <li>Check app permissions carefully</li>
//           <li>Use strong, unique passwords</li>
//           <li>Regularly review connected accounts</li>
//         </ul>
        
//         <h3>Choosing the Right Apps</h3>
//         <p>Consider your specific needs:</p>
//         <ul>
//           <li><strong>Budgeting beginner:</strong> Start with Mint or PocketGuard</li>
//           <li><strong>Serious budgeter:</strong> YNAB for comprehensive control</li>
//           <li><strong>Passive saver:</strong> Acorns or Qapital for automated saving</li>
//           <li><strong>Debt focused:</strong> Dedicated debt payoff apps</li>
//         </ul>
//       `
//     },
//     {
//       id: 8,
//       title: "Freelancing: Your Path to Financial Freedom",
//       description: "How to start freelancing, find clients, and build a sustainable side business that generates steady income.",
//       category: "Side Hustles",
//       readTime: "12 min read",
//       image: "side-hustle",
//       author: "Rachel Green",
//       authorBio: "Full-time freelancer and business coach who has built a six-figure freelancing business and teaches others to do the same.",
//       authorAvatar: "RG",
//       date: "Nov 28, 2024",
//       likes: 267,
//       shares: 78,
//       tags: ["freelancing", "business", "entrepreneurship", "remote work"],
//       content: `
//         <h2>The Freelancing Revolution</h2>
//         <p>Freelancing has become a viable path to financial independence. With the right skills and approach, you can build a thriving business that provides both flexibility and financial security.</p>
        
//         <h3>Getting Started as a Freelancer</h3>
//         <h4>1. Identify Your Skills</h4>
//         <p>Start with what you already know:</p>
//         <ul>
//           <li>Writing and content creation</li>
//           <li>Graphic design and branding</li>
//           <li>Web development and programming</li>
//           <li>Digital marketing and SEO</li>
//           <li>Virtual assistance and project management</li>
//           <li>Consulting in your professional field</li>
//         </ul>
        
//         <h4>2. Define Your Niche</h4>
//         <p>Specialists earn more than generalists. Focus on a specific industry or skill set where you can become the go-to expert.</p>
        
//         <h4>3. Set Your Rates</h4>
//         <p>Research market rates for your skills and location. Consider:</p>
//         <ul>
//           <li>Your experience level</li>
//           <li>The complexity of projects</li>
//           <li>Your target income goals</li>
//           <li>What the market will bear</li>
//         </ul>
        
//         <h3>Finding Your First Clients</h3>
//         <h4>1. Freelance Platforms</h4>
//         <ul>
//           <li><strong>Upwork:</strong> Large marketplace with diverse opportunities</li>
//           <li><strong>Fiverr:</strong> Service-based platform good for starting out</li>
//           <li><strong>Freelancer.com:</strong> Competitive bidding environment</li>
//           <li><strong>99designs:</strong> Specialized for designers</li>
//         </ul>
        
//         <h4>2. Direct Outreach</h4>
//         <p>Contact businesses directly:</p>
//         <ul>
//           <li>Research companies in your target market</li>
//           <li>Craft personalized outreach emails</li>
//           <li>Offer a small free sample or audit</li>
//           <li>Follow up professionally</li>
//         </ul>
        
//         <h4>3. Networking</h4>
//         <ul>
//           <li>Join professional associations</li>
//           <li>Attend industry events and meetups</li>
//           <li>Engage on LinkedIn and industry forums</li>
//           <li>Ask for referrals from satisfied clients</li>
//         </ul>
        
//         <h3>Building Long-Term Success</h3>
//         <h4>1. Deliver Exceptional Work</h4>
//         <p>Your reputation is everything in freelancing:</p>
//         <ul>
//           <li>Meet or exceed deadlines</li>
//           <li>Communicate clearly and frequently</li>
//           <li>Go above and beyond client expectations</li>
//           <li>Handle revisions professionally</li>
//         </ul>
        
//         <h4>2. Develop Recurring Revenue</h4>
//         <p>Build predictable income through:</p>
//         <ul>
//           <li>Retainer agreements</li>
//           <li>Monthly maintenance contracts</li>
//           <li>Subscription-based services</li>
//           <li>Long-term project contracts</li>
//         </ul>
        
//         <h4>3. Scale Your Business</h4>
//         <p>As you grow, consider:</p>
//         <ul>
//           <li>Raising your rates regularly</li>
//           <li>Subcontracting work to other freelancers</li>
//           <li>Creating digital products or courses</li>
//           <li>Building a team and becoming an agency</li>
//         </ul>
        
//         <h3>Managing Freelance Finances</h3>
//         <h4>1. Set Aside Taxes</h4>
//         <p>Save 25-30% of income for taxes, including:</p>
//         <ul>
//           <li>Federal and state income taxes</li>
//           <li>Self-employment tax</li>
//           <li>Quarterly estimated payments</li>
//         </ul>
        
//         <h4>2. Track Business Expenses</h4>
//         <p>Deductible expenses include:</p>
//         <ul>
//           <li>Home office costs</li>
//           <li>Equipment and software</li>
//           <li>Professional development</li>
//           <li>Business meals and travel</li>
//         </ul>
        
//         <h4>3. Plan for Irregular Income</h4>
//         <ul>
//           <li>Build a larger emergency fund</li>
//           <li>Budget based on your lowest month</li>
//           <li>Smooth out income with retainers</li>
//           <li>Consider income-based budgeting</li>
//         </ul>
        
//         <h3>Common Freelancing Mistakes</h3>
//         <ul>
//           <li>Underpricing your services</li>
//           <li>Taking on clients who don't respect boundaries</li>
//           <li>Not having written contracts</li>
//           <li>Forgetting to plan for taxes</li>
//           <li>Not building an emergency fund</li>
//           <li>Competing solely on price</li>
//         </ul>
        
//         <h3>The Path to Six Figures</h3>
//         <p>Many freelancers reach six-figure incomes by:</p>
//         <ol>
//           <li>Specializing in high-value skills</li>
//           <li>Building long-term client relationships</li>
//           <li>Consistently raising rates</li>
//           <li>Creating scalable income streams</li>
//           <li>Investing in professional development</li>
//         </ol>
//       `
//     },
//     {
//       id: 9,
//       title: "High-Yield Savings Accounts Guide",
//       description: "Compare the best high-yield savings accounts and learn how to maximize your money's growth potential.",
//       category: "Saving",
//       readTime: "6 min read",
//       image: "saving",
//       author: "Michael Brown",
//       authorBio: "Banking specialist and financial analyst who tracks savings rates and helps consumers find the best deposit accounts.",
//       authorAvatar: "MB",
//       date: "Nov 25, 2024",
//       likes: 178,
//       shares: 42,
//       tags: ["savings", "banking", "interest rates", "deposits"],
//       content: `
//         <h2>Why High-Yield Savings Accounts Matter</h2>
//         <p>With traditional savings accounts offering rates near 0%, high-yield savings accounts can earn 10-20x more interest on your money while keeping it safe and accessible.</p>
        
//         <h3>What to Look for in a High-Yield Savings Account</h3>
//         <h4>1. Competitive Interest Rate</h4>
//         <p>Look for accounts offering at least 4-5% APY (as of late 2024). Rates change frequently, so monitor them regularly.</p>
        
//         <h4>2. No Monthly Fees</h4>
//         <p>Avoid accounts with monthly maintenance fees that can eat into your earnings.</p>
        
//         <h4>3. Low or No Minimum Balance</h4>
//         <p>Choose accounts with low minimum balance requirements so you can start earning immediately.</p>
        
//         <h4>4. FDIC Insurance</h4>
//         <p>Ensure your account is FDIC-insured up to $250,000 per depositor, per bank.</p>
        
//         <h4>5. Easy Access</h4>
//         <p>Look for accounts with online banking, mobile apps, and reasonable withdrawal policies.</p>
        
//         <h3>Top High-Yield Savings Account Features</h3>
//         <h4>Online Banks vs. Traditional Banks</h4>
//         <p><strong>Online Banks:</strong></p>
//         <ul>
//           <li>Higher interest rates (less overhead)</li>
//           <li>Lower fees</li>
//           <li>24/7 online access</li>
//           <li>May lack physical branches</li>
//         </ul>
        
//         <p><strong>Traditional Banks:</strong></p>
//         <ul>
//           <li>Physical branch access</li>
//           <li>In-person customer service</li>
//           <li>Often lower interest rates</li>
//           <li>May have more fees</li>
//         </ul>
        
//         <h3>How to Maximize Your Savings</h3>
//         <h4>1. Shop Around Regularly</h4>
//         <p>Interest rates change frequently. Review your account every 6 months to ensure you're getting competitive rates.</p>
        
//         <h4>2. Consider Account Bonuses</h4>
//         <p>Many banks offer sign-up bonuses for new accounts. Factor these into your decision but don't let them override poor ongoing rates.</p>
        
//         <h4>3. Automate Your Savings</h4>
//         <p>Set up automatic transfers from your checking account to consistently build your savings.</p>
        
//         <h4>4. Use Multiple Accounts Strategically</h4>
//         <p>Consider having accounts at different banks to:</p>
//         <ul>
//           <li>Maximize FDIC coverage beyond $250,000</li>
//           <li>Take advantage of promotional rates</li>
//           <li>Separate different savings goals</li>
//         </ul>
        
//         <h3>Common High-Yield Savings Account Myths</h3>
//         <h4>Myth 1: "Online banks aren't safe"</h4>
//         <p>FDIC insurance protects your money the same way regardless of whether the bank is online or has physical branches.</p>
        
//         <h4>Myth 2: "High rates are temporary"</h4>
//         <p>While rates fluctuate, online banks typically maintain competitive rates to attract deposits.</p>
        
//         <h4>Myth 3: "You can't access your money easily"</h4>
//         <p>Most high-yield accounts offer ATM access, mobile check deposit, and electronic transfers.</p>
        
//         <h3>Savings Account Strategies</h3>
//         <h4>1. Emergency Fund</h4>
//         <p>Keep 3-6 months of expenses in a high-yield savings account for easy access during emergencies.</p>
        
//         <h4>2. Short-Term Goals</h4>
//         <p>Use high-yield savings for goals within 1-5 years:</p>
//         <ul>
//           <li>Vacation funds</li>
//           <li>Down payment for a house</li>
//           <li>New car purchase</li>
//           <li>Wedding expenses</li>
//         </ul>
        
//         <h4>3. Sinking Funds</h4>
//         <p>Save monthly for predictable annual expenses:</p>
//         <ul>
//           <li>Holiday gifts</li>
//           <li>Car maintenance</li>
//           <li>Home repairs</li>
//           <li>Insurance premiums</li>
//         </ul>
        
//         <h3>Tax Considerations</h3>
//         <p>Interest earned on savings accounts is taxable income:</p>
//         <ul>
//           <li>You'll receive a 1099-INT for interest over $10</li>
//           <li>Interest is taxed at your ordinary income rate</li>
//           <li>Consider tax-advantaged accounts like IRAs for long-term savings</li>
//         </ul>
        
//         <h3>When to Consider Alternatives</h3>
//         <p>High-yield savings accounts aren't always the best choice:</p>
//         <ul>
//           <li><strong>CDs:</strong> For money you won't need for a specific period</li>
//           <li><strong>Money Market Accounts:</strong> For higher balances needing check-writing</li>
//           <li><strong>I Bonds:</strong> For inflation protection (up to $10,000/year)</li>
//           <li><strong>Investment Accounts:</strong> For long-term wealth building (5+ years)</li>
//         </ul>
//       `
//     }
//   ];

//   const filteredArticles = selectedCategory === 'All' 
//     ? articles 
//     : articles.filter(article => article.category === selectedCategory);

//   const getRelatedArticles = (currentArticle: Article) => {
//     return articles
//       .filter(article => 
//         article.category === currentArticle.category && 
//         article.id !== currentArticle.id
//       )
//       .slice(0, 3);
//   };

//   const renderArticleImage = (imageType: string) => {
//     switch (imageType) {
//       case 'investing':
//         return (
//           <div className="h-full w-full bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center relative">
//             <div className="flex items-end space-x-2">
//               <div className="w-8 h-12 bg-green-600 rounded-t-full relative">
//                 <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-green-500 rounded-full"></div>
//               </div>
//               <div className="flex space-x-1">
//                 <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
//                 <div className="w-6 h-8 bg-yellow-500 rounded-full"></div>
//                 <div className="w-6 h-10 bg-yellow-500 rounded-full"></div>
//                 <div className="w-6 h-12 bg-yellow-500 rounded-full"></div>
//               </div>
//             </div>
//             <div className="absolute top-4 right-4 text-red-500 text-2xl font-bold">↗</div>
//           </div>
//         );
//       case 'side-hustle':
//         return (
//           <div className="h-full w-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center relative">
//             <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center">
//               <div className="text-center">
//                 <div className="text-lg font-bold text-gray-800 mb-2">SIDE HUSTLE</div>
//                 <div className="text-xs text-gray-600 space-y-1">
//                   <div>• Freelancing</div>
//                   <div>• Online business</div>
//                   <div>• Consulting</div>
//                   <div>• Digital products</div>
//                   <div>• Content creation</div>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute bottom-4 left-4">
//               <div className="w-12 h-16 bg-green-600 rounded-t-full relative">
//                 <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-green-500 rounded-full"></div>
//               </div>
//             </div>
//           </div>
//         );
//       case 'saving':
//         return (
//           <div className="h-full w-full bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center relative">
//             <div className="flex items-center space-x-3">
//               <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
//                 <span className="text-white text-2xl font-bold">$</span>
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <div className="w-8 h-2 bg-purple-400 rounded-full"></div>
//                 <div className="w-12 h-2 bg-purple-500 rounded-full"></div>
//                 <div className="w-6 h-2 bg-purple-300 rounded-full"></div>
//               </div>
//             </div>
//           </div>
//         );
//       case 'budgeting':
//         return (
//           <div className="h-full w-full bg-gradient-to-r from-orange-100 to-orange-200 flex items-center justify-center relative">
//             <div className="grid grid-cols-3 gap-2">
//               <div className="w-8 h-12 bg-orange-400 rounded-t-md"></div>
//               <div className="w-8 h-16 bg-orange-500 rounded-t-md"></div>
//               <div className="w-8 h-8 bg-orange-300 rounded-t-md"></div>
//               <div className="w-8 h-6 bg-orange-600 rounded-t-md"></div>
//               <div className="w-8 h-14 bg-orange-400 rounded-t-md"></div>
//               <div className="w-8 h-10 bg-orange-500 rounded-t-md"></div>
//             </div>
//           </div>
//         );
//       case 'debt':
//         return (
//           <div className="h-full w-full bg-gradient-to-r from-red-100 to-red-200 flex items-center justify-center relative">
//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-16 bg-red-600 rounded-lg flex items-center justify-center">
//                 <span className="text-white text-xl font-bold">📄</span>
//               </div>
//               <div className="text-red-600 text-3xl">→</div>
//               <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
//                 <span className="text-white text-xl">✓</span>
//               </div>
//             </div>
//           </div>
//         );
//       case 'personal-finance':
//         return (
//           <div className="h-full w-full bg-gradient-to-r from-teal-100 to-teal-200 flex items-center justify-center relative">
//             <div className="w-20 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center">
//               <div className="text-center">
//                 <div className="text-2xl text-teal-600 mb-1">📱</div>
//                 <div className="text-xs text-gray-600 font-semibold">Finance App</div>
//               </div>
//             </div>
//           </div>
//         );
//       default:
//         return (
//           <div className="h-full w-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
//             <div className="text-gray-400 text-4xl">📰</div>
//           </div>
//         );
//     }
//   };

//   if (selectedArticle) {
//     const relatedArticles = getRelatedArticles(selectedArticle);
    
//     return (
//       <div className="min-h-screen bg-white">
//         {/* Header */}
//         <header className="bg-white shadow-sm">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between items-center h-16">
//               {/* Logo */}
//               <div className="flex items-center">
//                 <div className="w-8 h-8 bg-blue-500 rounded-sm flex items-center justify-center mr-2">
//                   <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
//                 </div>
//                 <span className="text-xl font-bold text-gray-900">360revenue</span>
//               </div>
              
//               {/* Navigation */}
//               <nav className="hidden md:flex space-x-8">
//                 <button 
//                   onClick={() => setSelectedArticle(null)}
//                   className="text-gray-700 hover:text-blue-600 font-medium"
//                 >
//                   Home
//                 </button>
//                 <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Categories</a>
//                 <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
//                 <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
//               </nav>
              
//               {/* Sign Up Button */}
//               <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
//                 Sign Up
//               </Button>
//             </div>
//           </div>
//         </header>

//         {/* Article Hero Section with Image */}
//         <section className="relative">
//           {/* Full-width Hero Image */}
//           <div className="w-full h-96 relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
//             <div className="w-full h-full transform scale-110">
//               {renderArticleImage(selectedArticle.image)}
//             </div>
            
//             {/* Overlay Content */}
//             <div className="absolute inset-0 z-20 flex items-end">
//               <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
//                 <Button
//                   variant="ghost"
//                   onClick={() => setSelectedArticle(null)}
//                   className="mb-6 text-white hover:text-gray-200 hover:bg-white/10"
//                 >
//                   <ArrowLeft className="w-4 h-4 mr-2" />
//                   Back to Articles
//                 </Button>
                
//                 <Badge className="bg-blue-500 text-white mb-4 border-0">
//                   {selectedArticle.category.toUpperCase()}
//                 </Badge>
//                 <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
//                   {selectedArticle.title}
//                 </h1>
//                 <p className="text-lg text-gray-200 max-w-3xl">
//                   {selectedArticle.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Article Content */}
//         <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           {/* Article Meta */}
//           <div className="flex flex-wrap items-center gap-6 text-gray-500 border-b border-gray-200 pb-8 mb-8">
//             <div className="flex items-center">
//               <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
//                 {selectedArticle.authorAvatar}
//               </div>
//               <div>
//                 <div className="font-medium text-gray-900 text-lg">{selectedArticle.author}</div>
//                 <div className="text-sm text-gray-600">{selectedArticle.authorBio.substring(0, 80)}...</div>
//               </div>
//             </div>
//             <div className="flex items-center space-x-6 ml-auto">
//               <div className="flex items-center">
//                 <Calendar className="w-4 h-4 mr-2" />
//                 <span className="text-sm">{selectedArticle.date}</span>
//               </div>
//               <div className="flex items-center">
//                 <Clock className="w-4 h-4 mr-2" />
//                 <span className="text-sm">{selectedArticle.readTime}</span>
//               </div>
//             </div>
//           </div>

//           {/* Article Actions */}
//           <div className="flex items-center justify-between mb-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
//             <div className="flex items-center space-x-4">
//               <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300">
//                 <ThumbsUp className="w-4 h-4 mr-2" />
//                 {selectedArticle.likes}
//               </Button>
//               <Button variant="outline" size="sm" className="hover:bg-green-50 hover:text-green-600 hover:border-green-300">
//                 <Share2 className="w-4 h-4 mr-2" />
//                 Share
//               </Button>
//               <Button variant="outline" size="sm" className="hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-300">
//                 <Bookmark className="w-4 h-4 mr-2" />
//                 Save
//               </Button>
//             </div>
//             <div className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border">
//               {selectedArticle.shares} shares
//             </div>
//           </div>

//           {/* Article Content */}
//           <div className="prose prose-xl max-w-none mb-12">
//             <style jsx>{`
//               .prose h2 {
//                 font-size: 2rem;
//                 font-weight: 700;
//                 color: #1f2937;
//                 margin-top: 3rem;
//                 margin-bottom: 1.5rem;
//                 line-height: 1.2;
//               }
//               .prose h3 {
//                 font-size: 1.5rem;
//                 font-weight: 600;
//                 color: #374151;
//                 margin-top: 2.5rem;
//                 margin-bottom: 1rem;
//               }
//               .prose h4 {
//                 font-size: 1.25rem;
//                 font-weight: 600;
//                 color: #4b5563;
//                 margin-top: 2rem;
//                 margin-bottom: 0.75rem;
//               }
//               .prose p {
//                 font-size: 1.125rem;
//                 line-height: 1.8;
//                 color: #374151;
//                 margin-bottom: 1.5rem;
//               }
//               .prose ul, .prose ol {
//                 font-size: 1.125rem;
//                 line-height: 1.7;
//                 color: #374151;
//                 margin-bottom: 1.5rem;
//               }
//               .prose li {
//                 margin-bottom: 0.5rem;
//               }
//               .prose strong {
//                 color: #1f2937;
//                 font-weight: 600;
//               }
//             `}</style>
//             <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
//           </div>

//           {/* Article Tags */}
//           <div className="border-t border-gray-200 pt-8 mb-8">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Topics</h3>
//             <div className="flex flex-wrap gap-3">
//               {selectedArticle.tags.map((tag) => (
//                 <Badge 
//                   key={tag} 
//                   variant="outline" 
//                   className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 cursor-pointer px-4 py-2 text-sm"
//                 >
//                   #{tag}
//                 </Badge>
//               ))}
//             </div>
//           </div>

//           {/* Author Bio Card */}
//           <div className="border-t border-gray-200 pt-8 mb-12">
//             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
//               <div className="flex items-start space-x-6">
//                 <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
//                   {selectedArticle.authorAvatar}
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                     Written by {selectedArticle.author}
//                   </h3>
//                   <p className="text-gray-700 mb-6 text-lg leading-relaxed">{selectedArticle.authorBio}</p>
//                   <div className="flex space-x-4">
//                     <Button className="bg-blue-500 hover:bg-blue-600 text-white">
//                       Follow Author
//                     </Button>
//                     <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
//                       View All Articles
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Related Articles */}
//           {relatedArticles.length > 0 && (
//             <div className="border-t border-gray-200 pt-12">
//               <div className="text-center mb-12">
//                 <h3 className="text-3xl font-bold text-gray-900 mb-4">
//                   More in {selectedArticle.category}
//                 </h3>
//                 <p className="text-gray-600 text-lg">
//                   Continue exploring these related articles
//                 </p>
//               </div>
//               <div className="grid md:grid-cols-3 gap-8">
//                 {relatedArticles.map((article) => (
//                   <Card 
//                     key={article.id} 
//                     className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg hover:scale-105"
//                     onClick={() => setSelectedArticle(article)}
//                   >
//                     <div className="h-48 relative overflow-hidden">
//                       {renderArticleImage(article.image)}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                     </div>
//                     <CardContent className="p-6">
//                       <Badge className="bg-blue-100 text-blue-800 mb-3">
//                         {article.category.toUpperCase()}
//                       </Badge>
//                       <h4 className="font-bold text-gray-900 mb-3 line-clamp-2 text-lg leading-tight">
//                         {article.title}
//                       </h4>
//                       <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
//                         {article.description}
//                       </p>
//                       <div className="flex items-center justify-between text-sm text-gray-500">
//                         <div className="flex items-center">
//                           <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-2">
//                             {article.authorAvatar}
//                           </div>
//                           <span className="font-medium">{article.author}</span>
//                         </div>
//                         <span>{article.readTime}</span>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           )}
//         </article>

//         {/* Newsletter Section */}
//         <section className="py-16 bg-gray-50">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Stay Updated with Our Newsletter
//             </h2>
//             <p className="text-gray-600 mb-8">
//               Get the latest tips, strategies, and exclusive content delivered straight to your inbox.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-3 border border-gray-300 rounded-md"
//               />
//               <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md">
//                 Subscribe
//               </Button>
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="bg-gray-900 text-white py-12">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <div className="flex space-x-6 mb-4 md:mb-0">
//                 <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
//                 <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
//                 <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
//               </div>
              
//               <div className="flex space-x-4">
//                 <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
//                   <span className="text-sm">T</span>
//                 </div>
//                 <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
//                   <span className="text-sm">@</span>
//                 </div>
//                 <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
//                   <span className="text-sm">IG</span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
//               <p>© 2024 360revenue. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>
//       </div>
//     );
//   }
