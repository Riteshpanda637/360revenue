import Image from 'next/image';
import React from 'react';

interface ArticleImageProps {
  imageType: string;
  className?: string;
}

export const ArticleImage: React.FC<ArticleImageProps> = ({ imageType, className = "" }) => {
  const renderImage = () => {
    if (!imageType || typeof imageType !== 'string') {
      // fallback to a default image or placeholder
      return (
        <div className="h-full w-full bg-gradient-to-r from-gray-100 to-gray-200">
          {/* Placeholder or fallback image */}
        </div>
      );
    }
    if (imageType.startsWith('/grid')) {
      return (
        <img
          src={imageType}
          alt="Article Image"
          className="w-full h-auto object-cover" // responsive width, keeps aspect ratio
        />
      );
    }
    if (imageType.startsWith('/')) {
      return (
        <img
          src={imageType}
          alt="Article Image"
          className="w-full h-full object-cover" // Ensures the image fully covers the container
        />
      );
    }
    // You can handle other image types like 'investing', 'side-hustle', etc. here as per your case
    switch (imageType) {
      case 'investing':
        return (
          <div className="h-full w-full bg-gradient-to-r from-green-100 to-green-200 flex justify-center relative">
            <span className="text-4xl text-green-700">📈</span>
          </div>
        );
      case 'side-hustle':
        return (
          <div className="h-full w-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center relative">
            <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-800 mb-2">SIDE HUSTLE</div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• Freelancing</div>
                  <div>• Online business</div>
                  <div>• Consulting</div>
                  <div>• Digital products</div>
                </div>
              </div>
            </div>
          </div>
        );
      // Add similar cases for 'saving', 'budgeting', etc.
      default:
        return (
          <div className="h-full w-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-gray-400 text-4xl">📰</div>
          </div>
        );
    }
  };

  return <div className={className}>{renderImage()}</div>;
};
