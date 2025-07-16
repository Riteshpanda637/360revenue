import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  DollarSign, 
  PiggyBank, 
  Target, 
  CreditCard, 
  Calculator,
  BookOpen
} from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  articleCount: number;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'All': <BookOpen className="w-4 h-4" />,
  'Investing': <TrendingUp className="w-4 h-4" />,
  'Side Hustles': <DollarSign className="w-4 h-4" />,
  'Personal Finance': <Calculator className="w-4 h-4" />,
  'Budgeting': <PiggyBank className="w-4 h-4" />,
  'Saving': <Target className="w-4 h-4" />,
  'Debt Management': <CreditCard className="w-4 h-4" />
};

const categoryColors: Record<string, string> = {
  'All': 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800',
  'Investing': 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
  'Side Hustles': 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800',
  'Personal Finance': 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800',
  'Budgeting': 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800',
  'Saving': 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800',
  'Debt Management': 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  articleCount
}) => {
  return (
    <div className="mb-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Explore Our Articles
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover expert insights and proven strategies to help you achieve financial success
        </p>
        <div className="mt-4">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-sm px-3 py-1">
            {articleCount} articles available
          </Badge>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          const baseClasses = "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg";
          const selectedClasses = isSelected 
            ? `${categoryColors[category]} text-white shadow-lg` 
            : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50";

          return (
            <Button
              key={category}
              variant="ghost"
              onClick={() => onCategoryChange(category)}
              className={`${baseClasses} ${selectedClasses}`}
            >
              {categoryIcons[category]}
              {category}
              {isSelected && (
                <div className="w-2 h-2 bg-white rounded-full ml-1"></div>
              )}
            </Button>
          );
        })}
      </div>

      {/* Selected Category Info */}
      {selectedCategory !== 'All' && (
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full px-4 py-2">
            <span className="text-sm font-medium text-blue-800">
              Showing {selectedCategory} articles
            </span>
            <Badge className="bg-blue-600 text-white text-xs">
              {articleCount}
            </Badge>
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 text-center border border-blue-200">
          <div className="text-2xl font-bold text-blue-600 mb-2">6</div>
          <div className="text-sm text-blue-800 font-medium">Expert Authors</div>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 text-center border border-purple-200">
          <div className="text-2xl font-bold text-purple-600 mb-2">1000+</div>
          <div className="text-sm text-purple-800 font-medium">Words per Article</div>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 text-center border border-green-200">
          <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
          <div className="text-sm text-green-800 font-medium">Free Content</div>
        </div>
      </div>
    </div>
  );
};
