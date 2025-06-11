import React from 'react';
import { HeroSection } from '../home/HeroSection';
import { CategoryFilter } from '../home/CategoryFilter';
import { ArticlesGrid } from '../home/grids/ArticlesGrid';
import { NewsletterSection } from '../sections/NewsletterSection';
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
      <section className="py-16 bg-white">
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
      {/* <NewsletterSection /> */}
    </>
  );
};
