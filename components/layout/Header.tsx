'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu } from 'lucide-react'

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
    { label: 'About',      path: '/about' },
  ]

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center  w-full">
            <div className="w-8 h-8 bg-blue-500 rounded-sm flex items-center justify-center mr-2">
              <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
            </div>
            <Link href="/">
              <span className="text-xl font-bold text-gray-900 cursor-pointer">
                360revenue
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-14  justify-end w-full">
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
