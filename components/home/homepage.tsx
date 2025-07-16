import React from 'react';
import { HeroSection } from '../home/HeroSection';
import { CategoryFilter } from '../home/CategoryFilter';
import { ArticlesGrid } from '../home/grids/ArticlesGrid';
import { Article } from '../../utils/types/Article';

interface HomePageProps {
  categories: string[];
  selectedCategory: string;
  filteredArticles: Article[];
  onCategoryChange: (category: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  categories,
  selectedCategory,
  filteredArticles,
  onCategoryChange
}) => {
  return (
    <>
      <HeroSection />
      
      {/* Articles Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
            articleCount={filteredArticles.length}
          />
          <ArticlesGrid articles={filteredArticles} />
        </div>
      </section>
    </>
  );
};
