import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const NewsletterSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Stay Updated with Our Newsletter
        </h2>
        <p className="text-gray-600 mb-8">
          Get the latest tips, strategies, and exclusive content delivered straight to your inbox.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1"
          />
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};
