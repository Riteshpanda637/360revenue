import React from 'react';
import { Button } from '@/components/ui/button';
import { ThumbsUp, Share2, Bookmark } from 'lucide-react';
import { Article } from '../../utils/types/Article';

interface ArticleActionsProps {
  article: Article;
}

export const ArticleActions: React.FC<ArticleActionsProps> = ({ article }) => {
  return (
    <div className="flex items-center justify-between mb-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:text-blue-600">
          <ThumbsUp className="w-4 h-4 mr-2" />
          {article.likes}
        </Button>
        <Button variant="outline" size="sm" className="hover:bg-green-50 hover:text-green-600">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
        <Button variant="outline" size="sm" className="hover:bg-yellow-50 hover:text-yellow-600">
          <Bookmark className="w-4 h-4 mr-2" />
          Save
        </Button>
      </div>
      <div className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border">
        {article.shares} shares
      </div>
    </div>
  );
};