import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArticleImage } from '@/components/ui/ArticleImage';
import Link from 'next/link';
import { 
  Clock, 
  User, 
  Calendar, 
  ArrowRight,
  Heart,
  Share2,
  Eye
} from 'lucide-react';

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    description: string;
    category: string;
    readTime: string;
    image: string;
    author: string;
    date: string;
    likes: number;
    shares: number;
    tags: string[];
    authorBio: string;
    authorAvatar: string;
    slug: string;
  };
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Investing': 'bg-blue-100 text-blue-800 border-blue-200',
      'Side Hustles': 'bg-purple-100 text-purple-800 border-purple-200',
      'Personal Finance': 'bg-green-100 text-green-800 border-green-200',
      'Budgeting': 'bg-emerald-100 text-emerald-800 border-emerald-200',
      'Saving': 'bg-teal-100 text-teal-800 border-teal-200',
      'Debt Management': 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-2xl">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <ArticleImage imageType={article.image} />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge className={`${getCategoryColor(article.category)} border font-medium text-xs px-3 py-1`}>
            {article.category.toUpperCase()}
          </Badge>
        </div>

        {/* Read Time Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 text-gray-700 border-0 font-medium text-xs px-3 py-1">
            <Clock className="w-3 h-3 mr-1" />
            {article.readTime}
          </Badge>
        </div>

        {/* Hover Action Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg">
            <Link href={`/articles/${article.slug}`}>
              <Eye className="w-4 h-4 mr-2" />
              Read Article
            </Link>
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          <Link href={`/articles/${article.slug}`} className="hover:underline">
            {article.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {article.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            {article.authorAvatar}
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-900 text-sm">{article.author}</div>
            <div className="text-gray-500 text-xs">{article.date}</div>
          </div>
        </div>

        {/* Stats and Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>{article.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <Share2 className="w-4 h-4" />
              <span>{article.shares}</span>
            </div>
          </div>

          {/* Read More Button */}
          <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-4 py-2 transition-all duration-300 transform hover:scale-105">
            <Link href={`/articles/${article.slug}`}>
              Read More
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
