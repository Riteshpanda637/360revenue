import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Article } from '../../utils/types/Article';

interface ArticleMetaProps {
  article: Article;
}

export const ArticleMeta: React.FC<ArticleMetaProps> = ({ article }) => {
  return (
    <div className="flex flex-wrap items-center gap-6 text-gray-500 border-b border-gray-200 pb-8 mb-8">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
          {article.authorAvatar}
        </div>
        <div>
          <div className="font-medium text-gray-900 text-lg">{article.author}</div>
          <div className="text-sm text-gray-600">{article.authorBio.substring(0, 80)}...</div>
        </div>
      </div>
      <div className="flex items-center space-x-6 ml-auto">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">{article.date}</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">{article.readTime}</span>
        </div>
      </div>
    </div>
  );
};
