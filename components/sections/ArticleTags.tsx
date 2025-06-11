import React from 'react';
import { Badge } from '@/components/ui/badge';

interface ArticleTagsProps {
  tags: string[];
}

export const ArticleTags: React.FC<ArticleTagsProps> = ({ tags }) => {
  return (
    <div className="border-t border-gray-200 pt-8 mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Topics</h3>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Badge 
            key={tag} 
            variant="outline" 
            className="bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer"
          >
            #{tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};