import React from 'react';
import { ArticleImage } from './ArticleImage';

const ImageTest: React.FC = () => {
  const testImages = [
    '/grid1.png',
    '/grid2.png',
    '/grid3.png',
    '/grid4.png',
    '/grid5.png',
    '/grid6.png',
    '/logo.png',
    '/rr.png',
    '/home.png',
    'investing',
    'side-hustle',
    'saving',
    'budgeting',
    'debt-management',
    'personal-finance'
  ];

  return (
    <div className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6">Image Loading Test</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testImages.map((image, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className="h-32 relative">
              <ArticleImage imageType={image} className="h-full" />
            </div>
            <div className="p-2 text-xs text-gray-600 truncate">
              {image}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTest; 