'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, ChevronDown, BookOpen, TrendingUp, PiggyBank, Calculator, CreditCard, DollarSign, Smartphone, ArrowLeft, X } from 'lucide-react'
import Image from 'next/image'

interface HeaderProps {
  onHomeClick?: () => void
}

export const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = React.useState(false)
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)

  const navItems = [
    { label: 'Home',       path: '/' },
    { label: 'Categories', path: '/categories' },
    { label: 'About',      path: '/about' },
  ]

  const blogCategories = [
    {
      label: 'Investment & Wealth Building',
      path: '/articles?category=INVESTING',
      icon: TrendingUp,
      description: 'Stock market, mutual funds, and more',
      subcategories: [
        { label: 'Stock Market Investment', path: '/articles?category=INVESTING&subcategory=stock-market-investment' },
        { label: 'Mutual Fund Investment', path: '/articles?category=INVESTING&subcategory=mutual-fund-investment' },
        { label: 'SIP Investment', path: '/articles?category=INVESTING&subcategory=sip-investment' },
        { label: 'Fixed Deposits Investment', path: '/articles?category=INVESTING&subcategory=fixed-deposits-investment' },
        { label: 'Government Bonds Investment', path: '/articles?category=INVESTING&subcategory=government-bonds-investment' },
        { label: 'Corporate Bonds Investment', path: '/articles?category=INVESTING&subcategory=corporate-bonds-investment' },
        { label: 'Gold Investment', path: '/articles?category=INVESTING&subcategory=gold-investment' },
        { label: 'Real Estate Investment', path: '/articles?category=INVESTING&subcategory=real-estate-investment' },
        { label: 'PPF Investment', path: '/articles?category=INVESTING&subcategory=ppf-investment' },
        { label: 'ELSS Investment', path: '/articles?category=INVESTING&subcategory=elss-investment' },
        { label: 'Index Funds Investment', path: '/articles?category=INVESTING&subcategory=index-funds-investment' },
        { label: 'Dividend Stocks Investment', path: '/articles?category=INVESTING&subcategory=dividend-stocks-investment' }
      ]
    },
    {
      label: 'Online Business & Digital Income',
      path: '/articles?category=SIDE%20HUSTLE',
      icon: DollarSign,
      description: 'Online income and freelancing',
      subcategories: [
        { label: 'Freelancing Services', path: '/articles?category=SIDE%20HUSTLE&subcategory=freelancing-services' },
        { label: 'Online Business', path: '/articles?category=SIDE%20HUSTLE&subcategory=online-business' },
        { label: 'Business Consulting', path: '/articles?category=SIDE%20HUSTLE&subcategory=business-consulting' },
        { label: 'Digital Products', path: '/articles?category=SIDE%20HUSTLE&subcategory=digital-products' },
        { label: 'Affiliate Marketing', path: '/articles?category=SIDE%20HUSTLE&subcategory=affiliate-marketing' },
        { label: 'YouTube Monetization', path: '/articles?category=SIDE%20HUSTLE&subcategory=youtube-monetization' },
        { label: 'Blog Monetization', path: '/articles?category=SIDE%20HUSTLE&subcategory=blog-monetization' },
        { label: 'Social Media Management', path: '/articles?category=SIDE%20HUSTLE&subcategory=social-media-management' },
        { label: 'Virtual Assistant Services', path: '/articles?category=SIDE%20HUSTLE&subcategory=virtual-assistant-services' },
        { label: 'Online Tutoring', path: '/articles?category=SIDE%20HUSTLE&subcategory=online-tutoring' },
        { label: 'Graphic Design Services', path: '/articles?category=SIDE%20HUSTLE&subcategory=graphic-design-services' },
        { label: 'Content Writing', path: '/articles?category=SIDE%20HUSTLE&subcategory=content-writing' }
      ]
    },
    {
      label: 'Savings & Financial Management',
      path: '/articles?category=SAVING',
      icon: PiggyBank,
      description: 'Smart saving strategies',
      subcategories: [
        { label: 'High-Yield Savings Account', path: '/articles?category=SAVING&subcategory=high-yield-savings-account' },
        { label: 'Money Market Account', path: '/articles?category=SAVING&subcategory=money-market-account' },
        { label: 'Certificate of Deposits', path: '/articles?category=SAVING&subcategory=certificate-deposits' },
        { label: 'Treasury Bills Investment', path: '/articles?category=SAVING&subcategory=treasury-bills-investment' },
        { label: 'Liquid Funds', path: '/articles?category=SAVING&subcategory=liquid-funds' },
        { label: 'Short-term Bonds', path: '/articles?category=SAVING&subcategory=short-term-bonds' },
        { label: 'Savings Bank Account', path: '/articles?category=SAVING&subcategory=savings-bank-account' },
        { label: 'Recurring Deposits', path: '/articles?category=SAVING&subcategory=recurring-deposits' },
        { label: 'Emergency Fund Planning', path: '/articles?category=SAVING&subcategory=emergency-fund-planning' },
        { label: 'Auto Save Features', path: '/articles?category=SAVING&subcategory=auto-save-features' },
        { label: 'Round-up Savings', path: '/articles?category=SAVING&subcategory=round-up-savings' },
        { label: 'Goal-based Savings', path: '/articles?category=SAVING&subcategory=goal-based-savings' }
      ]
    },
    {
      label: 'Budgeting & Financial Planning',
      path: '/articles?category=BUDGETING',
      icon: Calculator,
      description: 'Budget planning and management',
      subcategories: [
        { label: '50/30/20 Budgeting Rule', path: '/articles?category=BUDGETING&subcategory=50-30-20-budgeting-rule' },
        { label: 'Zero-Based Budgeting', path: '/articles?category=BUDGETING&subcategory=zero-based-budgeting' },
        { label: 'Envelope Method', path: '/articles?category=BUDGETING&subcategory=envelope-method' },
        { label: 'Pay Yourself First', path: '/articles?category=BUDGETING&subcategory=pay-yourself-first' },
        { label: 'Automated Savings', path: '/articles?category=BUDGETING&subcategory=automated-savings' },
        { label: 'Budget Spreadsheets', path: '/articles?category=BUDGETING&subcategory=budget-spreadsheets' },
        { label: 'Cash Flow Management', path: '/articles?category=BUDGETING&subcategory=cash-flow-management' },
        { label: 'Debt Snowball Method', path: '/articles?category=BUDGETING&subcategory=debt-snowball-method' },
        { label: 'Emergency Fund Building', path: '/articles?category=BUDGETING&subcategory=emergency-fund-building' },
        { label: 'Investment Allocation', path: '/articles?category=BUDGETING&subcategory=investment-allocation' },
        { label: 'Financial Goal Setting', path: '/articles?category=BUDGETING&subcategory=financial-goal-setting' },
        { label: 'Side Income for Debt Payment', path: '/articles?category=BUDGETING&subcategory=side-income-for-debt-payment' }
      ]
    },
    {
      label: 'Debt Management & Financial Freedom',
      path: '/articles?category=DEBT%20MANAGEMENT',
      icon: CreditCard,
      description: 'Debt reduction strategies',
      subcategories: [
        { label: 'Debt Consolidation', path: '/articles?category=DEBT%20MANAGEMENT&subcategory=debt-consolidation' },
        { label: 'Balance Transfer Cards', path: '/articles?category=DEBT%20MANAGEMENT&subcategory=balance-transfer-cards' },
        { label: 'Debt Avalanche Method', path: '/articles?category=DEBT%20MANAGEMENT&subcategory=debt-avalanche-method' },
        { label: 'Personal Loans', path: '/articles?category=DEBT%20MANAGEMENT&subcategory=personal-loans' },
        { label: 'Credit Counseling', path: '/articles?category=DEBT%20MANAGEMENT&subcategory=credit-counseling' },
        { label: 'Expense Reduction', path: '/articles?category=DEBT%20MANAGEMENT&subcategory=expense-reduction' },
        { label: 'Negotiating with Creditors', path: '/articles?category=DEBT%20MANAGEMENT&subcategory=negotiating-with-creditors' },
        { label: 'Refinancing Options', path: '/articles?category=DEBT%20MANAGEMENT&subcategory=refinancing-options' },
        { label: 'Extra Payment Strategy', path: '/articles?category=DEBT%20MANAGEMENT&subcategory=extra-payment-strategy' },
        { label: 'Financial Therapy', path: '/articles?category=DEBT%20MANAGEMENT&subcategory=financial-therapy' }
      ]
    },
    {
      label: 'Financial Apps & Digital Tools',
      path: '/articles?category=Financial%20Apps',
      icon: Smartphone,
      description: 'Best apps for money management',
      subcategories: [
        { label: 'Expense Tracking Apps', path: '/articles?category=Financial%20Apps&subcategory=expense-tracking-apps' },
        { label: 'Investment Apps', path: '/articles?category=Financial%20Apps&subcategory=investment-apps' },
        { label: 'Budgeting Tools', path: '/articles?category=Financial%20Apps&subcategory=budgeting-tools' },
        { label: 'Cashback Apps', path: '/articles?category=Financial%20Apps&subcategory=cashback-apps' },
        { label: 'Coupon Apps', path: '/articles?category=Financial%20Apps&subcategory=coupon-apps' },
        { label: 'Bill Reminder Apps', path: '/articles?category=Financial%20Apps&subcategory=bill-reminder-apps' },
        { label: 'Savings Challenge Apps', path: '/articles?category=Financial%20Apps&subcategory=savings-challenge-apps' },
        { label: 'Credit Score Monitoring', path: '/articles?category=Financial%20Apps&subcategory=credit-score-monitoring' },
        { label: 'Receipt Scanning Apps', path: '/articles?category=Financial%20Apps&subcategory=receipt-scanning-apps' },
        { label: 'Price Comparison Apps', path: '/articles?category=Financial%20Apps&subcategory=price-comparison-apps' },
        { label: 'Subscription Management', path: '/articles?category=Financial%20Apps&subcategory=subscription-management' },
        { label: 'Financial Planning Tools', path: '/articles?category=Financial%20Apps&subcategory=financial-planning-tools' }
      ]
    },
    {
      label: 'Teen Income Opportunities',
      path: '/articles?category=TEEN_INCOME',
      icon: BookOpen,
      description: '18 proven ways for teenagers to earn money',
      subcategories: [
        { label: 'Babysitting Services', path: '/articles?category=TEEN_INCOME&subcategory=babysitting' },
        { label: 'Pet Sitting Services', path: '/articles?category=TEEN_INCOME&subcategory=pet-sitting' },
        { label: 'Academic Tutoring', path: '/articles?category=TEEN_INCOME&subcategory=tutoring' },
        { label: 'Online Surveys', path: '/articles?category=TEEN_INCOME&subcategory=online-surveys' },
        { label: 'Content Creation', path: '/articles?category=TEEN_INCOME&subcategory=content-creation' },
        { label: 'Lawn Care & Landscaping', path: '/articles?category=TEEN_INCOME&subcategory=lawn-care' },
        { label: 'House Cleaning Services', path: '/articles?category=TEEN_INCOME&subcategory=house-cleaning' },
        { label: 'Car Washing & Detailing', path: '/articles?category=TEEN_INCOME&subcategory=car-washing' },
        { label: 'Teen Social Media Management', path: '/articles?category=TEEN_INCOME&subcategory=teen-social-media-management' },
        { label: 'Teen Virtual Assistant Services', path: '/articles?category=TEEN_INCOME&subcategory=teen-virtual-assistant' },
        { label: 'Teen Online Tutoring Services', path: '/articles?category=TEEN_INCOME&subcategory=teen-online-tutoring' },
        { label: 'Event Planning Services', path: '/articles?category=TEEN_INCOME&subcategory=event-planning' },
        { label: 'App & Website Testing', path: '/articles?category=TEEN_INCOME&subcategory=app-testing' }
      ]
    }
  ]

  const handleCategoryClick = (category: any) => {
    if (category.subcategories && category.subcategories.length > 0) {
      setSelectedCategory(category.label)
    } else {
      router.push(category.path)
      setSelectedCategory(null)
    }
  }

  const handleBackClick = () => {
    setSelectedCategory(null)
  }

  const handleSubcategoryClick = (path: string) => {
    // Extract subcategory name from the path
    const subcategoryMatch = path.match(/subcategory=([^&]+)/);
    if (subcategoryMatch) {
      const subcategorySlug = subcategoryMatch[1];
      router.push(`/subcategories/${subcategorySlug}`);
    } else {
      router.push(path);
    }
    setSelectedCategory(null);
  }

  return (
    <header className="bg-white shadow-sm py-1">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/rr.png"
              alt="NewsTale Logo"
              width={200}
              height={200}
              className="mr-4" // Optional: add margin if necessary
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-14 justify-end w-full">
            {navItems.map(({ label, path }) => {
              const isActive = pathname === path
              return (
                <Link
                  key={path}
                  href={path}
                  className={
                    `${isActive
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                    } font-medium pb-1`
                  }
                >
                  {label}
                </Link>
              )
            })}
            
            {/* Blog Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}
                className={`flex items-center gap-1 font-medium pb-1 transition-colors ${
                  pathname.startsWith('/articles') || pathname.startsWith('/blog')
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Blog
                <ChevronDown className={`w-4 h-4 transition-transform ${isBlogDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Blog Dropdown Menu - Positioned outside the nav container */}
        {isBlogDropdownOpen && (
          <div className="relative bg-white shadow-xl border border-gray-200 py-6 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {!selectedCategory ? (
                <div className="grid grid-cols-12 gap-8">
                  {/* Header with Close Button */}
                  <div className="col-span-12 flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Blog Categories</h3>
                      <p className="text-sm text-gray-600">Explore our financial guides and tips</p>
                    </div>
                    <button
                      onClick={() => setIsBlogDropdownOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      aria-label="Close dropdown"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                  
                  {/* Categories Grid */}
                  <div className="col-span-12">
                    <div className="grid grid-cols-3 gap-4">
                      {blogCategories.map((category) => {
                        const IconComponent = category.icon
                        const isActive = pathname === category.path || 
                          (category.path.includes('category=') && pathname.includes(category.path.split('=')[1]))
                        
                        return (
                          <button
                            key={category.path}
                            onClick={() => handleCategoryClick(category)}
                            className={`flex items-center gap-3 p-4 rounded-lg text-left transition-colors border ${
                              isActive ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-700 hover:bg-gray-50 border-gray-200'
                            }`}
                          >
                            <IconComponent className={`w-5 h-5 flex-shrink-0 ${
                              isActive ? 'text-blue-600' : 'text-gray-500'
                            }`} />
                            <div>
                              <div className={`font-medium ${isActive ? 'text-blue-600' : 'text-gray-900'}`}>
                                {category.label}
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                {category.subcategories?.length || 0} subcategories
                              </div>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="px-4 pb-3 border-b border-gray-100 mb-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <button
                          onClick={handleBackClick}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-2"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Back to Categories
                        </button>
                        <h3 className="text-lg font-semibold text-gray-900">{selectedCategory}</h3>
                        <p className="text-sm text-gray-600">Choose a subcategory to explore</p>
                      </div>
                      <button
                        onClick={() => setIsBlogDropdownOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Close dropdown"
                      >
                        <X className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {blogCategories.find(cat => cat.label === selectedCategory)?.subcategories?.map((subcategory) => (
                      <button
                        key={subcategory.path}
                        onClick={() => handleSubcategoryClick(subcategory.path)}
                        className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors text-left text-gray-700 border border-gray-200"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="font-medium text-gray-900">
                          {subcategory.label}
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        
        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      setSelectedCategory(null)
                    }}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>

                {/* Main Navigation */}
                <div className="space-y-2 mb-6">
                  {navItems.map(({ label, path }) => (
                                         <Link
                       key={path}
                       href={path}
                       className={`block py-3 px-4 rounded-lg text-gray-800 hover:bg-blue-50 font-medium transition-colors ${pathname === path ? 'text-blue-600 bg-blue-50' : ''}`}
                       onClick={() => {
                         setIsMobileMenuOpen(false)
                         setSelectedCategory(null)
                       }}
                     >
                       {label}
                     </Link>
                  ))}
                </div>
                
                {/* Mobile Blog Section */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Blog Categories</h3>
                                         <Link
                       href="/blog"
                       className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                       onClick={() => {
                         setIsMobileMenuOpen(false)
                         setSelectedCategory(null)
                       }}
                     >
                       View All →
                     </Link>
                  </div>
                  
                  <div className="space-y-3">
                    {blogCategories.map((category) => {
                      const IconComponent = category.icon
                      const isActive = pathname === category.path || 
                        (category.path.includes('category=') && pathname.includes(category.path.split('=')[1]))
                      
                      return (
                        <div key={category.path} className="space-y-2">
                          <button
                            onClick={() => handleCategoryClick(category)}
                            className={`w-full flex items-center gap-3 p-4 rounded-lg text-left transition-colors border ${
                              isActive ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-700 hover:bg-gray-50 border-gray-200'
                            }`}
                          >
                            <IconComponent className={`w-5 h-5 flex-shrink-0 ${
                              isActive ? 'text-blue-600' : 'text-gray-500'
                            }`} />
                            <div className="flex-1">
                              <div className={`font-medium ${isActive ? 'text-blue-600' : 'text-gray-900'}`}>
                                {category.label}
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                {category.subcategories?.length || 0} subcategories
                              </div>
                            </div>
                            {category.subcategories && category.subcategories.length > 0 && (
                              <ChevronDown className="w-4 h-4 text-gray-400" />
                            )}
                          </button>
                          
                          {/* Show subcategories if this category is selected */}
                          {selectedCategory === category.label && category.subcategories && (
                            <div className="ml-6 space-y-2">
                              <div className="flex items-center gap-2 mb-2">
                                <button
                                  onClick={handleBackClick}
                                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
                                >
                                  <ArrowLeft className="w-3 h-3" />
                                  Back
                                </button>
                              </div>
                              {category.subcategories.map((subcategory) => (
                                <button
                                  key={subcategory.path}
                                  onClick={() => handleSubcategoryClick(subcategory.path)}
                                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left text-gray-700 border border-gray-200"
                                >
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                  <div className="font-medium text-gray-900">
                                    {subcategory.label}
                                  </div>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}