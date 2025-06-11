import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArticleImage } from '../ui/ArticleImage';
import { Article } from '../../utils/types/Article';

interface RelatedArticlesProps {
  articles: Article[];
  category: string;
  onArticleClick: (article: Article) => void;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ 
  articles, 
  category, 
  onArticleClick 
}) => {
  if (articles.length === 0) return null;

  return (
    <div className="border-t border-gray-200 pt-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          More in {category}
        </h3>
        <p className="text-gray-600 text-lg">
          Continue exploring these related articles
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Card 
            key={article.id} 
            className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg hover:scale-105"
            onClick={() => onArticleClick(article)}
          >
            <div className="h-48 relative overflow-hidden">
              <ArticleImage imageType={article.image} />
            </div>
            <CardContent className="p-6">
              <Badge className="bg-blue-100 text-blue-800 mb-3">
                {article.category.toUpperCase()}
              </Badge>
              <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">
                {article.title}
              </h4>
              <p className="text-gray-600 mb-4 text-sm">
                {article.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-2">
                    {article.authorAvatar}
                  </div>
                  <span className="font-medium">{article.author}</span>
                </div>
                <span>{article.readTime}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

