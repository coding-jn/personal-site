import { useState, useEffect } from 'react'
import styles from './TypingEffect.module.scss'

interface TypingEffectProps {
  text: string
  speed?: number
  className?: string
  onComplete?: () => void
  showCursor?: boolean
}

export const TypingEffect = ({
  text,
  speed = 100,
  className = '',
  onComplete,
  showCursor = true
}: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (onComplete && currentIndex === text.length) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete])

  return (
    <span className={`${styles.typingEffect} ${className}`}>
      {displayedText}
      {showCursor && <span className={styles.cursor}>_</span>}
    </span>
  )
}