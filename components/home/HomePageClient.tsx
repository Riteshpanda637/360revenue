"use client";
import React, { useState } from 'react';
import { HomePage } from './homepage';
import { Article } from '../../utils/types/Article';

const HomePageClient = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Investing',
    'Side Hustles',
    'Personal Finance',
    'Budgeting',
    'Saving',
    'Debt Management'
  ];

  const articles: Article[] = [
    {
      id: 1,
      title: "The Ultimate Guide to Investing for Beginners",
      description: "Learn the basics of investing, different investment options, and how to get started on your journey to financial freedom.",
      category: "Investing",
      readTime: "8 min read",
      image: "/grid1.png",
      author: "Ritesh Panda",
      authorBio: "Financial advisor with 10+ years of experience helping individuals build wealth through smart investing strategies.",
      authorAvatar: "SJ",
      date: "may 15, 2025",
      likes: 234,
      shares: 67,
      tags: ["beginner", "stocks", "portfolio", "wealth building"],
      slug: "ultimate-guide-investing-beginners"
    },
    {
      id: 2,
      title: "Top 10 Side Hustles to Boost Your Income",
      description: "Explore a variety of side hustle ideas that can help you earn extra money in your spare time, from freelancing to online businesses.",
      category: "Side Hustles",
      readTime: "6 min read",
      image: "/grid2.png",
      author: "Ritesh Panda",
      authorBio: "Entrepreneur and side hustle expert who has built multiple income streams and helps others do the same.",
      authorAvatar: "MC",
      date: "may 21, 2025",
      likes: 189,
      shares: 45,
      tags: ["freelancing", "online business", "passive income", "entrepreneur"],
      slug: "top-10-side-hustles-boost-income"
    },
    {
      id: 3,
      title: "Emergency Fund: How Much Should You Save?",
      description: "Learn how to build and maintain an emergency fund that protects you from unexpected financial setbacks.",
      category: "Saving",
      readTime: "5 min read",
      image: "/grid3.png",
      author: "Ritesh Panda",
      authorBio: "Certified Financial Planner specializing in personal finance and emergency preparedness strategies.",
      authorAvatar: "EW",
      date: "Dec 8, 2024",
      likes: 156,
      shares: 34,
      tags: ["emergency fund", "savings", "financial planning", "security"],
      slug: "emergency-fund-how-much-save"
    },
    {
      id: 4,
      title: "Creating a Budget That Actually Works",
      description: "Master the art of budgeting with practical tips and tools that help you stick to your financial plan.",
      category: "Budgeting",
      readTime: "7 min read",
      image: "/grid4.png",
      author: "Ritesh Panda",
      authorBio: "Personal finance coach who has helped thousands of people take control of their money through effective budgeting.",
      authorAvatar: "AT",
      date: "mar 5, 2025",
      likes: 203,
      shares: 56,
      tags: ["budgeting", "financial planning", "money management", "expenses"],
      slug: "budget-that-actually-works"
    },
    {
      id: 5,
      title: "Paying Off Credit Card Debt Fast",
      description: "Effective strategies to eliminate credit card debt and regain control of your financial future.",
      category: "Debt Management",
      readTime: "9 min read",
      image: "/grid5.png",
      author: "Ritesh Panda",
      authorBio: "Debt counselor and financial educator who has helped clients pay off over $2 million in consumer debt.",
      authorAvatar: "LP",
      date: "Dec 3, 2024",
      likes: 278,
      shares: 72,
      tags: ["debt management", "credit cards", "debt payoff", "financial freedom"],
      slug: "paying-off-credit-card-debt-fast"
    },
    {
      id: 6,
      title: "Personal Finance Apps That Save Money",
      description: "The best mobile apps to track expenses, save money, and manage your personal finances effectively.",
      category: "Personal Finance",
      readTime: "4 min read",
      image: "/grid6.png",
      author: "Ritesh Panda",
      authorBio: "Tech-savvy financial advisor who reviews and recommends the latest fintech tools for personal money management.",
      authorAvatar: "JW",
      date: "jan 1, 2025",
      likes: 145,
      shares: 38,
      tags: ["apps", "technology", "money management", "fintech"],
      slug: "personal-finance-apps-save-money"
    },
    // {
    //   id: 7,
    //   title: "Freelancing: Your Path to Financial Freedom",
    //   description: "How to start freelancing, find clients, and build a sustainable side business that generates steady income.",
    //   category: "Side Hustles",
    //   readTime: "12 min read",
    //   image: "side-hustle",
    //   author: "Rachel Green",
    //   authorBio: "Full-time freelancer and business coach who has built a six-figure freelancing business and teaches others to do the same.",
    //   authorAvatar: "RG",
    //   date: "Nov 28, 2024",
    //   likes: 267,
    //   shares: 78,
    //   tags: ["freelancing", "business", "entrepreneurship", "remote work"],
    //   slug: "freelancing-path-financial-freedom"
    // },
    // {
    //   id: 8,
    //   title: "High-Yield Savings Accounts Guide",
    //   description: "Compare the best high-yield savings accounts and learn how to maximize your money's growth potential.",
    //   category: "Saving",
    //   readTime: "6 min read",
    //   image: "saving",
    //   author: "Michael Brown",
    //   authorBio: "Banking specialist and financial analyst who tracks savings rates and helps consumers find the best deposit accounts.",
    //   authorAvatar: "MB",
    //   date: "Nov 25, 2024",
    //   likes: 178,
    //   shares: 42,
    //   tags: ["savings", "banking", "interest rates", "deposits"],
    //   slug: "high-yield-savings-accounts-guide"
    // },
    // {
    //   id: 9,
    //   title: "Stock Market Strategies for 2025",
    //   description: "Discover advanced investment strategies and market trends to maximize your portfolio returns in the coming year.",
    //   category: "Investing",
    //   readTime: "10 min read",
    //   image: "investing",
    //   author: "David Rodriguez",
    //   authorBio: "Senior portfolio manager with 15 years of experience in equity research and investment strategy.",
    //   authorAvatar: "DR",
    //   date: "Dec 10, 2024",
    //   likes: 312,
    //   shares: 89,
    //   tags: ["stocks", "strategy", "2025", "portfolio management"],
    //   slug: "stock-market-strategies-2025"
    // }
  ];

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <HomePage
      categories={categories}
      selectedCategory={selectedCategory}
      filteredArticles={filteredArticles}
      onCategoryChange={handleCategoryChange}
    />
  );
};

export default HomePageClient; 