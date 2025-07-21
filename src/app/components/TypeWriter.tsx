'use client'
import { useState, useEffect } from 'react'

interface TypeWriterProps {
  texts: string[]
  speed?: number
  delay?: number
  className?: string
  onComplete?: () => void
}

export default function TypeWriter({ 
  texts, 
  speed = 100, 
  delay = 1000, 
  className = "", 
  onComplete 
}: TypeWriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const [isFinished, setIsFinished] = useState(false) // ✅ เพิ่ม

  useEffect(() => {
    if (currentTextIndex < texts.length) {
      const targetText = texts[currentTextIndex]
      
      if (isTyping && currentText.length < targetText.length) {
        const timer = setTimeout(() => {
          setCurrentText(targetText.slice(0, currentText.length + 1))
        }, speed)
        return () => clearTimeout(timer)
      } else if (isTyping && currentText.length === targetText.length) {
        if (currentTextIndex === texts.length - 1) {
          setIsFinished(true) // ✅ พิมพ์เสร็จ
          onComplete?.()
          return
        }
        
        const timer = setTimeout(() => {
          setIsTyping(false)
        }, delay)
        return () => clearTimeout(timer)
      } else if (!isTyping && currentText.length > 0) {
        const timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, speed / 2)
        return () => clearTimeout(timer)
      } else if (!isTyping && currentText.length === 0) {
        setCurrentTextIndex(prev => prev + 1)
        setIsTyping(true)
      }
    }
  }, [currentText, currentTextIndex, isTyping, texts, speed, delay, onComplete])

  useEffect(() => {
    if (!isFinished) {
      const cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev)
      }, 500)
      return () => clearInterval(cursorTimer)
    }
  }, [isFinished])

  return (
    <span className={className}>
      {currentText}
      {!isFinished && (
        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
          |
        </span>
      )}
    </span>
  )
}
