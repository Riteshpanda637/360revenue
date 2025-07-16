import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import { ArticleImage } from '../ui/ArticleImage';
import { Article } from '../../utils/types/Article';

interface ArticleHeroProps {
  article: Article;
  onBack: () => void;
}

export const ArticleHero: React.FC<ArticleHeroProps> = ({ article, onBack }) => {
  return (
    <section className="relative">
      <div className="w-full h-96 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <div className="w-full h-full transform scale-110">
          <ArticleImage imageType={article.image} />
        </div>
        
        <div className="absolute inset-0 z-20 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <Button
              variant="ghost"
              onClick={onBack}
              className="mb-6 text-white hover:text-gray-200 hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Button>
            
            <Badge className="bg-blue-500 text-white mb-4">
              {article.category.toUpperCase()}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              {article.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};