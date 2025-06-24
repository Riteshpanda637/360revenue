'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import Image from 'next/image'

interface HeaderProps {
  onHomeClick?: () => void
}

export const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navItems = [
    { label: 'Home',       path: '/' },
    { label: 'Categories', path: '/categories' },
    // { label: 'Blog',      path: '/blog' },
    { label: 'About',      path: '/about' },
  ]

  return (
    <header className="bg-white shadow-sm py-1">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/rr.png"
              alt="NewsTale Logo"
              width={200}
              height={200}
              className="mr-4" // Optional: add margin if necessary
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-14 justify-end w-full">
            {navItems.map(({ label, path }) => {
              const isActive = pathname === path
              return (
                <Link
                  key={path}
                  href={path}
                  className={
                    `${isActive
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                    } font-medium pb-1`
                  }
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7 text-gray-700" />
            </button>
          </div>
        </div>
        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute right-4 top-16 bg-white shadow-lg rounded-lg py-4 px-6 z-50 w-48">
            {navItems.map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                className={`block py-2 px-2 rounded text-gray-800 hover:bg-blue-50 font-medium ${pathname === path ? 'text-blue-600' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
