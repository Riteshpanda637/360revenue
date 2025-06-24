import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageCircle, Share } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import Image from 'next/image';
import { Footer } from '@/components/layout/Footer';
import { blogData } from '@/lib/data/artticleData';

export default function TeenMoneyPage() {
  const moneyMakingWays = [
    "Babysitting",
    "Dog walking",
    "Lawn mowing", 
    "Tutoring",
    "Freelance writing",
    "Graphic design",
    "Photography",
    "Social media management",
    "Pet sitting",
    "House sitting",
    "Car washing",
    "Virtual assistance",
    "YouTube channel",
    "Selling crafts online",
    "Selling products online",
    "Online surveys",
    "App testing",
    "Event organizing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
     <Header/>

      {/* Main Content */}
      <main className="max-w-8xl px-4 py-12">
        {/* Hero Section */}
        <div className="w-full ">
          <h1 className="text-4xl text-center font-bold text-gray-900 mb-6">
           <span className='text-7xl'> 18</span> ways to make money as a teenager
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Start generating business ideas with the My Business Launch tool →
          </p>
        </div>

        {/* Phone Mockup and Social Post Section */}
        <div className="flex justify-center items-center text-center mb-16 h-full ">
    {/* Social Media Post Card */}
    <Image src={'/home.png'} alt='' width={1000} height={1000}  />
</div>


        {/* Description Text */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            When you start making money early, you get to try different things and figure out what 
            you like and are good at. This can help you choose what job you might want in the future. 
            Also, making money teaches you how to be responsible and how dealing with customers 
            can make you better at talking to people.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Making money as a teen can also help you learn about responsibility, keep track of your 
            money, and be independent. Maybe you'll even get enough money to do what you want to do rather 
            than ask they get older.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Looking for new ways <br />
            to make money?
          </h2>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full">
            Get Business Ideas →
          </Button>
        </div>

        {/* Business Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-gray-700 text-lg leading-relaxed">
            Make your business idea as strong as the money you choose. Use the My Business 
            Launch tool to start a business and find mentors to guide you on your journey from business plan 
            and help to business potential and financial success. Turn your idea into a full money 
            making business. Our tool gives you access to some of the most innovative and creative talent 
            entrepreneurs.
          </p>
        </div>

        {/* Ways to Make Money Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            18 ways to make money as a teenager
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-4xl mx-auto">
            In this post, we'll go through 18 ways of how teens can actually start making money. 
            Start. We'll consider what each way has to one for them, why it's good for this 
            age group and how to make the most out of it.
          </p>

          {/* Money Making Ways List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {moneyMakingWays.map((way, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs px-2 py-1">
                  {String(index + 1).padStart(2, '0')}
                </Badge>
                <span className="text-gray-800 font-medium">{way}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Babysitting */}
        {
  blogData.map((el) => (
    <div key={el.id} className="max-w-6xl mx-auto mb-12">
      <div className=" p-8">
        {/* Header with title and category */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 flex-1">
            {String(el.id).padStart(2, '0')}. {el.title}
          </h3>
          <div className="flex-shrink-0">
            <span className="inline-block text-blue-600 py-2 px-4 bg-blue-100 rounded-full text-sm font-semibold capitalize whitespace-nowrap">
              {el.category}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          {el.description}
        </p>

        {/* Income section */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-gray-900 mb-4">Requirement:</h4>

            {
                
                el.requirements.map((re)=>(
                    <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
              <span>{re}</span>
            </li>
                ))
            }
           <br />
          <h4 className="font-semibold text-gray-900 mb-4">Typical income:</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
              <span>Hourly rate: {el.hourlyRate}</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
              <span>Monthly income: {el.monthlyIncome}</span>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="rounded-lg overflow-hidden">
          <Image 
            src={el.image} 
            alt={el.title}
            width={1000} 
            height={600}
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </div>
  ))
}
{/*         */}



        
      </main>

      {/* Footer */}
            <Footer/>
    </div>
  );
};

