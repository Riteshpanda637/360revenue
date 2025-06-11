import React from 'react';
import { Button } from '@/components/ui/button';
import { Article } from '../../utils/types/Article';

interface AuthorBioProps {
  article: Article;
}

export const AuthorBio: React.FC<AuthorBioProps> = ({ article }) => {
  return (
    <div className="border-t border-gray-200 pt-8 mb-12">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
        <div className="flex items-start space-x-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {article.authorAvatar}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Written by {article.author}
            </h3>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">{article.authorBio}</p>
            <div className="flex space-x-4">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Follow Author
              </Button>
              <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                View All Articles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
