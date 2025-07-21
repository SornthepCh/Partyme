'use client'
import { useEffect, useState } from 'react'

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function PageWrapper({ children, className = "" }: PageWrapperProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`${className} ${isLoaded ? 'page-enter-active' : 'page-enter'}`}>
      {children}
    </div>
  )
}