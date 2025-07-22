import { 
  Shield,
  Users,
  DollarSign,
  Target,
  BookOpen,
  Globe,
  Heart
} from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                 {/* Brand Section */}
         <div className="text-center mb-16">
           <div className="flex items-center justify-center gap-4 mb-6">
             <img src="/logo.png" alt="360revenue Logo" className="w-20 h-20" />
             <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
               360revenue
             </h3>
           </div>
           <p className="text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
             Your trusted source for expert financial guidance, proven strategies, and actionable tips to help you achieve financial freedom and build lasting wealth.
           </p>
           <div className="flex items-center justify-center gap-4">
             <Badge className="bg-green-100 text-green-800 border-green-200">
               <Shield className="w-3 h-3 mr-1" />
               Expert Verified
             </Badge>
             <Badge className="bg-blue-100 text-blue-800 border-blue-200">
               <Users className="w-3 h-3 mr-1" />
               Growing Community
             </Badge>
           </div>
         </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Main Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Main
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:bg-white transition-colors"></span>
                  All Articles
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/keywords" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Keywords
                </Link>
              </li>
              <li>
                <Link href="/keywords/freelancing" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Freelancing Guide
                </Link>
              </li>
              <li>
                <Link href="/keywords/real%20estate" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Real Estate Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Financial Topics */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Financial Topics
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/keywords/investing" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Investing Guide
                </Link>
              </li>
              <li>
                <Link href="/keywords/side%20hustles" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Side Hustles
                </Link>
              </li>
              <li>
                <Link href="/keywords/personal%20finance" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Personal Finance
                </Link>
              </li>
              <li>
                <Link href="/keywords/budgeting" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Budgeting Tips
                </Link>
              </li>
              <li>
                <Link href="/keywords/financial%20freedom" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Financial Freedom
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/methods" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Earning Methods
                </Link>
              </li>
              <li>
                <Link href="/subcategories" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Subcategories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:bg-white transition-colors"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/keywords/passive%20income" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Passive Income
                </Link>
              </li>
              <li>
                <Link href="/keywords/wealth%20building" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:bg-white transition-colors"></span>
                  Wealth Building
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-orange-500 rounded-full group-hover:bg-white transition-colors"></span>
                  About Us
                </Link>
              </li>
              
                             <li>
                 <Link href="/privacypolicy" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                   <span className="w-1 h-1 bg-orange-500 rounded-full group-hover:bg-white transition-colors"></span>
                   Privacy Policy
                 </Link>
               </li>
            </ul>

            
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-to-r from-blue-600/10 to-blue-700/10 border border-blue-500/20 rounded-xl">
            <div className="text-2xl font-bold text-blue-400 mb-2">100+</div>
            <div className="text-gray-300 text-sm">Expert Articles</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-purple-600/10 to-purple-700/10 border border-purple-500/20 rounded-xl">
            <div className="text-2xl font-bold text-purple-400 mb-2">6</div>
            <div className="text-gray-300 text-sm">Categories</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-green-600/10 to-green-700/10 border border-green-500/20 rounded-xl">
            <div className="text-2xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-gray-300 text-sm">Free Content</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-orange-600/10 to-orange-700/10 border border-orange-500/20 rounded-xl">
            <div className="text-2xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Available</div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with love for financial education</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 360revenue. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>Expert Financial Guidance</span>
              <span>•</span>
              <span>Proven Strategies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
