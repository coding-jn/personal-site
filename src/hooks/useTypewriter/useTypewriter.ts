import { useState, useEffect } from 'react'
import { useTypewriterProps } from './types'

export const useTypewriter = ({ text, speed = 50 }: useTypewriterProps) => {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, speed)

    return () => {
      clearInterval(typingInterval)
    }
  }, [text, speed])

  return displayText
}
