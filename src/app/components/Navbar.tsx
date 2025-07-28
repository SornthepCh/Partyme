'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  name: string
  href: string
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Project', href: '/project' },
  { name: 'About', href: '/About' },
  { name: 'Certificate', href: '/certificate' }, // ✅ เพิ่มใหม่
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [activeIndex, setActiveIndex] = useState(
    navItems.findIndex(item => item.href === pathname)
  )
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-900 via-gray-900 to-black h-2"></div>
      
      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="relative bg-gray-800/50 rounded-full p-1 backdrop-blur-sm">
                <div className="flex space-x-1 relative">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setActiveIndex(index)}
                        className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? 'text-white'
                            : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                        }`}
                      >
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full -z-10"></div>
                        )}
                        <span className="relative z-10">{item.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                className="text-gray-400 hover:text-white p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  // Close icon
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  // Hamburger icon
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 border-t border-purple-500/20 px-4 py-3">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveIndex(index)
                    setIsOpen(false) // ปิดเมนูเมื่อเลือก
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        )}
      </nav>
    </div>
  )
}