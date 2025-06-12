import { DollarSign, Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-semibold">360revenue</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering your financial journey with practical tips and insights.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white text-sm">Home</a></li>
                <li><a href="/categories" className="text-gray-400 hover:text-white text-sm">Categories</a></li>
                <li><a href="/resources" className="text-gray-400 hover:text-white text-sm">Resources</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white text-sm">About</a></li>
                <li><a href="/privacypolicy" className="text-gray-400 hover:text-white text-sm">privacy Policy</a></li>
                <li><a href="/terms&condition" className="text-gray-400 hover:text-white text-sm">Terms & Condition</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-4 mb-6">
                <a href="https://facebook.com/yourpage" aria-label="Visit our Facebook page" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/yourprofile" aria-label="Visit our Twitter profile" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/yourprofile" aria-label="Visit our Instagram profile" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm mb-2">Subscribe to our newsletter for the latest updates</p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />
                <Button className="bg-blue-500 hover:bg-blue-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 360revenue. All rights reserved. Built with passion and coffee.
            </p>
          </div>
        </div>
      </footer>
  );
};
