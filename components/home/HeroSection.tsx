import React from 'react';
import { Button } from '@/components/ui/button';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat w-full h-[500px] md:h-[600px]"
      style={{ backgroundImage: 'url(/home.png)' }}>

      {/* Mobile-specific background image */}
      <div className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/home-mobile.png)' }}></div>
      
      {/* Dark overlay (with lighter opacity to help text visibility) */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Unlock Your Online Earning Potential with 360revenue
        </h1>
        
        {/* Short text for mobile */}
        <p className="text-base sm:text-lg md:text-xl max-w-4xl mb-6 md:hidden">
          Discover the best strategies to start earning money online with passive income, side hustles, and more. Start your financial journey today!
        </p>
        
        {/* Long text for larger screens */}
        <p className="text-base sm:text-lg md:text-xl max-w-4xl mb-6 hidden md:block">
          Welcome to 360revenue, your comprehensive resource for earning money online, building passive income, and achieving financial freedom. Explore expert guides on side hustles, remote work, online business, investing for beginners, digital marketing, affiliate marketing, budgeting, saving, financial planning, wealth building, and more. Whether you're looking for the best ways to make money from home, start a profitable blog, launch an e-commerce store, invest in stocks or crypto, or master personal finance, our platform delivers actionable tips, in-depth tutorials, and the latest trends. Join a thriving community of entrepreneurs, freelancers, and smart savers who are transforming their lives with proven strategies for online income, financial independence, and long-term wealth. Start your journey to success with 360revenue today!
        </p>

        {/* Optional Button */}
        {/* <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition-all duration-300">Explore Now</button> */}
      </div>
    </div>
  );
};
