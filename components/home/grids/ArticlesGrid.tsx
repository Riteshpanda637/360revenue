import React from 'react';
import { ArticleCard } from '../card/ArticleCard';
import { Article } from '../../../utils/types/Article';

interface ArticlesGridProps {
  articles: Article[];
}

export const ArticlesGrid: React.FC<ArticlesGridProps> = ({ articles }) => {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">📝</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
        <p className="text-gray-600">We don't have any articles in this category yet. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  ">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
        />
      ))}
    </div>
  );
};

