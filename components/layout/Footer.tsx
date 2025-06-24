import { Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Links + Social */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <ul className="flex flex-wrap gap-4">
            <li>
              <a href="/" className="text-gray-400 hover:text-white text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="/categories" className="text-gray-400 hover:text-white text-sm">
                Categories
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-white text-sm">
                About
              </a>
            </li>
            <li>
              <a href="/privacypolicy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
            </li>
          </ul>

          {/* <div className="flex space-x-4">
            <a
              href="https://facebook.com/yourpage"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div> */}
        </div>

        {/* Newsletter */}
        {/* <div className="mt-8">
          <h3 className="text-white font-semibold mb-3">Subscribe for Updates</h3>
          <form className="flex flex-col sm:flex-row sm:items-center gap-2">
            <Input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-500"
            />
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Subscribe
            </Button>
          </form>
        </div> */}

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          © 2025 360revenue. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
