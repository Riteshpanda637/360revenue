import React from 'react';
import { Button } from '@/components/ui/button';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  articleCount: number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  articleCount
}) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Popular Categories</h2>
      
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === category
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
        </h3>
        <p className="text-gray-600">
          {selectedCategory === 'All' 
            ? `Showing all ${articleCount} articles`
            : `${articleCount} articles in ${selectedCategory}`
          }
        </p>
      </div>
    </div>
  );
};
