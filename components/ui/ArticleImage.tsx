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
        <div className="h-full w-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-gray-400 text-4xl">📰</div>
        </div>
      );
    }

    // Handle local images with proper Next.js Image component
    if (imageType.startsWith('/')) {
      return (
        <Image
          src={imageType}
          alt="Article Image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          onError={(e) => {
            // Fallback on error
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="h-full w-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                  <div class="text-gray-400 text-4xl">📰</div>
                </div>
              `;
            }
          }}
        />
      );
    }

    // Handle external URLs (if any)
    if (imageType.startsWith('http')) {
      return (
        <Image
          src={imageType}
          alt="Article Image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          onError={(e) => {
            // Fallback on error
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="h-full w-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                  <div class="text-gray-400 text-4xl">📰</div>
                </div>
              `;
            }
          }}
        />
      );
    }

    // Handle special image types with themed placeholders
    switch (imageType) {
      case 'investing':
        return (
          <div className="h-full w-full bg-gradient-to-r from-green-100 to-green-200 flex justify-center items-center relative">
            <div className="text-center">
              <span className="text-6xl text-green-700 mb-4 block">📈</span>
              <div className="text-lg font-bold text-green-800">INVESTING</div>
            </div>
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
      case 'saving':
        return (
          <div className="h-full w-full bg-gradient-to-r from-emerald-100 to-emerald-200 flex justify-center items-center relative">
            <div className="text-center">
              <span className="text-6xl text-emerald-700 mb-4 block">💰</span>
              <div className="text-lg font-bold text-emerald-800">SAVING</div>
            </div>
          </div>
        );
      case 'budgeting':
        return (
          <div className="h-full w-full bg-gradient-to-r from-purple-100 to-purple-200 flex justify-center items-center relative">
            <div className="text-center">
              <span className="text-6xl text-purple-700 mb-4 block">📊</span>
              <div className="text-lg font-bold text-purple-800">BUDGETING</div>
            </div>
          </div>
        );
      case 'debt-management':
        return (
          <div className="h-full w-full bg-gradient-to-r from-red-100 to-red-200 flex justify-center items-center relative">
            <div className="text-center">
              <span className="text-6xl text-red-700 mb-4 block">💳</span>
              <div className="text-lg font-bold text-red-800">DEBT MANAGEMENT</div>
            </div>
          </div>
        );
      case 'personal-finance':
        return (
          <div className="h-full w-full bg-gradient-to-r from-indigo-100 to-indigo-200 flex justify-center items-center relative">
            <div className="text-center">
              <span className="text-6xl text-indigo-700 mb-4 block">🏦</span>
              <div className="text-lg font-bold text-indigo-800">PERSONAL FINANCE</div>
            </div>
          </div>
        );
      default:
        return (
          <div className="h-full w-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-400 text-4xl mb-2">📰</div>
              <div className="text-sm text-gray-500">Article Image</div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`relative ${className}`}>
      {renderImage()}
    </div>
  );
};
