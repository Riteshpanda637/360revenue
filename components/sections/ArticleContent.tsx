import React from 'react';

interface ArticleContentProps {
  content: string;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  return (
    <div className="prose prose-xl max-w-none mb-12">
      <div 
        dangerouslySetInnerHTML={{ __html: content }}
        className="text-lg leading-relaxed text-gray-700"
      />
    </div>
  );
};