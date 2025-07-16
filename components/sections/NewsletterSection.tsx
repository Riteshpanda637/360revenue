import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Mail, 
  Gift, 
  TrendingUp, 
  Shield, 
  ArrowRight,
  Star
} from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.1)_2px,transparent_2px)] bg-[length:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Join 10,000+ Smart Investors
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Get Weekly Financial
              <span className="block text-yellow-300">Insights & Tips</span>
            </h2>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Stay ahead with exclusive content on investing, side hustles, and personal finance. 
              Get actionable strategies delivered to your inbox every week.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <span className="text-blue-100">Expert investment strategies</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Gift className="w-4 h-4 text-white" />
                </div>
                <span className="text-blue-100">Free financial tools & resources</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-blue-100">No spam, unsubscribe anytime</span>
              </div>
            </div>
          </div>

          {/* Newsletter Form Side */}
          <div className="lg:pl-8">
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-gray-600">
                    Get the latest financial insights delivered to your inbox
                  </p>
                </div>

                <form className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Subscribe Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    🔒 We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>

                {/* Social Proof */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <span>Join 10K+ readers</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
