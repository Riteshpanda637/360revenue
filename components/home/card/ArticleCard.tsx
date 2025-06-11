import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArticleImage } from '../../ui/ArticleImage';
import { Article } from '../../../utils/types/Article';
import Link from 'next/link';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow w-full max-w-full border-white rounded-xl">
      <div className="h-48 w-full">
        <ArticleImage imageType={article.image} />
      </div>
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge className="bg-blue-100 text-blue-800">{article.category.toUpperCase()}</Badge>
          <span className="text-sm text-gray-500">{article.readTime}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          {article.description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>By {article.author}</span>
          <span>{article.date}</span>
        </div>
        
        {/* Article Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <span className="mr-1">👍</span>
              {article.likes}
            </span>
            <span className="flex items-center">
              <span className="mr-1">↗️</span>
              {article.shares}
            </span>
          </div>
          <Link href={`/articles/${article.slug}`} aria-label={`Read more about ${article.title}`}>
            <Button className='cursor-pointer'>
              Read More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
